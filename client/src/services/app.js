import axiosConfig from '../axiosConfig';

export const getAllPrices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'GET',
        url: '/api/v1/price/all'
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const getAllArea = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'GET',
        url: '/api/v1/area/all'
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const getAllProvince = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'GET',
        url: '/api/v1/province/all'
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
