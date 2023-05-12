import {IsString, IsNumberString, IsAlpha, IsNotEmpty, IsUrl } from 'class-validator'


export class UpdateHistoryDto {
    @IsNotEmpty()
        @IsNumberString()
    buy;
    @IsNotEmpty()
        @IsNumberString()
    sell;
}
