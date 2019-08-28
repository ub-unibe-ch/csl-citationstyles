module.exports = {
  csl: "./unibe-english-literature/unibe-english-literature.csl",
  libraries: ["./unibe-english-literature/corpus.json"],
  suites: ["./unibe-english-literature/unibe-english-literature.tests.yaml"]
};

const { jestCSL } = require('jest-csl');
jestCSL(module.exports);