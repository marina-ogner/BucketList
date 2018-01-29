var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    _items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
}, { usePushEach: true })

mongoose.model('User', UserSchema);