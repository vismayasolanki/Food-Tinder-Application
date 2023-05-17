const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { name, foodPreference, timeSlot } = req.body;
    const user = new User({ name, foodPreference,timeSlot });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get users with the same food preference
// router.get('/:foodPreference', async (req, res) => {
//   try {
//     const { foodPreference,timeSlot } = req.params;
//     const users = await User.find({ foodPreference,timeSlot});
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

router.get('/:foodPreference', async (req, res) => {
  try {
    const { foodPreference } = req.params;
    const { timeSlot } = req.query;

    let query = { foodPreference,timeSlot };

    // if (timeSlot) {
    //   query = { ...query, timeSlot };
    // }

    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users.' });
  }
});


module.exports = router;
