import * as passport from 'passport'
import * as passportJWT from 'passport-jwt';
import config from './config'
import users from './users'

export default function () {
    const ExtractJwt = passportJWT.ExtractJwt;
    const strategy = new passportJWT.Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwtSecret,
    }, (payload, done) => {
        const user = users[payload.id];
        return (user) ?
            done(null, { id: user.id }) :
            done(new Error("User not found"), null);
    });
    passport.use(strategy);

    return {
        authenticate() {
            return passport.authenticate("jwt", config.jwtSession);
        },
        initialize() {
            return passport.initialize();
        },
    };
}