const express = require('express');
const app = express();
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const uploadRoute = require('./routes/upload');
const PORT = 5000;
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DBと接続中・・・');
  }).catch((err) => {
    console.log(err);
  });

// ルーティングが増え続けないように、ミドルウェアを使う
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/upload', uploadRoute);

app.get('/', (req, res) => {
  res.send('hello express');
});

// app.get('/users', (req, res) => {
//   res.send('hello users');
// });

app.listen(PORT, () => console.log('サーバが起動しました'));