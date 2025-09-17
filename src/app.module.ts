import { Module } from '@nestjs/common';
import { CommerceModule } from './commerce/commerce.module';
import { PosModule } from './pos/pos.module';

@Module({
  imports: [CommerceModule, PosModule],
})
export class AppModule {}
