// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import * as crypto from 'crypto';

// const obj = { userName: 'User1', password: 'user@69' };
// @Injectable()
// export class AuthGuard implements CanActivate {
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest();

//     const authHeader = request.body;
//     const userName = request.body.userName;
//     const password = request.body.password;

//     if (!authHeader) {
//       return false;
//     }

//     if (userName === obj.userName && password === obj.password) {
//       console.log(userName.concat(password));
//     }

//     return this.validateRequest(authHeader);
//   }
//   validateRequest(token: string): boolean {
//     if (token === 'Valid_token') {
//       return true;
//     }
//     return false;
//   }
// }
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

const obj = { userName: 'User1', password: 'user@69' };

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return false; // If no token, deny access
    }

    return this.validateRequest(authHeader); // Token validation
  }

  validateRequest(token: string): boolean {
    if (token === 'Valid_token') {
      return true;
    }
    return false;
  }
}
