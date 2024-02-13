import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(username: string, password: string): {
        acces_token: string;
    };
}
