import { Field, ObjectType } from '@nestjs/graphql'
import { Model } from 'sequelize-typescript'
import { ICommit, ICommiter } from './common/interfaces/ICommit'

@ObjectType()
class Commiter extends Model<ICommiter> {
  @Field(() => String)
  name: string
}

@ObjectType()
class Commit extends Model {
  @Field(() => String)
  message: string

  @Field(() => Commiter)
  committer: Commiter
}

@ObjectType()
export class CommitResponse extends Model<ICommit> {
  @Field(() => String)
  sha: string

  @Field(() => String)
  html_url: string

  @Field(() => Commit)
  commit: Commit
}

// export interface ICommiter {
//   name: string
//   email: string
//   date: Date
// }
// export interface ICommit {
//   sha: string
//   commit: {
//     message: string
//     committer: ICommiter
//   }
//   html_url: string
// }
