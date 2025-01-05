import db from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 } from 'uuid';
require('dotenv').config();

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const registerServices = ({ phone, name, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        // kiem tra xem co ton tai phone trong db chua
        where: { phone },
        defaults: {
          id: v4(),
          phone,
          password: hashPassword(password),
          name
        }
      });
      // response tra ve mang
      // vt dau la data, vt 2 la  kieu boolean the hien data co duoc tao hay khong
      const token =
        response[1] &&
        jwt.sign(
          {
            id: response[0].id,
            phone: response[0].phone
          },
          process.env.SECRET_KEY,
          { expiresIn: '2d' }
        );
      resolve({
        // tra ve
        err: token ? 0 : 2,
        msg: token ? 'Register success' : 'Phone number already exists',
        token: token || null
      });
    } catch (error) {
      reject({
        err: 1,
        msg: 'Failure'
      });
    }
  });

export const loginServices = ({ phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        // kiem tra xem co ton tai phone trong db chua
        where: { phone },
        // de nhu vay de object respose tra ve chi chua data
        // va se khong chua kieu boolean true false o vi tri 2
        raw: true
      });
      // check pass
      const isCorrectPassword = response && bcrypt.compareSync(password, response.password);
      const token =
        isCorrectPassword &&
        jwt.sign(
          {
            id: response.id,
            phone: response.phone
          },
          process.env.SECRET_KEY,
          { expiresIn: '2d' }
        );
      resolve({
        // tra ve
        err: token ? 0 : 2,
        // neu khong co phone thi tra ve
        msg: token ? 'Login success' : response ? 'Password is incorrect' : 'Phone number not found',
        token: token || null
      });
    } catch (error) {
      reject({
        err: 1,
        msg: 'Failure'
      });
    }
  });
