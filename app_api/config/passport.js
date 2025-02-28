const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.use(
    new LocalStrategy(
        { usernameField: "email" },
        async (email, password, done) => {
            try {
                const user = await User.findOne({ email });

                // If no user found
                if (!user) {
                    return done(null, false, { message: "Incorrect email." });
                }

                // If password is invalid
                if (!user.validPassword(password)) {
                    return done(null, false, {
                        message: "Incorrect password.",
                    });
                }

                // If user is valid, return the user object
                return done(null, user);
            } catch(err) {
                return done(err);
            }
        }
    )
);
