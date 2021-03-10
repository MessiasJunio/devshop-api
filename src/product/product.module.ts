import { ProductResolver } from './product.resolver'
import { ProductService } from './product.service'
import { Module } from '@nestjs/common'
import { Product } from './product.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductSlugIsUnique } from './validations/ProductSlugIsUnique'

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService, ProductResolver, ProductSlugIsUnique]
})
export class ProductModule {}
