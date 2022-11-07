//DECLARATIONS; router, db connection, model object, isAuth middleware --------------
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const isAuth = require('../utils/auth');

//DASHBOARD ROUTES ======================
//render dashboard: /dashboard/
router.get('/', isAuth, (req, res) => {
    Post.findAll({
        where: { user_id: req.session.user_id }, //use id stored in session
        attributes: ['id','post_text','title','created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id','comment_text','post_id','user_id','created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbData => {
            //unpack array of objects in dbData
            const posts = dbData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//EXPORT ROUTER ----------------------
module.exports = router;