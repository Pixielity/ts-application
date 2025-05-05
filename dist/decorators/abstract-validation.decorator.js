'use strict';

var classValidator = require('class-validator');

// src/decorators/abstract-validation.decorator.ts
var AbstractValidationDecorator = class {
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
  static createValidationDecorator(name, constraints, validationFunction, defaultMessage, validationOptions) {
    return (object, propertyName) => {
      const options = {
        message: defaultMessage,
        ...validationOptions || {}
      };
      classValidator.registerDecorator({
        name,
        target: object.constructor,
        propertyName,
        constraints,
        options,
        validator: {
          validate: validationFunction,
          defaultMessage: () => options.message
        }
      });
    };
  }
};
if (typeof module !== "undefined") { module.exports = module.exports.default; }

exports.AbstractValidationDecorator = AbstractValidationDecorator;
//# sourceMappingURL=abstract-validation.decorator.js.map
//# sourceMappingURL=abstract-validation.decorator.js.map