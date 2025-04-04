var fs = require('fs');
var articles = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

/* GET news page */
const news = (req, res) => {
    res.render("news", { title: "Travlr Getaways", articles });
  };
  
  module.exports = {
    news,
  };
  