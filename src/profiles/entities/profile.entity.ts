import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { $Enums, Profile } from '@prisma/client';
import { Transform } from 'class-transformer';

export class ProfileEntity implements Profile {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id: number;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;


    ///FOR DTO
    @ApiProperty()
    @IsNotEmpty({ message: 'First name is required' })
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: 'Last name is required' })
    lastName: string;


    @ApiProperty({ type: 'number', required: false })
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    userIdSp: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'User id is required' })
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    userId: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'Address id is required' })
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    addressId: number;

    @ApiProperty({ type: 'string', required: false })
    @IsString()
    phone: string;

    @ApiProperty({ type: 'string', format: 'binary', required: false })
    @IsOptional()
    @IsNotEmpty()
    image: string;

    @ApiProperty({ type: 'boolean' })
    @IsBoolean()
    addressShared: boolean;

    @ApiProperty({ enum: $Enums.Assistance })
    @IsEnum($Enums.Assistance, { message: 'Assistance must be part of ' + $Enums.Assistance })
    assistance: $Enums.Assistance;

    @ApiProperty()
    @IsNotEmpty({ message: 'Address id is required' })
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    points: number;

    @ApiProperty({ type: 'string', required: false })
    @IsArray()
    skills: string;
}
