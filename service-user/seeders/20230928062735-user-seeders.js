'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [
      {
      name: 'Luthfi Novalino Pratama',
      profession: 'Proggramer',
      role: 'admin',
      email: "admin@gmail.com",
      password: await bcrypt.hash('password', 10),
      created_at: new Date(),
      updated_at: new Date(),
     },
     {
      name: 'Budi',
      profession: 'Proggramer',
      role: 'student',
      email: "user@gmail.com",
      password: await bcrypt.hash('password', 10),
      created_at: new Date(),
      updated_at: new Date(),
     },     
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
