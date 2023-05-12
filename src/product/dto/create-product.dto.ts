import {IsString, IsNumberString, IsAlpha, IsNotEmpty, IsUrl } from 'class-validator'

export class CreateProductDto {
    @IsNumberString()
    @IsNotEmpty()
    sell;
    @IsNumberString()
    @IsNotEmpty()
    buy;
    @IsUrl()
    @IsNotEmpty()
    url
    img
}
export class UpdateProdDto {
    @IsNumberString()
    @IsNotEmpty()
    sell;
    @IsNumberString()
    @IsNotEmpty()
    buy;
    @IsUrl()
    @IsNotEmpty()
    url
}
