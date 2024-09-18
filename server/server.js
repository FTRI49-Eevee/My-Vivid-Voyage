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
