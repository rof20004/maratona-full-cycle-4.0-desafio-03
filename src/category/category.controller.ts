import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Categorias')
@Controller('/categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @ApiOperation({ summary: 'Criar categoria' })
    @Post()
    createCategory (@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.create(createCategoryDto);
    }

    @ApiOperation({ summary: 'Listar todas as categorias' })
    @Get()
    getAll () {
        return this.categoryService.findAll();
    }
}
