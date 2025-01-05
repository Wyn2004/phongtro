import db from '../models/';

export const getAllProvince = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Province.findAll({
        raw: true,
        attributes: ['code', 'value'],
        order: [['code', 'ASC']]
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
