import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    return 'Current user';
  },
);
