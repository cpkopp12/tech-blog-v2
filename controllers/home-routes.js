//DECLARATIONS: router -------------
const router = require('express').Router();

//HOMEROUTES ==========================
router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        post_text: "i is queen and blogger",
        title: "test post",
        created_at: new Date(),
        comments: [{},{}],
        user: {
            username: 'user1'
        }
    });
});

//EXPORT ROUTER ------
module.exports = router;