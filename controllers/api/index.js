//DECLARATIONS: router, routes --------
const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

//SET ROUTER =================================
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);


//EXPORT ROUTER --------------------------
module.exports = router;