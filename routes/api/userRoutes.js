const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController.js');

router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
    .route('/:userId')
    .getSingleUser
    .updateUser
    .delete(deleteUser);

module.exports = router;