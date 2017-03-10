module.exports = [
	{
		test: /\.js?$/,
		exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
	},
];
