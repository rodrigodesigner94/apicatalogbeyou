import { PartialType } from '@nestjs/mapped-types';
import { CreateCarrosselDto } from './create-carrossel.dto';

export class UpdateCarrosselDto extends PartialType(CreateCarrosselDto) {}
