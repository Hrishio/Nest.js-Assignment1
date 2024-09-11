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
