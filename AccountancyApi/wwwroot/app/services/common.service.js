"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_model_1 = require("../models/token.model");
var CommonService = /** @class */ (function () {
    function CommonService() {
        this.token = new token_model_1.TokenModel();
        this.token['token'] = '';
    }
    return CommonService;
}());
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map