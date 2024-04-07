"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotEmptyValidation = void 0;
const class_validator_1 = require("class-validator");
function IsNotEmptyValidation(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsNotEmptyCustom',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                validate(value, args) {
                    return value != null && value.toString().trim().length > 0;
                },
                defaultMessage(args) {
                    return `the field "${args.property}" is required.`;
                },
            },
        });
    };
}
exports.IsNotEmptyValidation = IsNotEmptyValidation;
