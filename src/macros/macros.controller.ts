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
  findByCategory(@Param('id') id: string) {
    return this.macrosService.findByCategory(id);
  }
  
  @Get(':id')
  findByName(@Param('id') id: string) {
    return this.macrosService.findByName(id);
  }
}
