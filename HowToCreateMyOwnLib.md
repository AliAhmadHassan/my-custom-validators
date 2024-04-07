### Step 1: Set Up Your Project

1. **Create a New Directory**:
    ```bash
    mkdir my-validation-validators
    cd my-validation-validators
    ```

2. **Initialize a New Node.js Project**:
    Initialize your project with `npm init` or `npm init -y` (for default settings).
    ```bash
    npm init -y
    ```

3. **Set Up Git Repository**:
  Initialize a Git repository:
    ```bash
    git init
    ```

4. **Create a `.gitignore` File**:
    Create this file to exclude node_modules or other non-essential files:
    ```bash
    echo "node_modules/" >> .gitignore
    ```

5. **Install Dependencies**:
    If you plan to use any libraries such as `class-validator`, install them now:
    ```bash
    npm install class-validator reflect-metadata --save
    ```

### Step 2: Write Your Code

1. **Create Source Files**:
    Organize your source files in the `src` directory.

    ```
    /my-custom-validators
    /src
      - index.ts
      - is-not-empty-validator.decorator.ts
      - length-range-validator.decorator.ts
      - max-length-validator.decorator.ts
      - min-length-validator.decorator.ts

    /dist
    package.json
    tsconfig.json
    README.md
    ```

    File Details:

    - index.ts: This file will serve as the entry point of your library, where you will export all decorators.
    - is-not-empty-validator.decorator.ts: Files containing the code for your decorators.
    - length-range-validator.decorator.ts: Files containing the code for your decorators.
    - max-length-validator.decorator.ts: Files containing the code for your decorators.
    - min-length-validator.decorator.ts: Files containing the code for your decorators.
    - package.json: Project configuration file for npm.
    - tsconfig.json: TypeScript compiler configuration.
    - README.md: Documentation on how to use the library.

2. **Implement Your Validation Functions**:
    Write the necessary validation functions or decorators in TypeScript. For instance, you could implement `src/is-not-empty-validator.decorator.ts` decorator.

    ```typescript
    import {
      ValidationArguments,
      ValidationOptions,
      registerDecorator,
    } from 'class-validator';

    export function IsNotEmptyValidation(validationOptions?: ValidationOptions) {
      return function (object: any, propertyName: string) {
        registerDecorator({
          name: 'IsNotEmptyCustom',
          target: object.constructor,
          propertyName: propertyName,
          options: validationOptions,
          constraints: [],
          validator: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            validate(value: any, args: ValidationArguments) {
              return value != null && value.toString().trim().length > 0;
            },
            defaultMessage(args: ValidationArguments) {
              return `the field "${args.property}" is required.`;
            },
          },
        });
      };
    }
    ```

    Implementing `src/length-range-validator.decorator.ts` decorator.
    ```typescript
    import {
      ValidationArguments,
      ValidationOptions,
      registerDecorator,
    } from 'class-validator';

    export function LengthRangeValidator(
      minLength: number,
      maxLength: number,
      validationOptions?: ValidationOptions,
    ) {
        // eslint-disable-next-line @typescript-eslint/ban-types
      return function (object: Object, propertyName: string) {
        registerDecorator({
          name: 'LengthRange',
          target: object.constructor,
          propertyName: propertyName,
          options: validationOptions,
          constraints: [minLength, maxLength],
          validator: {
            validate(value: any, args: ValidationArguments) {
              const [min, max] = args.constraints;
              return (
                typeof value === 'string' &&
                value.length >= min &&
                value.length <= max
              );
            },
            defaultMessage(args: ValidationArguments) {
              const [min, max] = args.constraints;
              return `${args.property} must be between ${min} and ${max} characters`;
            },
          },
        });
      };
    }
    ```
    
    Implementing `src/length-range-validator.decorator.ts` decorator.
    ```typescript
    import {
      ValidationArguments,
      ValidationOptions,
      registerDecorator,
    } from 'class-validator';

    export function MaxLengthValidator(
      length: number,
      validationOptions?: ValidationOptions,
    ) {
      // eslint-disable-next-line @typescript-eslint/ban-types
      return function (object: Object, propertyName: string) {
        registerDecorator({
          name: 'MaxLengthCustom',
          target: object.constructor,
          propertyName: propertyName,
          options: validationOptions,
          constraints: [length],
          validator: {
            validate(value: any, args: ValidationArguments) {
              const [limit] = args.constraints;
              return typeof value === 'string' && value.length <= limit;
            },
            defaultMessage(args: ValidationArguments) {
              const [limit] = args.constraints;
              return `${args.property} must be less than ${limit} characters`;
            },
          },
        });
      };
    }
    ```
    
    Implementing `src/length-range-validator.decorator.ts` decorator.
    ```typescript
    import {
      ValidationArguments,
      ValidationOptions,
      registerDecorator,
    } from 'class-validator';

    export function MinLengthValidator(
      length: number,
      validationOptions?: ValidationOptions,
    ) {
      // eslint-disable-next-line @typescript-eslint/ban-types
      return function (object: Object, propertyName: string) {
        registerDecorator({
          name: 'MaxLengthCustom',
          target: object.constructor,
          propertyName: propertyName,
          options: validationOptions,
          constraints: [length],
          validator: {
            validate(value: any, args: ValidationArguments) {
              const [limit] = args.constraints;
              return typeof value === 'string' && value.length <= limit;
            },
            defaultMessage(args: ValidationArguments) {
              const [limit] = args.constraints;
              return `${args.property} must be more than ${limit} characters`;
            },
          },
        });
      };
    }
    ```
    Implementing `src/index.ts` exports code.
    ```typescript
    export * from './is-not-empty-validator.decorator';
    export * from './length-range-validator.decorator';
    export * from './max-length-validator.decorator';
    export * from './min-length-validator.decorator';
    ```

4. **Configuring `tsconfig.json`**:
    The `tsconfig.json` have to be configurated to build the TypeScript files to JavaScript.

    ```json
    {
      "compilerOptions": {
        "outDir": "./dist",
        "module": "commonjs",
        "target": "es2017",
        "declaration": true,
        "strict": true
      },
      "include": ["src/**/*"],
      "exclude": ["node_modules", "**/*.spec.ts"]
    }
    ```

5. **Documentation**:
    Do not forget to write `README.md` file, clean, and descreble what is your library, how to install, how to use the decorator.

6. **Compile TypeScript**:
    Before publish, you have to build your project:
    
    Compile your TypeScript:
    ```bash
    npm run build
    ```

### Step 3: Prepare for Publication

1. **Documentation**:
   Write a `README.md` that describes your library, how to install it, and how to use it. Include code examples and any other relevant information.

2. **Versioning**:
   Make sure your `package.json` has the correct version number. Semantic versioning (MAJOR.MINOR.PATCH) is typically used.

3. **Publishing Settings**:
   Configure your `package.json` for publication:
   ```json
   {
      "name": "my-custom-validators",
      "version": "1.0.0",
      "description": "A custom validation library for Node.js using class-validator.",
      "main": "dist/index.js",
      "types": "dist/index.d.ts",
      "scripts": {
        "build": "tsc",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "files": [
        "dist/**/*"
      ],
      "keywords": [],
      "author": "",
      "license": "ISC",
      "peerDependencies": {
        "class-validator": "^0.14.1"
      },
      "devDependencies": {
        "@types/node": "^20.12.5",
        "typescript": "^5.4.4"
      },
      "repository": {
        "type": "git",
        "url": "https://github.com/AliAhmadHassan/my-custom-validators.git"
      }
    }
   ```

### Step 4: Push to GitHub

1. **Add Remote Repository**:
   Connect your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/AliAhmadHassan/my-custom-validators.git
   ```

2. **Push Your Code**:
   Push your code to the GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin master
   ```

### Step 5: Publish to npm

1. **Login to npm**:
   If you haven’t already, create an npm account and log in via the command line:
   ```bash
   npm login
   ```

2. **Publish Your Package**:
   Publish your package to npm:
   ```bash
   npm publish
   ```

### Step 6: Version Management and Updates

- **Update Your Library**: Make changes as necessary, update the version number according to semantic versioning rules, and republish to npm.
- **Tag Your Releases on GitHub**: Use Git tags for each version you publish to npm to keep track of versions on GitHub.

By following these steps, you'll have created a Node.js library, published it to npm for public use, and managed its source code through a GitHub repository, making it accessible and maintainable for both yourself and other developers.