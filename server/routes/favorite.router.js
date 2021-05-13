const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM favorites;';
  pool.query(queryText)
    .then((response) => { res.send(response.rows) })
    .catch((error) => {
      console.log('ERROR in GET favorites', error);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post('/', (req, res) => {
  const newFavorite = req.body;
  const queryText = `INSERT INTO favorites ("title", "image_id", "url")
                        VALUES ($1, $2, $3);`;
  const queryValues = [
    newFavorite.title,
    newFavorite.id,
    newFavorite.url
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201) })
    .catch((error) => {
      console.log('ERROR in POST favorites', error);
      res.sendStatus(500);
    });
});


// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image

  queryText = `UPDATE favorites SET category_id=$1 WHERE id=$2;`;

  const queryValues = [
    req.body,
    req.params.favId
  ];

  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200) })
    .catch((error) => {
      console.log('Error in PUT favorites/category', error);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete('/:favId', (req, res) => {

  queryText = `DELETE FROM "favorites" WHERE "id"=$1;`;

  pool.query(queryText, [req.params.favId])
    .then(() => { res.sendStatus(200) })
    .catch((error) => {
      console.log('Error in DELETE from favorites', error);
      res.sendStatus(500);
    });
});

module.exports = router;
