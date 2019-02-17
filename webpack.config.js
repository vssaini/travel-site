var path = require('path');

module.exports = {
	mode: 'production',
	entry: './app/assets/scripts/App.js',
	output: {
		path: path.resolve(__dirname,"./app/temp/scripts"),
		filename: "App.js"
	},
	module: {
		rules: [
		{
			test: /\.m?js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options:{
					presets: ['@babel/preset-env']
				}
			}    	

		}
		]
	}
}