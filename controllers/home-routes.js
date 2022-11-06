//DECLARATIONS: router, db connection, model object -------------
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

//HOMEROUTES ==========================
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'post_text', 'title', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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
            //unpack dbData object
            const posts = dbData.map(post => post.get({ plain: true }))
            res.render('homepage', { posts, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//login route: /login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

//single post page: /post/:id
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: { id: req.params.id },
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
            if (!dbData) {
                res.status(404).json({ message: 'No post found with this id'});
            }
            //unpack dbData
            const post = dbData.get({ plain: true });

            res.render('single-post', { post, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//EXPORT ROUTER ------
module.exports = router;