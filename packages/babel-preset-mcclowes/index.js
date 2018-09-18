module.exports = {
	presets: [
		require.resolve("babel-preset-env"),
		require.resolve("babel-preset-react"),
	],
	plugins: [
		require.resolve("babel-plugin-add-react-displayname"),
		require.resolve("babel-plugin-inline-react-svg"),
		require.resolve("babel-plugin-preval"),
		require.resolve("babel-plugin-syntax-dynamic-import"),
		require.resolve("babel-plugin-transform-class-properties"),
		require.resolve("babel-plugin-transform-decorators-legacy"),
		require.resolve("babel-plugin-transform-export-extensions"),
		require.resolve("babel-plugin-transform-regenerator"),

		//Optional
		require.resolve("plugin-proposal-optional-chaining"),

		[	
			require.resolve("babel-plugin-styled-components"),	
			{ "ssr": true },	
		],

		[
			require.resolve("babel-plugin-transform-object-rest-spread"),
			{ "useBuiltIns": true }
		],
		[
			require.resolve("babel-plugin-styled-components"), 
			{
				"displayName": true,
			},
		],
		[
			require.resolve("babel-plugin-transform-runtime"),
			{
				polyfill: false,
			},
		],

		//Optional
		require.resolve("plugin-proposal-optional-chaining"),
	],
};
