// Generated by CoffeeScript 1.4.0
(function() {
  var Teacher,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Teacher = Teacher = (function(_super) {

    __extends(Teacher, _super);

    function Teacher(firstName, lastName, age, specialty) {
      Teacher.__super__.constructor.apply(this, arguments);
      this.specialty = specialty;
    }

    return Teacher;

  })(Person);

}).call(this);
