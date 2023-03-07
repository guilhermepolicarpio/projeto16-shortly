module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'plugin:react/recommended',
        'google',
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
    ],
    'rules': {
        'valid-jsdoc': 'off',
        'require-jsdoc': 0,
        'indent': ['error', 4],
        'object-curly-spacing': ['error', 'always'],
        'max-len': ['error', { 'code': 120 }],
        'new-cap': 'off',
    },
};
