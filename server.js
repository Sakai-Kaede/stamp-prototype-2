const express = require('express');
const app = express();
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const PORT = 3000;

// ルーティングが増え続けないように、ミドルウェアを使う
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

// app.get('/', (req, res) => {
//   res.send('hello express');
// });

// app.get('/users', (req, res) => {
//   res.send('hello users');
// });

app.listen(PORT, () => console.log('サーバが起動しました'));

