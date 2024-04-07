"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxLengthValidator = void 0;
const class_validator_1 = require("class-validator");
function MaxLengthValidator(length, validationOptions) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'MaxLengthCustom',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [length],
            validator: {
                validate(value, args) {
                    const [limit] = args.constraints;
                    return typeof value === 'string' && value.length <= limit;
                },
                defaultMessage(args) {
                    const [limit] = args.constraints;
                    return `${args.property} must be less than ${limit} characters`;
                },
            },
        });
    };
}
exports.MaxLengthValidator = MaxLengthValidator;
