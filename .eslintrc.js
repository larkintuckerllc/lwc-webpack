module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['lwc', require.resolve('@lwc/engine')],
        ],
        extensions: ['.js', '.json'],
      },
    },
  },
};
