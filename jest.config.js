module.exports = {
  bail: true,
  coverageProvider: "v8",

  testMatch: [
    "<rootDir>/src/**/*.spec.js"     // ** (Qualquer pasta), * (Qualquer nome), spec (arquivo de teste)
  ],
}