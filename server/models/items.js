var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    _creator: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    desc: String,
    checkbox: Number,
    createdAt: Date,
    _tagged: { type: Schema.Types.ObjectId, ref: 'User' },
} , { usePushEach: true })


mongoose.model('Item', ItemSchema);
