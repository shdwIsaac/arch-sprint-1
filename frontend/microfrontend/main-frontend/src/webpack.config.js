module.exports = {
    name: "mainApp",
    remotes: {
        "auth": "auth@http://example.com/auth/remoteEntry.js",
    },
    shared: ["react", "react-dom"]
    };     