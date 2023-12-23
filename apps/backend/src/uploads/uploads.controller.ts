import {
    Controller,
    FileTypeValidator,
    Headers,
    MaxFileSizeValidator,
    ParseFilePipe,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from "@nestjs/common";
import { UploadsService } from "./uploads.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@/auth/auth.guard";
import { UtilsService } from "@/utils/utils.service";

const maxSize = 1024 * 1024 * 3; // 3 MB

@Controller("uploads")
@ApiTags("Uploads")
export class UploadsController {
    constructor(
        private readonly uploadsService: UploadsService,
        private jwtUtils: UtilsService,
    ) {}

    @ApiConsumes("multipart/form-data")
    @ApiBody({
        schema: {
            type: "object",
            properties: {
                file: {
                    type: "image",
                    format: "png",
                },
            },
        },
    })
    @Post()
    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor("file"))
    async uploadFile(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize }),
                    new FileTypeValidator({ fileType: "image/png" }),
                ],
            }),
        )
        file: Express.Multer.File,

        @Headers("Authorization") jwt: any,
    ) {
        const token = this.jwtUtils.getToken(jwt);
        await this.uploadsService.uploadFile(file.buffer, token);
    }
}
