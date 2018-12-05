module.exports = router => {
    this.isLoggedIn = (req, res, next) => {
        return (req.isAuthenticated()) ? next() : res.redirect('/login');
    }

    router.get('/', (req, res) => res.render('index'));
    router.get('/login', (req, res) => res.render('login', { error: req.flash('error'), success: req.flash('success') }))
    router.get('/signup', (req, res) => res.render('signup', { error: req.flash('error')}));
    router.get('/chatroom', this.isLoggedIn, (req, res) => res.render('chatroom'));
}