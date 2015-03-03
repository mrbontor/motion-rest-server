/**
 * Created by splizmo on 2/21/15.
 */
"use strict";
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Project)
            }
        }
    });

    return User;
};