import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  create(createClientDto: CreateClientDto) {
    const client = new this.clientModel(createClientDto);
    return client.save();
  }

  findAll() {
    return this.clientModel.find();
  }

  findOne(id: string) {
    return this.clientModel.findById(id);
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateClientDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.clientModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
