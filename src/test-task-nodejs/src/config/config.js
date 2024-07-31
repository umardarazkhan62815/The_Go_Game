import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const devConfig = {
    port: process.env.PORT,
    db_username: process.env.DATABASE_USERNAME,
    db_password: process.env.DATABASE_PASSWORD,
    db_name: process.env.DATABASE_NAME,
    db_host: process.env.DATABASE_HOST,
    secret: process.env.SECRET_KEY
}