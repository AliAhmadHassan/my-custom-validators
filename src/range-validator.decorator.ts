import {
    ValidationArguments,
    ValidationOptions,
    registerDecorator,
} from 'class-validator';

export function RangeValidator(
    min: number,
    max: number,
    validationOptions?: ValidationOptions,
) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'RangeCustomValidator',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [min, max],
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [minValue, maxValue] = args.constraints;
                    return (
                        typeof value === 'number' && 
                        value >= minValue &&
                        value <= maxValue
                    );
                },
                defaultMessage(args: ValidationArguments) {
                    const [minValue, maxValue] = args.constraints;
                    return `${args.property} must be between ${minValue} and ${maxValue}`;
                },
            },
        });
    };
}
