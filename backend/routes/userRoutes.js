const express = require('express');
const { registerUser, authUser, getallUsers } = require('../controllers/userControllers');
const { protect } = require('../middlewares/authMiddleware');
const Router = express.Router();

Router.route('/').post(registerUser).get(protect,getallUsers);
Router.post('/login',authUser);



module.exports = Router;