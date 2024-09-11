import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return 'This string will return list  of all users';
  }

  getUserById(id: string): string {
    return `This will return all the users by Id of ${id}`;
  }

  createUser(UserDto: any): string {
    return 'Created User';
  }

  updateUser(id: string): string {
    return `This will update existing user by ${id}`;
  }

  deleteUser(id: string): string {
    return `This will delete user by ${id}`;
  }
}
