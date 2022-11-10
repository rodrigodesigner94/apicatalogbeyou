import { Module } from '@nestjs/common';
import { CarrosselService } from './carrossel.service';
import { CarrosselController } from './carrossel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Carrossel, CarrosselSchema } from './entities/carrossel.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Carrossel.name, schema: CarrosselSchema },
    ]),
  ],
  controllers: [CarrosselController],
  providers: [CarrosselService],
})
export class CarrosselModule {}
