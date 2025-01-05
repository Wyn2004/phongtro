import db from '../models';

// note return thì sau khi chạy sẽ ko chạy đc code ở dưới
// resolve và reject trong promise sau khi chạy vẫn chạy đc code ở dưới
// trừ khi gặp 1 thằng resolve hoặc reject thứ 2

// get all categories

export const getCategoriesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      // khi findAll trong squelize sẽ trả về 1 instance bao gốm nhìu cái ko cần thiết
      // nên raw: true sẽ chỉ lấy cái raw
      const response = await db.Category.findAll({
        raw: true
        // dùng attributes để lấy những trường cần dùng
        // dùng exclude để loại bỏ những trường ko cần thiết
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'Ok' : 'Failed to get categories',
        response
      });
    } catch (error) {
      reject({
        err: 1,
        msg: 'Failed to get categories'
      });
    }
  });
