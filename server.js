'use strict';

const express = require('express');

const router = express.Router();

/**
 * Endpoint simple que freeCodeCamp usa en varios retos
 * (queda montado en myApp.js con app.use('/_api', router))
 */
router.get('/hello', (req, res) => {
  res.type('text').send('hello');
});

/**
 * Endpoint informativo (seguro) para depurar sin tocar internals de Express.
 * Evita usar app._router.stack (eso suele romper con cambios de Express/Node).
 */
router.get('/status', (req, res) => {
  res.json({
    ok: true,
    time: new Date().toISOString()
  });
});

module.exports = router;