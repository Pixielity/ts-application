'use strict';

require('reflect-metadata');

// src/decorators/abstract-decorator.ts
function createPropertyDecorator(decorator) {
  return (target, propertyKey) => {
    decorator(target, propertyKey);
  };
}

// src/config/decorators/env-config.decorator.ts
function EnvConfig(options) {
  return createPropertyDecorator((target, propertyKey) => {
    Object.defineProperty(target, propertyKey, {
      get: () => {
        const value = options.env ? process.env[options.env] : void 0;
        if (value === void 0) {
          return options.defaultValue;
        }
        let parsedValue;
        if (value.toLowerCase() === "true") parsedValue = true;
        else if (value.toLowerCase() === "false") parsedValue = false;
        else if (/^-?\d+$/.test(value)) parsedValue = Number.parseInt(value, 10);
        else if (/^-?\d+\.\d+$/.test(value)) parsedValue = Number.parseFloat(value);
        else parsedValue = value;
        if (options.transform) {
          parsedValue = options.transform(parsedValue);
        }
        return parsedValue;
      },
      enumerable: true,
      configurable: true
    });
  });
}
if (typeof module !== "undefined") { module.exports = module.exports.default; }

exports.EnvConfig = EnvConfig;
//# sourceMappingURL=env-config.decorator.js.map
//# sourceMappingURL=env-config.decorator.js.map