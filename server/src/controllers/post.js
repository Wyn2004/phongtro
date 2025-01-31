import * as postService from '../services/post';

export const getPostController = async (req, res) => {
  try {
    const response = await postService.getPostsService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at controller ' + error
    });
  }
};

export const getPostLimitController = async (req, res) => {
  const { page, ...query } = req.query;
  try {
    const response = await postService.getPostsLimitService(page, query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at controller ' + error
    });
  }
};

export const getNewPost = async (req, res) => {
  try {
    const response = await postService.getNewPost();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at controller ' + error
    });
  }
};
