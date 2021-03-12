import { BrandSlugIsUnique } from './validations/BrandSlugIsUnique'
import { BrandService } from './brand.service'
import { BrandResolver } from './brand.resolver'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Brand } from './brand.entity'
import { S3 } from 'src/utils/s3'

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  providers: [BrandService, BrandResolver, BrandSlugIsUnique, S3]
})
export class BrandModule {}
