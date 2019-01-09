const passport = require('passport');

module.exports = express => {
    const router = express.Router();

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }


    router.get('/secret',  isLoggedIn, (req, res) => {
        res.send('Here you go, a secret');
    });

    router.get('/login', (req, res) => {
        res.sendFile(__dirname + '/login.html');
    });

    router.post('/login', passport.authenticate('local-login', {
        failureRedirect: "/error/unauthorized"
    }), 
        (req, res) => {
            req.session.save(() => {
                res.redirect('/')
            })
        }
    );

    router.get('/signup', (req, res) => {
        res.sendFile(__dirname + '/signup.html');
    });
    
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/error/duplicated'
    }));

    router.get('/error/unauthorized', (req, res) => {
        res.send('You are not logged in!');
    });

    router.get('/error/duplicated', (req, res) => {
        res.send('Username has already been taken');
    });

    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });

    router.get("/auth/facebook",passport.authenticate('facebook',{
        scope: ['user_friends', 'manage_pages'] 
    }));
    router.get("/auth/facebook/callback",passport.authenticate('facebook',{
        failureRedirect: "/"
    }),(req,res)=>res.redirect('/secret'));

    return router;
};
