import { ApiProperty } from "@nestjs/swagger";

export class GetUserDto {
    @ApiProperty()
    sub: string;
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    avatarUrl: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    createdAt: string;
    @ApiProperty()
    updatedAt: string;
}
