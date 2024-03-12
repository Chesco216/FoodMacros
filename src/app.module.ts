import { Module } from '@nestjs/common';
import { MacrosModule } from './macros/macros.module';

@Module({
  imports: [MacrosModule]
})
export class AppModule {}
