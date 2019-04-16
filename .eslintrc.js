module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "commonjs": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 9,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "react/prop-types": 0,
    "no-console": 0
  }
};
