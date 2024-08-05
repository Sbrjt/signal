module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react' // You may not need this if you’re not using React-specific features
	],
	plugins: ['module:@preact/signals-react-transform']
}
