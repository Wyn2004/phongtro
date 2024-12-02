import * as priceServices from '../services/price';

export const getAllPriceController = async (req, res) => {
  try {
    const response = await priceServices.getAllPrice();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at controller ' + error
    });
  }
};
