//DECLARATIONS: router, routes -----------------------
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

//SET ROUTER ==================
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

//catch
router.use((req, res) => {
    res.status(404).end();
});

//EXPORT ROUTER -----------------
module.exports = router;
