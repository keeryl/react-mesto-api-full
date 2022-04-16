const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors, celebrate } = require('celebrate');
const cors = require('cors');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
require('dotenv').config({ debug: true });

const app = express();
const { PORT = 3000 } = process.env;

const { login, createUser } = require('./controllers/users');
const {
  userSchema,
  loginSchema,
} = require('./middlewares/validation');
const { errorHandler } = require('./middlewares/errorHandler');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { NotFoundError } = require('./utils/custom_errors/NotFoundError');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.use(cors());
// app.use(cors({
//   origin: 'http://keeryl-mesto.nomoredomains.work/'
// }));
app.use(bodyParser.json());
app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.post('/signin', celebrate(loginSchema), login);
app.post('/signup', celebrate(userSchema), createUser);
app.use(auth);
app.use('/cards', cardsRouter);
app.use('/users', usersRouter);
app.use((req, res, next) => next(new NotFoundError('Запрошенный роут не существует')));
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
