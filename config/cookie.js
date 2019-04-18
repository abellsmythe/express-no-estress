const {
    COOKIE_MAX_AGE: maxAge = 86400000,
    COOKIE_KEYS: keys = "express-no-estress"
} = process.env;

const cookie = {
    maxAge: parseInt(maxAge, 10),
    keys: [keys],
};

module.exports = cookie;