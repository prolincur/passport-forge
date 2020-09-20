# passport-forge

Autodesk Forge three-legged authentication strategy for [Passport](http://passportjs.org/).

This module lets you authenticate with Autodesk Forge using OAuth 2.0 in your
Node.js applications.


## Install

    $ npm install passport-forge

## Usage

#### Configure Strategy

The Autodesk Forge three-legged authentication strategy authenticates users using 
a third-party account and OAuth 2.0 tokens.  The provider's client identifer and secret,
are specified as options.  The strategy requires a `verify` callback,
which receives an access token and profile, and calls `done` providing a user.
  `var ForgeOAuth2Strategy = require('passport-forge').Strategy

    passport.use(new ForgeOAuth2Strategy({
        authorizationURL: 'https://developer.api.autodesk.com/authentication/v1/authenticate',
        tokenURL: 'https://developer.api.autodesk.com/authentication/v1/getToken',
        clientID: EXAMPLE_CLIENT_ID,
        clientSecret: EXAMPLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/example/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ exampleId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));`

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'forge'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    `app.get('/auth/example',
      passport.authenticate('forge'));

    app.get('/auth/example/callback',
      passport.authenticate('forge', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });`

## Related Modules

- [passport-oauth2](https://github.com/jaredhanson/passport-oauth2) — OAuth 2.0 authentication strategy
- [OAuth2orize](https://github.com/jaredhanson/oauth2orize) — OAuth 2.0 authorization server toolkit

## Tests

    $ npm install

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) Prolincur Technologies LLP <[https://prolincur.com/](https://prolincur.com/)>
