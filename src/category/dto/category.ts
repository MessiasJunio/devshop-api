import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('category')
export class CategoryPublic {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  slug: string
}
