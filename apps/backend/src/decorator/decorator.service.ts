import { Injectable, createParamDecorator } from "@nestjs/common";

@Injectable()
export class DecoratorService {}

export const AuthUser = createParamDecorator((data, req) => {
    return req.user;
});
