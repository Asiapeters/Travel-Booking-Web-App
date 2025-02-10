// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const tripsEndpoint = "http://localhost:3000/api/trips";
const options = {
  method: "GET",
  headers: { 
    'Accept': "application/json"
  },  
};

/* GET travel view */
const travel = async function(req, res, next) {
  // console.log('Travel Controller Begin');
  await fetch(tripsEndpoint, options)
  .then(res => res.json())
  .then(json => {
    // console.log(json);
    let message = null;
    if(!(json instanceof Array)) {
      message = 'API lookuo error';
      json = [];
    } else {
        if(!json.length) {
          message = 'No trips exists in our database!'
        }
    }
    res.render("travel", { title: "Travlr Getaways", trips: json, message });
  })
  .catch(err => res.status(500).send(err.message));
  // console.log('Travel Controller after render');
};

module.exports = {
  travel,
};