const express = require('express');
const locationCtrl = require('./../controllers/location');

let router = express.Router();

router.post('/add',
  locationCtrl.add
);

router.post('/update',
  locationCtrl.update
);

router.delete('/remove/:location',
  locationCtrl.remove
);

module.exports = router;
