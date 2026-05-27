#!/usr/bin/env node

import fs from 'node:fs';
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

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    return null;
  }

  const fields = {};
  for (const line of match[1].split('\n')) {
    const fieldMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (fieldMatch) {
      fields[fieldMatch[1]] = fieldMatch[2].trim();
    }
  }
  return fields;
}

function validateSkill(skillName) {
  const errors = [];
  const skillDir = path.join(repoRoot, skillName);
  const skillFile = path.join(skillDir, 'SKILL.md');

  if (!fs.existsSync(skillFile)) {
    return [`${skillName}: missing SKILL.md`];
  }

  const body = fs.readFileSync(skillFile, 'utf8');
  const frontmatter = parseFrontmatter(body);
  if (!frontmatter) {
    errors.push(`${skillName}: missing YAML frontmatter`);
    return errors;
  }

  if (frontmatter.name !== skillName) {
    errors.push(`${skillName}: frontmatter name must match directory name`);
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(frontmatter.name || '')) {
    errors.push(`${skillName}: name must use lowercase letters, numbers, and single hyphens`);
  }

  if (!frontmatter.description) {
    errors.push(`${skillName}: missing description`);
  } else if (frontmatter.description.length > 1024) {
    errors.push(`${skillName}: description exceeds 1024 characters`);
  }

  return errors;
}

const allErrors = skillNames.flatMap(validateSkill);

if (allErrors.length > 0) {
  console.error('Skill validation failed:');
  for (const error of allErrors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Validated ${skillNames.length} SKILL.md directories.`);
