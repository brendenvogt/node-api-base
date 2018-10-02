class AuthLoginRequestContract {
    username: string;
    password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

export = AuthLoginRequestContract;