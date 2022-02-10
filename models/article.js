'use strict';
const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = (sequelize) => {
  class Article extends Sequelize.Model {
    publishedAt() {
      const date = moment(this.createdAt).format('MMMM D, YYYY, h:mma');
       return date;
    }
    shortDescription() {
      const shotDesc = this.body.length > 200 ? this.body.substring(0, 200) + '...' : this.body;
      return shotDesc;
    }
  }
  Article.init({
    title:  { 
      type: Sequelize.STRING,
      validate: {
        notEmpty: { 
          msg : 'Title required' 
       }
      }
     },
    auther: Sequelize.STRING,
    body: Sequelize.TEXT,
  }, { sequelize });

  return Article;
};