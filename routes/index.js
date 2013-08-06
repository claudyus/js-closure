
/*
 * GET home page.
 */

exports.index = function (req, res) {
  res.render('index', { title: 'Express' });
};

exports.debug = function (req, res, next) {
  console.log(req.path);
  next();
};

exports.todoGet = function (req, res, next) {
  res.send(200, global.todoArray);
};
