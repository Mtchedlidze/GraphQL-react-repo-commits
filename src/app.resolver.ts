import { UseGuards, UseInterceptors } from '@nestjs/common'
import { Resolver, Query, Field, Args } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { firstValueFrom } from 'rxjs'
import { ApikeyService } from './apikey/apikey.service'
import { AppService } from './app.service'
import { ApikeyGuard } from './auth/auth.guard'
import { CommitResponse as Commit } from './commit.response'

@Resolver()
export class AppResolver {
  constructor(
    private readonly apikeyService: ApikeyService,
    private readonly appService: AppService,
  ) {}
  @Query(() => String, { name: 'apikey' })
  async getApikey() {
    return await this.apikeyService.create()
  }

  @Query(() => [Commit])
  async getCommits(
    @Args('page', { nullable: true }) page?: number,
    @Args('limit', { nullable: true }) limit?: number,
  ) {
    try {
      const commits = await firstValueFrom(
        this.appService.getCommits(+page, +limit),
      )
      return commits
    } catch (error) {}
  }
}
