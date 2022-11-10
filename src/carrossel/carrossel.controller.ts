import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarrosselService } from './carrossel.service';
import { CreateCarrosselDto } from './dto/create-carrossel.dto';
import { UpdateCarrosselDto } from './dto/update-carrossel.dto';

@Controller('carrossel')
export class CarrosselController {
  constructor(private readonly carrosselService: CarrosselService) {}

  @Post()
  create(@Body() createCarrosselDto: CreateCarrosselDto) {
    return this.carrosselService.create(createCarrosselDto);
  }

  @Get()
  findAll() {
    return this.carrosselService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carrosselService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarrosselDto: UpdateCarrosselDto,
  ) {
    return this.carrosselService.update(id, updateCarrosselDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carrosselService.remove(id);
  }
}
