# My Custom Validators

`my-custom-validators` is a TypeScript library providing custom validation decorators that extend the functionalities of [class-validator](https://github.com/typestack/class-validator). This library aims to simplify the validation process for various projects by offering reusable validators that can be easily integrated into any TypeScript project using class-validator.

## Features

- **MaxLengthValidator**: Validates the maximum length of the string with field name in the customized message.
- **MinLengthValidator**: Validates the maximum length of the string with field name in the customized message.
- **LengthRangeValidator**: Validates that the string length is within a specified range with field name in the customized message.
- **IsNotEmptyValidation**: Validates that the string is not empty with field name in the customized message.

## Installation

Install `my-custom-validators` using npm:

```bash
npm install my-custom-validators
```

## Sample how to use

```TypeScript
import { LengthRangeValidator, MaxLengthValidator, MinLengthValidator, IsNotEmptyValidation } from 'my-custom-validators';
import { validate } from 'class-validator';

class User {
  @LengthRange(5, 15, { message: 'Username must be between 5 and 15 characters.' })
  username: string;

  @LengthRange(8, 16)
  password: string;

  @MaxLengthCustom(20, { message: 'Bio must not exceed 20 characters.' })
  bio: string;

  @MaxLengthCustom(14)
  phone: string;

  @MinLengthCustom(20)
  First: string;

  @MinLengthCustom(20, { message: 'lastName must not exceed 20 characters.' })
  lastName: string;
}

async function validateUser() {
  const user = new User();
  user.username = 'johndoe';
  user.bio = 'Hello, this is John!';

  const errors = await validate(user);
  if (errors.length > 0) {
    console.log('Validation failed: ', errors);
  } else {
    console.log('Validation succeeded.');
  }
}

validateUser();
```