import { Controller, Get, Param } from '@nestjs/common';
import { MacrosService } from './macros.service';

@Controller('macros')
export class MacrosController {
  constructor(private readonly macrosService: MacrosService) {}

  @Get()
  findAll() {
    return this.macrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.macrosService.findOne(id);
  }

}
