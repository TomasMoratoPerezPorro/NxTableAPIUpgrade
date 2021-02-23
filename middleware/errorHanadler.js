const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  switch (err.message) {
    case 'Email is already registered':
      res.status(500).json({ errors: [{ msg: err.message + ': ' + req.body.email }] });
      break;
    case 'Invalid email':
      res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
      break;
    case 'Invalid password':
      res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
      break;

    default:
      res.status(500).json({ errors: [{ msg: err.message }] });
      break;
  }
};

module.exports = errorHandler;
