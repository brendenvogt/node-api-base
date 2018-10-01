class AuthTokenResponseContract {
    constructor(authToken, refreshToken) {
        this.authToken = authToken;
        this.refreshToken = refreshToken;
    }
}

module.exports = AuthTokenResponseContract;