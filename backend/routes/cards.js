const cardsRouter = require('express').Router();
const { celebrate } = require('celebrate');
const {
  getCards,
  createCard,
  deleteCardById,
  addLike,
  removeLike,
} = require('../controllers/cards');
const {
  cardSchema,
  cardIdSchema,
} = require('../middlewares/validation');

cardsRouter.get('/', getCards);
cardsRouter.post('/', celebrate(cardSchema), createCard);
cardsRouter.delete('/:cardId', celebrate(cardIdSchema), deleteCardById);
cardsRouter.put('/:cardId/likes', celebrate(cardIdSchema), addLike);
cardsRouter.delete('/:cardId/likes', celebrate(cardIdSchema), removeLike);

module.exports = cardsRouter;
