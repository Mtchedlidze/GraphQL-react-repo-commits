import { SequelizeModuleOptions } from '@nestjs/sequelize'
import { SequelizeOptions } from 'sequelize-typescript'

export const sequelizeConfig = (): SequelizeOptions => ({
  dialect: 'sqlite',
  storage: 'data.sqlite',
})
