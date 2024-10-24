import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {rules: {
    "no-console": "warn",
    "no-unused-vars": "error",
    "no-alert": "off",
    "react/react-in-jsx-scope": "off",
    "no-plusplus": "error",
    'accessor-pairs': 'off',

    'array-callback-return': ['error', { allowImplicit: true }],

    'block-scoped-var': 'error',

    complexity: ['off', 20],

    'class-methods-use-this': ['error', {
      exceptMethods: [],
    }],

    'consistent-return': 'error',

    curly: ['error', 'multi-line'], 

    'default-case': ['error', { commentPattern: '^no default$' }],

    'default-case-last': 'error',
    'default-param-last': 'error',

    'dot-notation': ['error', { allowKeywords: true }],

    'dot-location': ['error', 'property'],

    eqeqeq: ['error', 'always', { null: 'ignore' }],

    'grouped-accessor-pairs': 'error',

    'guard-for-in': 'error',

    'max-classes-per-file': ['error', 1],
  'no-caller': 'error',

    'no-case-declarations': 'error',

    'no-constructor-return': 'error',

    'no-div-regex': 'off',

    'no-else-return': ['error', { allowElseIf: false }],

    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],
    'no-empty-pattern': 'error',
    
    'no-empty-static-block': 'off',
    
    'no-eq-null': 'off',
    
    'no-eval': 'error',
    
    'no-extend-native': 'error',

    'no-extra-bind': 'error',

    'no-extra-label': 'error',

    'no-fallthrough': 'error',

    'no-floating-decimal': 'error',

    'no-global-assign': ['error', { exceptions: [] }],

    'no-native-reassign': 'off',
    
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],
    
    'no-implicit-globals': 'off',
    
    'no-implied-eval': 'error',

    'no-invalid-this': 'off',

    'no-iterator': 'error',
    
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    'no-lone-blocks': 'error',

    'no-loop-func': 'error',

    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],
    
    
    'no-multi-str': 'error',
    
    'no-new': 'error',
    
    'no-new-func': 'error',

    'no-new-wrappers': 'error',
    
    'no-nonoctal-decimal-escape': 'error',
    
    'no-object-constructor': 'off',

    'no-octal': 'error',
    
    'no-octal-escape': 'error',

    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', 
        'accumulator', 
        'e', 
        'ctx', 
        'context', 
        'req', 
        'request', 
        'res', 
        'response', 
        '$scope', 
        'staticContext', 
      ]
    }],
    
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],
    
    'no-return-assign': ['error', 'always'],
    
    'no-return-await': 'error',
    
    'no-script-url': 'error',
    
    'no-self-assign': ['error', {
      props: true,
    }],
    
    'no-self-compare': 'error',
    
    'no-sequences': 'error',
    
    'no-throw-literal': 'error',
    
    'no-unmodified-loop-condition': 'off',

    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],

    'no-unused-labels': 'error',

    'no-useless-call': 'off',

    'no-useless-catch': 'error',

    'no-useless-concat': 'error',

    'no-useless-escape': 'error',

    'no-useless-return': 'error',

    'no-void': 'error',

    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    'no-with': 'error',

    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    'prefer-named-capture-group': 'off',
    'prefer-object-has-own': 'off',

    
    'prefer-regex-literals': ['error', {
      disallowRedundantWrapping: true,
    }],

    radix: 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
    yoda: 'error',

  }}
];
