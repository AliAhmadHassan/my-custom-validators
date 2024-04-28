import {
    ValidationArguments,
    ValidationOptions,
    registerDecorator,
} from 'class-validator';

export function MinValidator(
    min: number,
    validationOptions?: ValidationOptions,
) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'MinCustomValidator',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [min],
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [minValue] = args.constraints;
                    return typeof value === 'number' && value >= minValue;
                },
                defaultMessage(args: ValidationArguments) {
                    const [minValue] = args.constraints;
                    return `${args.property} must be more than ${minValue}`;
                },
            },
        });
    };
}
