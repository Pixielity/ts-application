import { ValidationOptions } from 'class-validator';
import { IValidationFunction } from '@pixielity/ts-types';

/**
 * Abstract validation decorator that provides a base for creating custom validation decorators
 */
declare abstract class AbstractValidationDecorator {
    /**
     * Create a validation decorator
     *
     * @param name - The name of the decorator
     * @param constraints - The constraints for the decorator
     * @param validationFunction - The validation function
     * @param defaultMessage - The default error message
     * @param validationOptions - The validation options
     * @returns A property decorator function
     */
    protected static createValidationDecorator(name: string, constraints: any[], validationFunction: IValidationFunction, defaultMessage: string, validationOptions?: ValidationOptions): PropertyDecorator;
}

export { AbstractValidationDecorator };
