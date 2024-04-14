const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { addExpense } = require('./src/controllers/expenseController');

const app = express();
const port = 3000;

// CORSの設定
app.use(cors({
    origin: 'http://localhost:8081',  // React Nativeアプリケーションのホスト
    credentials: true
}));

// JSONデータの処理
app.use(bodyParser.json());

// ルート定義
app.post('/api/expenses', addExpense);

// サーバー起動
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
