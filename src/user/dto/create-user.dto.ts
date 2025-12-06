// create-user.dto.ts

import { Prisma } from 'generated/prisma/client';

export class CreateUserDto implements Prisma.UserCreateInput {
  email: string;
  name?: string;
  password: string;
  // no id, no createdAt, no relations unless you really need them
}
