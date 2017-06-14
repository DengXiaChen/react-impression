module.exports = {
    "extends": "react-impression",
    rules: {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": true, "peerDependencies": true}]
    },
    "globals": {
        "jest": true,
        "describe": true,
        "it": true,
        "expect": true,
    },
};
