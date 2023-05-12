import {IsString,IsAlpha, IsNotEmpty } from 'class-validator'

export class UpdateProductDto {
    @IsAlpha()
    @IsNotEmpty()
    title;
    @IsAlpha()
    @IsNotEmpty()
    desc;
}