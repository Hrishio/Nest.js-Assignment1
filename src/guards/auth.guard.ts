import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return false;
    }

    return this.validateRequest(authHeader);
  }
  validateRequest(token: string): boolean {
    if (token === 'Valid_token') {
      return true;
    }
    return false;
  }
}
