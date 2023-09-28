'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('refresh_tokens', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement: true,
      },
      token: {
        type:Sequelize.TEXT,
        allowNull:false,
      },
      user_id: {
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      created_at: {
        type:Sequelize.DATE,
        allowNull:false,
      },
      updated_at: {
        type:Sequelize.DATE,
        allowNull:false,
      },
    });
    
    await queryInterface.addConstraint('refresh_tokens', {
      type:'foreign key',
      name:'REFRESH_TOKENS_USER_ID',
      fields:['user_id'],
      references:{
        table:'users',
        field:'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('refresh_tokens');
  }
};
