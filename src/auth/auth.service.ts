import { Injectable } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private adminService: AdminService) {}

  async validateAdmin(name: string, password: string): Promise<any> {
    const adminUser = await this.adminService.findOne(name);
    if (adminUser && bcrypt.compareSync(password, adminUser.password)) {
      const { password, ...result } = adminUser;
      return result;
    }
    return null;
  }
}
