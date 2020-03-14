// Modulo principal da aplicacao
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroisController } from './herois/herois.controller';

@Module({
  imports: [],
  controllers: [AppController,HeroisController],
  providers: [AppService],
})
export class AppModule {}
