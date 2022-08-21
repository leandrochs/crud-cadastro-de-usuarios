const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      underscored: true,
      tableName: 'Users',
    },
  );

  return User;
};

module.exports = User;
