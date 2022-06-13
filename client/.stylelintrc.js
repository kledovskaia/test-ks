module.exports = {
    extends: ['stylelint-config-recess-order'],
    plugins: ['stylelint-order'],
    overrides: [
      {
        files: ['**/*.scss'],
        customSyntax: 'postcss-scss',
      },
    ],
  }