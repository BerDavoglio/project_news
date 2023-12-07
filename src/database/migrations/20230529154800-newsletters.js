module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('newsletters', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      img: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      tag: {
        type: Sequelize.ENUM('daily', 'weekly', 'monthly', 'globaly'),
        allowNull: false,
      },
      ischoosen: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('newsletters');
  },
};
