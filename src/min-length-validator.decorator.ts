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
            name: 'MinLengthCustomValidator',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [length],
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [limit] = args.constraints;
                    return typeof value === 'string' && value.length >= limit;
                },
                defaultMessage(args: ValidationArguments) {
                    const [limit] = args.constraints;
                    return `${args.property} must be more than ${limit} characters`;
                },
            },
        });
    };
}
