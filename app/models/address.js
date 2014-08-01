var
  mongodb = require('mongodb'),
  Address;
  

Address = function Address (url) {
  this.url = url;
};

Address.prototype.set = function (ip, callback) {

  var self = this;
    mongodb.MongoClient.connect(self.url, function (err, db) {
      var addresses;
      if (err) {
        db.close();
        return console.log('error', err);
      }

      addresses = db.collection('addresses');
      addresses.update(
        {type: 'ip'},
        {
            type: 'ip',
            value: ip
        },
        {
          upsert: true
        },
        function (err, result) {
          db.close();
          if (err) {
            return console.log(err);
          }
          callback(result);
        }
      );

    });
};

Address.prototype.get = function (callback) {
  var self = this;

    mongodb.MongoClient.connect(self.url, function (err, db) {

      if (err) {
        db.close();
        return console.log(err);
      }

      addresses = db.collection('addresses');
      addresses.findOne(
        {type: 'ip'},
        function (err, result) {

          db.close();
          if (err) {
            return console.log(err);
          }
          callback(result);
        }
      );
    });
};

module.exports = Address;