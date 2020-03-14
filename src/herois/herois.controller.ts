import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('/herois')
export class HeroisController {
  constructor(private readonly appService: AppService) {}


  private herois = [
    {
      nome:'batman',
      idade:'40'
    }
  ];


@Get('/lista')
  listaHerois(){

    return this.herois;
  }

  @Post('/cadastro')
  cadastraHeroi(@Body()heroi){

     this.herois.push(heroi);

    console.log(heroi);


  }


}
  