import { CategorySlugIsUnique } from './validations/CategorySlugIsUnique'
import { CategoryService } from './category.service'
import { CategoryResolver } from './category.resolver'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Category } from './category.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService, CategoryResolver, CategorySlugIsUnique]
})
export class CategoryModule {}
