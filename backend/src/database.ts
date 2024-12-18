import { DataSource } from "typeorm";

export const AppDataSrouce = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'nestjs',
    entities: [__dirname + '/../entities/*.entity.{js,ts}'],
})