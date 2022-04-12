const usersRouter = require('express').Router();
const { celebrate } = require('celebrate');
const {
  getUsers,
  getUserById,
  getCurrentUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');
const {
  userProfileSchema,
  userAvatarSchema,
  userIdSchema,
} = require('../middlewares/validation');

usersRouter.get('/', getUsers);
usersRouter.get('/me', getCurrentUser);
usersRouter.get('/:userId', celebrate(userIdSchema), getUserById);
usersRouter.patch('/me', celebrate(userProfileSchema), updateUserProfile);
usersRouter.patch('/me/avatar', celebrate(userAvatarSchema), updateUserAvatar);

module.exports = usersRouter;
