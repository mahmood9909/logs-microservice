import { Module } from '@nestjs/common';
import { LoggerController } from './logger/logger.controller';
import { LoggerService } from './logger/logger.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  providers:[LoggerService],
  controllers:[LoggerController],

})
export class AppModule {}
