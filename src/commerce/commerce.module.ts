import { Module } from '@nestjs/common';
import { CommerceController } from './commerce.controller';
import { ProxyService } from 'src/common/proxy.service';
import { ProxyModule } from 'src/common/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [CommerceController],
  providers: [ProxyService],
})
export class CommerceModule {}
