// Generated by CoffeeScript 1.4.0
(function() {
  var Student,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Student = Student = (function(_super) {

    __extends(Student, _super);

    function Student(firstName, lastName, age, grade) {
      Student.__super__.constructor.apply(this, arguments);
      this.grade = grade;
    }

    return Student;

  })(Person);

}).call(this);
