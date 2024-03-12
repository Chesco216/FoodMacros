import { PartialType } from '@nestjs/mapped-types';
import { CreateMacroDto } from './create-macro.dto';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMacroDto extends PartialType(CreateMacroDto) {
  
  @IsNumber()
  @IsOptional()
  calories?: number
  
  @IsNumber()
  @IsOptional()
  proteins?: number
  
  @IsNumber()
  @IsOptional()
  fat?: number
  
  @IsArray()
  @IsOptional()
  vitamins?: string[]
 
  @IsArray()
  @IsOptional() 
  minerals?: string[]
}
