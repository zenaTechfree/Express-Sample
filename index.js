const express = require('express');
const path = require('path');
const app = express();

// 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 제공
app.use('/css', express.static(path.join(__dirname, 'public/css')));

// 라우트
app.get('/', (req, res) => {
  res.render('index', { title: 'Hello, Render!' });
});

// 포트 설정 (Render에선 env.PORT 사용)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
