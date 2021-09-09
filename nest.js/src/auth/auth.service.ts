import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async valiateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      return null;
    }

    const result = await bcrypt.compare(password, user.password);

    if (result) {
      const { password, ...userSerialize } = user;
      return userSerialize;
    }

    return null;
  }
}
