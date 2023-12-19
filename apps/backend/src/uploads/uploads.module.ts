import { Module } from "@nestjs/common";
import { UploadsService } from "./uploads.service";
import { UploadsController } from "./uploads.controller";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";

@Module({
    imports: [
        ThrottlerModule.forRootAsync({
            useFactory: (configService: ConfigService) => [
                {
                    ttl: configService.getOrThrow<number>(
                        "UPLOAD_THROTTLE_TTL",
                    ),
                    limit: configService.getOrThrow<number>(
                        "UPLOAD_THROTTLE_LIMIT",
                    ),
                },
            ],
            inject: [ConfigService],
        }),
    ],
    controllers: [UploadsController],
    providers: [
        UploadsService,
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
    ],
})
export class UploadsModule {}
