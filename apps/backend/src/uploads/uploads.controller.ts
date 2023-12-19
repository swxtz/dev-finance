import {
    Controller,
    FileTypeValidator,
    MaxFileSizeValidator,
    ParseFilePipe,
    Post,
    UploadedFile,
    UseInterceptors,
} from "@nestjs/common";
import { UploadsService } from "./uploads.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";

const maxSize = 1024 * 1024 * 3; // 3 MB

@Controller("uploads")
@ApiTags("Uploads")
export class UploadsController {
    constructor(private readonly uploadsService: UploadsService) {}

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
    ) {
        await this.uploadsService.uploadFile(file.originalname, file.buffer);
    }
}
