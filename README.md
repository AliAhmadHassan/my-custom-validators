# My Custom Validators

`my-custom-validators` is a TypeScript library providing custom validation decorators that extend the functionalities of [class-validator](https://github.com/typestack/class-validator). This library aims to simplify the validation process for various projects by offering reusable validators that can be easily integrated into any TypeScript project using class-validator.

## Features

- **MaxLengthValidator**: Validates the maximum length of the string with field name in the customized message.
- **MinLengthValidator**: Validates the maximum length of the string with field name in the customized message.
- **LengthRangeValidator**: Validates that the string length is within a specified range with field name in the customized message.
- **IsNotEmptyValidator**: Validates that the string is not empty with field name in the customized message.
- **MaxValidator**: Validates the maximum of the decimal with field name in the customized message.
- **MinValidator**: Validates the maximum of the decimal with field name in the customized message.
- **RangeValidator**: Validates that the decimal is within a specified range with field name in the customized message.


## Installation

Install `my-custom-validators` using npm:

```bash
npm install my-custom-validators
```

## Sample how to use

```TypeScript
import { 
  LengthRangeValidator, 
  MaxLengthValidator, 
  MinLengthValidator, 
  IsNotEmptyValidator, 
  MinValidator, 
  MaxValidator, 
  RangeValidator 
} from 'my-custom-validators';

class User {
  @LengthRangeValidator(5, 15)
  @IsNotEmptyValidator()
  username: string;

  @LengthRangeValidator(8, 16)
  @IsNotEmptyValidator()
  password: string;

  @MaxLengthValidator(20, { message: 'Bio must not exceed 20 characters.' })
  bio: string;

  @MaxLengthValidator(14)
  phone: string;

  @MinLengthValidator(3)
  First: string;

  @MinLengthValidator(3, { message: 'Last Name must be more than 3 characters.' })
  lastName: string;

  @MinValidator(0)
  amount: number;

  @maxValidator(999999)
  value: number;

  @RangeValidator(0, 100)
  proporsion: number;
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