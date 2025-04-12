const router = require('express').Router();

router.put('/', (req, res) => {
    res.send('added sales');
})

router.get('/', (req, res) => {
    res.send('fetched sales');
})

module.exports = router;