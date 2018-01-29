var mongoose = require('mongoose');
var User = mongoose.model('User');
var Item = mongoose.model('Item');


module.exports = {
    login: function (req, res) {
        req.session.user = { name: "error" };
        User.find({ name: req.body.name }, function (err, users) {
            if (users.length < 1) {
                User.create({ name: req.body.name }, function (err, user) {
                    req.session.user = user;
                    req.session.save();
                    res.json(req.session.user);
                });
            } else {
                req.session.user = users[0];
                req.session.save();
                res.json(req.session.user);
            }
        })
    },

    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/');
    },

    check: function (req, res) {
        if (req.session.user) {
            res.json(req.session.user);
        }
        else {
            res.json(null);
        }
    },

    showUsers: function (req, res) {
        User.find({}, function (err, users) {
            // console.log(err);
            res.json(users);
        })
    },

    create: function (req, res) {
        // console.log(req.body);
        User.findOne({ _id: req.session.user._id }, function (err, user) {
            // console.log(req.session.user._id);
            // console.log(err);
            Item.create({ _creator: req.session.user._id, title: req.body.title, desc: req.body.desc, _tagged: req.body._tagged, checkbox: 0, createdAt: Date.now() }, function (err, item) {
                // console.log(err)
                user._items.push(item._id);
                user.save();
                // console.log(quote);
                res.json(item);
            })
        })
    },

    showItems: function (req, res) {
        // console.log("in controllers");
        Item.find({}, function (err, items) {
            // console.log(err);
        })
            .populate('_tagged', 'name')
            .exec(function (err, items) {
                // console.log('show Items', err);
                // console.log(quotes);
                res.json(items);
            })
    },

    about: function (req, res) {
        // console.log("in controllers");
        User.findOne({ _id: req.params._id }, function (err, user) {
            // res.json(user);
            //res.redirect('/home');
        })
            .populate({ path: '_items', model: 'Item', populate: { path: '_tagged', model: 'User' } })
            .exec(function (err, items) {
                // console.log('show Items', err);
                res.json(items);
            })
    },

    checkbox: function (req, res) {
        // console.log("in controllers");
        Item.findOne({ _id: req.params._id }, function (err, item) {
            // console.log(err);
            if (item.checkbox == 0) {
                item.checkbox = 1;
            }
            else{
                item.checkbox = 0;
            }
            item.save((err, updatedItem) => {
                res.json(updatedItem);
                //res.redirect('/home');
            });
        })
    },

}