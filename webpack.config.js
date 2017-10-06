const webpack = require('webpack');
const path = require('path');

const config = {
	entry: path.resolve('src/index.js'),
	output:{
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}	
		]
	},

	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress:true,
		port:9000
	}
};
module.exports = config;