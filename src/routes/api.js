const salesRouter = require('./sales.js');
const signupRouter = require('./signup.js');
const loginRouter = require('./login.js');
const uploadHistoryRouter = require('./upload-history.js');
const apiRouter = require('express').Router();
const replicaApp = process.env.APP_NAME;

apiRouter.get('/', (req, res)=>{
  res.send(`${replicaApp} server instance response`);
})

apiRouter.use('/signup', signupRouter);
apiRouter.use('/login', loginRouter);
apiRouter.use('/sales', salesRouter);
apiRouter.use('/upload-history', uploadHistoryRouter);

module.exports = apiRouter;