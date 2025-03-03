import axiosConfig from '../axiosConfig';

export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'GET',
        url: '/api/v1/post/all'
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPostsLimit = query =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'GET',
        url: `/api/v1/post/limit`,
        params: query
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetNewPost = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'GET',
        url: '/api/v1/post/new-post'
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
