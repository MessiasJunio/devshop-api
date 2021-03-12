import { CategoryService } from './../category.service'
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'

@ValidatorConstraint({ name: 'categorySlugIsUnique', async: true })
export class CategorySlugIsUnique implements ValidatorConstraintInterface {
  constructor(private readonly categoryService: CategoryService) {}

  async validate(
    text: string,
    validationArguments: ValidationArguments
  ): Promise<boolean> {
    const id = validationArguments.object['id']
    const brand = await this.categoryService.findBySlug(text)
    if (brand) {
      if (id) {
        if (id === brand.id) {
          return true
        }
      }
      return false
    }

    return true
  }

  defaultMessage(): string {
    return 'Slug must be unique'
  }
}
