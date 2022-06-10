require('dotenv').config();
import express from 'express';
import cors from 'cors';
import consola from 'consola';

const app = express();

// NOTE: built-in middleware //
app.use(
  express.json({
    limit: '100mb',
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(cors());

// NOTE: * custom middleware * //
//app.use(async (req, res, next) => {
//  req.body = {
//    ...req.body,
//  };
//  req.context = {
//    models,
//    me: await models.User.findByLogin('giovankes'),
//  };
//  next();
//});

// NOTE: * Routes * //

//app.use('/session', routes.session);
//app.use('/users', routes.user);
//app.use('/messages', routes.message);
//app.use('/transport', routes.transport);

//connectDb().then(async () => {
//  app.listen(PORT || 261120, () => {
//    consola.info(`app is listening on port: ${PORT}`);
//  });
//});

// NOTE: * seed the database * //

// seed();
//
//NOTE: * hooks * //
//spotify();
//spotify_hook();

app.listen(12345, () => {
  consola.info(`app is listening on port: 261120`);
});
