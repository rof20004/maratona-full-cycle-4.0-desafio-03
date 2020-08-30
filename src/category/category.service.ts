import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) { }

    public async findAll (): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    public async create (createCategoryDto: CreateCategoryDto): Promise<Category> {
        return await this.categoryRepository.save(createCategoryDto);
    }
}
