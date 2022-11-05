//DECLARATIONS: router, routes -----------------------
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')

//SET ROUTER ==================
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

//catch
router.use((req, res) => {
    res.status(404).end();
});

//EXPORT ROUTER -----------------
module.exports = router;
