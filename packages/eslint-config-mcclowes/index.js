module.exports = {
	"extends": "react-app",

	"globals": {
		"R": true,
		"React": true,
		"Consts": true,
		"plog": true,
		"__DEV__": true,
		"graphql": true,
	},

	"plugins": [
		"react",
	],

	"rules": {
		"array-bracket-spacing": ["warn", "always",],
		"semi": ["warn", "always"],
		"comma-dangle": ["warn", "always",],
		"comma-spacing": ["warn", { "before": false, "after": true }],
		"guard-for-in": "off",
		"indent": ["warn", "tab",],
		"lines-around-directive": ["warn", "always",],
		"quotes": ["warn", "double"],
		"object-curly-spacing": ["warn", "always",],
		"space-infix-ops": ["warn",],
		"template-curly-spacing": ["warn", "always",],
		
		"react/jsx-curly-spacing": ["warn", "always",],
		"react/jsx-curly-spacing": ["warn", "always"],
		"react/jsx-equals-spacing": ["warn", "always",],
		"react/jsx-first-prop-new-line": ["warn", "multiline",],
		"react/jsx-indent-props": ["warn", "tab",],
		"react/jsx-indent": ["warn", "tab",],

		"no-unused-vars": [
			"warn",
			{
				"argsIgnorePattern": "_+",
				"varsIgnorePattern": "_+",
				"ignoreRestSiblings": true,
			},
		],

		"object-property-newline": [
			"warn",
			{
				"allowMultiplePropertiesPerLine": true,
			},
		],

		"no-unused-expressions": [
			"warn",
			{
				"allowShortCircuit": true,
				"allowTernary": true,
				"allowTaggedTemplates": true,
			},
		],
	},
};
