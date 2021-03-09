import { ProductResolver } from './product.resolver'
import { ProductService } from './product.service'
import { Module } from '@nestjs/common'
import { Product } from './product.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService, ProductResolver]
})
export class ProductModule {}
