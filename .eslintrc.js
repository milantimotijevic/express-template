/* eslint-disable linebreak-style */
module.exports = {
	extends: 'airbnb',
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'script',
	},
	rules: {
		'jsx-a11y/href-no-hash': 'off',
		'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
		semi: 2,
		indent: [
			'error',
			'tab',
		],
		'import/no-unresolved': 0,
		'no-tabs': 0,
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		'no-param-reassign': [2, { props: false }],
		'max-len': [
			'error',
			{
				code: 200,
			},
		],
		'import/no-extraneous-dependencies': 0,
		'class-methods-use-this': 0,
		'no-console': 'off',
	},
	env: {
		node: true,
	},
};
