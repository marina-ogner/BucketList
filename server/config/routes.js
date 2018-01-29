var users = require('./../controllers/users');
var path = require('path');

module.exports = function (app) {
    app.post('/login', function (req, res) {
        users.login(req, res)
    }),
        app.get('/logout', function (req, res) {
            users.logout(req, res);
        }),
        app.get('/check', function (req, res) {
            users.check(req, res);
        }),
        app.get('/showUsers', function (req, res) {
            users.showUsers(req, res)
        }),
        app.post('/create', function (req, res) {
            users.create(req, res);
        }),
        app.get('/showItems', function (req, res) {
            users.showItems(req, res)
        }),
        app.get('/about/:_id', function (req, res) {
            users.about(req, res)
        }),
        app.get('/checkbox/:_id', function (req, res) {
            users.checkbox(req, res)
        }),


        app.get("*", function (req, res) { // don't forget!!
            res.sendFile(path.resolve("./client/dist/index.html"));
        })
}