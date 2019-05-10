const passportHelper = {
    /**
     * Login Required middleware.
     */
    isAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/login');
    },
    
    /**
     * Authorization Required middleware.
     */
    isAuthorized: (req, res, next) => {
        const provider  = req.path.split('/').slice(-1)[0];
        const token     = req.user.tokens.find(token => token.kind === provider);

        if (token) {
            next();
        } else {
            res.redirect(`/auth/${provider}`);
        }
    },
};

module.exports = passportHelper;
