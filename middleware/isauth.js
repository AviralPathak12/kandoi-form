const jwt = require('jsonwebtoken');

exports.isauth = (req, res, next) => {
    const authorization = req.headers;
    console.log('authorization',authorization);
    if (authorization) {
      const token = authorization; // Bearer XXXXXX
      jwt.verify(
        token,
        'test',
        (err, decode) => {
          if (err) {
            res.status(401).send({ message: 'Invalid Token' });
          } else {
            console.log('inside else');
            req.user = decode;
            next();
          }
        }
      );
    } else {
      res.status(401).send({ message: 'No Token' });
    }
  };