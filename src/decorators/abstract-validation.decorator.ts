import { registerDecorator, type ValidationOptions } from "class-validator"
import type { IValidationFunction } from '@pixielity/ts-types'

/**
 * Abstract validation decorator that provides a base for creating custom validation decorators
 */
export abstract class AbstractValidationDecorator {
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
  protected static createValidationDecorator(
    name: string,
    constraints: any[],
    validationFunction: IValidationFunction,
    defaultMessage: string,
    validationOptions?: ValidationOptions,
  ): PropertyDecorator {
    return (object: Object, propertyName: string | symbol) => {
      // Merge the default message with the provided validation options
      const options: ValidationOptions = {
        message: defaultMessage,
        ...(validationOptions || {}),
      }

      registerDecorator({
        name,
        target: object.constructor,
        propertyName: propertyName as string,
        constraints,
        options,
        validator: {
          validate: validationFunction,
          defaultMessage: () => options.message as string,
        },
      })
    }
  }
}
