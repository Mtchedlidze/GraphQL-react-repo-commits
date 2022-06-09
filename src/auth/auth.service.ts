import { Injectable } from '@nestjs/common'
import { ApikeyService } from 'src/apikey/apikey.service'
@Injectable()
export class AuthService {
  constructor(private readonly apikeyServic: ApikeyService) {}

  async validateApiKey(apiKey: string): Promise<boolean> {
    const isKeyvalid = await this.apikeyServic.isValidKey(apiKey)

    return isKeyvalid
  }
}
