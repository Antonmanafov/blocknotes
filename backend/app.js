import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session'
import sessionFileStore from 'session-file-store';
import config from 'config'
const PORT = process.env.PORT || 5001
import morgan from 'morgan';
import path from 'path'
import dotenv from "dotenv";
dotenv.config()

const app = express()

import addBlocknoteRouter from './routes/addBlocknote.js'
import loadBlocknotesRouter from './routes/loadBlocknotes.js'
import deleteBlocknoteRouter from './routes/deleteBlocknote.js'
import editBlocknoteRouter from './routes/editBlocknote.js'
import addCardRouter from './routes/addCard.js'
import deleteCardRouter from './routes/deleteCard.js'
import editCardBodyRouter from './routes/editCardBody.js'
import editCardHeadRouter from './routes/editCardHead.js'
import addTagRouter from './routes/addTag.js'
import registrationRouter from './routes/registration.js'
import logoutRouter from './routes/logout.js'
import loginRouter from './routes/login.js'
import updateUserRouter from './routes/updateUser.js'

app.use(morgan())

const FileStore = sessionFileStore(session);

app.use(express.static(path.resolve('../frontend/build')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  saveUninitialized: false,
  secret: 'ddoijsadiosadjoiadoisafjqwdpoqwdpoiqwdpoiqw',
  store: new FileStore({
    // Шифрование сессии
    secret: 'ddoijsadiosadjoiadoisafjqwdpoqwdpoiqwdpoiqw',
  }),
  key: 'user_sid',
  cookie: {
    maxAge: 3600000,
    httpOnly: true
}
}))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
 

app.listen(PORT, () => {
  mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  console.log('connecting')
  console.log(PORT)
})


app.use('/addBlocknote', addBlocknoteRouter)
app.use('/loadBlocknotes', loadBlocknotesRouter)
app.use('/deleteBlocknote', deleteBlocknoteRouter)
app.use('/editBlocknote', editBlocknoteRouter)
app.use('/addCard', addCardRouter)
app.use('/deleteCard', deleteCardRouter)
app.use('/editCardBody', editCardBodyRouter)
app.use('/editCardHead', editCardHeadRouter)
app.use('/addTag', addTagRouter)
app.use('/registration', registrationRouter)
app.use('/logout', logoutRouter)
app.use('/login', loginRouter)
app.use('/updateUser', updateUserRouter)

export default app
