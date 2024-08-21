module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
  arrowParens: 'always',
  jsxSingleQuote: false,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.ts, *.tsx', 
      options: {
        parser: 'typescript',
      },
    },
  ],
};