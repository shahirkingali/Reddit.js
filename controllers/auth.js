const jwt = require('jsonwebtoken');
...
// SIGN UP POST
app.post('/sign-up', (req, res) => {
  // Create User and JWT
  ...
    user
      .save()
      .then(() => {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: '60 days' });
        res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
        return res.redirect('/');
      });
  ...
...
// LOGOUT
 app.get('/logout', (req, res) => {
   res.clearCookie('nToken');
   return res.redirect('/');
 });
