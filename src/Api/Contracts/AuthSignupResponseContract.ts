import UserContract from "./UserContract";
import AuthTokenResponseContract from "./AuthTokenResponseContract";

class AuthSignupResponseContract {
    user: UserContract;
    token: AuthTokenResponseContract;
    constructor(user: UserContract, token: AuthTokenResponseContract) {
        this.user = user;
        this.token = token;
    }
}

export = AuthSignupResponseContract;