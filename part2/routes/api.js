//global.todoArray.push();
var fs = require('fs');

exports.todoGet = function (req, res, next) {
  res.send(200, global.todoArray);
};

exports.todoGet2 = function (req, res, next) {
  var id_todo = req.params.id;

  res.send(200, global.todoArray[id_todo]);
};

exports.todoAdd = function (req, res, next) {
  var todo = req.body;

  global.todoArray.push(todo);
  res.send(200);
};

exports.todoDel = function (req, res, next) {
  var id_todo = req.params.id;

  if (id_todo >= global.todoArray.length) {
    return res.send(409, 'epic fail');
  }

  global.todoArray.splice(id_todo, 1);
  res.send(200);
};
