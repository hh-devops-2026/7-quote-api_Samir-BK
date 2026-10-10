const express = require('express');
const quotes = require('./quotes');

const app = express();

app.get('/quote',(req,res)=>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({quote: quotes[randomIndex] + ('testing if code reaches to render!!')});
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
