const {Schema, model, Types} = require('mongoose');

const Schema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    issues: [{type: Types.ObjectId, ref: 'Issue'}]
});

module.exports = model('User', schema);