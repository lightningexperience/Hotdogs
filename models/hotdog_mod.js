// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var hotdog = {
  all: function(cb) {
    orm.all("hotdogs", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("hotdogs", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("hotdogs", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("hotdogs", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (hotdogsController.js).
module.exports = hotdog;
