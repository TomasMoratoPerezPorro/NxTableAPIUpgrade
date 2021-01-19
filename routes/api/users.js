const express = require('express');
const router = express.Router();

const { sequelize, User } = require('../../models');

// @route           POST api/users
// @description     Register a user
// @access          Public

router.post('/', async (req, res) => {
  const { name, role, restaurant } = req.body;
  try {
    const user = await User.create({
      name: name,
      role: role,
      restaurant: restaurant
    });
    res.json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route           GET api/users
// @description     Get a list of all users
// @access          Public

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route           GET api/users/:uuid
// @description     Get a list of all users
// @access          Public

router.get('/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({
      where: { uuid: uuid }
    });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
