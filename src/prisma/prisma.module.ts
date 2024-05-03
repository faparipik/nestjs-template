import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Because we want to use prisma in every other module
// we don't want to import it in every module, we just made it global
//
// If we want to use service out of service module we need to use exports
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
