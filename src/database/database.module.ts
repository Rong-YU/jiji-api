import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeormConfig from 'config/typeorm.config';
import { User } from 'src/user/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
              type: 'mysql',
              host: configService.get('host'),
              port: configService.get('port'),
              username: configService.get('username'),
              password: configService.get('password'),
              database: configService.get('database'),
              entities: [User],
              synchronize: true,
            }),
            inject: [ConfigService],
          }),
          ConfigModule.forRoot({
            load: [typeormConfig],
          }),
    ]
})
export class DatabaseModule {}
