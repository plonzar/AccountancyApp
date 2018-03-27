import { TokenModel } from "../models/token.model";

export class CommonService {
  token: TokenModel = new TokenModel();
  
  constructor() {
    this.token['token'] = '';
  }
}