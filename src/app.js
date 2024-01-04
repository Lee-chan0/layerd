import express from 'express';
import UsersRouter from './routes/users.router.js';
import OauthRouter from './routes/oauth.router.js';
import ErrorHandlingMiddleware from './middlewares/error-handling.middleware.js';
import './utils/deleteUserTask.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', [UsersRouter, OauthRouter]);
app.use(ErrorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});