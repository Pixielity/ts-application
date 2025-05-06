'use strict';

require('reflect-metadata');
var path = require('path');
var tsTypes = require('@pixielity/ts-types');
var fs = require('fs');
var classValidator = require('class-validator');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var path__namespace = /*#__PURE__*/_interopNamespace(path);
var fs__namespace = /*#__PURE__*/_interopNamespace(fs);

/**
 * @pixielity/ts-application v1.0.0
 * 
 * Advanced TypeScript application package with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(result)) || result;
  return result;
};

// ../../../node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "../../../node_modules/react/cjs/react.production.min.js"(exports) {
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.act = X;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = X;
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.3.1";
  }
});

// ../../../node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "../../../node_modules/react/cjs/react.development.js"(exports, module) {
    if (process.env.NODE_ENV !== "production") {
      (function() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.3.1";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext3(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext3(Context2) {
          var dispatcher = resolveDispatcher();
          {
            if (Context2._context !== void 0) {
              var realContext = Context2._context;
              if (realContext.Consumer === Context2) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context2) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context2);
        }
        function useState8(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect7(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback5(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve3, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve3, reject);
                    } else {
                      resolve3(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve3, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve3, reject);
                    } else {
                      resolve3(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve3, reject) {
                    resolve3(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve3, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve3(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve3, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve3(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.act = act;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext3;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback5;
        exports.useContext = useContext3;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect7;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState8;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../../../node_modules/react/index.js
var require_react = __commonJS({
  "../../../node_modules/react/index.js"(exports, module) {
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_production_min();
    } else {
      module.exports = require_react_development();
    }
  }
});

// ../../../node_modules/inversify/es/constants/metadata_keys.js
var NAMED_TAG = "named";
var NAME_TAG = "name";
var UNMANAGED_TAG = "unmanaged";
var OPTIONAL_TAG = "optional";
var INJECT_TAG = "inject";
var MULTI_INJECT_TAG = "multi_inject";
var TAGGED = "inversify:tagged";
var TAGGED_PROP = "inversify:tagged_props";
var PARAM_TYPES = "inversify:paramtypes";
var DESIGN_PARAM_TYPES = "design:paramtypes";
var POST_CONSTRUCT = "post_construct";
var PRE_DESTROY = "pre_destroy";
function getNonCustomTagKeys() {
  return [
    INJECT_TAG,
    MULTI_INJECT_TAG,
    NAME_TAG,
    UNMANAGED_TAG,
    NAMED_TAG,
    OPTIONAL_TAG
  ];
}
var NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys();

// ../../../node_modules/inversify/es/constants/literal_types.js
var BindingScopeEnum = {
  Request: "Request",
  Singleton: "Singleton",
  Transient: "Transient"
};
var BindingTypeEnum = {
  ConstantValue: "ConstantValue",
  Constructor: "Constructor",
  DynamicValue: "DynamicValue",
  Factory: "Factory",
  Function: "Function",
  Instance: "Instance",
  Invalid: "Invalid",
  Provider: "Provider"
};
var TargetTypeEnum = {
  ClassProperty: "ClassProperty",
  ConstructorArgument: "ConstructorArgument",
  Variable: "Variable"
};

// ../../../node_modules/inversify/es/utils/id.js
var idCounter = 0;
function id() {
  return idCounter++;
}

// ../../../node_modules/inversify/es/bindings/binding.js
var Binding = function() {
  function Binding2(serviceIdentifier, scope) {
    this.id = id();
    this.activated = false;
    this.serviceIdentifier = serviceIdentifier;
    this.scope = scope;
    this.type = BindingTypeEnum.Invalid;
    this.constraint = function(request) {
      return true;
    };
    this.implementationType = null;
    this.cache = null;
    this.factory = null;
    this.provider = null;
    this.onActivation = null;
    this.onDeactivation = null;
    this.dynamicValue = null;
  }
  Binding2.prototype.clone = function() {
    var clone = new Binding2(this.serviceIdentifier, this.scope);
    clone.activated = clone.scope === BindingScopeEnum.Singleton ? this.activated : false;
    clone.implementationType = this.implementationType;
    clone.dynamicValue = this.dynamicValue;
    clone.scope = this.scope;
    clone.type = this.type;
    clone.factory = this.factory;
    clone.provider = this.provider;
    clone.constraint = this.constraint;
    clone.onActivation = this.onActivation;
    clone.onDeactivation = this.onDeactivation;
    clone.cache = this.cache;
    return clone;
  };
  return Binding2;
}();

// ../../../node_modules/inversify/es/constants/error_msgs.js
var DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
var NULL_ARGUMENT = "NULL argument";
var KEY_NOT_FOUND = "Key Not Found";
var AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
var CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
var NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
var MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
var MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
var CIRCULAR_DEPENDENCY = "Circular dependency found:";
var INVALID_BINDING_TYPE = "Invalid binding type:";
var NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
var INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
var INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
var LAZY_IN_SYNC = function(key) {
  return "You are attempting to construct '" + key + "' in a synchronous way\n but it has asynchronous dependencies.";
};
var INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier";
var ARGUMENTS_LENGTH_MISMATCH = function() {
  var values = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }
  return "The number of constructor arguments in the derived class " + (values[0] + " must be >= than the number of constructor arguments of its base class.");
};
var CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.";
var CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = 'Invalid Container option. Default scope must be a string ("singleton" or "transient").';
var CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean";
var CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean";
var ASYNC_UNBIND_REQUIRED = "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)";
var POST_CONSTRUCT_ERROR = function(clazz, errorMessage) {
  return "@postConstruct error in class " + clazz + ": " + errorMessage;
};
var PRE_DESTROY_ERROR = function(clazz, errorMessage) {
  return "@preDestroy error in class " + clazz + ": " + errorMessage;
};
var ON_DEACTIVATION_ERROR = function(clazz, errorMessage) {
  return "onDeactivation() error in class " + clazz + ": " + errorMessage;
};
var CIRCULAR_DEPENDENCY_IN_FACTORY = function(factoryType, serviceIdentifier) {
  return "It looks like there is a circular dependency in one of the '" + factoryType + "' bindings. Please investigate bindings with " + ("service identifier '" + serviceIdentifier + "'.");
};
var STACK_OVERFLOW = "Maximum call stack size exceeded";

// ../../../node_modules/inversify/es/planning/metadata_reader.js
var MetadataReader = function() {
  function MetadataReader2() {
  }
  MetadataReader2.prototype.getConstructorMetadata = function(constructorFunc) {
    var compilerGeneratedMetadata = Reflect.getMetadata(PARAM_TYPES, constructorFunc);
    var userGeneratedMetadata = Reflect.getMetadata(TAGGED, constructorFunc);
    return {
      compilerGeneratedMetadata,
      userGeneratedMetadata: userGeneratedMetadata || {}
    };
  };
  MetadataReader2.prototype.getPropertiesMetadata = function(constructorFunc) {
    var userGeneratedMetadata = Reflect.getMetadata(TAGGED_PROP, constructorFunc) || [];
    return userGeneratedMetadata;
  };
  return MetadataReader2;
}();

// ../../../node_modules/inversify/es/bindings/binding_count.js
var BindingCount = {
  MultipleBindingsAvailable: 2,
  NoBindingsAvailable: 0,
  OnlyOneBindingAvailable: 1
};

// ../../../node_modules/inversify/es/utils/exceptions.js
function isStackOverflowExeption(error) {
  return error instanceof RangeError || error.message === STACK_OVERFLOW;
}
var tryAndThrowErrorIfStackOverflow = function(fn, errorCallback) {
  try {
    return fn();
  } catch (error) {
    if (isStackOverflowExeption(error)) {
      error = errorCallback();
    }
    throw error;
  }
};

// ../../../node_modules/inversify/es/utils/serialization.js
function getServiceIdentifierAsString(serviceIdentifier) {
  if (typeof serviceIdentifier === "function") {
    var _serviceIdentifier = serviceIdentifier;
    return _serviceIdentifier.name;
  } else if (typeof serviceIdentifier === "symbol") {
    return serviceIdentifier.toString();
  } else {
    var _serviceIdentifier = serviceIdentifier;
    return _serviceIdentifier;
  }
}
function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings2) {
  var registeredBindingsList = "";
  var registeredBindings = getBindings2(container, serviceIdentifier);
  if (registeredBindings.length !== 0) {
    registeredBindingsList = "\nRegistered bindings:";
    registeredBindings.forEach(function(binding) {
      var name = "Object";
      if (binding.implementationType !== null) {
        name = getFunctionName(binding.implementationType);
      }
      registeredBindingsList = registeredBindingsList + "\n " + name;
      if (binding.constraint.metaData) {
        registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
      }
    });
  }
  return registeredBindingsList;
}
function alreadyDependencyChain(request, serviceIdentifier) {
  if (request.parentRequest === null) {
    return false;
  } else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
    return true;
  } else {
    return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
  }
}
function dependencyChainToString(request) {
  function _createStringArr(req, result) {
    if (result === void 0) {
      result = [];
    }
    var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
    result.push(serviceIdentifier);
    if (req.parentRequest !== null) {
      return _createStringArr(req.parentRequest, result);
    }
    return result;
  }
  var stringArr = _createStringArr(request);
  return stringArr.reverse().join(" --> ");
}
function circularDependencyToException(request) {
  request.childRequests.forEach(function(childRequest) {
    if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
      var services = dependencyChainToString(childRequest);
      throw new Error(CIRCULAR_DEPENDENCY + " " + services);
    } else {
      circularDependencyToException(childRequest);
    }
  });
}
function listMetadataForTarget(serviceIdentifierString, target) {
  if (target.isTagged() || target.isNamed()) {
    var m_1 = "";
    var namedTag = target.getNamedTag();
    var otherTags = target.getCustomTags();
    if (namedTag !== null) {
      m_1 += namedTag.toString() + "\n";
    }
    if (otherTags !== null) {
      otherTags.forEach(function(tag) {
        m_1 += tag.toString() + "\n";
      });
    }
    return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
  } else {
    return " " + serviceIdentifierString;
  }
}
function getFunctionName(func) {
  if (func.name) {
    return func.name;
  } else {
    var name_1 = func.toString();
    var match = name_1.match(/^function\s*([^\s(]+)/);
    return match ? match[1] : "Anonymous function: " + name_1;
  }
}
function getSymbolDescription(symbol) {
  return symbol.toString().slice(7, -1);
}

// ../../../node_modules/inversify/es/planning/context.js
var Context = function() {
  function Context2(container) {
    this.id = id();
    this.container = container;
  }
  Context2.prototype.addPlan = function(plan2) {
    this.plan = plan2;
  };
  Context2.prototype.setCurrentRequest = function(currentRequest) {
    this.currentRequest = currentRequest;
  };
  return Context2;
}();

// ../../../node_modules/inversify/es/planning/metadata.js
var Metadata = function() {
  function Metadata2(key, value) {
    this.key = key;
    this.value = value;
  }
  Metadata2.prototype.toString = function() {
    if (this.key === NAMED_TAG) {
      return "named: " + String(this.value).toString() + " ";
    } else {
      return "tagged: { key:" + this.key.toString() + ", value: " + String(this.value) + " }";
    }
  };
  return Metadata2;
}();

// ../../../node_modules/inversify/es/planning/plan.js
var Plan = /* @__PURE__ */ function() {
  function Plan2(parentContext, rootRequest) {
    this.parentContext = parentContext;
    this.rootRequest = rootRequest;
  }
  return Plan2;
}();

// ../../../node_modules/inversify/es/annotation/lazy_service_identifier.js
var LazyServiceIdentifier = function() {
  function LazyServiceIdentifier2(cb) {
    this._cb = cb;
  }
  LazyServiceIdentifier2.prototype.unwrap = function() {
    return this._cb();
  };
  return LazyServiceIdentifier2;
}();

// ../../../node_modules/inversify/es/planning/queryable_string.js
var QueryableString = function() {
  function QueryableString2(str) {
    this.str = str;
  }
  QueryableString2.prototype.startsWith = function(searchString) {
    return this.str.indexOf(searchString) === 0;
  };
  QueryableString2.prototype.endsWith = function(searchString) {
    var reverseString = "";
    var reverseSearchString = searchString.split("").reverse().join("");
    reverseString = this.str.split("").reverse().join("");
    return this.startsWith.call({ str: reverseString }, reverseSearchString);
  };
  QueryableString2.prototype.contains = function(searchString) {
    return this.str.indexOf(searchString) !== -1;
  };
  QueryableString2.prototype.equals = function(compareString) {
    return this.str === compareString;
  };
  QueryableString2.prototype.value = function() {
    return this.str;
  };
  return QueryableString2;
}();

// ../../../node_modules/inversify/es/planning/target.js
var Target = function() {
  function Target2(type, identifier, serviceIdentifier, namedOrTagged) {
    this.id = id();
    this.type = type;
    this.serviceIdentifier = serviceIdentifier;
    var queryableName = typeof identifier === "symbol" ? getSymbolDescription(identifier) : identifier;
    this.name = new QueryableString(queryableName || "");
    this.identifier = identifier;
    this.metadata = new Array();
    var metadataItem = null;
    if (typeof namedOrTagged === "string") {
      metadataItem = new Metadata(NAMED_TAG, namedOrTagged);
    } else if (namedOrTagged instanceof Metadata) {
      metadataItem = namedOrTagged;
    }
    if (metadataItem !== null) {
      this.metadata.push(metadataItem);
    }
  }
  Target2.prototype.hasTag = function(key) {
    for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
      var m = _a[_i];
      if (m.key === key) {
        return true;
      }
    }
    return false;
  };
  Target2.prototype.isArray = function() {
    return this.hasTag(MULTI_INJECT_TAG);
  };
  Target2.prototype.matchesArray = function(name) {
    return this.matchesTag(MULTI_INJECT_TAG)(name);
  };
  Target2.prototype.isNamed = function() {
    return this.hasTag(NAMED_TAG);
  };
  Target2.prototype.isTagged = function() {
    return this.metadata.some(function(metadata) {
      return NON_CUSTOM_TAG_KEYS.every(function(key) {
        return metadata.key !== key;
      });
    });
  };
  Target2.prototype.isOptional = function() {
    return this.matchesTag(OPTIONAL_TAG)(true);
  };
  Target2.prototype.getNamedTag = function() {
    if (this.isNamed()) {
      return this.metadata.filter(function(m) {
        return m.key === NAMED_TAG;
      })[0];
    }
    return null;
  };
  Target2.prototype.getCustomTags = function() {
    if (this.isTagged()) {
      return this.metadata.filter(function(metadata) {
        return NON_CUSTOM_TAG_KEYS.every(function(key) {
          return metadata.key !== key;
        });
      });
    } else {
      return null;
    }
  };
  Target2.prototype.matchesNamedTag = function(name) {
    return this.matchesTag(NAMED_TAG)(name);
  };
  Target2.prototype.matchesTag = function(key) {
    var _this = this;
    return function(value) {
      for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
        var m = _a[_i];
        if (m.key === key && m.value === value) {
          return true;
        }
      }
      return false;
    };
  };
  return Target2;
}();

// ../../../node_modules/inversify/es/planning/reflection_utils.js
var __spreadArray = function(to, from, pack) {
  for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
function getDependencies(metadataReader, func) {
  var constructorName = getFunctionName(func);
  return getTargets(metadataReader, constructorName, func, false);
}
function getTargets(metadataReader, constructorName, func, isBaseClass) {
  var metadata = metadataReader.getConstructorMetadata(func);
  var serviceIdentifiers = metadata.compilerGeneratedMetadata;
  if (serviceIdentifiers === void 0) {
    var msg = MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
    throw new Error(msg);
  }
  var constructorArgsMetadata = metadata.userGeneratedMetadata;
  var keys = Object.keys(constructorArgsMetadata);
  var hasUserDeclaredUnknownInjections = func.length === 0 && keys.length > 0;
  var hasOptionalParameters = keys.length > func.length;
  var iterations = hasUserDeclaredUnknownInjections || hasOptionalParameters ? keys.length : func.length;
  var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
  var propertyTargets = getClassPropsAsTargets(metadataReader, func, constructorName);
  var targets = __spreadArray(__spreadArray([], constructorTargets, true), propertyTargets);
  return targets;
}
function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
  var targetMetadata = constructorArgsMetadata[index.toString()] || [];
  var metadata = formatTargetMetadata(targetMetadata);
  var isManaged = metadata.unmanaged !== true;
  var serviceIdentifier = serviceIdentifiers[index];
  var injectIdentifier = metadata.inject || metadata.multiInject;
  serviceIdentifier = injectIdentifier ? injectIdentifier : serviceIdentifier;
  if (serviceIdentifier instanceof LazyServiceIdentifier) {
    serviceIdentifier = serviceIdentifier.unwrap();
  }
  if (isManaged) {
    var isObject = serviceIdentifier === Object;
    var isFunction = serviceIdentifier === Function;
    var isUndefined = serviceIdentifier === void 0;
    var isUnknownType = isObject || isFunction || isUndefined;
    if (!isBaseClass && isUnknownType) {
      var msg = MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
      throw new Error(msg);
    }
    var target = new Target(TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
    target.metadata = targetMetadata;
    return target;
  }
  return null;
}
function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
  var targets = [];
  for (var i = 0; i < iterations; i++) {
    var index = i;
    var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
    if (target !== null) {
      targets.push(target);
    }
  }
  return targets;
}
function _getServiceIdentifierForProperty(inject, multiInject, propertyName, className) {
  var serviceIdentifier = inject || multiInject;
  if (serviceIdentifier === void 0) {
    var msg = MISSING_INJECTABLE_ANNOTATION + " for property " + String(propertyName) + " in class " + className + ".";
    throw new Error(msg);
  }
  return serviceIdentifier;
}
function getClassPropsAsTargets(metadataReader, constructorFunc, constructorName) {
  var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
  var targets = [];
  var symbolKeys = Object.getOwnPropertySymbols(classPropsMetadata);
  var stringKeys = Object.keys(classPropsMetadata);
  var keys = stringKeys.concat(symbolKeys);
  for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
    var key = keys_1[_i];
    var targetMetadata = classPropsMetadata[key];
    var metadata = formatTargetMetadata(targetMetadata);
    var identifier = metadata.targetName || key;
    var serviceIdentifier = _getServiceIdentifierForProperty(metadata.inject, metadata.multiInject, key, constructorName);
    var target = new Target(TargetTypeEnum.ClassProperty, identifier, serviceIdentifier);
    target.metadata = targetMetadata;
    targets.push(target);
  }
  var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
  if (baseConstructor !== Object) {
    var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor, constructorName);
    targets = __spreadArray(__spreadArray([], targets, true), baseTargets);
  }
  return targets;
}
function getBaseClassDependencyCount(metadataReader, func) {
  var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
  if (baseConstructor !== Object) {
    var baseConstructorName = getFunctionName(baseConstructor);
    var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
    var metadata = targets.map(function(t) {
      return t.metadata.filter(function(m) {
        return m.key === UNMANAGED_TAG;
      });
    });
    var unmanagedCount = [].concat.apply([], metadata).length;
    var dependencyCount = targets.length - unmanagedCount;
    if (dependencyCount > 0) {
      return dependencyCount;
    } else {
      return getBaseClassDependencyCount(metadataReader, baseConstructor);
    }
  } else {
    return 0;
  }
}
function formatTargetMetadata(targetMetadata) {
  var targetMetadataMap = {};
  targetMetadata.forEach(function(m) {
    targetMetadataMap[m.key.toString()] = m.value;
  });
  return {
    inject: targetMetadataMap[INJECT_TAG],
    multiInject: targetMetadataMap[MULTI_INJECT_TAG],
    targetName: targetMetadataMap[NAME_TAG],
    unmanaged: targetMetadataMap[UNMANAGED_TAG]
  };
}

// ../../../node_modules/inversify/es/planning/request.js
var Request = function() {
  function Request2(serviceIdentifier, parentContext, parentRequest, bindings, target) {
    this.id = id();
    this.serviceIdentifier = serviceIdentifier;
    this.parentContext = parentContext;
    this.parentRequest = parentRequest;
    this.target = target;
    this.childRequests = [];
    this.bindings = Array.isArray(bindings) ? bindings : [bindings];
    this.requestScope = parentRequest === null ? /* @__PURE__ */ new Map() : null;
  }
  Request2.prototype.addChildRequest = function(serviceIdentifier, bindings, target) {
    var child = new Request2(serviceIdentifier, this.parentContext, this, bindings, target);
    this.childRequests.push(child);
    return child;
  };
  return Request2;
}();

// ../../../node_modules/inversify/es/planning/planner.js
function getBindingDictionary(cntnr) {
  return cntnr._bindingDictionary;
}
function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
  var metadataKey = isMultiInject ? MULTI_INJECT_TAG : INJECT_TAG;
  var injectMetadata = new Metadata(metadataKey, serviceIdentifier);
  var target = new Target(targetType, name, serviceIdentifier, injectMetadata);
  if (key !== void 0) {
    var tagMetadata = new Metadata(key, value);
    target.metadata.push(tagMetadata);
  }
  return target;
}
function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
  var bindings = getBindings(context.container, target.serviceIdentifier);
  var activeBindings = [];
  if (bindings.length === BindingCount.NoBindingsAvailable && context.container.options.autoBindInjectable && typeof target.serviceIdentifier === "function" && metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
    context.container.bind(target.serviceIdentifier).toSelf();
    bindings = getBindings(context.container, target.serviceIdentifier);
  }
  if (!avoidConstraints) {
    activeBindings = bindings.filter(function(binding) {
      var request = new Request(binding.serviceIdentifier, context, parentRequest, binding, target);
      return binding.constraint(request);
    });
  } else {
    activeBindings = bindings;
  }
  _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
  return activeBindings;
}
function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
  switch (bindings.length) {
    case BindingCount.NoBindingsAvailable:
      if (target.isOptional()) {
        return bindings;
      } else {
        var serviceIdentifierString = getServiceIdentifierAsString(serviceIdentifier);
        var msg = NOT_REGISTERED;
        msg += listMetadataForTarget(serviceIdentifierString, target);
        msg += listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
        throw new Error(msg);
      }
    case BindingCount.OnlyOneBindingAvailable:
      return bindings;
    case BindingCount.MultipleBindingsAvailable:
    default:
      if (!target.isArray()) {
        var serviceIdentifierString = getServiceIdentifierAsString(serviceIdentifier);
        var msg = AMBIGUOUS_MATCH + " " + serviceIdentifierString;
        msg += listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
        throw new Error(msg);
      } else {
        return bindings;
      }
  }
}
function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
  var activeBindings;
  var childRequest;
  if (parentRequest === null) {
    activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
    childRequest = new Request(serviceIdentifier, context, null, activeBindings, target);
    var thePlan = new Plan(context, childRequest);
    context.addPlan(thePlan);
  } else {
    activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
    childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
  }
  activeBindings.forEach(function(binding) {
    var subChildRequest = null;
    if (target.isArray()) {
      subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
    } else {
      if (binding.cache) {
        return;
      }
      subChildRequest = childRequest;
    }
    if (binding.type === BindingTypeEnum.Instance && binding.implementationType !== null) {
      var dependencies = getDependencies(metadataReader, binding.implementationType);
      if (!context.container.options.skipBaseClassChecks) {
        var baseClassDependencyCount = getBaseClassDependencyCount(metadataReader, binding.implementationType);
        if (dependencies.length < baseClassDependencyCount) {
          var error = ARGUMENTS_LENGTH_MISMATCH(getFunctionName(binding.implementationType));
          throw new Error(error);
        }
      }
      dependencies.forEach(function(dependency) {
        _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
      });
    }
  });
}
function getBindings(container, serviceIdentifier) {
  var bindings = [];
  var bindingDictionary = getBindingDictionary(container);
  if (bindingDictionary.hasKey(serviceIdentifier)) {
    bindings = bindingDictionary.get(serviceIdentifier);
  } else if (container.parent !== null) {
    bindings = getBindings(container.parent, serviceIdentifier);
  }
  return bindings;
}
function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
  if (avoidConstraints === void 0) {
    avoidConstraints = false;
  }
  var context = new Context(container);
  var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
  try {
    _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
    return context;
  } catch (error) {
    if (isStackOverflowExeption(error)) {
      circularDependencyToException(context.plan.rootRequest);
    }
    throw error;
  }
}
function createMockRequest(container, serviceIdentifier, key, value) {
  var target = new Target(TargetTypeEnum.Variable, "", serviceIdentifier, new Metadata(key, value));
  var context = new Context(container);
  var request = new Request(serviceIdentifier, context, null, [], target);
  return request;
}

// ../../../node_modules/inversify/es/utils/async.js
function isPromise(object) {
  var isObjectOrFunction = typeof object === "object" && object !== null || typeof object === "function";
  return isObjectOrFunction && typeof object.then === "function";
}
function isPromiseOrContainsPromise(object) {
  if (isPromise(object)) {
    return true;
  }
  return Array.isArray(object) && object.some(isPromise);
}

// ../../../node_modules/inversify/es/scope/scope.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve3) {
      resolve3(value);
    });
  }
  return new (P || (P = Promise))(function(resolve3, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var tryGetFromScope = function(requestScope, binding) {
  if (binding.scope === BindingScopeEnum.Singleton && binding.activated) {
    return binding.cache;
  }
  if (binding.scope === BindingScopeEnum.Request && requestScope.has(binding.id)) {
    return requestScope.get(binding.id);
  }
  return null;
};
var saveToScope = function(requestScope, binding, result) {
  if (binding.scope === BindingScopeEnum.Singleton) {
    _saveToSingletonScope(binding, result);
  }
  if (binding.scope === BindingScopeEnum.Request) {
    _saveToRequestScope(requestScope, binding, result);
  }
};
var _saveToRequestScope = function(requestScope, binding, result) {
  if (!requestScope.has(binding.id)) {
    requestScope.set(binding.id, result);
  }
};
var _saveToSingletonScope = function(binding, result) {
  binding.cache = result;
  binding.activated = true;
  if (isPromise(result)) {
    void _saveAsyncResultToSingletonScope(binding, result);
  }
};
var _saveAsyncResultToSingletonScope = function(binding, asyncResult) {
  return __awaiter(void 0, void 0, void 0, function() {
    var result, ex_1;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2, , 3]);
          return [4, asyncResult];
        case 1:
          result = _a.sent();
          binding.cache = result;
          return [3, 3];
        case 2:
          ex_1 = _a.sent();
          binding.cache = null;
          binding.activated = false;
          throw ex_1;
        case 3:
          return [2];
      }
    });
  });
};

// ../../../node_modules/inversify/es/utils/factory_type.js
var FactoryType;
(function(FactoryType2) {
  FactoryType2["DynamicValue"] = "toDynamicValue";
  FactoryType2["Factory"] = "toFactory";
  FactoryType2["Provider"] = "toProvider";
})(FactoryType || (FactoryType = {}));

// ../../../node_modules/inversify/es/utils/binding_utils.js
var ensureFullyBound = function(binding) {
  var boundValue = null;
  switch (binding.type) {
    case BindingTypeEnum.ConstantValue:
    case BindingTypeEnum.Function:
      boundValue = binding.cache;
      break;
    case BindingTypeEnum.Constructor:
    case BindingTypeEnum.Instance:
      boundValue = binding.implementationType;
      break;
    case BindingTypeEnum.DynamicValue:
      boundValue = binding.dynamicValue;
      break;
    case BindingTypeEnum.Provider:
      boundValue = binding.provider;
      break;
    case BindingTypeEnum.Factory:
      boundValue = binding.factory;
      break;
  }
  if (boundValue === null) {
    var serviceIdentifierAsString = getServiceIdentifierAsString(binding.serviceIdentifier);
    throw new Error(INVALID_BINDING_TYPE + " " + serviceIdentifierAsString);
  }
};
var getFactoryDetails = function(binding) {
  switch (binding.type) {
    case BindingTypeEnum.Factory:
      return { factory: binding.factory, factoryType: FactoryType.Factory };
    case BindingTypeEnum.Provider:
      return { factory: binding.provider, factoryType: FactoryType.Provider };
    case BindingTypeEnum.DynamicValue:
      return { factory: binding.dynamicValue, factoryType: FactoryType.DynamicValue };
    default:
      throw new Error("Unexpected factory type " + binding.type);
  }
};

// ../../../node_modules/inversify/es/resolution/instantiation.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve3) {
      resolve3(value);
    });
  }
  return new (P || (P = Promise))(function(resolve3, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
var __generator2 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray2 = function(to, from, pack) {
  if (arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
function _resolveRequests(childRequests, resolveRequest) {
  return childRequests.reduce(function(resolvedRequests, childRequest) {
    var injection = resolveRequest(childRequest);
    var targetType = childRequest.target.type;
    if (targetType === TargetTypeEnum.ConstructorArgument) {
      resolvedRequests.constructorInjections.push(injection);
    } else {
      resolvedRequests.propertyRequests.push(childRequest);
      resolvedRequests.propertyInjections.push(injection);
    }
    if (!resolvedRequests.isAsync) {
      resolvedRequests.isAsync = isPromiseOrContainsPromise(injection);
    }
    return resolvedRequests;
  }, { constructorInjections: [], propertyInjections: [], propertyRequests: [], isAsync: false });
}
function _createInstance(constr, childRequests, resolveRequest) {
  var result;
  if (childRequests.length > 0) {
    var resolved = _resolveRequests(childRequests, resolveRequest);
    var createInstanceWithInjectionsArg = __assign(__assign({}, resolved), { constr });
    if (resolved.isAsync) {
      result = createInstanceWithInjectionsAsync(createInstanceWithInjectionsArg);
    } else {
      result = createInstanceWithInjections(createInstanceWithInjectionsArg);
    }
  } else {
    result = new constr();
  }
  return result;
}
function createInstanceWithInjections(args) {
  var _a;
  var instance = new ((_a = args.constr).bind.apply(_a, __spreadArray2([void 0], args.constructorInjections, false)))();
  args.propertyRequests.forEach(function(r, index) {
    var property = r.target.identifier;
    var injection = args.propertyInjections[index];
    if (!r.target.isOptional() || injection !== void 0) {
      instance[property] = injection;
    }
  });
  return instance;
}
function createInstanceWithInjectionsAsync(args) {
  return __awaiter2(this, void 0, void 0, function() {
    var constructorInjections, propertyInjections;
    return __generator2(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, possiblyWaitInjections(args.constructorInjections)];
        case 1:
          constructorInjections = _a.sent();
          return [4, possiblyWaitInjections(args.propertyInjections)];
        case 2:
          propertyInjections = _a.sent();
          return [2, createInstanceWithInjections(__assign(__assign({}, args), { constructorInjections, propertyInjections }))];
      }
    });
  });
}
function possiblyWaitInjections(possiblePromiseinjections) {
  return __awaiter2(this, void 0, void 0, function() {
    var injections, _i, possiblePromiseinjections_1, injection;
    return __generator2(this, function(_a) {
      injections = [];
      for (_i = 0, possiblePromiseinjections_1 = possiblePromiseinjections; _i < possiblePromiseinjections_1.length; _i++) {
        injection = possiblePromiseinjections_1[_i];
        if (Array.isArray(injection)) {
          injections.push(Promise.all(injection));
        } else {
          injections.push(injection);
        }
      }
      return [2, Promise.all(injections)];
    });
  });
}
function _getInstanceAfterPostConstruct(constr, result) {
  var postConstructResult = _postConstruct(constr, result);
  if (isPromise(postConstructResult)) {
    return postConstructResult.then(function() {
      return result;
    });
  } else {
    return result;
  }
}
function _postConstruct(constr, instance) {
  var _a, _b;
  if (Reflect.hasMetadata(POST_CONSTRUCT, constr)) {
    var data = Reflect.getMetadata(POST_CONSTRUCT, constr);
    try {
      return (_b = (_a = instance)[data.value]) === null || _b === void 0 ? void 0 : _b.call(_a);
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(POST_CONSTRUCT_ERROR(constr.name, e.message));
      }
    }
  }
}
function _validateInstanceResolution(binding, constr) {
  if (binding.scope !== BindingScopeEnum.Singleton) {
    _throwIfHandlingDeactivation(binding, constr);
  }
}
function _throwIfHandlingDeactivation(binding, constr) {
  var scopeErrorMessage = "Class cannot be instantiated in " + (binding.scope === BindingScopeEnum.Request ? "request" : "transient") + " scope.";
  if (typeof binding.onDeactivation === "function") {
    throw new Error(ON_DEACTIVATION_ERROR(constr.name, scopeErrorMessage));
  }
  if (Reflect.hasMetadata(PRE_DESTROY, constr)) {
    throw new Error(PRE_DESTROY_ERROR(constr.name, scopeErrorMessage));
  }
}
function resolveInstance(binding, constr, childRequests, resolveRequest) {
  _validateInstanceResolution(binding, constr);
  var result = _createInstance(constr, childRequests, resolveRequest);
  if (isPromise(result)) {
    return result.then(function(resolvedResult) {
      return _getInstanceAfterPostConstruct(constr, resolvedResult);
    });
  } else {
    return _getInstanceAfterPostConstruct(constr, result);
  }
}

// ../../../node_modules/inversify/es/resolution/resolver.js
var __awaiter3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve3) {
      resolve3(value);
    });
  }
  return new (P || (P = Promise))(function(resolve3, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
var __generator3 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var _resolveRequest = function(requestScope) {
  return function(request) {
    request.parentContext.setCurrentRequest(request);
    var bindings = request.bindings;
    var childRequests = request.childRequests;
    var targetIsAnArray = request.target && request.target.isArray();
    var targetParentIsNotAnArray = !request.parentRequest || !request.parentRequest.target || !request.target || !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
    if (targetIsAnArray && targetParentIsNotAnArray) {
      return childRequests.map(function(childRequest) {
        var _f = _resolveRequest(requestScope);
        return _f(childRequest);
      });
    } else {
      if (request.target.isOptional() && bindings.length === 0) {
        return void 0;
      }
      var binding = bindings[0];
      return _resolveBinding(requestScope, request, binding);
    }
  };
};
var _resolveFactoryFromBinding = function(binding, context) {
  var factoryDetails = getFactoryDetails(binding);
  return tryAndThrowErrorIfStackOverflow(function() {
    return factoryDetails.factory.bind(binding)(context);
  }, function() {
    return new Error(CIRCULAR_DEPENDENCY_IN_FACTORY(factoryDetails.factoryType, context.currentRequest.serviceIdentifier.toString()));
  });
};
var _getResolvedFromBinding = function(requestScope, request, binding) {
  var result;
  var childRequests = request.childRequests;
  ensureFullyBound(binding);
  switch (binding.type) {
    case BindingTypeEnum.ConstantValue:
    case BindingTypeEnum.Function:
      result = binding.cache;
      break;
    case BindingTypeEnum.Constructor:
      result = binding.implementationType;
      break;
    case BindingTypeEnum.Instance:
      result = resolveInstance(binding, binding.implementationType, childRequests, _resolveRequest(requestScope));
      break;
    default:
      result = _resolveFactoryFromBinding(binding, request.parentContext);
  }
  return result;
};
var _resolveInScope = function(requestScope, binding, resolveFromBinding) {
  var result = tryGetFromScope(requestScope, binding);
  if (result !== null) {
    return result;
  }
  result = resolveFromBinding();
  saveToScope(requestScope, binding, result);
  return result;
};
var _resolveBinding = function(requestScope, request, binding) {
  return _resolveInScope(requestScope, binding, function() {
    var result = _getResolvedFromBinding(requestScope, request, binding);
    if (isPromise(result)) {
      result = result.then(function(resolved) {
        return _onActivation(request, binding, resolved);
      });
    } else {
      result = _onActivation(request, binding, result);
    }
    return result;
  });
};
function _onActivation(request, binding, resolved) {
  var result = _bindingActivation(request.parentContext, binding, resolved);
  var containersIterator = _getContainersIterator(request.parentContext.container);
  var container;
  var containersIteratorResult = containersIterator.next();
  do {
    container = containersIteratorResult.value;
    var context_1 = request.parentContext;
    var serviceIdentifier = request.serviceIdentifier;
    var activationsIterator = _getContainerActivationsForService(container, serviceIdentifier);
    if (isPromise(result)) {
      result = _activateContainerAsync(activationsIterator, context_1, result);
    } else {
      result = _activateContainer(activationsIterator, context_1, result);
    }
    containersIteratorResult = containersIterator.next();
  } while (containersIteratorResult.done !== true && !getBindingDictionary(container).hasKey(request.serviceIdentifier));
  return result;
}
var _bindingActivation = function(context, binding, previousResult) {
  var result;
  if (typeof binding.onActivation === "function") {
    result = binding.onActivation(context, previousResult);
  } else {
    result = previousResult;
  }
  return result;
};
var _activateContainer = function(activationsIterator, context, result) {
  var activation = activationsIterator.next();
  while (!activation.done) {
    result = activation.value(context, result);
    if (isPromise(result)) {
      return _activateContainerAsync(activationsIterator, context, result);
    }
    activation = activationsIterator.next();
  }
  return result;
};
var _activateContainerAsync = function(activationsIterator, context, resultPromise) {
  return __awaiter3(void 0, void 0, void 0, function() {
    var result, activation;
    return __generator3(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, resultPromise];
        case 1:
          result = _a.sent();
          activation = activationsIterator.next();
          _a.label = 2;
        case 2:
          if (!!activation.done) return [3, 4];
          return [4, activation.value(context, result)];
        case 3:
          result = _a.sent();
          activation = activationsIterator.next();
          return [3, 2];
        case 4:
          return [2, result];
      }
    });
  });
};
var _getContainerActivationsForService = function(container, serviceIdentifier) {
  var activations = container._activations;
  return activations.hasKey(serviceIdentifier) ? activations.get(serviceIdentifier).values() : [].values();
};
var _getContainersIterator = function(container) {
  var containersStack = [container];
  var parent = container.parent;
  while (parent !== null) {
    containersStack.push(parent);
    parent = parent.parent;
  }
  var getNextContainer = function() {
    var nextContainer = containersStack.pop();
    if (nextContainer !== void 0) {
      return { done: false, value: nextContainer };
    } else {
      return { done: true, value: void 0 };
    }
  };
  var containersIterator = {
    next: getNextContainer
  };
  return containersIterator;
};
function resolve(context) {
  var _f = _resolveRequest(context.plan.rootRequest.requestScope);
  return _f(context.plan.rootRequest);
}

// ../../../node_modules/inversify/es/syntax/constraint_helpers.js
var traverseAncerstors = function(request, constraint) {
  var parent = request.parentRequest;
  if (parent !== null) {
    return constraint(parent) ? true : traverseAncerstors(parent, constraint);
  } else {
    return false;
  }
};
var taggedConstraint = function(key) {
  return function(value) {
    var constraint = function(request) {
      return request !== null && request.target !== null && request.target.matchesTag(key)(value);
    };
    constraint.metaData = new Metadata(key, value);
    return constraint;
  };
};
var namedConstraint = taggedConstraint(NAMED_TAG);
var typeConstraint = function(type) {
  return function(request) {
    var binding = null;
    if (request !== null) {
      binding = request.bindings[0];
      if (typeof type === "string") {
        var serviceIdentifier = binding.serviceIdentifier;
        return serviceIdentifier === type;
      } else {
        var constructor = request.bindings[0].implementationType;
        return type === constructor;
      }
    }
    return false;
  };
};

// ../../../node_modules/inversify/es/syntax/binding_when_syntax.js
var BindingWhenSyntax = function() {
  function BindingWhenSyntax2(binding) {
    this._binding = binding;
  }
  BindingWhenSyntax2.prototype.when = function(constraint) {
    this._binding.constraint = constraint;
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenTargetNamed = function(name) {
    this._binding.constraint = namedConstraint(name);
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenTargetIsDefault = function() {
    this._binding.constraint = function(request) {
      if (request === null) {
        return false;
      }
      var targetIsDefault = request.target !== null && !request.target.isNamed() && !request.target.isTagged();
      return targetIsDefault;
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenTargetTagged = function(tag, value) {
    this._binding.constraint = taggedConstraint(tag)(value);
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenInjectedInto = function(parent) {
    this._binding.constraint = function(request) {
      return request !== null && typeConstraint(parent)(request.parentRequest);
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenParentNamed = function(name) {
    this._binding.constraint = function(request) {
      return request !== null && namedConstraint(name)(request.parentRequest);
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenParentTagged = function(tag, value) {
    this._binding.constraint = function(request) {
      return request !== null && taggedConstraint(tag)(value)(request.parentRequest);
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
    this._binding.constraint = function(request) {
      return request !== null && traverseAncerstors(request, typeConstraint(ancestor));
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
    this._binding.constraint = function(request) {
      return request !== null && !traverseAncerstors(request, typeConstraint(ancestor));
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenAnyAncestorNamed = function(name) {
    this._binding.constraint = function(request) {
      return request !== null && traverseAncerstors(request, namedConstraint(name));
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenNoAncestorNamed = function(name) {
    this._binding.constraint = function(request) {
      return request !== null && !traverseAncerstors(request, namedConstraint(name));
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
    this._binding.constraint = function(request) {
      return request !== null && traverseAncerstors(request, taggedConstraint(tag)(value));
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
    this._binding.constraint = function(request) {
      return request !== null && !traverseAncerstors(request, taggedConstraint(tag)(value));
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
    this._binding.constraint = function(request) {
      return request !== null && traverseAncerstors(request, constraint);
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
    this._binding.constraint = function(request) {
      return request !== null && !traverseAncerstors(request, constraint);
    };
    return new BindingOnSyntax(this._binding);
  };
  return BindingWhenSyntax2;
}();

// ../../../node_modules/inversify/es/syntax/binding_on_syntax.js
var BindingOnSyntax = function() {
  function BindingOnSyntax2(binding) {
    this._binding = binding;
  }
  BindingOnSyntax2.prototype.onActivation = function(handler2) {
    this._binding.onActivation = handler2;
    return new BindingWhenSyntax(this._binding);
  };
  BindingOnSyntax2.prototype.onDeactivation = function(handler2) {
    this._binding.onDeactivation = handler2;
    return new BindingWhenSyntax(this._binding);
  };
  return BindingOnSyntax2;
}();

// ../../../node_modules/inversify/es/syntax/binding_when_on_syntax.js
var BindingWhenOnSyntax = function() {
  function BindingWhenOnSyntax2(binding) {
    this._binding = binding;
    this._bindingWhenSyntax = new BindingWhenSyntax(this._binding);
    this._bindingOnSyntax = new BindingOnSyntax(this._binding);
  }
  BindingWhenOnSyntax2.prototype.when = function(constraint) {
    return this._bindingWhenSyntax.when(constraint);
  };
  BindingWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
    return this._bindingWhenSyntax.whenTargetNamed(name);
  };
  BindingWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  };
  BindingWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenTargetTagged(tag, value);
  };
  BindingWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
    return this._bindingWhenSyntax.whenInjectedInto(parent);
  };
  BindingWhenOnSyntax2.prototype.whenParentNamed = function(name) {
    return this._bindingWhenSyntax.whenParentNamed(name);
  };
  BindingWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenParentTagged(tag, value);
  };
  BindingWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
  };
  BindingWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
    return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
  };
  BindingWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
  };
  BindingWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
  };
  BindingWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(name);
  };
  BindingWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
  };
  BindingWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
  };
  BindingWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
  };
  BindingWhenOnSyntax2.prototype.onActivation = function(handler2) {
    return this._bindingOnSyntax.onActivation(handler2);
  };
  BindingWhenOnSyntax2.prototype.onDeactivation = function(handler2) {
    return this._bindingOnSyntax.onDeactivation(handler2);
  };
  return BindingWhenOnSyntax2;
}();

// ../../../node_modules/inversify/es/syntax/binding_in_syntax.js
var BindingInSyntax = function() {
  function BindingInSyntax2(binding) {
    this._binding = binding;
  }
  BindingInSyntax2.prototype.inRequestScope = function() {
    this._binding.scope = BindingScopeEnum.Request;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingInSyntax2.prototype.inSingletonScope = function() {
    this._binding.scope = BindingScopeEnum.Singleton;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingInSyntax2.prototype.inTransientScope = function() {
    this._binding.scope = BindingScopeEnum.Transient;
    return new BindingWhenOnSyntax(this._binding);
  };
  return BindingInSyntax2;
}();

// ../../../node_modules/inversify/es/syntax/binding_in_when_on_syntax.js
var BindingInWhenOnSyntax = function() {
  function BindingInWhenOnSyntax2(binding) {
    this._binding = binding;
    this._bindingWhenSyntax = new BindingWhenSyntax(this._binding);
    this._bindingOnSyntax = new BindingOnSyntax(this._binding);
    this._bindingInSyntax = new BindingInSyntax(binding);
  }
  BindingInWhenOnSyntax2.prototype.inRequestScope = function() {
    return this._bindingInSyntax.inRequestScope();
  };
  BindingInWhenOnSyntax2.prototype.inSingletonScope = function() {
    return this._bindingInSyntax.inSingletonScope();
  };
  BindingInWhenOnSyntax2.prototype.inTransientScope = function() {
    return this._bindingInSyntax.inTransientScope();
  };
  BindingInWhenOnSyntax2.prototype.when = function(constraint) {
    return this._bindingWhenSyntax.when(constraint);
  };
  BindingInWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
    return this._bindingWhenSyntax.whenTargetNamed(name);
  };
  BindingInWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  };
  BindingInWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenTargetTagged(tag, value);
  };
  BindingInWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
    return this._bindingWhenSyntax.whenInjectedInto(parent);
  };
  BindingInWhenOnSyntax2.prototype.whenParentNamed = function(name) {
    return this._bindingWhenSyntax.whenParentNamed(name);
  };
  BindingInWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenParentTagged(tag, value);
  };
  BindingInWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
  };
  BindingInWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
    return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
  };
  BindingInWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
  };
  BindingInWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
  };
  BindingInWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(name);
  };
  BindingInWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
  };
  BindingInWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
  };
  BindingInWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
  };
  BindingInWhenOnSyntax2.prototype.onActivation = function(handler2) {
    return this._bindingOnSyntax.onActivation(handler2);
  };
  BindingInWhenOnSyntax2.prototype.onDeactivation = function(handler2) {
    return this._bindingOnSyntax.onDeactivation(handler2);
  };
  return BindingInWhenOnSyntax2;
}();

// ../../../node_modules/inversify/es/syntax/binding_to_syntax.js
var BindingToSyntax = function() {
  function BindingToSyntax2(binding) {
    this._binding = binding;
  }
  BindingToSyntax2.prototype.to = function(constructor) {
    this._binding.type = BindingTypeEnum.Instance;
    this._binding.implementationType = constructor;
    return new BindingInWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toSelf = function() {
    if (typeof this._binding.serviceIdentifier !== "function") {
      throw new Error("" + INVALID_TO_SELF_VALUE);
    }
    var self = this._binding.serviceIdentifier;
    return this.to(self);
  };
  BindingToSyntax2.prototype.toConstantValue = function(value) {
    this._binding.type = BindingTypeEnum.ConstantValue;
    this._binding.cache = value;
    this._binding.dynamicValue = null;
    this._binding.implementationType = null;
    this._binding.scope = BindingScopeEnum.Singleton;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toDynamicValue = function(func) {
    this._binding.type = BindingTypeEnum.DynamicValue;
    this._binding.cache = null;
    this._binding.dynamicValue = func;
    this._binding.implementationType = null;
    return new BindingInWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toConstructor = function(constructor) {
    this._binding.type = BindingTypeEnum.Constructor;
    this._binding.implementationType = constructor;
    this._binding.scope = BindingScopeEnum.Singleton;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toFactory = function(factory) {
    this._binding.type = BindingTypeEnum.Factory;
    this._binding.factory = factory;
    this._binding.scope = BindingScopeEnum.Singleton;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toFunction = function(func) {
    if (typeof func !== "function") {
      throw new Error(INVALID_FUNCTION_BINDING);
    }
    var bindingWhenOnSyntax = this.toConstantValue(func);
    this._binding.type = BindingTypeEnum.Function;
    this._binding.scope = BindingScopeEnum.Singleton;
    return bindingWhenOnSyntax;
  };
  BindingToSyntax2.prototype.toAutoFactory = function(serviceIdentifier) {
    this._binding.type = BindingTypeEnum.Factory;
    this._binding.factory = function(context) {
      var autofactory = function() {
        return context.container.get(serviceIdentifier);
      };
      return autofactory;
    };
    this._binding.scope = BindingScopeEnum.Singleton;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toAutoNamedFactory = function(serviceIdentifier) {
    this._binding.type = BindingTypeEnum.Factory;
    this._binding.factory = function(context) {
      return function(named) {
        return context.container.getNamed(serviceIdentifier, named);
      };
    };
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toProvider = function(provider) {
    this._binding.type = BindingTypeEnum.Provider;
    this._binding.provider = provider;
    this._binding.scope = BindingScopeEnum.Singleton;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toService = function(service) {
    this.toDynamicValue(function(context) {
      return context.container.get(service);
    });
  };
  return BindingToSyntax2;
}();

// ../../../node_modules/inversify/es/container/container_snapshot.js
var ContainerSnapshot = function() {
  function ContainerSnapshot2() {
  }
  ContainerSnapshot2.of = function(bindings, middleware, activations, deactivations, moduleActivationStore) {
    var snapshot = new ContainerSnapshot2();
    snapshot.bindings = bindings;
    snapshot.middleware = middleware;
    snapshot.deactivations = deactivations;
    snapshot.activations = activations;
    snapshot.moduleActivationStore = moduleActivationStore;
    return snapshot;
  };
  return ContainerSnapshot2;
}();

// ../../../node_modules/inversify/es/utils/clonable.js
function isClonable(obj) {
  return typeof obj === "object" && obj !== null && "clone" in obj && typeof obj.clone === "function";
}

// ../../../node_modules/inversify/es/container/lookup.js
var Lookup = function() {
  function Lookup2() {
    this._map = /* @__PURE__ */ new Map();
  }
  Lookup2.prototype.getMap = function() {
    return this._map;
  };
  Lookup2.prototype.add = function(serviceIdentifier, value) {
    if (serviceIdentifier === null || serviceIdentifier === void 0) {
      throw new Error(NULL_ARGUMENT);
    }
    if (value === null || value === void 0) {
      throw new Error(NULL_ARGUMENT);
    }
    var entry = this._map.get(serviceIdentifier);
    if (entry !== void 0) {
      entry.push(value);
    } else {
      this._map.set(serviceIdentifier, [value]);
    }
  };
  Lookup2.prototype.get = function(serviceIdentifier) {
    if (serviceIdentifier === null || serviceIdentifier === void 0) {
      throw new Error(NULL_ARGUMENT);
    }
    var entry = this._map.get(serviceIdentifier);
    if (entry !== void 0) {
      return entry;
    } else {
      throw new Error(KEY_NOT_FOUND);
    }
  };
  Lookup2.prototype.remove = function(serviceIdentifier) {
    if (serviceIdentifier === null || serviceIdentifier === void 0) {
      throw new Error(NULL_ARGUMENT);
    }
    if (!this._map.delete(serviceIdentifier)) {
      throw new Error(KEY_NOT_FOUND);
    }
  };
  Lookup2.prototype.removeIntersection = function(lookup) {
    var _this = this;
    this.traverse(function(serviceIdentifier, value) {
      var lookupActivations = lookup.hasKey(serviceIdentifier) ? lookup.get(serviceIdentifier) : void 0;
      if (lookupActivations !== void 0) {
        var filteredValues = value.filter(function(lookupValue) {
          return !lookupActivations.some(function(moduleActivation) {
            return lookupValue === moduleActivation;
          });
        });
        _this._setValue(serviceIdentifier, filteredValues);
      }
    });
  };
  Lookup2.prototype.removeByCondition = function(condition) {
    var _this = this;
    var removals = [];
    this._map.forEach(function(entries, key) {
      var updatedEntries = [];
      for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        var remove = condition(entry);
        if (remove) {
          removals.push(entry);
        } else {
          updatedEntries.push(entry);
        }
      }
      _this._setValue(key, updatedEntries);
    });
    return removals;
  };
  Lookup2.prototype.hasKey = function(serviceIdentifier) {
    if (serviceIdentifier === null || serviceIdentifier === void 0) {
      throw new Error(NULL_ARGUMENT);
    }
    return this._map.has(serviceIdentifier);
  };
  Lookup2.prototype.clone = function() {
    var copy = new Lookup2();
    this._map.forEach(function(value, key) {
      value.forEach(function(b) {
        return copy.add(key, isClonable(b) ? b.clone() : b);
      });
    });
    return copy;
  };
  Lookup2.prototype.traverse = function(func) {
    this._map.forEach(function(value, key) {
      func(key, value);
    });
  };
  Lookup2.prototype._setValue = function(serviceIdentifier, value) {
    if (value.length > 0) {
      this._map.set(serviceIdentifier, value);
    } else {
      this._map.delete(serviceIdentifier);
    }
  };
  return Lookup2;
}();

// ../../../node_modules/inversify/es/container/module_activation_store.js
var ModuleActivationStore = function() {
  function ModuleActivationStore2() {
    this._map = /* @__PURE__ */ new Map();
  }
  ModuleActivationStore2.prototype.remove = function(moduleId) {
    if (this._map.has(moduleId)) {
      var handlers = this._map.get(moduleId);
      this._map.delete(moduleId);
      return handlers;
    }
    return this._getEmptyHandlersStore();
  };
  ModuleActivationStore2.prototype.addDeactivation = function(moduleId, serviceIdentifier, onDeactivation) {
    this._getModuleActivationHandlers(moduleId).onDeactivations.add(serviceIdentifier, onDeactivation);
  };
  ModuleActivationStore2.prototype.addActivation = function(moduleId, serviceIdentifier, onActivation) {
    this._getModuleActivationHandlers(moduleId).onActivations.add(serviceIdentifier, onActivation);
  };
  ModuleActivationStore2.prototype.clone = function() {
    var clone = new ModuleActivationStore2();
    this._map.forEach(function(handlersStore, moduleId) {
      clone._map.set(moduleId, {
        onActivations: handlersStore.onActivations.clone(),
        onDeactivations: handlersStore.onDeactivations.clone()
      });
    });
    return clone;
  };
  ModuleActivationStore2.prototype._getModuleActivationHandlers = function(moduleId) {
    var moduleActivationHandlers = this._map.get(moduleId);
    if (moduleActivationHandlers === void 0) {
      moduleActivationHandlers = this._getEmptyHandlersStore();
      this._map.set(moduleId, moduleActivationHandlers);
    }
    return moduleActivationHandlers;
  };
  ModuleActivationStore2.prototype._getEmptyHandlersStore = function() {
    var handlersStore = {
      onActivations: new Lookup(),
      onDeactivations: new Lookup()
    };
    return handlersStore;
  };
  return ModuleActivationStore2;
}();

// ../../../node_modules/inversify/es/container/container.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __awaiter4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve3) {
      resolve3(value);
    });
  }
  return new (P || (P = Promise))(function(resolve3, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
var __generator4 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray3 = function(to, from, pack) {
  for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var Container = function() {
  function Container3(containerOptions) {
    var options = containerOptions || {};
    if (typeof options !== "object") {
      throw new Error("" + CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
    }
    if (options.defaultScope === void 0) {
      options.defaultScope = BindingScopeEnum.Transient;
    } else if (options.defaultScope !== BindingScopeEnum.Singleton && options.defaultScope !== BindingScopeEnum.Transient && options.defaultScope !== BindingScopeEnum.Request) {
      throw new Error("" + CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
    }
    if (options.autoBindInjectable === void 0) {
      options.autoBindInjectable = false;
    } else if (typeof options.autoBindInjectable !== "boolean") {
      throw new Error("" + CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
    }
    if (options.skipBaseClassChecks === void 0) {
      options.skipBaseClassChecks = false;
    } else if (typeof options.skipBaseClassChecks !== "boolean") {
      throw new Error("" + CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
    }
    this.options = {
      autoBindInjectable: options.autoBindInjectable,
      defaultScope: options.defaultScope,
      skipBaseClassChecks: options.skipBaseClassChecks
    };
    this.id = id();
    this._bindingDictionary = new Lookup();
    this._snapshots = [];
    this._middleware = null;
    this._activations = new Lookup();
    this._deactivations = new Lookup();
    this.parent = null;
    this._metadataReader = new MetadataReader();
    this._moduleActivationStore = new ModuleActivationStore();
  }
  Container3.merge = function(container1, container2) {
    var containers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      containers[_i - 2] = arguments[_i];
    }
    var container = new Container3();
    var targetContainers = __spreadArray3([container1, container2], containers).map(function(targetContainer) {
      return getBindingDictionary(targetContainer);
    });
    var bindingDictionary = getBindingDictionary(container);
    function copyDictionary(origin, destination) {
      origin.traverse(function(_key, value) {
        value.forEach(function(binding) {
          destination.add(binding.serviceIdentifier, binding.clone());
        });
      });
    }
    targetContainers.forEach(function(targetBindingDictionary) {
      copyDictionary(targetBindingDictionary, bindingDictionary);
    });
    return container;
  };
  Container3.prototype.load = function() {
    var modules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }
    var getHelpers = this._getContainerModuleHelpersFactory();
    for (var _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
      var currentModule = modules_1[_a];
      var containerModuleHelpers = getHelpers(currentModule.id);
      currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction);
    }
  };
  Container3.prototype.loadAsync = function() {
    var modules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }
    return __awaiter4(this, void 0, void 0, function() {
      var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;
      return __generator4(this, function(_b) {
        switch (_b.label) {
          case 0:
            getHelpers = this._getContainerModuleHelpersFactory();
            _a = 0, modules_2 = modules;
            _b.label = 1;
          case 1:
            if (!(_a < modules_2.length)) return [3, 4];
            currentModule = modules_2[_a];
            containerModuleHelpers = getHelpers(currentModule.id);
            return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction)];
          case 2:
            _b.sent();
            _b.label = 3;
          case 3:
            _a++;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  };
  Container3.prototype.unload = function() {
    var _this = this;
    var modules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }
    modules.forEach(function(module) {
      var deactivations = _this._removeModuleBindings(module.id);
      _this._deactivateSingletons(deactivations);
      _this._removeModuleHandlers(module.id);
    });
  };
  Container3.prototype.unloadAsync = function() {
    var modules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }
    return __awaiter4(this, void 0, void 0, function() {
      var _a, modules_3, module_1, deactivations;
      return __generator4(this, function(_b) {
        switch (_b.label) {
          case 0:
            _a = 0, modules_3 = modules;
            _b.label = 1;
          case 1:
            if (!(_a < modules_3.length)) return [3, 4];
            module_1 = modules_3[_a];
            deactivations = this._removeModuleBindings(module_1.id);
            return [4, this._deactivateSingletonsAsync(deactivations)];
          case 2:
            _b.sent();
            this._removeModuleHandlers(module_1.id);
            _b.label = 3;
          case 3:
            _a++;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  };
  Container3.prototype.bind = function(serviceIdentifier) {
    var scope = this.options.defaultScope || BindingScopeEnum.Transient;
    var binding = new Binding(serviceIdentifier, scope);
    this._bindingDictionary.add(serviceIdentifier, binding);
    return new BindingToSyntax(binding);
  };
  Container3.prototype.rebind = function(serviceIdentifier) {
    this.unbind(serviceIdentifier);
    return this.bind(serviceIdentifier);
  };
  Container3.prototype.rebindAsync = function(serviceIdentifier) {
    return __awaiter4(this, void 0, void 0, function() {
      return __generator4(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.unbindAsync(serviceIdentifier)];
          case 1:
            _a.sent();
            return [2, this.bind(serviceIdentifier)];
        }
      });
    });
  };
  Container3.prototype.unbind = function(serviceIdentifier) {
    if (this._bindingDictionary.hasKey(serviceIdentifier)) {
      var bindings = this._bindingDictionary.get(serviceIdentifier);
      this._deactivateSingletons(bindings);
    }
    this._removeServiceFromDictionary(serviceIdentifier);
  };
  Container3.prototype.unbindAsync = function(serviceIdentifier) {
    return __awaiter4(this, void 0, void 0, function() {
      var bindings;
      return __generator4(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!this._bindingDictionary.hasKey(serviceIdentifier)) return [3, 2];
            bindings = this._bindingDictionary.get(serviceIdentifier);
            return [4, this._deactivateSingletonsAsync(bindings)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            this._removeServiceFromDictionary(serviceIdentifier);
            return [2];
        }
      });
    });
  };
  Container3.prototype.unbindAll = function() {
    var _this = this;
    this._bindingDictionary.traverse(function(_key, value) {
      _this._deactivateSingletons(value);
    });
    this._bindingDictionary = new Lookup();
  };
  Container3.prototype.unbindAllAsync = function() {
    return __awaiter4(this, void 0, void 0, function() {
      var promises;
      var _this = this;
      return __generator4(this, function(_a) {
        switch (_a.label) {
          case 0:
            promises = [];
            this._bindingDictionary.traverse(function(_key, value) {
              promises.push(_this._deactivateSingletonsAsync(value));
            });
            return [4, Promise.all(promises)];
          case 1:
            _a.sent();
            this._bindingDictionary = new Lookup();
            return [2];
        }
      });
    });
  };
  Container3.prototype.onActivation = function(serviceIdentifier, onActivation) {
    this._activations.add(serviceIdentifier, onActivation);
  };
  Container3.prototype.onDeactivation = function(serviceIdentifier, onDeactivation) {
    this._deactivations.add(serviceIdentifier, onDeactivation);
  };
  Container3.prototype.isBound = function(serviceIdentifier) {
    var bound = this._bindingDictionary.hasKey(serviceIdentifier);
    if (!bound && this.parent) {
      bound = this.parent.isBound(serviceIdentifier);
    }
    return bound;
  };
  Container3.prototype.isCurrentBound = function(serviceIdentifier) {
    return this._bindingDictionary.hasKey(serviceIdentifier);
  };
  Container3.prototype.isBoundNamed = function(serviceIdentifier, named) {
    return this.isBoundTagged(serviceIdentifier, NAMED_TAG, named);
  };
  Container3.prototype.isBoundTagged = function(serviceIdentifier, key, value) {
    var bound = false;
    if (this._bindingDictionary.hasKey(serviceIdentifier)) {
      var bindings = this._bindingDictionary.get(serviceIdentifier);
      var request_1 = createMockRequest(this, serviceIdentifier, key, value);
      bound = bindings.some(function(b) {
        return b.constraint(request_1);
      });
    }
    if (!bound && this.parent) {
      bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
    }
    return bound;
  };
  Container3.prototype.snapshot = function() {
    this._snapshots.push(ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware, this._activations.clone(), this._deactivations.clone(), this._moduleActivationStore.clone()));
  };
  Container3.prototype.restore = function() {
    var snapshot = this._snapshots.pop();
    if (snapshot === void 0) {
      throw new Error(NO_MORE_SNAPSHOTS_AVAILABLE);
    }
    this._bindingDictionary = snapshot.bindings;
    this._activations = snapshot.activations;
    this._deactivations = snapshot.deactivations;
    this._middleware = snapshot.middleware;
    this._moduleActivationStore = snapshot.moduleActivationStore;
  };
  Container3.prototype.createChild = function(containerOptions) {
    var child = new Container3(containerOptions || this.options);
    child.parent = this;
    return child;
  };
  Container3.prototype.applyMiddleware = function() {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      middlewares[_i] = arguments[_i];
    }
    var initial = this._middleware ? this._middleware : this._planAndResolve();
    this._middleware = middlewares.reduce(function(prev, curr) {
      return curr(prev);
    }, initial);
  };
  Container3.prototype.applyCustomMetadataReader = function(metadataReader) {
    this._metadataReader = metadataReader;
  };
  Container3.prototype.get = function(serviceIdentifier) {
    var getArgs = this._getNotAllArgs(serviceIdentifier, false);
    return this._getButThrowIfAsync(getArgs);
  };
  Container3.prototype.getAsync = function(serviceIdentifier) {
    return __awaiter4(this, void 0, void 0, function() {
      var getArgs;
      return __generator4(this, function(_a) {
        getArgs = this._getNotAllArgs(serviceIdentifier, false);
        return [2, this._get(getArgs)];
      });
    });
  };
  Container3.prototype.getTagged = function(serviceIdentifier, key, value) {
    var getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
    return this._getButThrowIfAsync(getArgs);
  };
  Container3.prototype.getTaggedAsync = function(serviceIdentifier, key, value) {
    return __awaiter4(this, void 0, void 0, function() {
      var getArgs;
      return __generator4(this, function(_a) {
        getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
        return [2, this._get(getArgs)];
      });
    });
  };
  Container3.prototype.getNamed = function(serviceIdentifier, named) {
    return this.getTagged(serviceIdentifier, NAMED_TAG, named);
  };
  Container3.prototype.getNamedAsync = function(serviceIdentifier, named) {
    return this.getTaggedAsync(serviceIdentifier, NAMED_TAG, named);
  };
  Container3.prototype.getAll = function(serviceIdentifier) {
    var getArgs = this._getAllArgs(serviceIdentifier);
    return this._getButThrowIfAsync(getArgs);
  };
  Container3.prototype.getAllAsync = function(serviceIdentifier) {
    var getArgs = this._getAllArgs(serviceIdentifier);
    return this._getAll(getArgs);
  };
  Container3.prototype.getAllTagged = function(serviceIdentifier, key, value) {
    var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
    return this._getButThrowIfAsync(getArgs);
  };
  Container3.prototype.getAllTaggedAsync = function(serviceIdentifier, key, value) {
    var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
    return this._getAll(getArgs);
  };
  Container3.prototype.getAllNamed = function(serviceIdentifier, named) {
    return this.getAllTagged(serviceIdentifier, NAMED_TAG, named);
  };
  Container3.prototype.getAllNamedAsync = function(serviceIdentifier, named) {
    return this.getAllTaggedAsync(serviceIdentifier, NAMED_TAG, named);
  };
  Container3.prototype.resolve = function(constructorFunction) {
    var isBound = this.isBound(constructorFunction);
    if (!isBound) {
      this.bind(constructorFunction).toSelf();
    }
    var resolved = this.get(constructorFunction);
    if (!isBound) {
      this.unbind(constructorFunction);
    }
    return resolved;
  };
  Container3.prototype._preDestroy = function(constructor, instance) {
    var _a, _b;
    if (Reflect.hasMetadata(PRE_DESTROY, constructor)) {
      var data = Reflect.getMetadata(PRE_DESTROY, constructor);
      return (_b = (_a = instance)[data.value]) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
  };
  Container3.prototype._removeModuleHandlers = function(moduleId) {
    var moduleActivationsHandlers = this._moduleActivationStore.remove(moduleId);
    this._activations.removeIntersection(moduleActivationsHandlers.onActivations);
    this._deactivations.removeIntersection(moduleActivationsHandlers.onDeactivations);
  };
  Container3.prototype._removeModuleBindings = function(moduleId) {
    return this._bindingDictionary.removeByCondition(function(binding) {
      return binding.moduleId === moduleId;
    });
  };
  Container3.prototype._deactivate = function(binding, instance) {
    var _this = this;
    var constructor = Object.getPrototypeOf(instance).constructor;
    try {
      if (this._deactivations.hasKey(binding.serviceIdentifier)) {
        var result = this._deactivateContainer(instance, this._deactivations.get(binding.serviceIdentifier).values());
        if (isPromise(result)) {
          return this._handleDeactivationError(result.then(function() {
            return _this._propagateContainerDeactivationThenBindingAndPreDestroyAsync(binding, instance, constructor);
          }), constructor);
        }
      }
      var propagateDeactivationResult = this._propagateContainerDeactivationThenBindingAndPreDestroy(binding, instance, constructor);
      if (isPromise(propagateDeactivationResult)) {
        return this._handleDeactivationError(propagateDeactivationResult, constructor);
      }
    } catch (ex) {
      if (ex instanceof Error) {
        throw new Error(ON_DEACTIVATION_ERROR(constructor.name, ex.message));
      }
    }
  };
  Container3.prototype._handleDeactivationError = function(asyncResult, constructor) {
    return __awaiter4(this, void 0, void 0, function() {
      var ex_1;
      return __generator4(this, function(_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, asyncResult];
          case 1:
            _a.sent();
            return [3, 3];
          case 2:
            ex_1 = _a.sent();
            if (ex_1 instanceof Error) {
              throw new Error(ON_DEACTIVATION_ERROR(constructor.name, ex_1.message));
            }
            return [3, 3];
          case 3:
            return [2];
        }
      });
    });
  };
  Container3.prototype._deactivateContainer = function(instance, deactivationsIterator) {
    var _this = this;
    var deactivation = deactivationsIterator.next();
    while (deactivation.value) {
      var result = deactivation.value(instance);
      if (isPromise(result)) {
        return result.then(function() {
          return _this._deactivateContainerAsync(instance, deactivationsIterator);
        });
      }
      deactivation = deactivationsIterator.next();
    }
  };
  Container3.prototype._deactivateContainerAsync = function(instance, deactivationsIterator) {
    return __awaiter4(this, void 0, void 0, function() {
      var deactivation;
      return __generator4(this, function(_a) {
        switch (_a.label) {
          case 0:
            deactivation = deactivationsIterator.next();
            _a.label = 1;
          case 1:
            if (!deactivation.value) return [3, 3];
            return [4, deactivation.value(instance)];
          case 2:
            _a.sent();
            deactivation = deactivationsIterator.next();
            return [3, 1];
          case 3:
            return [2];
        }
      });
    });
  };
  Container3.prototype._getContainerModuleHelpersFactory = function() {
    var _this = this;
    var setModuleId = function(bindingToSyntax, moduleId) {
      bindingToSyntax._binding.moduleId = moduleId;
    };
    var getBindFunction = function(moduleId) {
      return function(serviceIdentifier) {
        var bindingToSyntax = _this.bind(serviceIdentifier);
        setModuleId(bindingToSyntax, moduleId);
        return bindingToSyntax;
      };
    };
    var getUnbindFunction = function() {
      return function(serviceIdentifier) {
        return _this.unbind(serviceIdentifier);
      };
    };
    var getUnbindAsyncFunction = function() {
      return function(serviceIdentifier) {
        return _this.unbindAsync(serviceIdentifier);
      };
    };
    var getIsboundFunction = function() {
      return function(serviceIdentifier) {
        return _this.isBound(serviceIdentifier);
      };
    };
    var getRebindFunction = function(moduleId) {
      return function(serviceIdentifier) {
        var bindingToSyntax = _this.rebind(serviceIdentifier);
        setModuleId(bindingToSyntax, moduleId);
        return bindingToSyntax;
      };
    };
    var getOnActivationFunction = function(moduleId) {
      return function(serviceIdentifier, onActivation) {
        _this._moduleActivationStore.addActivation(moduleId, serviceIdentifier, onActivation);
        _this.onActivation(serviceIdentifier, onActivation);
      };
    };
    var getOnDeactivationFunction = function(moduleId) {
      return function(serviceIdentifier, onDeactivation) {
        _this._moduleActivationStore.addDeactivation(moduleId, serviceIdentifier, onDeactivation);
        _this.onDeactivation(serviceIdentifier, onDeactivation);
      };
    };
    return function(mId) {
      return {
        bindFunction: getBindFunction(mId),
        isboundFunction: getIsboundFunction(),
        onActivationFunction: getOnActivationFunction(mId),
        onDeactivationFunction: getOnDeactivationFunction(mId),
        rebindFunction: getRebindFunction(mId),
        unbindFunction: getUnbindFunction(),
        unbindAsyncFunction: getUnbindAsyncFunction()
      };
    };
  };
  Container3.prototype._getAll = function(getArgs) {
    return Promise.all(this._get(getArgs));
  };
  Container3.prototype._get = function(getArgs) {
    var planAndResolveArgs = __assign2(__assign2({}, getArgs), { contextInterceptor: function(context) {
      return context;
    }, targetType: TargetTypeEnum.Variable });
    if (this._middleware) {
      var middlewareResult = this._middleware(planAndResolveArgs);
      if (middlewareResult === void 0 || middlewareResult === null) {
        throw new Error(INVALID_MIDDLEWARE_RETURN);
      }
      return middlewareResult;
    }
    return this._planAndResolve()(planAndResolveArgs);
  };
  Container3.prototype._getButThrowIfAsync = function(getArgs) {
    var result = this._get(getArgs);
    if (isPromiseOrContainsPromise(result)) {
      throw new Error(LAZY_IN_SYNC(getArgs.serviceIdentifier));
    }
    return result;
  };
  Container3.prototype._getAllArgs = function(serviceIdentifier) {
    var getAllArgs = {
      avoidConstraints: true,
      isMultiInject: true,
      serviceIdentifier
    };
    return getAllArgs;
  };
  Container3.prototype._getNotAllArgs = function(serviceIdentifier, isMultiInject, key, value) {
    var getNotAllArgs = {
      avoidConstraints: false,
      isMultiInject,
      serviceIdentifier,
      key,
      value
    };
    return getNotAllArgs;
  };
  Container3.prototype._planAndResolve = function() {
    var _this = this;
    return function(args) {
      var context = plan(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
      context = args.contextInterceptor(context);
      var result = resolve(context);
      return result;
    };
  };
  Container3.prototype._deactivateIfSingleton = function(binding) {
    var _this = this;
    if (!binding.activated) {
      return;
    }
    if (isPromise(binding.cache)) {
      return binding.cache.then(function(resolved) {
        return _this._deactivate(binding, resolved);
      });
    }
    return this._deactivate(binding, binding.cache);
  };
  Container3.prototype._deactivateSingletons = function(bindings) {
    for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
      var binding = bindings_1[_i];
      var result = this._deactivateIfSingleton(binding);
      if (isPromise(result)) {
        throw new Error(ASYNC_UNBIND_REQUIRED);
      }
    }
  };
  Container3.prototype._deactivateSingletonsAsync = function(bindings) {
    return __awaiter4(this, void 0, void 0, function() {
      var _this = this;
      return __generator4(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, Promise.all(bindings.map(function(b) {
              return _this._deactivateIfSingleton(b);
            }))];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  Container3.prototype._propagateContainerDeactivationThenBindingAndPreDestroy = function(binding, instance, constructor) {
    if (this.parent) {
      return this._deactivate.bind(this.parent)(binding, instance);
    } else {
      return this._bindingDeactivationAndPreDestroy(binding, instance, constructor);
    }
  };
  Container3.prototype._propagateContainerDeactivationThenBindingAndPreDestroyAsync = function(binding, instance, constructor) {
    return __awaiter4(this, void 0, void 0, function() {
      return __generator4(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!this.parent) return [3, 2];
            return [4, this._deactivate.bind(this.parent)(binding, instance)];
          case 1:
            _a.sent();
            return [3, 4];
          case 2:
            return [4, this._bindingDeactivationAndPreDestroyAsync(binding, instance, constructor)];
          case 3:
            _a.sent();
            _a.label = 4;
          case 4:
            return [2];
        }
      });
    });
  };
  Container3.prototype._removeServiceFromDictionary = function(serviceIdentifier) {
    try {
      this._bindingDictionary.remove(serviceIdentifier);
    } catch (e) {
      throw new Error(CANNOT_UNBIND + " " + getServiceIdentifierAsString(serviceIdentifier));
    }
  };
  Container3.prototype._bindingDeactivationAndPreDestroy = function(binding, instance, constructor) {
    var _this = this;
    if (typeof binding.onDeactivation === "function") {
      var result = binding.onDeactivation(instance);
      if (isPromise(result)) {
        return result.then(function() {
          return _this._preDestroy(constructor, instance);
        });
      }
    }
    return this._preDestroy(constructor, instance);
  };
  Container3.prototype._bindingDeactivationAndPreDestroyAsync = function(binding, instance, constructor) {
    return __awaiter4(this, void 0, void 0, function() {
      return __generator4(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!(typeof binding.onDeactivation === "function")) return [3, 2];
            return [4, binding.onDeactivation(instance)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            return [4, this._preDestroy(constructor, instance)];
          case 3:
            _a.sent();
            return [2];
        }
      });
    });
  };
  return Container3;
}();

// ../../../node_modules/inversify/es/annotation/injectable.js
function injectable() {
  return function(target) {
    if (Reflect.hasOwnMetadata(PARAM_TYPES, target)) {
      throw new Error(DUPLICATED_INJECTABLE_DECORATOR);
    }
    var types = Reflect.getMetadata(DESIGN_PARAM_TYPES, target) || [];
    Reflect.defineMetadata(PARAM_TYPES, types, target);
    return target;
  };
}
var Container2 = class _Container {
  /**
   * Create a new container instance.
   */
  constructor() {
    /**
     * The container's registered service providers.
     * @private
     */
    this.serviceProviders = [];
    /**
     * The container's aliases.
     * @private
     */
    this.aliases = /* @__PURE__ */ new Map();
    /**
     * The container's contextual bindings.
     * @private
     */
    this.contextualBindings = /* @__PURE__ */ new Map();
    /**
     * Unbind a tagged binding.
     *
     * @param serviceIdentifier - The service identifier
     * @param key - The tag key
     * @param value - The tag value
     */
    this.unbindTagged = (serviceIdentifier, key, value) => {
      let bindings = this.inversifyContainer["_bindingDictionary"].get(serviceIdentifier);
      for (let binding of bindings) {
        const metadata = binding.constraint.metaData;
        if (metadata && metadata.key === key && metadata.value === value) {
          this.inversifyContainer["_deactivateSingletons"](binding);
          let newBindings = bindings.filter((binding2) => {
            return !(binding2.constraint.metaData.key === key && binding2.constraint.metaData.value === value);
          });
          this.inversifyContainer["_bindingDictionary"]["_map"].set(serviceIdentifier, newBindings);
        }
      }
    };
    this.inversifyContainer = new Container();
  }
  /**
   * Create a new container instance.
   *
   * @returns A new container instance
   */
  static make() {
    return new _Container();
  }
  /**
   * Get the underlying Inversify container.
   *
   * @returns The Inversify container
   */
  getInversifyContainer() {
    return this.inversifyContainer;
  }
  /**
   * Determine if the given abstract type has been bound.
   *
   * @param abstract - The abstract type to check
   * @returns True if the abstract type has been bound, false otherwise
   */
  has(abstract) {
    const resolvedAbstract = this.getAlias(abstract);
    return this.inversifyContainer.isBound(resolvedAbstract);
  }
  /**
   * Load container modules.
   *
   * @param modules - The container modules to load
   * @returns The container instance
   */
  load(...modules) {
    this.inversifyContainer.load(...modules);
    return this;
  }
  /**
   * Load container modules asynchronously.
   *
   * @param modules - The container modules to load
   * @returns A promise that resolves to the container instance
   */
  async loadAsync(...modules) {
    await this.inversifyContainer.loadAsync(...modules);
    return this;
  }
  /**
   * Unload container modules.
   *
   * @param modules - The container modules to unload
   * @returns The container instance
   */
  unload(...modules) {
    this.inversifyContainer.unload(...modules);
    return this;
  }
  /**
   * Unload container modules asynchronously.
   *
   * @param modules - The container modules to unload
   * @returns A promise that resolves to the container instance
   */
  async unloadAsync(...modules) {
    await this.inversifyContainer.unloadAsync(...modules);
    return this;
  }
  /**
   * Register a binding with the container.
   *
   * @param abstract - The abstract type to bind
   * @param concrete - The concrete implementation
   * @param shared - Whether the binding should be shared
   * @returns The container instance or binding syntax
   */
  bind(abstract, concrete, shared = false) {
    if (this.inversifyContainer.isBound(abstract)) {
      this.inversifyContainer.unbind(abstract);
    }
    if (typeof concrete === "function") {
      if (shared) {
        this.inversifyContainer.bind(abstract).toDynamicValue((context) => {
          return concrete(this);
        }).inSingletonScope();
      } else {
        this.inversifyContainer.bind(abstract).toDynamicValue((context) => {
          return concrete(this);
        });
      }
    } else if (concrete !== void 0) {
      if (shared) {
        this.inversifyContainer.bind(abstract).toConstantValue(concrete);
      } else {
        this.inversifyContainer.bind(abstract).toDynamicValue(() => concrete);
      }
    } else {
      return this.inversifyContainer.bind(abstract);
    }
    return this;
  }
  /**
   * Rebind a service identifier.
   *
   * @param serviceIdentifier - The service identifier to rebind
   * @returns The binding syntax
   */
  rebind(serviceIdentifier) {
    return this.inversifyContainer.rebind(serviceIdentifier);
  }
  /**
   * Rebind a service identifier asynchronously.
   *
   * @param serviceIdentifier - The service identifier to rebind
   * @returns A promise that resolves to the binding syntax
   */
  rebindAsync(serviceIdentifier) {
    return this.inversifyContainer.rebindAsync(serviceIdentifier);
  }
  /**
   * Unbind a service identifier.
   *
   * @param serviceIdentifier - The service identifier to unbind
   */
  unbind(serviceIdentifier) {
    this.inversifyContainer.unbind(serviceIdentifier);
  }
  /**
   * Unbind a service identifier asynchronously.
   *
   * @param serviceIdentifier - The service identifier to unbind
   * @returns A promise that resolves when the unbinding is complete
   */
  unbindAsync(serviceIdentifier) {
    return this.inversifyContainer.unbindAsync(serviceIdentifier);
  }
  /**
   * Unbind all bindings.
   */
  unbindAll() {
    this.inversifyContainer.unbindAll();
  }
  /**
   * Unbind all bindings asynchronously.
   *
   * @returns A promise that resolves when all unbindings are complete
   */
  unbindAllAsync() {
    return this.inversifyContainer.unbindAllAsync();
  }
  /**
   * Register a binding with a tag.
   *
   * @param abstract - The abstract type to bind
   * @param concrete - The concrete implementation
   * @param tag - The tag name
   * @param value - The tag value
   * @param shared - Whether the binding should be shared
   * @returns The container instance
   */
  bindTagged(abstract, concrete, tag, value, shared = false) {
    if (this.inversifyContainer.isBoundTagged(abstract, tag, value)) {
      this.unbindTagged(abstract, tag, value);
    }
    let binding;
    if (typeof concrete === "function") {
      binding = this.inversifyContainer.bind(abstract).toDynamicValue((context) => {
        return concrete(this);
      });
      if (shared) {
        binding.inSingletonScope();
      }
    } else {
      binding = this.inversifyContainer.bind(abstract).toConstantValue(concrete);
    }
    binding.whenTargetTagged(tag, value);
    return this;
  }
  /**
   * Register a shared binding in the container.
   *
   * @param abstract - The abstract type to bind
   * @param concrete - The concrete implementation
   * @returns The container instance
   */
  singleton(abstract, concrete) {
    return this.bind(abstract, concrete, true);
  }
  /**
   * Register an existing instance as shared in the container.
   *
   * @param abstract - The abstract type to bind
   * @param instance - The instance to register
   * @returns The container instance
   */
  instance(abstract, instance) {
    if (this.inversifyContainer.isBound(abstract)) {
      this.inversifyContainer.unbind(abstract);
    }
    this.inversifyContainer.bind(abstract).toConstantValue(instance);
    return this;
  }
  /**
   * Alias a type to a different name.
   *
   * @param abstract - The abstract type to alias
   * @param alias - The alias identifier
   * @returns The container instance
   */
  alias(abstract, alias) {
    this.aliases.set(alias, abstract);
    return this;
  }
  /**
   * Apply middleware to the container.
   *
   * @param middlewares - The middleware to apply
   * @returns The container instance
   */
  applyMiddleware(...middlewares) {
    this.inversifyContainer.applyMiddleware(...middlewares);
    return this;
  }
  /**
   * Apply a custom metadata reader to the container.
   *
   * @param metadataReader - The metadata reader to apply
   * @returns The container instance
   */
  applyCustomMetadataReader(metadataReader) {
    this.inversifyContainer.applyCustomMetadataReader(metadataReader);
    return this;
  }
  /**
   * Define a contextual binding.
   *
   * @param concrete - The concrete implementation that needs a dependency
   * @returns A builder for defining the contextual binding
   */
  when(concrete) {
    return { needs: (abstract) => ({ give: (implementation) => this }) };
  }
  /**
   * Register a contextual binding in the container.
   *
   * @param concrete - The concrete implementation that needs a dependency
   * @param abstract - The abstract type that the concrete implementation needs
   * @param tag - The tag for the binding
   * @returns The container instance
   * @internal
   */
  registerContextualBinding(concrete, abstract, tag) {
    if (!this.contextualBindings.has(concrete)) {
      this.contextualBindings.set(concrete, /* @__PURE__ */ new Map());
    }
    this.contextualBindings.get(concrete).set(abstract, tag);
    return this;
  }
  /**
   * Get the tag for a contextual binding.
   *
   * @param concrete - The concrete implementation that needs a dependency
   * @param abstract - The abstract type that the concrete implementation needs
   * @returns The tag for the binding, or undefined if not found
   * @private
   */
  getContextualTag(concrete, abstract) {
    var _a;
    return (_a = this.contextualBindings.get(concrete)) == null ? void 0 : _a.get(abstract);
  }
  /**
   * Register an activation handler for a service.
   *
   * @param serviceIdentifier - The service identifier
   * @param onActivation - The activation handler
   */
  onActivation(serviceIdentifier, onActivation) {
    this.inversifyContainer.onActivation(serviceIdentifier, onActivation);
  }
  /**
   * Register a deactivation handler for a service.
   *
   * @param serviceIdentifier - The service identifier
   * @param onDeactivation - The deactivation handler
   */
  onDeactivation(serviceIdentifier, onDeactivation) {
    this.inversifyContainer.onDeactivation(serviceIdentifier, onDeactivation);
  }
  /**
   * Check if a service identifier is bound.
   *
   * @param serviceIdentifier - The service identifier to check
   * @returns True if the service identifier is bound, false otherwise
   */
  isBound(serviceIdentifier) {
    return this.inversifyContainer.isBound(serviceIdentifier);
  }
  /**
   * Check if a service identifier is bound in the current container (not in ancestors).
   *
   * @param serviceIdentifier - The service identifier to check
   * @returns True if the service identifier is bound in the current container, false otherwise
   */
  isCurrentBound(serviceIdentifier) {
    return this.inversifyContainer.isCurrentBound(serviceIdentifier);
  }
  /**
   * Check if a named binding is bound.
   *
   * @param serviceIdentifier - The service identifier to check
   * @param named - The name to check
   * @returns True if the named binding is bound, false otherwise
   */
  isBoundNamed(serviceIdentifier, named) {
    return this.inversifyContainer.isBoundNamed(serviceIdentifier, named);
  }
  /**
   * Check if a tagged binding is bound.
   *
   * @param serviceIdentifier - The service identifier to check
   * @param key - The tag key
   * @param value - The tag value
   * @returns True if the tagged binding is bound, false otherwise
   */
  isBoundTagged(serviceIdentifier, key, value) {
    return this.inversifyContainer.isBoundTagged(serviceIdentifier, key, value);
  }
  /**
   * Create a snapshot of the container's state.
   */
  snapshot() {
    this.inversifyContainer.snapshot();
  }
  /**
   * Restore the container's state from a snapshot.
   */
  restore() {
    this.inversifyContainer.restore();
  }
  /**
   * Create a child container.
   *
   * @param containerOptions - The container options
   * @returns A new child container
   */
  createChild(containerOptions) {
    const childInversifyContainer = this.inversifyContainer.createChild(containerOptions);
    const childContainer = _Container.make();
    Object.defineProperty(childContainer, "inversifyContainer", {
      value: childInversifyContainer,
      writable: false,
      configurable: true
    });
    return childContainer;
  }
  /**
   * Resolve the given type from the container.
   *
   * @param abstract - The abstract type to resolve
   * @param parameters - Optional parameters to pass to the constructor (not used with Inversify)
   * @returns The resolved instance
   * @template T - The type of the resolved instance
   */
  make(abstract, parameters = []) {
    const resolvedAbstract = this.getAlias(abstract);
    if (!this.inversifyContainer.isBound(resolvedAbstract)) {
      throw new Error(`Binding not found for ${String(abstract)}`);
    }
    const callerInfo = this.getCallerInfo();
    if (callerInfo) {
      const tag = this.getContextualTag(callerInfo, resolvedAbstract);
      if (tag) {
        return this.inversifyContainer.getTagged(resolvedAbstract, tag, true);
      }
    }
    return this.inversifyContainer.get(resolvedAbstract);
  }
  /**
   * Resolve the given type from the container asynchronously.
   *
   * @param abstract - The abstract type to resolve
   * @returns A promise that resolves to the resolved instance
   * @template T - The type of the resolved instance
   */
  async makeAsync(abstract) {
    const resolvedAbstract = this.getAlias(abstract);
    if (!this.inversifyContainer.isBound(resolvedAbstract)) {
      throw new Error(`Binding not found for ${String(abstract)}`);
    }
    const callerInfo = this.getCallerInfo();
    if (callerInfo) {
      const tag = this.getContextualTag(callerInfo, resolvedAbstract);
      if (tag) {
        return this.inversifyContainer.getTaggedAsync(resolvedAbstract, tag, true);
      }
    }
    return this.inversifyContainer.getAsync(resolvedAbstract);
  }
  /**
   * Get information about the caller.
   *
   * @returns The caller class name or undefined
   * @private
   */
  getCallerInfo() {
    try {
      const stack = new Error().stack || "";
      const stackLines = stack.split("\n");
      for (let i = 3; i < stackLines.length; i++) {
        const line = stackLines[i];
        const match = line.match(/at\s+([\w.]+)/);
        if (match && match[1]) {
          return match[1].split(".")[0];
        }
      }
    } catch (e) {
    }
    return void 0;
  }
  /**
   * Resolve a tagged binding from the container.
   *
   * @param abstract - The abstract type to resolve
   * @param tag - The tag name
   * @param value - The tag value
   * @returns The resolved instance
   * @template T - The type of the resolved instance
   */
  makeTagged(abstract, tag, value) {
    const resolvedAbstract = this.getAlias(abstract);
    if (!this.inversifyContainer.isBoundTagged(resolvedAbstract, tag, value)) {
      throw new Error(`Tagged binding not found for ${String(abstract)} with tag ${tag}=${value}`);
    }
    return this.inversifyContainer.getTagged(resolvedAbstract, tag, value);
  }
  /**
   * Resolve a tagged binding from the container asynchronously.
   *
   * @param abstract - The abstract type to resolve
   * @param tag - The tag name
   * @param value - The tag value
   * @returns A promise that resolves to the resolved instance
   * @template T - The type of the resolved instance
   */
  async makeTaggedAsync(abstract, tag, value) {
    const resolvedAbstract = this.getAlias(abstract);
    if (!this.inversifyContainer.isBoundTagged(resolvedAbstract, tag, value)) {
      throw new Error(`Tagged binding not found for ${String(abstract)} with tag ${tag}=${value}`);
    }
    return this.inversifyContainer.getTaggedAsync(resolvedAbstract, tag, value);
  }
  /**
   * Resolve a named binding from the container.
   *
   * @param abstract - The abstract type to resolve
   * @param named - The name
   * @returns The resolved instance
   * @template T - The type of the resolved instance
   */
  makeNamed(abstract, named) {
    const resolvedAbstract = this.getAlias(abstract);
    if (!this.inversifyContainer.isBoundNamed(resolvedAbstract, named)) {
      throw new Error(`Named binding not found for ${String(abstract)} with name ${String(named)}`);
    }
    return this.inversifyContainer.getNamed(resolvedAbstract, named);
  }
  /**
   * Resolve a named binding from the container asynchronously.
   *
   * @param abstract - The abstract type to resolve
   * @param named - The name
   * @returns A promise that resolves to the resolved instance
   * @template T - The type of the resolved instance
   */
  async makeNamedAsync(abstract, named) {
    const resolvedAbstract = this.getAlias(abstract);
    if (!this.inversifyContainer.isBoundNamed(resolvedAbstract, named)) {
      throw new Error(`Named binding not found for ${String(abstract)} with name ${String(named)}`);
    }
    return this.inversifyContainer.getNamedAsync(resolvedAbstract, named);
  }
  /**
   * Resolve all bindings for a service identifier.
   *
   * @param abstract - The abstract type to resolve
   * @returns All resolved instances
   * @template T - The type of the resolved instances
   */
  makeAll(abstract) {
    const resolvedAbstract = this.getAlias(abstract);
    return this.inversifyContainer.getAll(resolvedAbstract);
  }
  /**
   * Resolve all bindings for a service identifier asynchronously.
   *
   * @param abstract - The abstract type to resolve
   * @returns A promise that resolves to all resolved instances
   * @template T - The type of the resolved instances
   */
  async makeAllAsync(abstract) {
    const resolvedAbstract = this.getAlias(abstract);
    return this.inversifyContainer.getAllAsync(resolvedAbstract);
  }
  /**
   * Resolve all tagged bindings for a service identifier.
   *
   * @param abstract - The abstract type to resolve
   * @param tag - The tag name
   * @param value - The tag value
   * @returns All resolved instances
   * @template T - The type of the resolved instances
   */
  makeAllTagged(abstract, tag, value) {
    const resolvedAbstract = this.getAlias(abstract);
    return this.inversifyContainer.getAllTagged(resolvedAbstract, tag, value);
  }
  /**
   * Resolve all tagged bindings for a service identifier asynchronously.
   *
   * @param abstract - The abstract type to resolve
   * @param tag - The tag name
   * @param value - The tag value
   * @returns A promise that resolves to all resolved instances
   * @template T - The type of the resolved instances
   */
  async makeAllTaggedAsync(abstract, tag, value) {
    const resolvedAbstract = this.getAlias(abstract);
    return this.inversifyContainer.getAllTaggedAsync(resolvedAbstract, tag, value);
  }
  /**
   * Resolve all named bindings for a service identifier.
   *
   * @param abstract - The abstract type to resolve
   * @param named - The name
   * @returns All resolved instances
   * @template T - The type of the resolved instances
   */
  makeAllNamed(abstract, named) {
    const resolvedAbstract = this.getAlias(abstract);
    return this.inversifyContainer.getAllNamed(resolvedAbstract, named);
  }
  /**
   * Resolve all named bindings for a service identifier asynchronously.
   *
   * @param abstract - The abstract type to resolve
   * @param named - The name
   * @returns A promise that resolves to all resolved instances
   * @template T - The type of the resolved instances
   */
  async makeAllNamedAsync(abstract, named) {
    const resolvedAbstract = this.getAlias(abstract);
    return this.inversifyContainer.getAllNamedAsync(resolvedAbstract, named);
  }
  /**
   * Resolve a class constructor.
   *
   * @param constructorFunction - The constructor function to resolve
   * @returns The resolved instance
   * @template T - The type of the resolved instance
   */
  resolve(constructorFunction) {
    return this.inversifyContainer.resolve(constructorFunction);
  }
  /**
   * Get the alias for an abstract if it exists.
   *
   * @param abstract - The abstract type
   * @returns The alias or the original abstract
   * @private
   */
  getAlias(abstract) {
    return this.aliases.has(abstract) ? this.aliases.get(abstract) : abstract;
  }
  /**
   * Register a service provider with the container.
   *
   * @param provider - The service provider to register
   * @returns The container instance
   */
  register(provider) {
    if (this.serviceProviders.includes(provider)) {
      return this;
    }
    this.serviceProviders.push(provider);
    provider.register();
    return this;
  }
  /**
   * Boot the registered service providers.
   *
   * @returns The container instance
   */
  boot() {
    for (const provider of this.serviceProviders) {
      if (typeof provider.boot === "function") {
        provider.boot();
      }
    }
    return this;
  }
  /**
   * Call the given callback with the container instance.
   *
   * @param callback - The callback to call
   * @returns The result of the callback
   * @template T - The return type of the callback
   */
  call(callback) {
    return callback(this);
  }
};

// src/service-provider.ts
var ServiceProvider = class _ServiceProvider {
  /**
   * Create a new service provider instance.
   *
   * @param app - The application container instance
   */
  constructor(app2) {
    this.app = app2;
  }
  /**
   * Static factory method to create a new instance of the service provider.
   *
   * @param app - The application container instance
   * @param args - Additional arguments to be passed to the subclass constructor
   * @returns A new instance of the subclass
   */
  static make(app2, ...args) {
    if (this === _ServiceProvider) {
      throw new Error("Cannot instantiate an abstract class directly.");
    }
    return new this(app2, ...args);
  }
};
function detectEnvironment() {
  if (typeof process !== "undefined" && process.versions && process.versions.node) {
    return tsTypes.ConfigEnvironment.NODE;
  }
  if (typeof process !== "undefined" && process.env && (process.env.__NEXT_RUNTIME || process.env.NEXT_RUNTIME || process.env.NEXT_PUBLIC_RUNTIME)) {
    return tsTypes.ConfigEnvironment.NEXTJS;
  }
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return tsTypes.ConfigEnvironment.REACT_NATIVE;
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return tsTypes.ConfigEnvironment.BROWSER;
  }
  return tsTypes.ConfigEnvironment.UNKNOWN;
}
function isNode() {
  return detectEnvironment() === tsTypes.ConfigEnvironment.NODE;
}
function isBrowser() {
  return detectEnvironment() === tsTypes.ConfigEnvironment.BROWSER;
}
function isNextJs() {
  return detectEnvironment() === tsTypes.ConfigEnvironment.NEXTJS;
}
function isReactNative() {
  return detectEnvironment() === tsTypes.ConfigEnvironment.REACT_NATIVE;
}
function getNodeEnv() {
  if (typeof process !== "undefined" && process.env) {
    return process.env.NODE_ENV;
  }
  return void 0;
}
function isDevelopment() {
  const env = getNodeEnv();
  return env === "development" || env === void 0;
}
function isProduction() {
  return getNodeEnv() === "production";
}
function isTest() {
  return getNodeEnv() === "test";
}

// src/config/cache.ts
var ConfigCache = class _ConfigCache {
  /**
   * Create a new configuration cache
   *
   * @param enabled - Whether the cache is enabled
   * @param maxSize - The maximum number of items to store in the cache
   * @param ttl - The time to live for cache items in milliseconds
   */
  constructor(enabled = true, maxSize = 1e3, ttl = 0) {
    /**
     * The cache storage
     */
    this.cache = /* @__PURE__ */ new Map();
    this.enabled = enabled;
    this.maxSize = maxSize;
    this.ttl = ttl;
  }
  /**
   * Create a new configuration cache
   *
   * @param enabled - Whether the cache is enabled
   * @param maxSize - The maximum number of items to store in the cache
   * @param ttl - The time to live for cache items in milliseconds
   * @returns A new configuration cache
   */
  static make(enabled = true, maxSize = 1e3, ttl = 0) {
    return new _ConfigCache(enabled, maxSize, ttl);
  }
  /**
   * Enable or disable the cache
   *
   * @param enabled - Whether to enable the cache
   */
  setEnabled(enabled) {
    this.enabled = enabled;
  }
  /**
   * Set the maximum cache size
   *
   * @param maxSize - The maximum number of items to store in the cache
   */
  setMaxSize(maxSize) {
    this.maxSize = maxSize;
    this.enforceMaxSize();
  }
  /**
   * Set the time to live for cache items
   *
   * @param ttl - The time to live in milliseconds
   */
  setTtl(ttl) {
    this.ttl = ttl;
  }
  /**
   * Get a value from the cache
   *
   * @param key - The cache key
   * @returns The cached value or undefined if not found
   */
  get(key) {
    if (!this.enabled) {
      return void 0;
    }
    const item = this.cache.get(key);
    if (!item) {
      return void 0;
    }
    if (item.expires && item.expires < Date.now()) {
      this.cache.delete(key);
      return void 0;
    }
    return item.value;
  }
  /**
   * Set a value in the cache
   *
   * @param key - The cache key
   * @param value - The value to cache
   */
  set(key, value) {
    if (!this.enabled) {
      return;
    }
    if (!this.cache.has(key) && this.cache.size >= this.maxSize) {
      this.enforceMaxSize();
    }
    const item = {
      value,
      created: 0
    };
    if (this.ttl > 0) {
      item.expires = Date.now() + this.ttl;
    }
    this.cache.set(key, item);
  }
  /**
   * Delete a value from the cache
   *
   * @param key - The cache key
   */
  delete(key) {
    this.cache.delete(key);
  }
  /**
   * Clear the cache
   */
  clear() {
    this.cache.clear();
  }
  /**
   * Get the number of items in the cache
   *
   * @returns The number of items in the cache
   */
  size() {
    return this.cache.size;
  }
  /**
   * Check if a key exists in the cache
   *
   * @param key - The cache key
   * @returns Whether the key exists in the cache
   */
  has(key) {
    if (!this.enabled) {
      return false;
    }
    const item = this.cache.get(key);
    if (!item) {
      return false;
    }
    if (item.expires && item.expires < Date.now()) {
      this.cache.delete(key);
      return false;
    }
    return true;
  }
  /**
   * Enforce the maximum cache size by removing the oldest items
   * @private
   */
  enforceMaxSize() {
    if (this.cache.size <= this.maxSize) {
      return;
    }
    const itemsToRemove = this.cache.size - this.maxSize;
    const keys = Array.from(this.cache.keys());
    for (let i = 0; i < itemsToRemove; i++) {
      this.cache.delete(keys[i]);
    }
  }
};

// src/config/validator.ts
var ConfigValidationError = class _ConfigValidationError extends Error {
  /**
   * Create a new configuration validation error
   *
   * @param message - The error message
   * @param errors - The validation errors
   */
  constructor(message, errors = []) {
    super(message);
    this.name = "ConfigValidationError";
    this.errors = errors;
  }
  /**
   * Create a new configuration validation error
   *
   * @param message - The error message
   * @param errors - The validation errors
   * @returns A new configuration validation error
   */
  static make(message, errors = []) {
    return new _ConfigValidationError(message, errors);
  }
};
var ConfigValidator = class _ConfigValidator {
  /**
   * Create a new configuration validator
   *
   * @param schemas - The configuration schemas
   * @param autoDetectSchemas - Whether to auto-detect schemas from $schema properties
   */
  constructor(schemas = {}, autoDetectSchemas = true) {
    /**
     * The configuration schemas
     */
    this.schemas = {};
    /**
     * Whether to auto-detect schemas from $schema properties
     */
    this.autoDetectSchemas = true;
    this.schemas = schemas;
    this.autoDetectSchemas = autoDetectSchemas;
  }
  /**
   * Create a new configuration validator
   *
   * @param schemas - The configuration schemas
   * @param autoDetectSchemas - Whether to auto-detect schemas from $schema properties
   * @returns A new configuration validator
   */
  static make(schemas = {}, autoDetectSchemas = true) {
    return new _ConfigValidator(schemas, autoDetectSchemas);
  }
  /**
   * Set the configuration schemas
   *
   * @param schemas - The configuration schemas
   */
  setSchemas(schemas) {
    this.schemas = schemas;
  }
  /**
   * Add a configuration schema
   *
   * @param key - The schema key
   * @param schema - The schema
   */
  addSchema(key, schema) {
    this.schemas[key] = schema;
  }
  /**
   * Enable or disable schema auto-detection
   *
   * @param enable - Whether to enable schema auto-detection
   */
  setAutoDetectSchemas(enable) {
    this.autoDetectSchemas = enable;
  }
  /**
   * Validate a configuration value against its schema
   *
   * @param key - The configuration key
   * @param value - The configuration value
   * @returns Whether the value is valid
   * @throws ConfigValidationError if validation fails
   */
  validate(key, value) {
    let schema = this.schemas[key];
    if (this.autoDetectSchemas && value && typeof value === "object" && value.$schema) {
      try {
        if (typeof value.$schema === "string") {
          if (this.schemas[value.$schema]) {
            schema = this.schemas[value.$schema];
          } else {
            console.warn(`Schema reference '${value.$schema}' not found in registered schemas`);
          }
        } else if (typeof value.$schema === "object") {
          schema = value.$schema;
        }
      } catch (error) {
        console.warn(`Error processing $schema property: ${error}`);
      }
    }
    if (!schema) {
      return true;
    }
    const errors = this.validateAgainstSchema(value, schema, key);
    if (errors.length > 0) {
      throw ConfigValidationError.make(`Configuration validation failed for '${key}'`, errors);
    }
    return true;
  }
  /**
   * Validate a value against a schema
   *
   * @param value - The value to validate
   * @param schema - The schema to validate against
   * @param path - The current path (for error messages)
   * @returns An array of validation errors
   * @private
   */
  validateAgainstSchema(value, schema, path3) {
    const errors = [];
    if (path3.endsWith(".$schema")) {
      return errors;
    }
    if (schema.type && !this.checkType(value, schema.type)) {
      errors.push(`${path3}: Expected type '${schema.type}', got '${typeof value}'`);
    }
    if (schema.required && (value === void 0 || value === null)) {
      errors.push(`${path3}: Required value is missing`);
    }
    if (schema.enum && !schema.enum.includes(value)) {
      errors.push(`${path3}: Value must be one of [${schema.enum.join(", ")}]`);
    }
    if (schema.type === "number" || schema.type === "integer") {
      if (schema.minimum !== void 0 && value < schema.minimum) {
        errors.push(`${path3}: Value must be >= ${schema.minimum}`);
      }
      if (schema.maximum !== void 0 && value > schema.maximum) {
        errors.push(`${path3}: Value must be <= ${schema.maximum}`);
      }
    }
    if (schema.type === "string") {
      if (schema.minLength !== void 0 && value.length < schema.minLength) {
        errors.push(`${path3}: String length must be >= ${schema.minLength}`);
      }
      if (schema.maxLength !== void 0 && value.length > schema.maxLength) {
        errors.push(`${path3}: String length must be <= ${schema.maxLength}`);
      }
      if (schema.pattern && !new RegExp(schema.pattern).test(value)) {
        errors.push(`${path3}: String must match pattern '${schema.pattern}'`);
      }
    }
    if (schema.type === "object" && schema.properties) {
      Object.entries(schema.properties).forEach(([propName, propSchema]) => {
        if (propName === "$schema") {
          return;
        }
        const propPath = `${path3}.${propName}`;
        const propValue = value == null ? void 0 : value[propName];
        if (propSchema.required && (propValue === void 0 || propValue === null)) {
          errors.push(`${propPath}: Required property is missing`);
        }
        if (propValue !== void 0 && propValue !== null) {
          errors.push(...this.validateAgainstSchema(propValue, propSchema, propPath));
        }
      });
    }
    if (schema.type === "array" && schema.items && Array.isArray(value)) {
      value.forEach((item, index) => {
        const itemPath = `${path3}[${index}]`;
        errors.push(...this.validateAgainstSchema(item, schema.items, itemPath));
      });
    }
    return errors;
  }
  /**
   * Check if a value matches a type
   *
   * @param value - The value to check
   * @param type - The expected type
   * @returns Whether the value matches the type
   * @private
   */
  checkType(value, type) {
    switch (type) {
      case "string":
        return typeof value === "string";
      case "number":
        return typeof value === "number" && !isNaN(value);
      case "integer":
        return typeof value === "number" && !isNaN(value) && Number.isInteger(value);
      case "boolean":
        return typeof value === "boolean";
      case "array":
        return Array.isArray(value);
      case "object":
        return typeof value === "object" && value !== null && !Array.isArray(value);
      case "null":
        return value === null;
      default:
        return true;
    }
  }
};

// src/config/repository.ts
exports.ConfigRepository = class ConfigRepository {
  /**
   * Create a new configuration repository.
   *
   * @param options - The configuration repository options
   */
  constructor(options = {}) {
    /**
     * The configuration items.
     * @private
     */
    this.items = {};
    /**
     * The environment variables.
     * @private
     */
    this.env = {};
    /**
     * The environment variable prefix.
     * @private
     */
    this.envPrefix = "APP_";
    /**
     * Whether to validate configuration values.
     * @private
     */
    this.shouldValidate = false;
    this.items = options.items || {};
    this.envPrefix = options.envPrefix || "APP_";
    this.loadEnvironmentVariables();
    this.environment = detectEnvironment();
    this.cache = ConfigCache.make(options.cache !== false);
    this.validator = ConfigValidator.make(options.schemas || {});
    this.shouldValidate = options.validate === true;
  }
  /**
   * Create a new configuration repository.
   *
   * @param options - The configuration repository options
   * @returns A new configuration repository
   */
  static make(options = {}) {
    return new exports.ConfigRepository(options);
  }
  /**
   * Load environment variables.
   * @private
   */
  loadEnvironmentVariables() {
    if (typeof process !== "undefined" && process.env) {
      this.env = Object.fromEntries(
        Object.entries(process.env).filter(([_, value]) => value !== void 0)
      );
    } else {
      this.env = {};
    }
  }
  /**
   * Get the current environment.
   *
   * @returns The current environment
   */
  getEnvironment() {
    return this.environment;
  }
  /**
   * Set the configuration validator schemas.
   *
   * @param schemas - The configuration schemas
   */
  setSchemas(schemas) {
    this.validator.setSchemas(schemas);
  }
  /**
   * Enable or disable validation.
   *
   * @param enable - Whether to enable validation
   */
  setValidation(enable) {
    this.shouldValidate = enable;
  }
  /**
   * Enable or disable caching.
   *
   * @param enable - Whether to enable caching
   */
  setCaching(enable) {
    this.cache.setEnabled(enable);
  }
  /**
   * Clear the configuration cache.
   */
  clearCache() {
    this.cache.clear();
  }
  /**
   * Determine if the given configuration value exists.
   *
   * @param key - The configuration key
   * @returns True if the configuration value exists, false otherwise
   */
  has(key) {
    return this.get(key) !== void 0;
  }
  /**
   * Get the specified configuration value.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The configuration value or the default value
   * @template T - The type of the configuration value
   */
  get(key, defaultValue) {
    const cachedValue = this.cache.get(key);
    if (cachedValue !== void 0) {
      return cachedValue;
    }
    const envKey = `${this.envPrefix}${key.toUpperCase().replace(/\./g, "_")}`;
    if (this.env[envKey] !== void 0) {
      const value = this.parseEnvValue(this.env[envKey]);
      this.cache.set(key, value);
      return value;
    }
    const segments = key.split(".");
    let current = this.items;
    for (const segment of segments) {
      if (current === void 0 || current === null) {
        this.cache.set(key, defaultValue);
        return defaultValue;
      }
      current = current[segment];
    }
    if (this.shouldValidate && current !== void 0) {
      const rootKey = segments[0];
      this.validator.validate(rootKey, this.items[rootKey]);
    }
    const result = current !== void 0 ? current : defaultValue;
    this.cache.set(key, result);
    return result;
  }
  /**
   * Get a string value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The string value or the default value
   */
  getString(key, defaultValue) {
    const value = this.get(key, defaultValue);
    if (value === void 0 || value === null) {
      return defaultValue || "";
    }
    return String(value);
  }
  /**
   * Get a number value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The number value or the default value
   */
  getNumber(key, defaultValue) {
    const value = this.get(key, defaultValue);
    if (value === void 0 || value === null) {
      return defaultValue || 0;
    }
    const num = Number(value);
    return isNaN(num) ? defaultValue || 0 : num;
  }
  /**
   * Get an integer value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The integer value or the default value
   */
  getInt(key, defaultValue) {
    const value = this.getNumber(key, defaultValue);
    return Math.floor(value);
  }
  /**
   * Get a float value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The float value or the default value
   */
  getFloat(key, defaultValue) {
    return this.getNumber(key, defaultValue);
  }
  /**
   * Get a boolean value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The boolean value or the default value
   */
  getBoolean(key, defaultValue) {
    const value = this.get(key, defaultValue);
    if (value === void 0 || value === null) {
      return defaultValue || false;
    }
    if (typeof value === "boolean") {
      return value;
    }
    if (typeof value === "string") {
      return value.toLowerCase() === "true" || value === "1";
    }
    if (typeof value === "number") {
      return value === 1;
    }
    return Boolean(value);
  }
  /**
   * Get an array value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The array value or the default value
   * @template T - The type of the array elements
   */
  getArray(key, defaultValue) {
    const value = this.get(key, defaultValue);
    if (value === void 0 || value === null) {
      return defaultValue || [];
    }
    if (Array.isArray(value)) {
      return value;
    }
    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [value];
      } catch (e) {
        return [value];
      }
    }
    return [value];
  }
  /**
   * Get an object value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The object value or the default value
   * @template T - The type of the object
   */
  getObject(key, defaultValue) {
    const value = this.get(key, defaultValue);
    if (value === void 0 || value === null) {
      return defaultValue || {};
    }
    if (typeof value === "object" && !Array.isArray(value)) {
      return value;
    }
    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        return typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
      } catch (e) {
        return {};
      }
    }
    return {};
  }
  /**
   * Parse an environment variable value.
   *
   * @param value - The environment variable value
   * @returns The parsed value
   * @private
   */
  parseEnvValue(value) {
    if (value.toLowerCase() === "true") return true;
    if (value.toLowerCase() === "false") return false;
    if (/^-?\d+$/.test(value)) return Number.parseInt(value, 10);
    if (/^-?\d+\.\d+$/.test(value)) return Number.parseFloat(value);
    if (value.startsWith("{") && value.endsWith("}") || value.startsWith("[") && value.endsWith("]")) {
      try {
        return JSON.parse(value);
      } catch (e) {
      }
    }
    return value;
  }
  /**
   * Set a given configuration value.
   *
   * @param key - The configuration key
   * @param value - The configuration value
   */
  set(key, value) {
    const segments = key.split(".");
    let current = this.items;
    for (let i = 0; i < segments.length - 1; i++) {
      const segment = segments[i];
      if (current[segment] === void 0) {
        current[segment] = {};
      }
      current = current[segment];
    }
    current[segments[segments.length - 1]] = value;
    if (this.shouldValidate) {
      const rootKey = segments[0];
      this.validator.validate(rootKey, this.items[rootKey]);
    }
    this.cache.delete(key);
  }
  /**
   * Get all of the configuration items.
   *
   * @returns All configuration items
   */
  all() {
    return { ...this.items };
  }
  /**
   * Merge configuration items.
   *
   * @param items - The items to merge
   */
  merge(items) {
    this.items = this.mergeDeep(this.items, items);
    this.clearCache();
  }
  /**
   * Deep merge two objects.
   *
   * @param target - The target object
   * @param source - The source object
   * @returns The merged object
   * @private
   */
  mergeDeep(target, source) {
    const output = { ...target };
    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (this.isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] });
          } else {
            output[key] = this.mergeDeep(target[key], source[key]);
          }
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }
  /**
   * Check if a value is an object.
   *
   * @param item - The value to check
   * @returns Whether the value is an object
   * @private
   */
  isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
  }
};
exports.ConfigRepository = __decorateClass([
  injectable()
], exports.ConfigRepository);

// src/config/loaders/json-config-loader.ts
var JsonConfigLoader = class _JsonConfigLoader {
  /**
   * Create a new JSON config loader
   */
  constructor() {
    /**
     * The configuration cache
     */
    this.configCache = /* @__PURE__ */ new Map();
  }
  /**
   * Create a new JSON config loader
   *
   * @returns A new JSON config loader
   */
  static make() {
    return new _JsonConfigLoader();
  }
  /**
   * Load configuration from a JSON source
   *
   * @param source - The source to load from (path, key, etc.)
   * @returns The loaded configuration
   */
  async load(source) {
    if (this.configCache.has(source)) {
      return this.configCache.get(source) || {};
    }
    try {
      let config = {};
      if (isNode()) {
        const fs2 = await import('fs');
        if (!fs2.existsSync(source)) {
          return {};
        }
        const fileContent = fs2.readFileSync(source, "utf8");
        config = JSON.parse(fileContent);
      } else if (isNextJs()) {
        try {
          if (typeof window !== "undefined") {
            const response = await fetch(source);
            config = await response.json();
          } else {
            const fs2 = await import('fs');
            if (fs2.existsSync(source)) {
              const fileContent = fs2.readFileSync(source, "utf8");
              config = JSON.parse(fileContent);
            }
          }
        } catch (e) {
          console.warn(`Error loading JSON in Next.js environment: ${e}`);
          return {};
        }
      } else if (isBrowser()) {
        try {
          const response = await fetch(source);
          config = await response.json();
        } catch (e) {
          console.warn(`Error loading JSON in browser environment: ${e}`);
          return {};
        }
      }
      this.configCache.set(source, config);
      return config;
    } catch (error) {
      console.warn(`Error loading JSON configuration from ${source}:`, error);
      return {};
    }
  }
  /**
   * Check if the loader can load from the given source
   *
   * @param source - The source to check
   * @returns Whether the loader can load from the source
   */
  canLoad(source) {
    return source.endsWith(".json");
  }
};

// src/config/loaders/module-config-loader.ts
var ModuleConfigLoader = class _ModuleConfigLoader {
  /**
   * Create a new module config loader
   */
  constructor() {
    /**
     * The configuration cache
     */
    this.configCache = /* @__PURE__ */ new Map();
  }
  /**
   * Create a new module config loader
   *
   * @returns A new module config loader
   */
  static make() {
    return new _ModuleConfigLoader();
  }
  /**
   * Load configuration from a module source
   *
   * @param source - The source to load from (path, key, etc.)
   * @returns The loaded configuration
   */
  async load(source) {
    if (this.configCache.has(source)) {
      return this.configCache.get(source) || {};
    }
    try {
      if (isNode()) {
        const fs2 = await import('fs');
        if (!fs2.existsSync(source)) {
          return {};
        }
      }
      const config = await this.loadConfigDynamically(source);
      this.configCache.set(source, config);
      return config;
    } catch (error) {
      console.warn(`Error loading module configuration from ${source}:`, error);
      return {};
    }
  }
  /**
   * Check if the loader can load from the given source
   *
   * @param source - The source to check
   * @returns Whether the loader can load from the source
   */
  canLoad(source) {
    return source.endsWith(".ts") || source.endsWith(".js") || source.endsWith(".mjs");
  }
  /**
   * Load configuration dynamically based on the environment
   *
   * @param source - The source to load from
   * @returns The loaded configuration
   * @private
   */
  async loadConfigDynamically(source) {
    try {
      if (isNode()) {
        try {
          const module = await import(source);
          const config = module.default || module;
          return typeof config === "function" ? await config() : config;
        } catch (e) {
          const module = __require(source);
          const config = module.default || module;
          return typeof config === "function" ? await config() : config;
        }
      }
      if (isNextJs()) {
        try {
          const module = await import(source);
          const config = module.default || module;
          return typeof config === "function" ? await config() : config;
        } catch (e) {
          console.warn(`Error importing module in Next.js environment: ${e}`);
          return {};
        }
      }
      if (isBrowser()) {
        try {
          const normalizedPath = this.normalizeBrowserPath(source);
          const module = await import(normalizedPath);
          const config = module.default || module;
          return typeof config === "function" ? await config() : config;
        } catch (e) {
          console.warn(`Error importing module in browser environment: ${e}`);
          return {};
        }
      }
      return {};
    } catch (error) {
      console.warn(`Error dynamically importing configuration from ${source}:`, error);
      return {};
    }
  }
  /**
   * Normalize a path for browser usage
   *
   * @param source - The source path
   * @returns The normalized path
   * @private
   */
  normalizeBrowserPath(source) {
    if (source.startsWith("http://") || source.startsWith("https://")) {
      return source;
    }
    if (typeof window !== "undefined" && window.location) {
      const baseUrl = window.location.origin;
      return new URL(source, baseUrl).toString();
    }
    return source;
  }
};

// src/providers/config-service-provider.ts
var ConfigServiceProvider = class extends ServiceProvider {
  /**
   * Register any application services.
   */
  register() {
    this.app.singleton(tsTypes.IConfig.$, async () => {
      const configItems = await this.loadConfigurationFiles();
      const config = exports.ConfigRepository.make({
        items: configItems,
        cache: true,
        validate: false
        // Enable validation if needed
      });
      return config;
    });
    try {
      global.config = this.app.make(tsTypes.IConfig.$);
    } catch (error) {
      console.warn("Error setting global config:", error);
    }
  }
  /**
   * Load all configuration files and aggregate them.
   *
   * @returns The aggregated configuration items
   */
  async loadConfigurationFiles() {
    const items = {};
    try {
      const configPath = this.getConfigPath();
      const jsonLoader = JsonConfigLoader.make();
      const moduleLoader = ModuleConfigLoader.make();
      const env = process.env.NODE_ENV || "development";
      const files = await this.getConfigFiles(configPath);
      for (const file of files) {
        if (file.includes(`.${env}.`)) {
          continue;
        }
        const key = path__namespace.basename(file, path__namespace.extname(file));
        let config = {};
        if (jsonLoader.canLoad(file)) {
          config = await jsonLoader.load(file);
        } else if (moduleLoader.canLoad(file)) {
          config = await moduleLoader.load(file);
        }
        items[key] = config;
        const extname2 = path__namespace.extname(file);
        const basename2 = path__namespace.basename(file, extname2);
        const envFile = path__namespace.join(path__namespace.dirname(file), `${basename2}.${env}${extname2}`);
        let envConfig = {};
        if (jsonLoader.canLoad(envFile)) {
          envConfig = await jsonLoader.load(envFile);
        } else if (moduleLoader.canLoad(envFile)) {
          envConfig = await moduleLoader.load(envFile);
        }
        if (Object.keys(envConfig).length > 0) {
          items[key] = this.mergeDeep(items[key], envConfig);
        }
      }
    } catch (error) {
      console.warn("Error loading configuration files:", error);
    }
    return items;
  }
  /**
   * Get the configuration directory path.
   *
   * @returns The configuration directory path
   */
  getConfigPath() {
    let configPath = "config";
    if (isNode()) {
      configPath = path__namespace.resolve(process.cwd(), "config");
    } else if (isNextJs()) {
      if (typeof process !== "undefined" && process.cwd) {
        configPath = path__namespace.resolve(process.cwd(), "config");
      } else {
        configPath = "/config";
      }
    }
    return configPath;
  }
  /**
   * Get all configuration files.
   *
   * @param directory - The directory to scan
   * @returns An array of file paths
   */
  async getConfigFiles(directory) {
    const files = [];
    try {
      if (isNode()) {
        const fs2 = await import('fs');
        if (!fs2.existsSync(directory)) {
          return files;
        }
        const entries = fs2.readdirSync(directory, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path__namespace.join(directory, entry.name);
          if (entry.isDirectory()) {
            const subFiles = await this.getConfigFiles(fullPath);
            files.push(...subFiles);
          } else if (entry.isFile()) {
            const ext = path__namespace.extname(entry.name).toLowerCase();
            if ([".js", ".json", ".ts", ".mjs"].includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } else {
        console.warn("Getting config files in browser environment is not fully supported");
      }
    } catch (error) {
      console.warn(`Error scanning directory ${directory}:`, error);
    }
    return files;
  }
  /**
   * Deep merge two objects.
   *
   * @param target - The target object
   * @param source - The source object
   * @returns The merged object
   */
  mergeDeep(target, source) {
    const output = { ...target };
    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (this.isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] });
          } else {
            output[key] = this.mergeDeep(target[key], source[key]);
          }
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }
  /**
   * Check if a value is an object.
   *
   * @param item - The value to check
   * @returns Whether the value is an object
   */
  isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
  }
  /**
   * Bootstrap any application services.
   */
  boot() {
  }
};
var Application = class _Application {
  /**
   * Create a new application instance.
   */
  constructor() {
    /**
     * The bootstrapped state of the application.
     * @private
     */
    this.booted = false;
    this.container = Container2.make();
  }
  /**
   * Create a new application instance.
   *
   * @returns A new application instance
   */
  static make() {
    return new _Application();
  }
  /**
   * Get the service container.
   *
   * @returns The service container
   */
  getContainer() {
    return this.container;
  }
  /**
   * Register the core service providers.
   *
   * @returns The application instance
   */
  registerCoreProviders() {
    this.container.register(new ConfigServiceProvider(this.container));
    return this;
  }
  /**
   * Register a service provider.
   *
   * @param provider - The service provider to register
   * @returns The application instance
   */
  register(provider) {
    this.container.register(
      typeof provider === "function" ? new provider(this.container) : provider
    );
    return this;
  }
  /**
   * Boot the application.
   *
   * @returns The application instance
   */
  boot() {
    if (this.booted) {
      return this;
    }
    this.container.boot();
    this.booted = true;
    return this;
  }
  /**
   * Determine if the application has been bootstrapped.
   *
   * @returns True if the application has been bootstrapped, false otherwise
   */
  isBooted() {
    return this.booted;
  }
  /**
   * Get a service from the container.
   *
   * @param abstract - The abstract type to resolve
   * @returns The resolved instance
   * @template T - The type of the resolved instance
   */
  make(abstract) {
    return this.container.make(abstract);
  }
  /**
   * Register a binding with the container.
   *
   * @param abstract - The abstract type to bind
   * @param concrete - The concrete implementation
   * @param shared - Whether the binding should be shared
   */
  bind(abstract, concrete, shared) {
    return this.container.bind(abstract, concrete, shared);
  }
  /**
   * Register an existing instance as shared in the container.
   *
   * @param abstract - The abstract type to bind
   * @param instance - The instance to register
   * @returns The container instance
   */
  instance(abstract, instance) {
    return this.container.instance(abstract, instance);
  }
  /**
   * Get the configuration repository.
   *
   * @returns The configuration repository
   */
  config() {
    return this.container.make(tsTypes.IConfig.$);
  }
  /**
   * Get the cache manager.
   *
   * @returns The cache manager
   */
  cache() {
    return this.container.make(tsTypes.ICache.$);
  }
};
var appInstance = null;
function getApplication() {
  if (!appInstance) {
    appInstance = Application.make();
    appInstance.registerCoreProviders();
    appInstance.boot();
  }
  return appInstance;
}

// src/container/contextual-builder.ts
var ContextualBindingImplementationBuilder = class _ContextualBindingImplementationBuilder {
  /**
   * Create a new contextual binding implementation builder
   *
   * @param container - The container instance
   * @param concrete - The concrete implementation that needs a dependency
   * @param abstract - The abstract type that the concrete implementation needs
   */
  constructor(container, concrete, abstract) {
    this.container = container;
    this.concrete = concrete;
    this.abstract = abstract;
  }
  /**
   * Create a new contextual binding implementation builder instance
   *
   * @param container - The container instance
   * @param concrete - The concrete implementation that needs a dependency
   * @param abstract - The abstract type that the concrete implementation needs
   * @returns A new contextual binding implementation builder instance
   */
  static make(container, concrete, abstract) {
    return new _ContextualBindingImplementationBuilder(container, concrete, abstract);
  }
  /**
   * Define the implementation to use for the contextual binding
   *
   * @param implementation - The implementation to use
   * @returns The container instance
   */
  give(implementation) {
    const abstractKey = typeof this.abstract === "string" ? this.abstract : typeof this.abstract === "symbol" ? this.abstract.toString() : typeof this.abstract === "function" ? this.abstract.name : "";
    const concreteKey = typeof this.concrete === "string" ? this.concrete : this.concrete.name;
    const tag = `contextual.${concreteKey}.${abstractKey}`;
    if (typeof implementation === "function" && !this.isClass(implementation)) {
      const symbol = Symbol.for(abstractKey);
      if (this.container.isBoundTagged(symbol, tag, true)) {
        this.container.unbind(symbol);
      }
      const binding = this.container.bind(symbol);
      binding.toDynamicValue(() => implementation(this.container)).whenTargetTagged(tag, true);
    } else {
      const instanceKey = `${abstractKey}.${tag}`;
      this.container.instance(instanceKey, implementation);
      const symbol = Symbol.for(abstractKey);
      if (this.container.isBoundTagged(symbol, tag, true)) {
        this.container.unbind(symbol);
      }
      const binding = this.container.bind(abstractKey);
      binding.toDynamicValue((context) => context.container.get(instanceKey)).whenTargetTagged(tag, true);
    }
    this.container.registerContextualBinding(concreteKey, abstractKey, tag);
    return this.container;
  }
  /**
   * Check if a function is a class
   *
   * @param func - The function to check
   * @returns True if the function is a class, false otherwise
   * @private
   */
  isClass(func) {
    return typeof func === "function" && /^class\s/.test(Function.prototype.toString.call(func));
  }
};

// src/container/contextual-binding.ts
var ContextualBindingBuilder = class _ContextualBindingBuilder {
  /**
   * Create a new contextual binding builder
   *
   * @param container - The container instance
   * @param concrete - The concrete implementation that needs a dependency
   */
  constructor(container, concrete) {
    this.container = container;
    this.concrete = concrete;
  }
  /**
   * Create a new contextual binding builder instance
   *
   * @param container - The container instance
   * @param concrete - The concrete implementation that needs a dependency
   * @returns A new contextual binding builder instance
   */
  static make(container, concrete) {
    return new _ContextualBindingBuilder(container, concrete);
  }
  /**
   * Define the abstract type that the contextual binding is for
   *
   * @param abstract - The abstract type that the concrete implementation needs
   * @returns A builder for defining the implementation
   */
  needs(abstract) {
    return ContextualBindingImplementationBuilder.make(this.container, this.concrete, abstract);
  }
};

// src/container/middleware/logger-middleware.ts
function loggerMiddleware(logger = console.log) {
  return (next) => {
    return (args) => {
      const { serviceIdentifier } = args;
      const id2 = serviceIdentifier.toString();
      logger(`Resolving: ${id2}`);
      const result = next(args);
      logger(`Resolved: ${id2}`);
      return result;
    };
  };
}

// src/container/middleware/cache-middleware.ts
function cacheMiddleware(shouldCache = () => true) {
  const cache = /* @__PURE__ */ new Map();
  return (next) => {
    return (args) => {
      const { serviceIdentifier } = args;
      if (cache.has(serviceIdentifier)) {
        return cache.get(serviceIdentifier);
      }
      const result = next(args);
      if (shouldCache(serviceIdentifier)) {
        cache.set(serviceIdentifier, result);
      }
      return result;
    };
  };
}
function createCacheMiddleware(shouldCache) {
  const cache = /* @__PURE__ */ new Map();
  const middleware = (next) => {
    return (args) => {
      const { serviceIdentifier } = args;
      if (cache.has(serviceIdentifier)) {
        return cache.get(serviceIdentifier);
      }
      const result = next(args);
      if (!shouldCache || shouldCache(serviceIdentifier)) {
        cache.set(serviceIdentifier, result);
      }
      return result;
    };
  };
  const flush = (serviceIdentifier) => {
    if (serviceIdentifier) {
      cache.delete(serviceIdentifier);
    } else {
      cache.clear();
    }
  };
  return { middleware, flush };
}

// src/container/metrics/metrics.ts
var MetricsCollector = class _MetricsCollector {
  /**
   * Create a new Metrics Collector instance.
   *
   * @returns A new Metrics Collector instance
   */
  static make() {
    return new _MetricsCollector();
  }
  /**
   * Record a timing metric
   *
   * @param name - The metric name
   * @param value - The metric value
   * @param tags - The metric tags
   */
  timing(name, value, tags = {}) {
    const tagsString = Object.entries(tags).map(([key, value2]) => `${key}=${value2}`).join(",");
    console.log(`TIMING ${name}=${value}ms ${tagsString}`);
  }
  /**
   * Increment a counter metric
   *
   * @param name - The metric name
   * @param value - The increment value
   * @param tags - The metric tags
   */
  increment(name, value = 1, tags = {}) {
    const tagsString = Object.entries(tags).map(([key, value2]) => `${key}=${value2}`).join(",");
    console.log(`COUNT ${name}=${value} ${tagsString}`);
  }
};

// src/container/middleware/metrics-middleware.ts
function metricsMiddleware(collector = MetricsCollector.make()) {
  return (next) => {
    return (args) => {
      const { serviceIdentifier } = args;
      const id2 = serviceIdentifier.toString();
      collector.increment("container.resolution", 1, {
        service: id2
      });
      const startTime = Date.now();
      const result = next(args);
      const endTime = Date.now();
      const duration = endTime - startTime;
      collector.timing("container.resolution_time", duration, {
        service: id2
      });
      return result;
    };
  };
}
function createClassDecorator(decorator, options = {}) {
  const {
    copyPrototype = true,
    copyStatic = true,
    copyMetadata = true,
    beforeConstructor,
    afterConstructor,
    transformInstance
  } = options;
  return (target) => {
    const decoratedTarget = decorator(target);
    if (decoratedTarget === void 0 || decoratedTarget === target) {
      return target;
    }
    function construct(constructor, args) {
      if (beforeConstructor) {
        beforeConstructor(constructor, args);
      }
      const instance = new constructor(...args);
      if (afterConstructor) {
        afterConstructor(instance, constructor, args);
      }
      return transformInstance ? transformInstance(instance, constructor, args) : instance;
    }
    const newConstructor = (...args) => construct(decoratedTarget, args);
    if (copyPrototype) {
      newConstructor.prototype = decoratedTarget.prototype;
    }
    if (copyStatic) {
      Object.getOwnPropertyNames(decoratedTarget).forEach((prop) => {
        if (prop !== "prototype" && prop !== "name" && prop !== "length") {
          const descriptor = Object.getOwnPropertyDescriptor(decoratedTarget, prop);
          if (descriptor) {
            Object.defineProperty(newConstructor, prop, descriptor);
          }
        }
      });
    }
    if (copyMetadata) {
      const metadataKeys = Reflect.getMetadataKeys(target);
      metadataKeys.forEach((metadataKey) => {
        const metadataValue = Reflect.getMetadata(metadataKey, target);
        Reflect.defineMetadata(metadataKey, metadataValue, newConstructor);
      });
    }
    return newConstructor;
  };
}
function createMethodDecorator(decorator) {
  return (target, propertyKey, descriptor) => {
    return decorator(target, propertyKey, descriptor);
  };
}
function createPropertyDecorator(decorator) {
  return (target, propertyKey) => {
    decorator(target, propertyKey);
  };
}
function createParameterDecorator(decorator) {
  return (target, propertyKey, parameterIndex) => {
    decorator(target, propertyKey, parameterIndex);
  };
}
var AbstractDecorator = class {
  /**
   * Create a class decorator
   *
   * @param options - Options for the decorator
   * @returns A class decorator function
   */
  createClassDecorator(options = {}) {
    return createClassDecorator((target) => this.decorateClass(target), options);
  }
  /**
   * Create a method decorator
   *
   * @returns A method decorator function
   */
  createMethodDecorator() {
    return createMethodDecorator(
      (target, propertyKey, descriptor) => this.decorateMethod(target, propertyKey, descriptor)
    );
  }
  /**
   * Create a property decorator
   *
   * @returns A property decorator function
   */
  createPropertyDecorator() {
    return createPropertyDecorator(
      (target, propertyKey) => this.decorateProperty(target, propertyKey)
    );
  }
  /**
   * Create a parameter decorator
   *
   * @returns A parameter decorator function
   */
  createParameterDecorator() {
    return createParameterDecorator(
      (target, propertyKey, parameterIndex) => this.decorateParameter(target, propertyKey, parameterIndex)
    );
  }
  /**
   * Decorate a method
   *
   * @param target - The target object
   * @param propertyKey - The method name
   * @param descriptor - The method descriptor
   * @returns The decorated method descriptor
   */
  decorateMethod(target, propertyKey, descriptor) {
    return descriptor;
  }
  /**
   * Decorate a property
   *
   * @param target - The target object
   * @param propertyKey - The property name
   */
  decorateProperty(target, propertyKey) {
  }
  /**
   * Decorate a parameter
   *
   * @param target - The target object
   * @param propertyKey - The method name
   * @param parameterIndex - The parameter index
   */
  decorateParameter(target, propertyKey, parameterIndex) {
  }
  /**
   * Create a new abstract decorator
   *
   * @returns A new abstract decorator
   */
  static make() {
    throw new Error("Cannot instantiate abstract class");
  }
};

// src/config/decorators/config.decorator.ts
function Config(options) {
  return createPropertyDecorator((target, propertyKey) => {
    Object.defineProperty(target, propertyKey, {
      get: function() {
        const configRepository = this.config || (this.app && this.app.make ? this.app.make("config") : null) || // @ts-ignore
        global.config || (getApplication && getApplication().make ? getApplication().make("config") : null);
        if (!configRepository) {
          throw new Error(
            "Config repository not found. Make sure it's available in 'this.config', 'this.app', globally, or via getApplication()."
          );
        }
        let value = configRepository.get(options.key, options.defaultValue);
        if (options.transform) {
          value = options.transform(value);
        }
        return value;
      },
      enumerable: true,
      configurable: true
    });
  });
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

// src/facades/facade.ts
var Facade = class {
  /**
   * Get the registered name of the component.
   *
   * @returns The registered name of the component
   */
  static getFacadeAccessor() {
    throw new Error("Facade accessor not implemented");
  }
  /**
   * Get the facade root instance.
   *
   * @returns The facade root instance
   */
  static getFacadeRoot() {
    const app2 = getApplication();
    const name = this.getFacadeAccessor();
    if (!name) {
      throw new Error(`Facade accessor not implemented for ${this.constructor.name}`);
    }
    return app2.make(name);
  }
  /**
   * Handle dynamic static method calls.
   *
   * @param method - The method name
   * @param args - The method arguments
   * @returns The method result
   */
  static __call(method, args) {
    const instance = this.getFacadeRoot();
    if (!instance) {
      throw new Error(`A facade root has not been set for ${this.constructor.name}`);
    }
    if (typeof instance[method] !== "function") {
      throw new Error(`Method ${method} does not exist on ${this.constructor.name}`);
    }
    return instance[method](...args);
  }
  /**
   * Handle dynamic static method calls.
   */
  static __callStatic(method, args) {
    return this.__call(method, args);
  }
};
var handler = {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return (...args) => {
      return target.__call(prop, args);
    };
  }
};
function createFacadeProxy(facadeClass) {
  return new Proxy(facadeClass, handler);
}

// src/facades/app.ts
var AppFacade = class extends Facade {
  /**
   * Get the registered name of the component.
   *
   * @returns The registered name of the component
   */
  static getFacadeAccessor() {
    return "app";
  }
};
var App = createFacadeProxy(AppFacade);

// src/facades/cache.ts
var CacheFacade = class extends Facade {
  /**
   * Get the registered name of the component.
   *
   * @returns The registered name of the component
   */
  static getFacadeAccessor() {
    return "cache";
  }
  /**
   * Get a cache store instance by name.
   *
   * @param name - The name of the cache store
   * @returns The cache store instance
   */
  static store(name) {
    return this.getFacadeRoot().store(name);
  }
};
var Cache = createFacadeProxy(CacheFacade);

// src/facades/config.ts
var ConfigFacade = class extends Facade {
  /**
   * Get the registered name of the component.
   *
   * @returns The registered name of the component
   */
  static getFacadeAccessor() {
    return "config";
  }
};
var Config2 = createFacadeProxy(ConfigFacade);

// src/providers/app-service-provider.ts
var AppServiceProvider = class extends ServiceProvider {
  /**
   * Register any application services.
   */
  register() {
  }
  /**
   * Bootstrap any application services.
   */
  boot() {
  }
};

// src/react/contexts/app.context.ts
var import_react = __toESM(require_react());
var AppContext = (0, import_react.createContext)(void 0);

// src/react/contexts/container.context.ts
var import_react2 = __toESM(require_react());
var ContainerContext = (0, import_react2.createContext)(void 0);

// src/react/hooks/app/use-app.ts
var import_react3 = __toESM(require_react());
function useApp() {
  const context = (0, import_react3.useContext)(AppContext);
  if (context === void 0) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

// src/react/hooks/app/use-service.ts
function useService(abstract) {
  const app2 = useApp();
  return app2.make(abstract);
}

// src/react/hooks/cache/use-cache-manager.ts
function useICache() {
  const app2 = useApp();
  return app2.cache();
}

// src/react/hooks/cache/use-cache-value.ts
var import_react4 = __toESM(require_react());
function useCacheValue(key, defaultValue, ttl = 0) {
  const cache = useService(tsTypes.ICache.$);
  const [value, setValue] = (0, import_react4.useState)(defaultValue);
  const [loading, setLoading] = (0, import_react4.useState)(true);
  const [error, setError] = (0, import_react4.useState)(null);
  const fetchValue = (0, import_react4.useCallback)(async () => {
    setLoading(true);
    setError(null);
    try {
      const cachedValue = await cache.get(key, defaultValue);
      setValue(cachedValue);
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error(`Error fetching cache value for key ${key}: ${String(err)}`);
      console.error(errorObj.message);
      setError(errorObj);
    } finally {
      setLoading(false);
    }
  }, [cache, key, defaultValue]);
  (0, import_react4.useEffect)(() => {
    fetchValue();
  }, [fetchValue]);
  const setCacheValue = (0, import_react4.useCallback)(
    async (newValue, cacheTtl) => {
      setError(null);
      try {
        await cache.put(key, newValue, cacheTtl != null ? cacheTtl : ttl);
        setValue(newValue);
        return true;
      } catch (err) {
        const errorObj = err instanceof Error ? err : new Error(`Error setting cache value for key ${key}: ${String(err)}`);
        console.error(errorObj.message);
        setError(errorObj);
        return false;
      }
    },
    [cache, key, ttl]
  );
  const removeCacheValue = (0, import_react4.useCallback)(async () => {
    setError(null);
    try {
      await cache.forget(key);
      setValue(null);
      return true;
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error(`Error removing cache value for key ${key}: ${String(err)}`);
      console.error(errorObj.message);
      setError(errorObj);
      return false;
    }
  }, [cache, key]);
  const refresh = (0, import_react4.useCallback)(async () => {
    await fetchValue();
  }, [fetchValue]);
  return {
    value,
    setValue: setCacheValue,
    removeValue: removeCacheValue,
    loading,
    refresh,
    error
  };
}

// src/react/hooks/cache/use-cached-data.ts
var import_react5 = __toESM(require_react());
function useCachedData(key, fetcher, ttl = 60, options = {}) {
  const cache = useService(tsTypes.ICache.$);
  const [data, setData] = (0, import_react5.useState)(null);
  const [loading, setLoading] = (0, import_react5.useState)(!options.skipInitialFetch);
  const [error, setError] = (0, import_react5.useState)(null);
  const [lastUpdated, setLastUpdated] = (0, import_react5.useState)(null);
  const fetchData = (0, import_react5.useCallback)(
    async (forceRefresh = false) => {
      setLoading(true);
      setError(null);
      try {
        let result;
        if (forceRefresh) {
          result = await fetcher();
          await cache.put(key, result, ttl);
        } else {
          result = await cache.remember(key, ttl, fetcher);
        }
        setData(result);
        setLastUpdated(/* @__PURE__ */ new Date());
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    },
    [cache, key, fetcher, ttl]
  );
  const invalidate = (0, import_react5.useCallback)(async () => {
    await cache.forget(key);
    setData(null);
  }, [cache, key]);
  (0, import_react5.useEffect)(() => {
    if (!options.skipInitialFetch) {
      fetchData();
    }
  }, [fetchData, options.skipInitialFetch]);
  (0, import_react5.useEffect)(() => {
    if (options.autoRefresh && options.refreshInterval) {
      const intervalId = setInterval(() => {
        fetchData(true);
      }, options.refreshInterval * 1e3);
      return () => clearInterval(intervalId);
    }
  }, [fetchData, options.autoRefresh, options.refreshInterval]);
  const refresh = (0, import_react5.useCallback)(() => {
    return fetchData(true);
  }, [fetchData]);
  return { data, loading, error, refresh, invalidate, lastUpdated };
}

// src/react/hooks/cache/use-multi-cache-values.ts
var import_react6 = __toESM(require_react());
function useMultiCacheValues(keys, defaultValues) {
  const cache = useService(tsTypes.ICache.$);
  const [values, setValues] = (0, import_react6.useState)(
    defaultValues || Array(keys.length).fill(void 0)
  );
  const [loading, setLoading] = (0, import_react6.useState)(true);
  const fetchValues = (0, import_react6.useCallback)(async () => {
    setLoading(true);
    try {
      const promises = keys.map((key, index) => cache.get(key, defaultValues == null ? void 0 : defaultValues[index]));
      const cachedValues = await Promise.all(promises);
      setValues(cachedValues);
    } catch (error) {
      console.error(`Error fetching cache values:`, error);
    } finally {
      setLoading(false);
    }
  }, [cache, keys, defaultValues]);
  (0, import_react6.useEffect)(() => {
    fetchValues();
  }, [fetchValues]);
  const setCacheValues = (0, import_react6.useCallback)(
    async (newValues, ttl) => {
      try {
        const promises = keys.map(
          (key, index) => cache.put(key, newValues[index], ttl).then(() => true).catch(() => false)
        );
        const results = await Promise.all(promises);
        setValues(newValues);
        return results;
      } catch (error) {
        console.error(`Error setting cache values:`, error);
        return keys.map(() => false);
      }
    },
    [cache, keys]
  );
  const removeCacheValues = (0, import_react6.useCallback)(async () => {
    try {
      const promises = keys.map((key) => cache.forget(key));
      const results = await Promise.all(promises);
      setValues(defaultValues || Array(keys.length).fill(null));
      return results;
    } catch (error) {
      console.error(`Error removing cache values:`, error);
      return keys.map(() => false);
    }
  }, [cache, keys, defaultValues]);
  const refresh = (0, import_react6.useCallback)(async () => {
    await fetchValues();
  }, [fetchValues]);
  return {
    values,
    setValues: setCacheValues,
    removeValues: removeCacheValues,
    loading,
    refresh
  };
}

// src/react/hooks/config/use-all-config.ts
var import_react7 = __toESM(require_react());
function useAllConfig(options = {}) {
  const config = useService(tsTypes.IConfig.$);
  const [allConfig, setAllConfig] = (0, import_react7.useState)(config.all());
  (0, import_react7.useEffect)(() => {
    if (!options.watch) return;
    const intervalId = setInterval(() => {
      const newAllConfig = config.all();
      if (JSON.stringify(newAllConfig) !== JSON.stringify(allConfig)) {
        setAllConfig(newAllConfig);
      }
    }, 1e3);
    return () => clearInterval(intervalId);
  }, [config, allConfig, options.watch]);
  return allConfig;
}

// src/react/hooks/config/use-config.ts
var import_react8 = __toESM(require_react());
function useConfig(key, defaultValue, options = {}) {
  const config = useService(tsTypes.IConfig.$);
  const [value, setValue] = (0, import_react8.useState)(config.get(key, defaultValue));
  const transformedValue = options.transform ? options.transform(value) : value;
  (0, import_react8.useEffect)(() => {
    if (!options.watch) return;
    const intervalId = setInterval(() => {
      const newValue = config.get(key, defaultValue);
      if (JSON.stringify(newValue) !== JSON.stringify(value)) {
        setValue(newValue);
      }
    }, 1e3);
    return () => clearInterval(intervalId);
  }, [config, key, defaultValue, value, options.watch]);
  return transformedValue;
}

// src/react/hooks/config/use-config-state.ts
var import_react9 = __toESM(require_react());
function useConfigState(key, defaultValue) {
  const config = useService(tsTypes.IConfig.$);
  const [value, setValue] = (0, import_react9.useState)(config.get(key, defaultValue));
  const setConfigValue = (0, import_react9.useCallback)(
    (newValue) => {
      config.set(key, newValue);
      setValue(newValue);
    },
    [config, key]
  );
  return [value, setConfigValue];
}

// src/react/hooks/config/use-has-config.ts
var import_react10 = __toESM(require_react());
function useHasConfig(key) {
  const config = useService(tsTypes.IConfig.$);
  const [exists, setExists] = (0, import_react10.useState)(config.has(key));
  (0, import_react10.useEffect)(() => {
    const intervalId = setInterval(() => {
      const newExists = config.has(key);
      if (newExists !== exists) {
        setExists(newExists);
      }
    }, 1e3);
    return () => clearInterval(intervalId);
  }, [config, key, exists]);
  return exists;
}

// src/react/hooks/container/use-container.ts
var import_react11 = __toESM(require_react());
function useContainer() {
  const context = (0, import_react11.useContext)(ContainerContext);
  if (context === void 0) {
    throw new Error("useContainer must be used within a ContainerProvider");
  }
  return context;
}

// src/react/hooks/container/use-resolve.ts
function useResolve(abstract) {
  const container = useContainer();
  return container.make(abstract);
}

// src/react/hooks/container/with-services.tsx
var import_react12 = __toESM(require_react());
function withServices(Component, services) {
  return function WithServices(props) {
    const container = useContainer();
    const resolvedServices = Object.entries(services).reduce(
      (acc, [key, abstract]) => {
        acc[key] = container.make(abstract);
        return acc;
      },
      {}
    );
    return /* @__PURE__ */ import_react12.default.createElement(Component, { ...props, ...resolvedServices });
  };
}

// src/react/providers/app.provider.tsx
var import_react13 = __toESM(require_react());
function AppProvider({ app: app2, children }) {
  return /* @__PURE__ */ import_react13.default.createElement(AppContext.Provider, { value: app2 }, children);
}

// src/react/providers/container.provider.tsx
var import_react14 = __toESM(require_react());
function ContainerProvider({
  container,
  children
}) {
  return /* @__PURE__ */ import_react14.default.createElement(ContainerContext.Provider, { value: container }, children);
}
exports.Publisher = class Publisher {
  /**
   * Create a new publisher
   */
  constructor() {
    /**
     * The registered publishers
     */
    this.publishers = /* @__PURE__ */ new Map();
    this.registerDefaultPublishers();
  }
  /**
   * Create a new publisher
   *
   * @returns A new publisher
   */
  static make() {
    return new exports.Publisher();
  }
  /**
   * Register default publishers
   * @private
   */
  registerDefaultPublishers() {
    this.register("assets", this.publishAssets.bind(this));
    this.register("views", this.publishViews.bind(this));
    this.register("translations", this.publishTranslations.bind(this));
    this.register("config", this.publishConfig.bind(this));
  }
  /**
   * Register a publisher
   *
   * @param name - The publisher name
   * @param publisher - The publisher function
   * @returns The publisher instance
   */
  register(name, publisher) {
    this.publishers.set(name, publisher);
    return this;
  }
  /**
   * Publish assets
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  async publishAssets(source, target, options = {}) {
    return this.publishDirectory(source, target, options);
  }
  /**
   * Publish views
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  async publishViews(source, target, options = {}) {
    return this.publishDirectory(source, target, options);
  }
  /**
   * Publish translations
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  async publishTranslations(source, target, options = {}) {
    return this.publishDirectory(source, target, options);
  }
  /**
   * Publish configuration
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  async publishConfig(source, target, options = {}) {
    return this.publishDirectory(source, target, options);
  }
  /**
   * Publish a directory
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   * @private
   */
  async publishDirectory(source, target, options = {}) {
    try {
      if (!fs__namespace.existsSync(target)) {
        fs__namespace.mkdirSync(target, { recursive: true });
      }
      const files = this.getFiles(source);
      for (const file of files) {
        const relativePath = path__namespace.relative(source, file);
        const targetPath = path__namespace.join(target, relativePath);
        const targetDir = path__namespace.dirname(targetPath);
        if (!fs__namespace.existsSync(targetDir)) {
          fs__namespace.mkdirSync(targetDir, { recursive: true });
        }
        if (fs__namespace.existsSync(targetPath) && !options.force) {
          console.log(`Skipping ${targetPath} (already exists)`);
          continue;
        }
        fs__namespace.copyFileSync(file, targetPath);
        console.log(`Published ${targetPath}`);
      }
      return true;
    } catch (error) {
      console.error(`Error publishing directory ${source} to ${target}:`, error);
      return false;
    }
  }
  /**
   * Get all files in a directory recursively
   *
   * @param directory - The directory to get files from
   * @returns The files in the directory
   * @private
   */
  getFiles(directory) {
    const files = [];
    const entries = fs__namespace.readdirSync(directory, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path__namespace.join(directory, entry.name);
      if (entry.isDirectory()) {
        files.push(...this.getFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    return files;
  }
  /**
   * Publish using a registered publisher
   *
   * @param name - The publisher name
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  async publish(name, source, target, options = {}) {
    const publisher = this.publishers.get(name);
    if (!publisher) {
      throw new Error(`Publisher "${name}" not found`);
    }
    return publisher(source, target, options);
  }
};
exports.Publisher = __decorateClass([
  injectable()
], exports.Publisher);

// src/publish/publisher.interface.ts
var IPublisher;
((IPublisher2) => {
  IPublisher2.$ = Symbol.for("IPublisher");
})(IPublisher || (IPublisher = {}));

// src/publish/publish-service-provider.ts
var PublishServiceProvider = class extends ServiceProvider {
  /**
   * Register the service provider
   */
  register() {
    this.app.singleton(IPublisher.$, () => {
      return exports.Publisher.make();
    });
  }
  /**
   * Bootstrap the service provider
   */
  boot() {
  }
};
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

// src/decorators/singleton-decorator.ts
var singletonInstances = /* @__PURE__ */ new Map();
function Singleton() {
  return createClassDecorator((target) => target, {
    beforeConstructor: (target) => {
    },
    transformInstance: (instance, target, args) => {
      if (singletonInstances.has(target)) {
        return singletonInstances.get(target);
      }
      singletonInstances.set(target, instance);
      return instance;
    }
  });
}
var SingletonDecorator = class _SingletonDecorator extends AbstractDecorator {
  /**
   * Decorate a class to make it a singleton
   *
   * @param target - The class to decorate
   * @returns The decorated class
   */
  decorateClass(target) {
    const originalConstructor = target;
    const newConstructor = (...args) => {
      if (singletonInstances.has(originalConstructor)) {
        return singletonInstances.get(originalConstructor);
      }
      const instance = new originalConstructor(...args);
      singletonInstances.set(originalConstructor, instance);
      return instance;
    };
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
  }
  /**
   * Create a singleton decorator
   *
   * @returns A class decorator function
   */
  static create() {
    const decorator = new _SingletonDecorator();
    return decorator.createClassDecorator();
  }
};

// src/decorators/log-decorator.ts
function LogClass(options = {}) {
  return createClassDecorator(
    (target) => {
      console.log(`[${options.level || "info"}] Class ${target.name} was decorated`);
      return target;
    },
    {
      beforeConstructor: (target, args) => {
        console.log(`[${options.level || "info"}] Creating instance of ${target.name}`);
      }
    }
  );
}
function LogMethod(options = {}) {
  const { level = "info", logArgs = true, logReturn = true, logTime = true } = options;
  return createMethodDecorator((target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
      console.log(`[${level}] Calling ${String(propertyKey)}`);
      if (logArgs && args.length > 0) {
        console.log(`[${level}] Arguments:`, args);
      }
      const startTime = logTime ? Date.now() : 0;
      const result = originalMethod.apply(this, args);
      if (logTime) {
        const endTime = Date.now();
        console.log(`[${level}] Execution time: ${endTime - startTime}ms`);
      }
      if (result instanceof Promise) {
        return result.then((value) => {
          if (logReturn) {
            console.log(`[${level}] Return value:`, value);
          }
          return value;
        });
      }
      if (logReturn) {
        console.log(`[${level}] Return value:`, result);
      }
      return result;
    };
    return descriptor;
  });
}
var LogDecorator = class _LogDecorator extends AbstractDecorator {
  /**
   * Create a new log decorator
   *
   * @param options - The log options
   */
  constructor(options = {}) {
    super();
    this.options = {
      level: options.level || "info",
      logArgs: options.logArgs !== false,
      logReturn: options.logReturn !== false,
      logTime: options.logTime !== false
    };
  }
  /**
   * Create a new log decorator
   *
   * @param options - The log options
   * @returns A new log decorator
   */
  static make(options = {}) {
    return new _LogDecorator(options);
  }
  /**
   * Decorate a class to add logging
   *
   * @param target - The class to decorate
   * @returns The decorated class
   */
  decorateClass(target) {
    console.log(`[${this.options.level}] Class ${target.name} was decorated`);
    return target;
  }
  /**
   * Decorate a method to add logging
   *
   * @param target - The target object
   * @param propertyKey - The method name
   * @param descriptor - The method descriptor
   * @returns The decorated method descriptor
   */
  decorateMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const options = this.options;
    descriptor.value = function(...args) {
      console.log(`[${options.level}] Calling ${String(propertyKey)}`);
      if (options.logArgs && args.length > 0) {
        console.log(`[${options.level}] Arguments:`, args);
      }
      const startTime = options.logTime ? Date.now() : 0;
      const result = originalMethod.apply(this, args);
      if (options.logTime) {
        const endTime = Date.now();
        console.log(`[${options.level}] Execution time: ${endTime - startTime}ms`);
      }
      if (result instanceof Promise) {
        return result.then((value) => {
          if (options.logReturn) {
            console.log(`[${options.level}] Return value:`, value);
          }
          return value;
        });
      }
      if (options.logReturn) {
        console.log(`[${options.level}] Return value:`, result);
      }
      return result;
    };
    return descriptor;
  }
  /**
   * Create a log class decorator
   *
   * @param options - The log options
   * @returns A class decorator function
   */
  static createClassDecorator(options = {}) {
    const decorator = _LogDecorator.make(options);
    return decorator.createClassDecorator();
  }
  /**
   * Create a log method decorator
   *
   * @param options - The log options
   * @returns A method decorator function
   */
  static createMethodDecorator(options = {}) {
    const decorator = _LogDecorator.make(options);
    return decorator.createMethodDecorator();
  }
};

// src/plugins/nextjs.tsx
var import_react15 = __toESM(require_react());
var defaultOptions = {
  autoRegister: true,
  initializeInGetInitialProps: true,
  initializeInGetServerSideProps: true,
  initializeInGetStaticProps: false,
  initializeInApiRoutes: true,
  cache: {
    enabled: true,
    store: "memory",
    ttl: 60
  },
  nextConfig: {}
};
var NextJsPlugin = class {
  /**
   * Create a new Next.js plugin instance
   *
   * @param app - The application instance
   * @param options - The plugin options
   */
  constructor(app2, options = {}) {
    this.app = app2;
    this.options = { ...defaultOptions, ...options };
    if (this.options.autoRegister) {
      this.register();
    }
  }
  /**
   * Register the plugin with the application
   */
  register() {
    this.app.instance("nextjs", this);
    this.app.instance("nextjs.config", this.options.nextConfig);
  }
  /**
   * Initialize the application for Next.js
   */
  async initialize() {
    if (!this.app.isBooted()) {
      this.app.boot();
    }
    if (this.options.customInitializer) {
      await Promise.resolve(this.options.customInitializer(this.app));
    }
  }
  /**
   * Get the Next.js App wrapper
   */
  withApp(AppComponent) {
    const plugin = this;
    const options = this.options;
    return class AppWithTsApplication extends import_react15.default.Component {
      static async getInitialProps(appContext) {
        if (options.initializeInGetInitialProps) {
          await plugin.initialize();
        }
        let appProps = {};
        if (typeof AppComponent === "function" && "getInitialProps" in AppComponent) {
          appProps = await AppComponent.getInitialProps(appContext);
        }
        return { ...appProps };
      }
      render() {
        return /* @__PURE__ */ import_react15.default.createElement(AppComponent, { ...this.props });
      }
    };
  }
  /**
   * Get the Next.js config with the plugin
   */
  withConfig(config = {}) {
    const mergedConfig = {
      ...this.options.nextConfig,
      ...config
    };
    return mergedConfig;
  }
  /**
   * Create a getServerSideProps function with the application
   */
  withGetServerSideProps(getServerSideProps) {
    const options = this.options;
    return async (context) => {
      if (options.initializeInGetServerSideProps) {
        await this.initialize();
      }
      return await getServerSideProps(context, this.app);
    };
  }
  /**
   * Create a getStaticProps function with the application
   */
  withGetStaticProps(getStaticProps) {
    const options = this.options;
    return async (context) => {
      if (options.initializeInGetStaticProps) {
        await this.initialize();
      }
      return await getStaticProps(context, this.app);
    };
  }
  /**
   * Create an API route handler with the application
   */
  withApiRoute(handler2) {
    const options = this.options;
    return async (req, res) => {
      if (options.initializeInApiRoutes) {
        await this.initialize();
      }
      return await handler2(req, res, this.app);
    };
  }
  /**
   * Get the application instance
   */
  getApp() {
    return this.app;
  }
  /**
   * Get the plugin options
   */
  getOptions() {
    return this.options;
  }
};
function createNextJsPlugin(app2, options = {}) {
  return new NextJsPlugin(app2, options);
}
var nextjs = {
  /**
   * Create a Next.js plugin for the application
   *
   * @param app - The application instance
   * @param options - The plugin options
   * @returns The Next.js plugin instance
   */
  create: createNextJsPlugin
};

// src/index.ts
var application = getApplication();
global.app = application;
var app = application;
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/

exports.AbstractDecorator = AbstractDecorator;
exports.AbstractValidationDecorator = AbstractValidationDecorator;
exports.App = App;
exports.AppContext = AppContext;
exports.AppProvider = AppProvider;
exports.AppServiceProvider = AppServiceProvider;
exports.Application = Application;
exports.CacheFacade = Cache;
exports.Config = Config;
exports.ConfigCache = ConfigCache;
exports.ConfigFacade = Config2;
exports.ConfigServiceProvider = ConfigServiceProvider;
exports.ConfigValidationError = ConfigValidationError;
exports.ConfigValidator = ConfigValidator;
exports.Container = Container2;
exports.ContainerContext = ContainerContext;
exports.ContainerProvider = ContainerProvider;
exports.ContextualBindingBuilder = ContextualBindingBuilder;
exports.EnvConfig = EnvConfig;
exports.Facade = Facade;
exports.JsonConfigLoader = JsonConfigLoader;
exports.LogClass = LogClass;
exports.LogDecorator = LogDecorator;
exports.LogMethod = LogMethod;
exports.ModuleConfigLoader = ModuleConfigLoader;
exports.NextJsPlugin = NextJsPlugin;
exports.PublishServiceProvider = PublishServiceProvider;
exports.ServiceProvider = ServiceProvider;
exports.Singleton = Singleton;
exports.SingletonDecorator = SingletonDecorator;
exports.app = app;
exports.cacheMiddleware = cacheMiddleware;
exports.createCacheMiddleware = createCacheMiddleware;
exports.createClassDecorator = createClassDecorator;
exports.createFacadeProxy = createFacadeProxy;
exports.createMethodDecorator = createMethodDecorator;
exports.createNextJsPlugin = createNextJsPlugin;
exports.createParameterDecorator = createParameterDecorator;
exports.createPropertyDecorator = createPropertyDecorator;
exports.detectEnvironment = detectEnvironment;
exports.getApplication = getApplication;
exports.getNodeEnv = getNodeEnv;
exports.isBrowser = isBrowser;
exports.isDevelopment = isDevelopment;
exports.isNextJs = isNextJs;
exports.isNode = isNode;
exports.isProduction = isProduction;
exports.isReactNative = isReactNative;
exports.isTest = isTest;
exports.loggerMiddleware = loggerMiddleware;
exports.metricsMiddleware = metricsMiddleware;
exports.nextjs = nextjs;
exports.useAllConfig = useAllConfig;
exports.useApp = useApp;
exports.useCacheValue = useCacheValue;
exports.useCachedData = useCachedData;
exports.useConfig = useConfig;
exports.useConfigState = useConfigState;
exports.useContainer = useContainer;
exports.useHasConfig = useHasConfig;
exports.useICache = useICache;
exports.useMultiCacheValues = useMultiCacheValues;
exports.useResolve = useResolve;
exports.useService = useService;
exports.withServices = withServices;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map