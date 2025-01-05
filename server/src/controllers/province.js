import * as provinceServices from '../services/province';

export const getAllProvince = async (req, res) => {
  try {
    const response = await provinceServices.getAllProvince();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at controller ' + error
    });
  }
};
