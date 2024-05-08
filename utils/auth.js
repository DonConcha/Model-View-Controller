const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  const withoutAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      next(); 
    } else {
      res.redirect('/');
    }
  };
  
  const apiAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.status(403).json({ msg: "Must be logged in to access this route" });
    } else {
      next(); 
    }
  };
  
  module.exports = { withAuth, withoutAuth, apiAuth };