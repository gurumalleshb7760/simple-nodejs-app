const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Salesforce app migrated to Azure!');
});

app.listen(3000, () => console.log('Server running'));
