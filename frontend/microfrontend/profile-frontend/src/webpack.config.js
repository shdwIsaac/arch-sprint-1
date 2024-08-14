module.exports = {
    name: "profile",
    filename: "remoteEntry.js",
    exposes: {
        './EditAvatarPopup': './src/EditAvatarPopup',
	'./EditProfilePopup': './src/EditProfilePopup',
    },
    shared: ["react", "react-dom"]
    }; 