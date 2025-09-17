import { Module } from '@nestjs/common';
import { PosController } from './pos.controller';
import { ProxyService } from 'src/common/proxy.service';

@Module({
  controllers: [PosController],
  providers: [ProxyService],
})
export class PosModule {}
