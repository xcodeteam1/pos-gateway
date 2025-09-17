import * as dotenv from 'dotenv';
dotenv.config();

const { BACKEND_URL, POS_PORT, COMMERCE_PORT } = process.env;

export const ServicesConfig = {
  POS_SERVICE_URL: `${BACKEND_URL}:${POS_PORT}`,
  COMMERCE_SERVICE_URL: `${BACKEND_URL}:${COMMERCE_PORT}`,
};
