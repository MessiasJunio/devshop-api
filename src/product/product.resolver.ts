import { ProductUpdateInput } from './dto/product-update.input'
import { ProductCreateInput } from './dto/product-create.input'
import { ProductPublic } from './dto/product'
import { ProductService } from './product.service'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ProductMapper } from './product.mapper'

@Resolver(() => ProductPublic)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [ProductPublic], { name: 'getAllProducts' })
  async getAllProducts(): Promise<ProductPublic[]> {
    return await this.productService.findAll()
  }

  @Query(() => ProductPublic, { name: 'getProductById' })
  async getProductById(@Args('id') id: string): Promise<ProductPublic> {
    return await this.productService.findById(id)
  }

  @Mutation(() => ProductPublic, { name: 'createProduct' })
  async createProduct(
    @Args('input') input: ProductCreateInput
  ): Promise<ProductPublic> {
    return this.productService.create(ProductMapper.toEntity(input))
  }

  @Mutation(() => ProductPublic, { name: 'updateProduct' })
  async updateProduct(
    @Args('input') input: ProductUpdateInput
  ): Promise<ProductPublic> {
    return this.productService.update(ProductMapper.fromUpdateToEntity(input))
  }

  @Mutation(() => Boolean, { name: 'deleteProduct' })
  async deleteProduct(@Args('id') input: string): Promise<boolean> {
    return this.productService.delete(input)
  }
}
