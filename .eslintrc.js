const baseRules = {
  // Standard Indentation of 2 spaces
  indent: [
    'error',
    2,
    {
      SwitchCase: 1,
    },
  ],
  'max-len': [
    'warn',
    100,
    2,
    {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],
  'comma-dangle': [
    'warn',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    },
  ],
  // Sometimes this is useful to give meaning to private props
  'no-underscore-dangle': 'off',
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      // Forcing Destructuring for assignment expressions
      // can lead to un-cleaner/messier code so we turn this off.
      /* Example
            // With On
            const [_, name] = this.props.data.field.split('.')
            this.name = name;
            // With Off
            this.name = this.props.data.field.split('.')[1];
        */
      AssignmentExpression: {
        array: false,
        object: false,
      },
    },
  ],
  // This rule is wrong most of the time
  'import/no-extraneous-dependencies': 'off',
  'import/prefer-default-export': 'off',
  'import/extensions': 'off',
  // Always wrap arrow functions in parens. No x => x
  'arrow-parens': ['error', 'always'],
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
      // Primarily to support emotions "injectGlobal" template
      allowTaggedTemplates: true,
    },
  ],
  'no-unused-vars': [
    'error',
    {
      // Allow "unused" underscore.
      // const isOld = (_name, age) => age > 1;
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
    },
  ],
  'no-plusplus': [
    'error',
    {
      allowForLoopAfterthoughts: true,
    },
  ],
  // It is useful to add comments into invocation occasionally.
  'function-paren-newline': 'off',
  // Should use a common logger for logs
  // This could even be a wrapper around `console.log`
  'no-console': 'warn',
  // Inline requires can be useful in node for
  // dynamically loading a module.
  'global-require': 'off',
  // Use prettier if you want something this strict
  'lines-between-class-members': 'off',
  // Running eslint --fix with this on removes
  // comments inside of line break
  'implicit-arrow-linebreak': 'off',
  // Require consistent line-break or no line-breaks
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
      ImportDeclaration: { consistent: true },
      ExportDeclaration: { consistent: true },
    },
  ],
  // Use Prettier for brace formatting
  'brace-style': 'off',
  // Should be using something like prettier for strict formatting
  'operator-linebreak': 'off',
  // Shadow variables can be confusing but shouldn't be errors
  'no-shadow': 'warn',
  // Turn off Airbnb restricted syntax
  // We don't have the same restrictions.
  'no-restricted-syntax': 'off',
  // Use what makes sense.
  // Such as: Camel case for vars, snake-case for constants
  camelcase: 'off',
  // This is fine an can lead to clearer code
  // Should be case by case in a code review.
  'no-param-reassign': 'off',
  // Throwing errors is preferred but not required
  'no-throw-literal': 'off',
  'prefer-promise-reject-errors': 'off',
  // Choice to use `const` if var isn't reassigned.
  'prefer-const': [
    'error',
    {
      // Destructuring is excluded from this since you only get one keyword.
      destructuring: 'all',
    },
  ],
  // Use Typescript to catch return types.
  'consistent-return': 'off',
  'max-classes-per-file': 'off',
  // Typescript handles module resolutions
  'import/no-unresolved': 'off',

  // allow use of bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  'no-bitwise': 'off',
};

const typescriptRules = {
  // Turn off default and use @typescript's no-unused-vars.
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      // Ignore variables that start with underscores
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': [
    'error',
    {
      default: 'generic',
    },
  ],
  '@typescript-eslint/ban-types': 'error',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  // Use Typescript's no-use-before-define to avoid false positives
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      // Types can appear anywhere
      typedefs: false,
      ignoreTypeReferences: true,
    },
  ],
  '@typescript-eslint/no-shadow': ['warn'],
};

const reactRules = {
  // Standard Indentation of 2 spaces
  'react/jsx-indent': ['error', 2],
  'react/jsx-indent-props': ['error', 2],
  // This is up the user, and code reviews.
  // Single lookups shouldn't require an intermediate variable
  'react/destructuring-assignment': 'off',
  // This could lead to react no rerendering when it should.
  // index should be used if nothing else unique is available.
  'react/no-array-index-key': 'warn',
  'react/require-default-props': 'off',
  // You can use jsx outside of a file.jsx file
  'react/jsx-filename-extension': 'off',
  // You would need componentDidMount setState for Server Side Rendering
  'react/no-did-mount-set-state': 'off',
  // This is fine for simple text.
  // Use prettier to strict format your code
  'react/jsx-one-expression-per-line': 'off',
  // The JSX A11y Docs explain that Static elements such as <div> and <span>
  // should not have mouse/keyboard event listeners.
  // Instead use something more semantic, such as a button or a link.
  // However, there are often times when you truly do need to interact with
  // the layout and things like inputs and buttons are not suitable.
  // (e.g. - drag and drop elements in an admin panel, loosing focus on a modal or popover, etc.)
  'jsx-a11y/no-static-element-interactions': 'off',
  'jsx-a11y/click-events-have-key-events': 'off',
  // Allowing special link prop "to" not to throw error. (https://github.com/ReactTraining/react-router/issues/5598)
  // TODO: Remove once https://github.com/airbnb/javascript/pull/1648 has been released
  'jsx-a11y/anchor-is-valid': [
    'error',
    {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    },
  ],
  // Allow prop spreading
  'react/jsx-props-no-spreading': 'off',
  // Either syntax is fine
  'react/jsx-fragments': 'off',
  // No need to force placement
  'react/static-property-placement': 'off',
  // Use Prettier
  'react/jsx-curly-newline': 'off',
  // Doesn't really matter where you initialize state.
  // If you are trying the catch state errors, use Typescript.
  'react/state-in-constructor': 'off',
  // Enable rules of hooks
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'error',
};

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:css-modules/recommended',
  ],
  plugins: ['css-modules'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    document: true,
    history: true,
    window: true,
  },
  rules: {
    ...baseRules,
    ...typescriptRules,
    ...reactRules,
    'react/prop-types': 'off',
  },
};
