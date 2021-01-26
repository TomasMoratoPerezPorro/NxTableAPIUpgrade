const { sequelize } = require('./models');
const express = require('express');
const app = express();

//Init Middleware
app.use(express.json({ extended: false }));

//Test Endpoint
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/restaurant', require('./routes/api/restaurant'));

//Look for a enviroment variable or run locally by default
const PORT = process.env.PORT || 5000;

//Pass the port and run a callback
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await sequelize.authenticate();
  console.log(`Database Connected`);
});
