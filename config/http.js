require('dotenv').config()

module.exports.http = {

  middleware: {

    order: [
      'cookieParser',
      'session',
      'bodyParser',
      'compress',
      'poweredBy',
      'router',
      'www',
      'favicon',
      'expresssession',
      'oktaInit'
    ],


    expresssession: (function () {

      var session = require("express-session");
      return session({
        secret: "ladhnsfolnjaerovklnoisag093q4jgpijbfimdposjg5904mbgomcpasjdg'pomp;m",
        resave: true,
        saveUninitialized: false
      });

    })(),

    oktaInit: (function () {

      var ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;

      var oidc = new ExpressOIDC({
        issuer: process.env.OKTA_URL_BASE + "/oauth2/default",
        client_id: process.env.OKTA_CLIENTID,
        client_secret: process.env.OKTA_CLIENT_SECRET,
        appBaseUrl: process.env.OKTA_APP_BASE_URL,
        scope: 'openid profile',
        routes: {
          login: {
            path: "/login"
          },
          loginCallback: {
            path: "/authorization-code/callback",
            afterCallback: "/Dashboard"
          }
        }
      })

      return oidc.router;

    })()

  },

};
