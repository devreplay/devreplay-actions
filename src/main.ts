import { * as core } from '@actions/core';
import * as path from 'path';

async function run(): Promise<void> {
  try {
    const matchersPath = path.join(__dirname, '..', '.github');
    console.log(`##[add-matcher]${path.join(matchersPath, 'devreplay-match.json')}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
