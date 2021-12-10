import { MaxLength, IsString, IsBoolean } from 'class-validator';

export class UserDto {
  @MaxLength(100)
  @IsString()
  firtName: string;

  @MaxLength(100)
  @IsString()
  lastName: string;

  @IsBoolean()
  isActive: boolean;
}
