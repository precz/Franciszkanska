(function() {

  var Main = function Main (addressModel) {
    this.address = addressModel;
  };

  Main.prototype.get = function get (req, res) {
    var port = req.params.port || 8000;

    this.address.get(function (element) {
      res.redirect(307, 'http://' + element.value + ':' + port);
    });
  };

  module.exports = Main;
}());