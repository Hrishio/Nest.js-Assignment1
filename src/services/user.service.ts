import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dtos/user.dto';

@Injectable()
export class UserService {
  private readonly secretKey = 'BITS'; // Replace with your actual secret

  // Existing methods...
  getUser(): string {
    // Implementation
    return 'All Users';
  }

  getUserById(id: string): string {
    // Implementation
    return `User with ID ${id}`;
  }

  createUser(userDto: UserDto): string {
    // Implementation
    // After creating user, generate the token
    return 'User Created'; // Example response, modify as needed
  }

  updateUser(id: string): string {
    // Implementation
    return `User with ID ${id} updated`;
  }

  deleteUser(id: string): string {
    // Implementation
    return `User with ID ${id} deleted`;
  }

  generateToken(userDto: UserDto): string {
    const payload = {
      userName: userDto.userName,
      password: userDto.password,
    };

    // Sign the token with a secret key
    const token = jwt.sign(payload, this.secretKey, { expiresIn: '1h' });

    return token;
  }
}
