"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LengthRangeValidator = void 0;
const class_validator_1 = require("class-validator");
function LengthRangeValidator(minLength, maxLength, validationOptions) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'LengthRange',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [minLength, maxLength],
            validator: {
                validate(value, args) {
                    const [min, max] = args.constraints;
                    return (typeof value === 'string' &&
                        value.length >= min &&
                        value.length <= max);
                },
                defaultMessage(args) {
                    const [min, max] = args.constraints;
                    return `${args.property} must be between ${min} and ${max} characters`;
                },
            },
        });
    };
}
exports.LengthRangeValidator = LengthRangeValidator;
