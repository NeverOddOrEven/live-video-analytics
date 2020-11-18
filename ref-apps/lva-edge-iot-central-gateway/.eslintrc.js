/*
� Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! �
*/
module.exports = {
  'env': {
      'browser': true,
      'es6': true,
      'node': true
  },
  'ignorePatterns': [
      'node_modules',
      'dist',
      'coverage'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
      'project': 'tsconfig.json',
      'sourceType': 'module'
  },
  'plugins': [
      'eslint-plugin-import',
      'eslint-plugin-jsdoc',
      'eslint-plugin-prefer-arrow',
      '@typescript-eslint',
      '@typescript-eslint/tslint'
  ],
  'rules': {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': [
          'error',
          {
              'default': 'array'
          }
      ],
      '@typescript-eslint/ban-types': [
          'error',
          {
              'types': {
                  'Object': {
                      'message': 'Avoid using the `Object` type. Did you mean `object`?'
                  },
                  'Function': {
                      'message': 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
                  },
                  'Boolean': {
                      'message': 'Avoid using the `Boolean` type. Did you mean `boolean`?'
                  },
                  'Number': {
                      'message': 'Avoid using the `Number` type. Did you mean `number`?'
                  },
                  'String': {
                      'message': 'Avoid using the `String` type. Did you mean `string`?'
                  },
                  'Symbol': {
                      'message': 'Avoid using the `Symbol` type. Did you mean `symbol`?'
                  }
              }
          }
      ],
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/indent': [
          'error',
          4,
          {
              'ObjectExpression': 'first',
              'FunctionDeclaration': {
                  'parameters': 'first'
              },
              'FunctionExpression': {
                  'parameters': 'first'
              },
              'SwitchCase': 1
          }
      ],
      '@typescript-eslint/member-delimiter-style': [
          'error',
          {
              'multiline': {
                  'delimiter': 'semi',
                  'requireLast': true
              },
              'singleline': {
                  'delimiter': 'semi',
                  'requireLast': false
              }
          }
      ],
      '@typescript-eslint/naming-convention': [
          'error',
          {
              selector: 'default',
              format: ['camelCase']
          },
          {
              selector: 'memberLike',
              format: ['camelCase', 'PascalCase']
          },
          {
              selector: 'variableLike',
              format: ['camelCase', 'PascalCase']
          },
          {
              selector: 'typeLike',
              format: ['PascalCase']
          }
      ],
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/quotes': 'off',
      '@typescript-eslint/semi': [
          'error',
          'always'
      ],
      '@typescript-eslint/triple-slash-reference': [
          'error',
          {
              'path': 'always',
              'types': 'prefer-import',
              'lib': 'always'
          }
      ],
      '@typescript-eslint/unified-signatures': 'error',
      'arrow-parens': [
          'off',
          'always'
      ],
      'brace-style': [
          'error',
          'stroustrup'
      ],
      'comma-dangle': 'error',
      'complexity': 'off',
      'constructor-super': 'error',
      'curly': 'error',
      'eqeqeq': [
          'error',
          'always'
      ],
      'guard-for-in': 'error',
      'id-blacklist': [
          'error',
          'any',
          'Number',
          'number',
          'String',
          'string',
          'Boolean',
          'boolean',
          'Undefined',
          'undefined'
      ],
      'id-match': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-internal-modules': 'error',
      'import/order': 'off',
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      'jsdoc/newline-after-description': 'error',
      'max-classes-per-file': [
          'off',
          1
      ],
      'max-len': [
          'error',
          {
              'code': 201
          }
      ],
      'new-parens': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-console': 'error',
      'no-debugger': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-fallthrough': 'off',
      'no-invalid-this': 'off',
      'no-irregular-whitespace': 'error',
      'no-multiple-empty-lines': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-redeclare': 'error',
      'no-return-await': 'error',
      'no-sequences': 'error',
      'no-shadow': 'off',  // use the typescript version
      '@typescript-eslint/no-shadow': [
          'error',
          {
              ignoreTypeValueShadow: true
          }
      ],
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-labels': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'one-var': [
          'error',
          'never'
      ],
      'prefer-arrow/prefer-arrow-functions': [
          'warn',
          {
              'disallowPrototype': false,
              'singleReturnOnly': true,
              'allowStandaloneDeclarations': true,
              'classPropertiesAllowed': false
          }
      ],
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'radix': 'error',
      'space-before-function-paren': [
          'error', {
              'asyncArrow': 'always',
              'named': 'ignore'
          }
      ],
      'space-in-parens': [
          'error',
          'never'
      ],
      'spaced-comment': [
          'error',
          'always',
          {
              'markers': [
                  '/'
              ]
          }
      ],
      'use-isnan': 'error',
      'valid-typeof': 'off'
  }
};