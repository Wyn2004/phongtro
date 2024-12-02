import db from '../models/';

require('dotenv').config();

export const getPostsService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        // nest dung de gop cai bang lien ket thanh 1 object ma ko can . de goi
        nest: true,
        include: [
          {
            model: db.Image,
            as: 'images',
            attributes: ['image']
          },
          {
            model: db.Attribute,
            as: 'attributes',
            attributes: ['price', 'acreage', 'published', 'hashtag']
          },
          {
            model: db.User,
            as: 'user',
            attributes: ['name', 'phone', 'zalo']
          }
        ],
        attributes: ['id', 'title', 'star', 'address', 'description']
      });
      resolve({
        err: resolve ? 0 : 1,
        msg: resolve ? 'Done' : 'Failure',
        response
      });
    } catch (error) {
      reject(error);
    }
  });

export const getPostsLimitService = (page, query) =>
  new Promise(async (resolve, reject) => {
    const offset = !page || +page < 1 ? 0 : +page - 1;
    try {
      const response = await db.Post.findAndCountAll({
        where: query,
        raw: true,
        // nest dung de gop cai bang lien ket thanh 1 object ma ko can . de goi
        nest: true,
        offset: offset * +process.env.LIMIT,
        /// limit lấy số
        limit: +process.env.LIMIT,
        include: [
          {
            model: db.Image,
            as: 'images',
            attributes: ['image']
          },
          {
            model: db.Attribute,
            as: 'attributes',
            attributes: ['price', 'acreage', 'published', 'hashtag']
          },
          {
            model: db.User,
            as: 'user',
            attributes: ['name', 'phone', 'zalo']
          }
        ],
        attributes: ['id', 'title', 'star', 'address', 'description']
      });
      resolve({
        err: resolve ? 0 : 1,
        msg: resolve ? 'Done' : 'Failure',
        response
      });
    } catch (error) {
      reject(error);
    }
  });
