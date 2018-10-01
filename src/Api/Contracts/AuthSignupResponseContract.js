class AuthSignupResponseContract {
    constructor(user, token) {
        this.user = user; // UserContract
        this.token = token; // AuthTokenResponseContract
    }
}

module.exports = AuthSignupResponseContract;