const Twit = require('twit');
const config = require('./config.js');

const Twitter = new Twit(config);

// TODO subscribe to some events

Twitter.post('statuses/update', { status: 'hello Armando!' }, (err, data, response) =>{
  console.log(data)
});