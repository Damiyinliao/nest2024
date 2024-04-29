import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/** 添加mysql */
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
/** 添加user模块 */
import { UserModule } from './modules/user/user.module';
/** 添加film模块 */
import { FilmModule } from './modules/film/film.module';

@Module({
  imports: [
    /** mysql */
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'filmgallery',
      timezone: 'Asia/Shanghai', // 设置时区为上海时区
      entities: [User],
      synchronize: true,
    }),
    /** user模块 */
    UserModule,
    /** film模块 */
    FilmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
