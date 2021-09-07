import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // 컨트롤러 실행 전
    return next
      .handle()
      .pipe(map((data) => (data === undefined ? null : data))); // 컨트롤러 후
  }
}

// 인터셉터는 컨트롤러 전 후로 데이터를 조작할 수 있다
