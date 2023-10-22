module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": ["standard-with-typescript", "plugin:react/recommended", "plugin:storybook/recommended"],
  "overrides": [{
    "env": {
      "node": true
    },
    "files": [".eslintrc.{js,cjs}"],
    "parserOptions": {
      "sourceType": "script"
    }
  },
    {
      files: ['**/src/**/*.{test,stories}.{ts, tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off'
      }
    }],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["react", "@typescript-eslint", "i18next", "react-hooks"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/naming-convention": "warn",
    "i18next/no-literal-string": ["error", {
      markupOnly: true
    }],
    "@typescript-eslint/ban-ts-comment": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  },
  ignorePatterns: ['.eslintrc.js'],
};