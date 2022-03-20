const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const loadDB = require('./dummyData/db_loader.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {

  await loadDB();

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

