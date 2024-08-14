module.exports = {
    name: "auth",
    filename: "remoteEntry.js",
    exposes: {
        './Login': './src/Login',
	'./Register': './src/Register',
	'./InfoTooltip': './src/InfoTooltip',

    },
    shared: ["react", "react-dom"]
    }; 