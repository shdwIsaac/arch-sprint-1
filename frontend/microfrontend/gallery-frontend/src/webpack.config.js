module.exports = {
    name: "gallery",
    filename: "remoteEntry.js",
    exposes: {
        './AddPlacePopup': './src/AddPlacePopup',
	'./Card': './src/Card',
	'./ImagePopup': './src/ImagePopup',
	'./PopupWithForm': './src/PopupWithForm',
    },
    shared: ["react", "react-dom"]
    }; 