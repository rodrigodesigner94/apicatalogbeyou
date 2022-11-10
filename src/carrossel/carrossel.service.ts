import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Carrossel, CarrosselDocument } from './entities/carrossel.entity';
import { CreateCarrosselDto } from './dto/create-carrossel.dto';
import { UpdateCarrosselDto } from './dto/update-carrossel.dto';

@Injectable()
export class CarrosselService {
  constructor(
    @InjectModel(Carrossel.name)
    private carrosselModel: Model<CarrosselDocument>,
  ) {}

  create(createCarrosselDto: CreateCarrosselDto) {
    const carrossel = new this.carrosselModel(createCarrosselDto);
    return carrossel.save();
  }

  findAll() {
    return this.carrosselModel.find();
  }

  findOne(id: string) {
    return this.carrosselModel.findById(id);
  }

  update(id: string, updateCarrosselDto: UpdateCarrosselDto) {
    return this.carrosselModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateCarrosselDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.carrosselModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
