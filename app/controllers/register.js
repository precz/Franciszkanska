(function() {

  var Register = function Register (address) {
    this.address = address;
  };

  Register.prototype.get = function get (req, res) {
    if (req.params.auth !== process.env.AUTH_CODE) {
      return res.sendStatus(401);
    }
    this.address.set(req.params.ip, function () {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Charset', 'utf-8') ;
      res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
      res.send({
        status: 'ok',
        message: 'address registered'
      });
    });
  };

  module.exports = Register;
}());