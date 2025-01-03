import * as insertService from '../services/insert';

export const insert = async (req, res) => {
  try {
    const responseData = await insertService.insertService();
    const responseData2 = await insertService.insertPriceAndArea();
    return res.status(200).json(responseData);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail as controller' + error
    });
  }
};
