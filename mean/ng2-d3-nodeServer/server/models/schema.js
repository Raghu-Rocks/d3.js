/**
 * Created by Puneet on 27-Mar-16.
 */
// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Subdocument schema for votes
var voteSchema = new mongoose.Schema({ ip: 'String' });

// Subdocument schema for poll choices
var choiceSchema = new mongoose.Schema({
    text: String,
    votes: [voteSchema]
});

// Document schema for polls
var PollSchema = new mongoose.Schema({
    question: { type: String, required: true },
    choices: [choiceSchema]
});


var Poll = mongoose.model('Poll', PollSchema);

module.exports.Poll = Poll;

