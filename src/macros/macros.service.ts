import { Injectable } from '@nestjs/common';
import { macros } from './macrosO';


@Injectable()
export class MacrosService {

  findAll() {
    return macros;
  }

  findByCategory(id: string) {
    return macros.filter( food => food.categoria == id );
  }

  findByName(id: string) {
    return macros.filter( food => food.nombre == id );
  }
}
