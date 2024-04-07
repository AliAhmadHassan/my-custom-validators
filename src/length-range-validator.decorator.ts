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
