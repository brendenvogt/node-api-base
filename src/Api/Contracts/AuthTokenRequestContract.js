class AuthTokenRequestContract {
    constructor(username, refreshToken) {
        this.username = username;
        this.refreshToken = refreshToken;
    }
}

module.exports = AuthTokenRequestContract;