import express from 'express';
import dotenv from 'dotenv';
import generalController from './controllers/generalcontroller.js';
// import { createClient } from '@supabase/supabase-js';
import userRoutes from './routes/userRoutes.js';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';
const googleClientId = process.env.GOOGLE_CLIENT_ID || '';
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || '';
if (!googleClientId || !googleClientSecret) {
    throw new Error('Google Client ID and Client Secret must be provided in .env file');
}
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8080;
app.use(session({
    secret: process.env.SESSION_SECRET || '',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new GoogleStrategy({
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: 'http://localhost:8080/auth/google/callback',
    passReqToCallback: false,
}, async (accessToken, refreshToken, profile, done) => {
    done(null, profile);
}));
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
app.get('/auth/google', (req, res, next) => {
    console.log('Initiating Google Auth');
    next();
}, passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    console.log('oauth successfull', req.user);
    res.redirect('http://localhost:3000/home');
}, (err, req, res, next) => {
    console.error('Authentication error:', err);
    res.redirect('/');
});
app.use(userRoutes);
app.get('/getmap', generalController.getMap, (req, res) => {
    console.log('HIT! /getmap');
    res.status(200).send(res.locals.getMap);
});
app.post('/savemap', generalController.saveMap, (req, res) => {
    console.log('HIT! /savemap');
    res.status(200).send(res.locals.saveMap);
});
app.get('/db', generalController.getData, (req, res) => {
    console.log('HIT! /db');
    res.status(200).send(res.locals.getData);
});
app.post('/db', generalController.saveData, (req, res) => {
    console.log('HIT! /db');
    res.status(200).send(res.locals.saveData);
});
app.use('/', (_req, res) => {
    res.status(404).send('Error page not found!');
});
app.use((err, _req, res, _next) => {
    const defaultErr = {
        log: 'An error was caught by the global error handler in server.ts',
        status: 500,
        message: {
            err: 'An error was caught by the global error handler in server.ts',
        },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
// import express, { Request, Response, NextFunction } from 'express';
// import dotenv from 'dotenv';
// import generalController from './controllers/generalcontroller.js';
// import userRoutes from './routes/userRoutes.js';
// import session from 'express-session';
// import { google } from 'googleapis';
// import crypto from 'crypto';
// dotenv.config();
// const googleClientId = process.env.GOOGLE_CLIENT_ID || '';
// const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || '';
// const googleRedirectUrl = 'http://localhost:8080/auth/google/callback';
// if (!googleClientId || !googleClientSecret) {
//   throw new Error('Google Client ID and Client Secret must be provided in .env file');
// }
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// const PORT = 8080;
// app.use(session({
//   secret: process.env.SESSION_SECRET || '',
//   resave: false,
//   saveUninitialized: true,
// }));
// // Create OAuth2 client
// const oauth2Client = new google.auth.OAuth2(
//   googleClientId,
//   googleClientSecret,
//   googleRedirectUrl
// );
// // Define scopes
// const scopes = [
//   'https://www.googleapis.com/auth/userinfo.profile',
//   'https://www.googleapis.com/auth/userinfo.email'
// ];
// // Redirect user to Google's OAuth 2.0 server
// app.get('/auth/google', (req, res) => {
//   const state = crypto.randomBytes(32).toString('hex'); // Generate a random state
//   req.session.state = state; // Store state in session
//   const authorizationUrl = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: scopes,
//     state: state
//   });
//   res.redirect(authorizationUrl);
// });
// // Handle the callback from Google
// app.get('/auth/google/callback', async (req, res) => {
//   // Verify state to prevent CSRF
//   if (req.query.state !== req.session.state) {
//     return res.status(403).send('State mismatch. Potential CSRF attack!');
//   }
//   const { tokens } = await oauth2Client.getToken(req.query.code);
//   oauth2Client.setCredentials(tokens);
//   // Now you can use oauth2Client to access Google APIs
//   const userInfoResponse = await google.oauth2('v2').userinfo.get({ auth: oauth2Client });
//   console.log('User info:', userInfoResponse.data);
//   // Redirect to your frontend
//   res.redirect('http://localhost:3000/home');
// });
// // Your existing routes
// app.use(userRoutes);
// app.get('/getmap', generalController.getMap, (req: Request, res: Response) => {
//   console.log('HIT! /getmap');
//   res.status(200).send(res.locals.getMap);
// });
// app.post('/savemap', generalController.saveMap, (req: Request, res: Response) => {
//   console.log('HIT! /savemap');
//   res.status(200).send(res.locals.saveMap);
// });
// app.get('/db', generalController.getData, (req: Request, res: Response) => {
//   console.log('HIT! /db');
//   res.status(200).send(res.locals.getData);
// });
// app.post('/db', generalController.saveData, (req: Request, res: Response) => {
//   console.log('HIT! /db');
//   res.status(200).send(res.locals.saveData);
// });
// app.use('/', (_req, res) => {
//   res.status(404).send('Error page not found!');
// });
// app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
//   const defaultErr = {
//     log: 'An error was caught by the global error handler in server.ts',
//     status: 500,
//     message: {
//       err: 'An error was caught by the global error handler in server.ts',
//     },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });
// app.listen(PORT, () =>
//   console.log(`Server listening on http://localhost:${PORT}`)
// );
