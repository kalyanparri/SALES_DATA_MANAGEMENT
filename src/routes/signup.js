const router = require('express').Router();

router.post('/', (req, res, next)=>{

    const { firstName, lastName, username, password } = req.body;
    res.send('hi');
})

module.exports = router;