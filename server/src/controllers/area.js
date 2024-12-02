import * as areaService from '../services/area';

export const getAllArea = async (req, res) => {
  try {
    const response = await areaService.getAllArea();
    return res.status(200).json(response);
  } catch (error) {
    return {
      err: -1,
      msg: 'Fail at controller ' + error
    };
  }
};
