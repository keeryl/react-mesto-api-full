const { Joi, Segments } = require('celebrate');
const validator = require('validator');

const loginSchema = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().custom((value, helper) => {
      if (!validator.isEmail(value)) {
        return helper.error('string.notEmail');
      }
      return value;
    }).messages({
      'any.required': 'Не указан e-mail',
      'string.notEmail': 'Указан некорректный e-mail',
    }),
    password: Joi.string().required()
      .messages({
        'any.required': 'Не указан пароль',
      }),
  }),
};

const userSchema = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().custom((value, helper) => {
      if (!validator.isURL(value, { require_protocol: true })) {
        return helper.error('string.notURL');
      }
      return value;
    }).messages({
      'string.notURL': 'Указан некорректный адрес URL',
    }),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
};

const cardSchema = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().custom((value, helper) => {
      if (!validator.isURL(value, { require_protocol: true })) {
        return helper.error('string.notURL');
      }
      return value;
    }).messages({
      'string.notURL': 'Указан некорректный адрес URL',
    }),
  }),
};

const userIdSchema = {
  [Segments.PARAMS]: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
};

const cardIdSchema = {
  [Segments.PARAMS]: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
};

const userProfileSchema = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
};

const userAvatarSchema = {
  [Segments.BODY]: Joi.object().keys({
    avatar: Joi.string().required().custom((value, helper) => {
      if (!validator.isURL(value, { require_protocol: true })) {
        return helper.error('string.notURL');
      }
      return value;
    }).messages({
      'string.NotURL': 'Указан некорректный адрес URL',
    }),
  }),
};

module.exports = {
  userSchema,
  loginSchema,
  userIdSchema,
  userProfileSchema,
  userAvatarSchema,
  cardIdSchema,
  cardSchema,
};
