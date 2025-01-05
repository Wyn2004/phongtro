import express from 'express';

import * as provinceController from '../controllers/province';

const route = express.Router();

route.get('/all', provinceController.getAllProvince);

export default route;
