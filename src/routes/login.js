const router = require('express').Router();

router.post('/', (req, res, next)=>{
    const { username, password } = req.body;
    //  res.redirect('/profile');
})

module.exports = router;