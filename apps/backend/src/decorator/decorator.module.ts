import { Global, Module } from "@nestjs/common";
import { DecoratorService } from "./decorator.service";

@Global()
@Module({
    providers: [DecoratorService],
    exports: [DecoratorService],
})
export class DecoratorModule {}
