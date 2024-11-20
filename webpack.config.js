const path = require('path')

const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		splide: path.resolve(__dirname, 'node_modules/@splidejs/splide/dist/js/splide.min.js'), // отдельный бандл для Splide
		// при вложенности - добавить пути здесь
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'docs')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	optimization: {
		minimize: false, // Включает минификацию
	},
	externals: {
		splide: 'Splide'
	}
};

module.exports = config;
