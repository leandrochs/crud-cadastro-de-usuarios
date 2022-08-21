const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.BIGINT,
      password: DataTypes.STRING,
      phone: DataTypes.BIGINT,
      birthDate: {
        type: DataTypes.STRING,
        defaultValue: '00/00/0000',
      },
      role: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      underscored: true,
      tableName: 'Users',
    },
  );

  return User;
};

module.exports = User;
