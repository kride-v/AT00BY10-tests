// jest.config.js
export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],
  collectCoverageFrom: ["src/**/*.js"], // Tämä kertoo Jestille, että src-kansion kaikki .js-tiedostot seurataan
};
