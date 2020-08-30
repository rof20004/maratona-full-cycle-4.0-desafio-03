import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly name: string;
}