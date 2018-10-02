class AuthTokenRequestContract {
    username: string;
    refreshToken: string;
    constructor(username: string, refreshToken: string) {
        this.username = username;
        this.refreshToken = refreshToken;
    }
}

export = AuthTokenRequestContract;