module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('blog_posts', 'content', {
      type: Sequelize.TEXT,
      allowNull: false
      });
    },
  
  down: (queryInterface, Sequelize) => {
      return queryInterface.changeColumn('blog_posts', 'content', {
        type: Sequelize.STRING,
        allowNull: false
      });
    }
  };