//production keys here
module.exports = {
    googleClientID : process.env.GOOGLE_CLIENT_ID,
   
    googleClientSecret : process.env.GOOGLE_CLIENT_SECRET,
    instaClientID: process.env.INSTAGRAM_CLIENT_ID,
    instaClientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    facebookAppID: process.env.FACEBOOK_APP_ID,
    facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
    jwtSecret: process.env.JWT_SECRET,
    mongoURI: process.env.MONGO_URI,
   
    cookieKey: process.env.COOKIE_KEY,
    emailKey: process.env.EMAIL_KEY,
    emailSecret: process.env.EMAIL_SECRET,
    
    sendGridKey: process.env.SEND_GRID_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN
}

