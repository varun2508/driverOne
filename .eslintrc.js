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
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100
      }
    ]
  },
  "plugins": [
    "prettier",
    "module-resolver"
  ],
  "globals": {
    "fetch": false
  }
}