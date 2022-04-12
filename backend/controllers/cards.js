const Card = require('../models/card');

const {
  NotFoundError,
  ForbiddenError,
} = require('../utils/customErrors');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => res.send({ card }))
    .catch(next);
};

module.exports.deleteCardById = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка с указанным id не найдена.');
      }
      return card;
    })
    .then((card) => {
      if (req.user._id !== card.owner.toString()) {
        throw new ForbiddenError('Карточка не принадлежит пользователю');
      }
      return Card.findByIdAndRemove(card._id);
    })
    .then((deletedCard) => res.send({ deletedCard }))
    .catch(next);
};

module.exports.addLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка с указанным id не найдена.');
      }
      return res.send(card);
    })
    .catch(next);
};

module.exports.removeLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка с указанным id не найдена.');
      }
      return res.send(card);
    })
    .catch(next);
};
