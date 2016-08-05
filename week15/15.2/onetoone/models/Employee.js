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
		},
		address: {
			type: DataTypes.STING,
		}
	}, {
		classMethods: {

      }
    }
  })
	return Employee;
}
