"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinLengthValidator = void 0;
const class_validator_1 = require("class-validator");
function MinLengthValidator(length, validationOptions) {
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
                    return `${args.property} must be more than ${limit} characters`;
                },
            },
        });
    };
}
exports.MinLengthValidator = MinLengthValidator;
