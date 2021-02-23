const unknownEndpoint = (req, res) => {
  throw new Error('Unknown endpoint');
};

module.exports = unknownEndpoint;
