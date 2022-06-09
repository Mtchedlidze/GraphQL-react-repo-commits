import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthGuard, PassportModule } from '@nestjs/passport'
import { ApikeyModule } from 'src/apikey/apikey.module'

import { AuthService } from './auth.service'
@Module({
  imports: [
    ApikeyModule,
    PassportModule,
    JwtModule.register({
      secret: 'vii',
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
