import app from './app';
import db from './db';
import logger from './logger';

const port = process.env.PORT || 4000;

app.listen(port, async () => {
  logger.info(`Listening on port ${port}`);

  // IF DB ERROR ->
  // await db.sync({ alter: true, force: true });
  // THEN RESTART APP
  //                             !!! IT DELETES ALL DATA !!!
  
  // FOR DEVELOPMENT USE THIS ->
  await db.sync({ alter: true, force: false });

  // FOR PRODUCTION USE THIS ->
  // await db.sync({ alter: false, force: false });
  logger.info('DB has been initialized');
});
