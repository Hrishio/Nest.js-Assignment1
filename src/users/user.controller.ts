import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  NotAcceptableException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dtos/user.dto';
import { AuthGuard } from '../guards/auth.guard';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(200)
  getAllUsers(): string {
    return this.userService.getUser();
  }

  @Get('/:id')
  @HttpCode(200)
  findOne(@Param() params: any): string {
    let response: any;
    try {
      response = this.userService.getUserById(params.id);
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return response;
  }

  @Post('/new')
  @UseGuards(AuthGuard)
  @HttpCode(201)
  createUser(userDto: UserDto): string {
    try {
      return this.userService.createUser(userDto);
    } catch (error) {
      throw new NotAcceptableException('The body u passed is unaccepateble', {
        cause: new Error(),
        description: 'Invalid request body',
      });
    }
  }

  @Put('/:id')
  @HttpCode(200)
  updateUser(@Param() params: any): string {
    return this.userService.updateUser(params.id);
  }

  @Delete('/:id')
  @HttpCode(200)
  deleteUser(@Param() params: any): string {
    return this.userService.deleteUser(params.id);
  }
}
