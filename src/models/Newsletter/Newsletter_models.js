/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class Newsletter extends Model {
  static init(sequelize) {
    super.init({
      title: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 100],
            msg: 'TITLE is invalid',
          },
        },
      },
      text: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
      img: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
      tag: {
        type: Sequelize.ENUM('daily', 'weekly', 'monthly', 'globaly'),
        defaultValue: 'daily',
      },
      ischoosen: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    }, {
      sequelize,
    });

    return this;
  }
}
