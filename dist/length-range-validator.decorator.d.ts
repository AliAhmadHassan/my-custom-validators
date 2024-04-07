import { ValidationOptions } from 'class-validator';
export declare function LengthRangeValidator(minLength: number, maxLength: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
