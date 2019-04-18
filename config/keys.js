const {
    TOKEN_SECRET: tokenSecret = "my-super-secret-key",
    REFRESH_TOKEN_SECRET: refreshTokenSecret = "my-super-secret-key"
} = process.env;

const keys = {
    tokenSecret,
    refreshTokenSecret,
};

module.exports = keys;