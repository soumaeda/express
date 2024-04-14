const addExpense = (req, res) => {
    const { amount, date, category, memo } = req.body;
    console.log(req.body);
    // 金額を計算するロジックをここに追加
    console.log(`Received: ${amount}, ${date}, ${category}, ${memo}`);
    res.status(201).send({ message: 'Expense added successfully' });
  };
  
  module.exports = { addExpense };
  