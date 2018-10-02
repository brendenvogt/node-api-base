import UserContract from "./UserContract";
import AuthTokenResponseContract from "./AuthTokenResponseContract";

class AuthLoginResponseContract {
    user: UserContract;
    token: AuthTokenResponseContract;
    constructor(user: UserContract, token: AuthTokenResponseContract) {
        this.user = user;
        this.token = token;
    }
}

export = AuthLoginResponseContract;