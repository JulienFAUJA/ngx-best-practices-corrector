const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCommand(command) {
  try {
    console.log(`Running: ${command}`);
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error while running: ${command}`);
    process.exit(1);
  }
}

function createFile(filePath, content) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content);
    console.log(`Created file: ${filePath}`);
  } catch (error) {
    console.error(`Error creating file: ${filePath}`);
    process.exit(1);
  }
}

function copyFileToDist(src, dest) {
  try {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} to ${dest}`);
  } catch (error) {
    console.error(`Error copying ${src} to ${dest}`);
    process.exit(1);
  }
}

function main() {
  console.log('Starting project setup...');

  // Step 1: Ensure we're in an Angular workspace
  if (!fs.existsSync('angular.json')) {
    console.error('Error: This script must be run in the root of an Angular workspace.');
    process.exit(1);
  }

  // Step 2: Generate Library if not exists
  if (!fs.existsSync('projects/ngx-best-practices-corrector')) {
    runCommand('ng generate library ngx-best-practices-corrector');
  } else {
    console.log('Library ngx-best-practices-corrector already exists. Skipping creation.');
  }

  // Step 3: Add Builder Configuration
  createFile(
    'projects/ngx-best-practices-corrector/builders.json',
    `{
      "$schema": "../../node_modules/@angular-devkit/architect/src/builders-schema.json",
      "builders": {
        "build": {
          "implementation": "./builder",
          "schema": "./builder-schema.json",
          "description": "A builder to validate best practices for Angular projects"
        }
      }
    }`
  );

  createFile(
    'projects/ngx-best-practices-corrector/src/builder.ts',
    `import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';

    export default createBuilder(async (_options: {}, context: BuilderContext): Promise<BuilderOutput> => {
        context.logger.info('Running ngx-best-practices-corrector...');
        return { success: true };
    });`
  );

  createFile(
    'projects/ngx-best-practices-corrector/src/builder-schema.json',
    `{
      "$schema": "http://json-schema.org/draft-07/schema",
      "type": "object",
      "properties": {}
    }`
  );

  // Step 4: Update ng-package.json to include required files
  createFile(
    'projects/ngx-best-practices-corrector/ng-package.json',
    `{
      "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
      "dest": "../../dist/ngx-best-practices-corrector",
      "lib": {
        "entryFile": "src/public-api.ts"
      },
      "assets": [
        "builders.json",
        "src/builder-schema.json"
      ]
    }`
  );

  // Step 5: Build the Library
  runCommand('ng build ngx-best-practices-corrector');

  // Step 6: Copy missing files manually (if needed)
  copyFileToDist(
    'projects/ngx-best-practices-corrector/src/builder-schema.json',
    'dist/ngx-best-practices-corrector/src/builder-schema.json'
  );

  // Step 7: Install Locally
  runCommand('npm install ./dist/ngx-best-practices-corrector');


  console.log('Project setup completed successfully!');
  // Step 8: Run the project
  runCommand('ng run demo-app:analyze');
}

main();
