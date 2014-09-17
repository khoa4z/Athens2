// app/routes.js
module.exports = function(app, passport) {
   console.log('I am in App Routes');
	app.get('/', function(req, res) {
      console.log('it goes to /');
		res.render('login.html'); 
	});
	app.get('/login', function(req, res) {
      console.log('it goes to /login');
		res.render('login.html', { message: req.flash('loginMessage') }); 
	});
	// app.get('/signup', function(req, res) {
      // console.log('it goes to /');
		// res.render('signup.ejs', { message: req.flash('signupMessage') });
	// });
	// app.get('/profile', isLoggedIn, function(req, res) {
		// res.render('profile.ejs', {
			// user : req.user // get the user out of session and pass to template
		// });
	// });
	app.get('/logout', function(req, res) {
      console.log('LOGOUT');
		req.logout();
		res.redirect('/');
	});
   app.get('/auth/facebook', passport.authenticate('facebook'));
   app.get('/auth/facebook/callback', passport.authenticate('facebook', 
                                    { successRedirect: '/',
                                      failureRedirect: '/login' }));
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
   console.log('isLoggedIn');
	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();
   console.log('Redirect from isLoggedIn');
	// if they aren't redirect them to the home page
	res.redirect('/');
}