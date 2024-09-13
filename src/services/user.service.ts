import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dtos/user.dto';

@Injectable()
export class UserService {
  private readonly secretKey = 'BITS';
  private readonly refreshKey = 'Hrishikesh';

  getUser(): string {
    return 'All Users';
  }

  getUserById(id: string): string {
    return `User with ID ${id}`;
  }

  createUser(userDto: UserDto): string {
    return 'User Created';
  }

  updateUser(id: string): string {
    return `User with ID ${id} updated`;
  }

  deleteUser(id: string): string {
    return `User with ID ${id} deleted`;
  }

  generateToken(userDto: UserDto): { token: string; refreshToken: string } {
    const payload = {
      userName: userDto.userName,
      password: userDto.password,
    };

    const token = jwt.sign(payload, this.secretKey, {
      expiresIn: '1h',
    });

    const refreshToken = payload.userName.concat(payload.password);
    return {
      token,
      refreshToken,
    };
  }
}
