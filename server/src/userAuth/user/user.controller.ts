import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Get('getUsers')
    getUsers(): any {
        console.log("In getUser controller")
        return this.userService.getUsers();
    }
}
