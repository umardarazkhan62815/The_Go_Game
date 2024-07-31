import jwt from 'jsonwebtoken';
import { devConfig } from '../config/config.js';

export const getJWTToken = async (payload) => {
  if (!payload || typeof payload !== 'object') {
      throw new Error('Invalid payload object');
  }

  const token = jwt.sign(
      payload,
      devConfig.secret, {
          expiresIn: '365d',
      }
  );
  return token;
};
