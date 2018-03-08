// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '193822021391121', //  App ID
        'clientSecret'  : '7cdc4bb5114d3047f243ee908c9f0330', //  App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
        // 'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        // 'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'googleAuth' : {
        'clientID'      : '228396924815-8bu8ui0c4a7jope2cv8vsblv152hdoav.apps.googleusercontent.com',
        'clientSecret'  : 'L36VQx6HqqU4Kr5dMKFkWFt9',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
