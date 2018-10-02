class AuthTokenResponseContract {
    authToken: string;
    refreshToken: string;
    constructor(authToken: string, refreshToken: string) {
        this.authToken = authToken;
        this.refreshToken = refreshToken;
    }
}

export = AuthTokenResponseContract;