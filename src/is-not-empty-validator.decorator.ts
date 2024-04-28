import {
    ValidationArguments,
    ValidationOptions,
    registerDecorator,
} from 'class-validator';

export function IsNotEmptyValidation(validationOptions?: ValidationOptions) {
    return function (object: any, propertyName: string) {
        registerDecorator({
            name: 'IsNotEmptyCustomValidation',
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
