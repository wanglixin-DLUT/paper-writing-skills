#!/usr/bin/env node

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const skillNames = [
  'deep-learning-content-analyzer',
  'science-writing-foundations',
  'research-title-writer',
  'research-abstract-writer',
  'research-introduction-writer',
  'research-methods-writer',
  'research-results-writer',
  'research-discussion-writer',
  'research-conclusion-writer',
  'research-writing-reviser'
];

const platformTargets = {
  codex: {
    project: '.codex/skills',
    global: path.join(process.env.CODEX_HOME || path.join(os.homedir(), '.codex'), 'skills')
  },
  'claude-code': {
    project: '.claude/skills',
    global: path.join(os.homedir(), '.claude', 'skills')
  },
  cursor: {
    project: '.cursor/skills',
    global: path.join(os.homedir(), '.cursor', 'skills')
  },
  copilot: {
    project: '.github/copilot/skills'
  },
  windsurf: {
    project: '.windsurf/skills',
    global: path.join(os.homedir(), '.windsurf', 'skills')
  },
  'gemini-cli': {
    project: '.gemini/skills',
    global: path.join(os.homedir(), '.gemini', 'skills')
  },
  opencode: {
    project: '.opencode/skills',
    global: path.join(os.homedir(), '.opencode', 'skills')
  },
  chatgpt: {
    project: '.chatgpt/skills',
    global: path.join(os.homedir(), '.chatgpt', 'skills')
  },
  amp: {
    project: '.amp/skills',
    global: path.join(os.homedir(), '.amp', 'skills')
  },
  goose: {
    project: '.goose/skills',
    global: path.join(os.homedir(), '.goose', 'skills')
  },
  aider: {
    project: '.aider/skills',
    global: path.join(os.homedir(), '.aider', 'skills')
  },
  cline: {
    project: '.cline/skills',
    global: path.join(os.homedir(), '.cline', 'skills')
  },
  'roo-code': {
    project: '.roo-code/skills',
    global: path.join(os.homedir(), '.roo-code', 'skills')
  },
  trae: {
    project: '.trae/skills',
    global: path.join(os.homedir(), '.trae', 'skills')
  }
};

function printHelp() {
  console.log(`paper-writing-skills

Install this SKILL.md skill suite into agent platform skill directories.

Usage:
  paper-writing-skills list
  paper-writing-skills install --platform <platform> [--scope project|global] [--dest <dir>] [--dry-run]

Examples:
  npx github:wanglixin-DLUT/paper-writing-skills list
  npx github:wanglixin-DLUT/paper-writing-skills install --platform codex --scope global
  npx github:wanglixin-DLUT/paper-writing-skills install --platform claude-code --scope project
  npx github:wanglixin-DLUT/paper-writing-skills install --dest ./agent-skills/paper-writing-skills

Platforms:
  ${Object.keys(platformTargets).join(', ')}
`);
}

function parseArgs(argv) {
  const options = {
    command: 'install',
    scope: 'project',
    dryRun: false,
    platform: null,
    dest: null
  };

  const args = [...argv];
  if (args[0] && !args[0].startsWith('-')) {
    options.command = args.shift();
  }

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') {
      options.command = 'help';
    } else if (arg === '--platform') {
      options.platform = args[++i];
    } else if (arg === '--scope') {
      options.scope = args[++i];
    } else if (arg === '--dest') {
      options.dest = args[++i];
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function resolveDestination(options) {
  if (options.dest) {
    return path.resolve(process.cwd(), options.dest);
  }

  if (!options.platform) {
    throw new Error('Missing --platform. Use --dest for a custom destination, or run `paper-writing-skills list`.');
  }

  const target = platformTargets[options.platform];
  if (!target) {
    throw new Error(`Unsupported platform: ${options.platform}`);
  }

  const relativeOrAbsolute = target[options.scope];
  if (!relativeOrAbsolute) {
    throw new Error(`Platform ${options.platform} does not define a ${options.scope} install target.`);
  }

  return path.isAbsolute(relativeOrAbsolute)
    ? relativeOrAbsolute
    : path.resolve(process.cwd(), relativeOrAbsolute);
}

function copySkill(skillName, destinationRoot, dryRun) {
  const source = path.join(repoRoot, skillName);
  const destination = path.join(destinationRoot, skillName);

  if (!fs.existsSync(path.join(source, 'SKILL.md'))) {
    throw new Error(`Missing SKILL.md for ${skillName}`);
  }

  if (dryRun) {
    console.log(`[dry-run] ${source} -> ${destination}`);
    return;
  }

  fs.rmSync(destination, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.cpSync(source, destination, { recursive: true });
  console.log(`installed ${skillName} -> ${destination}`);
}

function install(options) {
  const destinationRoot = resolveDestination(options);
  if (!options.dryRun) {
    fs.mkdirSync(destinationRoot, { recursive: true });
  }

  for (const skillName of skillNames) {
    copySkill(skillName, destinationRoot, options.dryRun);
  }

  console.log(`\nDone. Installed ${skillNames.length} skills into ${destinationRoot}`);
  if (options.platform === 'codex' || options.platform === 'claude-code') {
    console.log('Restart the agent application if it does not discover new skills immediately.');
  }
}

function list() {
  console.log(skillNames.join('\n'));
}

try {
  const options = parseArgs(process.argv.slice(2));
  if (options.command === 'help') {
    printHelp();
  } else if (options.command === 'list') {
    list();
  } else if (options.command === 'install') {
    install(options);
  } else {
    throw new Error(`Unknown command: ${options.command}`);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  console.error('Run `paper-writing-skills --help` for usage.');
  process.exit(1);
}
