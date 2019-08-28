module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "env": {
    "jest": true
  },
  "rules": {
    "no-use-before-define": "off",
    "react/state-in-constructor": "off",
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['self'] }],
    "module-resolver/use-alias": 2,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/prop-types": "off",
    "comma-dangle": "off",
    "no-restricted-imports": [
      "error",
      {
        "paths": [
          {
            "name": "styled-components",
            "message": "Please import from styled-components/macro."
          }
        ],
        "patterns": [
          "!styled-components/macro"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": true,
        "printWidth": 100,
        "trailingComma": "all",
        "tabWidth": 2,
        "arrowParens": "always"
      }
    ]
  },
  "plugins": [
    "prettier",
    "module-resolver"
  ],
  "settings": {
    "import/resolver": {
      "babel-module": {
        "screens": "./src/containers",
        "@shared": "./src/@shared",
        "assets": "./src/assets",
        "stores": "./src/stores",
        "config": "./src/config",
        "navigation": "./src/navigation",
        "icons": "./src/assets/icons",
        "image": "./src/assets/image"
      }
    }
  },
  "globals": {
    "fetch": false
  }
}