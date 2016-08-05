module.exports = function(sequelize, DataTypes){
	var Employee = sequelize.define('Manager', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		fullName: {
			type: DataTypes.STRING
		},
		dateOfBirth: {
			type: DataTypes.DATE,
		},
		startDate: {
			type: DataTypes.DATE,
		}
	}, {
		classMethods: {
      		associate: function(models) {
      			Manager.hasOne(models.Store)
      }
    }
  })
	return Employee;
}
