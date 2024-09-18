import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
// import generalController from './controllers/generalcontroller.js';
// import { createClient } from '@supabase/supabase-js';
import userRoutes from './routes/userRoutes.js';
import session from 'express-session';
import passport from 'passport';
import { Profile, Strategy as GoogleStrategy } from 'passport-google-oauth20';

dotenv.config();

// const supabaseUrl = process.env.SUPABASE_URL || '';
// const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';

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
},
async (/*accessToken, refreshToken, */ profile: Profile, done: (error: any, user?: any) => void) => {
  
  done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/home');
  }
);

app.use(userRoutes);


app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);