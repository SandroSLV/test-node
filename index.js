const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.send('Oi...');
});
app.listen(80);