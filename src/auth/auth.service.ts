import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signUp() {
    return { msg: 'I have Signed up!!!' };
  }

  signIn() {
    return { msg: 'I have Signed in!!!' };
  }
}
