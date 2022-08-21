const Client = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    'Client',
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.BIGINT,
    },
    {
      underscored: true,
      tableName: 'Clients',
    },
  );

  return Client;
};

module.exports = Client;
