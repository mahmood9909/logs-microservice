import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('logger')
export class LoggerController {
  @EventPattern('user_created')
  async getLogger(data: any) {
      console.log("teet");
      
    console.log(data);
  }
}
