export const jwtConstants = {
    secret: process.env.JWT_SECRET || "dev",
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || 60 * 60 * 24 * 7, // 7 days
};
