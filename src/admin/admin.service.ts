import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { EncodePassword } from 'src/hash/bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  ) {}
  create(createAdminDto: CreateAdminDto) {
    const password = EncodePassword(createAdminDto.password);
    const admin = new this.adminModel({ ...createAdminDto, password });
    return admin.save();
  }

  findAll() {
    return this.adminModel.find();
  }

  findOne(id: string) {
    return this.adminModel.findById(id);
  }
  findByName(name: string) {
    return this.adminModel.find({
      $where: name,
    });
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateAdminDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.adminModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
