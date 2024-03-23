import { Injectable } from '@nestjs/common';
import { macros } from './macrosO';


@Injectable()
export class MacrosService {

  findAll() {
    return macros;
  }

  findOne(id: string) {
    return macros.filter( food => food.categoria == id );
  }

}
