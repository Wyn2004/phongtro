import db from '../models/';

export const getAllArea = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Area.findAll({
        raw: true,
        attributes: ['code', 'value'],
        order: [['order', 'ASC']]
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'Done' : 'Failure',
        response
      });
    } catch (error) {
      reject({
        err: 1,
        msg: 'Failure'
      });
    }
  });
