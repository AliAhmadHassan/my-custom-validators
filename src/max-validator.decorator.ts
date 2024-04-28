import {
    ValidationArguments,
    ValidationOptions,
    registerDecorator,
} from 'class-validator';

export function MaxValidator(
    max: number,
    validationOptions?: ValidationOptions,
) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'MaxCustomValidator',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [max],
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [maxValue] = args.constraints;
                    return typeof value === 'number' && value <= maxValue;
                },
                defaultMessage(args: ValidationArguments) {
                    const [maxValue] = args.constraints;
                    return `${args.property} must not be greater than ${maxValue}`;
                },
            },
        });
    };
}
