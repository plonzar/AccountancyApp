webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/customers/customers.module": [
		"./ClientApp/app/components/customers/customers.module.ts"
	],
	"../components/invoices/invoices.module": [
		"./ClientApp/app/components/invoices/invoices.module.ts"
	],
	"../components/users/users.module": [
		"./ClientApp/app/components/users/users.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./ClientApp/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  width: 100%;\r\n}\r\n\r\nbody{\r\n  height: 100vh;\r\n}"

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav *ngIf=\"signedIn\"></app-nav>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_services_customer_services__ = __webpack_require__("./ClientApp/app/services/customer services/customer.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_invoice_services_invoice_services__ = __webpack_require__("./ClientApp/app/services/invoice services/invoice.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_common_service__ = __webpack_require__("./ClientApp/app/services/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(customerServices, invoiceServices, userService, commonData) {
        this.customerServices = customerServices;
        this.invoiceServices = invoiceServices;
        this.userService = userService;
        this.commonData = commonData;
        this.title = 'Rachunkowość';
        this.width = window.innerWidth;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signedIn = this.userService.signedIn;
        this.userService.signinStatusChanged.subscribe(function (value) {
            _this.signedIn = value;
            if (_this.signedIn) {
                _this.customerServices.SetCustomersHttp();
                _this.invoiceServices.SetInvoiceshttp();
                _this.userService.StartActiveTimer();
            }
            else {
                _this.invoiceServices.invoices = [];
                _this.customerServices.customers = [];
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: [__webpack_require__("./ClientApp/app/app.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_customer_services_customer_services__["a" /* CustomerServices */],
            __WEBPACK_IMPORTED_MODULE_2__services_invoice_services_invoice_services__["a" /* InvoiceServices */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_services_user_services__["a" /* UserServices */],
            __WEBPACK_IMPORTED_MODULE_4__services_common_service__["a" /* CommonService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_email_service_email_http_service__ = __webpack_require__("./ClientApp/app/services/email service/email-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_email_service_email_service__ = __webpack_require__("./ClientApp/app/services/email service/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_nav_nav_component__ = __webpack_require__("./ClientApp/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routing_routing_module__ = __webpack_require__("./ClientApp/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_customers_customers_module__ = __webpack_require__("./ClientApp/app/components/customers/customers.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_invoices_invoices_module__ = __webpack_require__("./ClientApp/app/components/invoices/invoices.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_users_users_module__ = __webpack_require__("./ClientApp/app/components/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_customer_services_customer_services__ = __webpack_require__("./ClientApp/app/services/customer services/customer.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_customer_services_customer_http_services__ = __webpack_require__("./ClientApp/app/services/customer services/customer.http.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_invoice_services_invoice_services__ = __webpack_require__("./ClientApp/app/services/invoice services/invoice.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_invoice_services_invoice_http_services__ = __webpack_require__("./ClientApp/app/services/invoice services/invoice.http.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_user_services_user_http_services__ = __webpack_require__("./ClientApp/app/services/user services/user.http.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_common_service__ = __webpack_require__("./ClientApp/app/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_local_authorization_can_activate_guard_service__ = __webpack_require__("./ClientApp/app/services/local authorization/can-activate-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//#region import

















//#endregion
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_nav_nav_component__["a" /* NavComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_customers_customers_module__["CustomersModule"],
                __WEBPACK_IMPORTED_MODULE_9__components_invoices_invoices_module__["InvoicesModule"],
                __WEBPACK_IMPORTED_MODULE_10__components_users_users_module__["UsersModule"],
                __WEBPACK_IMPORTED_MODULE_7__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__services_common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_11__services_customer_services_customer_services__["a" /* CustomerServices */],
                __WEBPACK_IMPORTED_MODULE_12__services_customer_services_customer_http_services__["a" /* CustomerHttpServices */],
                __WEBPACK_IMPORTED_MODULE_13__services_invoice_services_invoice_services__["a" /* InvoiceServices */],
                __WEBPACK_IMPORTED_MODULE_14__services_invoice_services_invoice_http_services__["a" /* InvoiceHttpServices */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_services_user_services__["a" /* UserServices */],
                __WEBPACK_IMPORTED_MODULE_16__services_user_services_user_http_services__["a" /* UserHttpServices */],
                __WEBPACK_IMPORTED_MODULE_18__services_local_authorization_can_activate_guard_service__["a" /* CanActivateGuard */],
                __WEBPACK_IMPORTED_MODULE_1__services_email_service_email_service__["a" /* EmailService */],
                __WEBPACK_IMPORTED_MODULE_0__services_email_service_email_http_service__["a" /* EmailHttpService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/components/customers/add-customer/add-customer.component.css":
/***/ (function(module, exports) {

module.exports = ".center-panel{\r\n    width: 70%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\ninput.ng-touched.ng-invalid{\r\n  background-color: #ffb3b3;\r\n  border: 2px solid red;\r\n}\r\n\r\ninput.ng-touched.ng-valid{\r\n  background-color: #b3ff99;\r\n  border: 2px solid #2db300;\r\n}"

/***/ }),

/***/ "./ClientApp/app/components/customers/add-customer/add-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n  <div class=\"panel panel-default center-panel\">\n    <div class=\"panel-heading\">\n      <h2>Dodaj Nowego Klienta:</h2>\n    </div>\n    <form class=\"form-horizontal\" (ngSubmit)=\"AddCustomer()\" #AddCustomerForm=\"ngForm\">\n      <div class=\"panel-body\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-3\">Nazwa:</label>\n          <div class=\"col-sm-6\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.name\" name=\"Name\" #Name=\"ngModel\" required>\n          </div>\n          <div class=\"col-sm-3\">\n            <small class=\"text-danger\" *ngIf=\"!Name.valid && Name.touched\"> Proszę wpisać Nazwę firmy</small>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-3\">Miejscowość:</label>\n          <div class=\"col-sm-6\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.city\" name=\"City\" #City=\"ngModel\" required>\n          </div>\n          <div class=\"col-sm-3\">\n            <small class=\"text-danger\" *ngIf=\"!City.valid && City.touched\"> Proszę wpisać Miasto</small>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-3\">Ulica:</label>\n          <div class=\"col-sm-6\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.address\" name=\"Street\" #Street=\"ngModel\" required>\n          </div>\n          <div class=\"col-sm-3\">\n            <small class=\"text-danger\" *ngIf=\"!Street.valid && Street.touched\"> Proszę wpisać Ulicę</small>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-3\">Kod pocztowy:</label>\n          <div class=\"col-sm-6\">\n            <input \n            type=\"text\" \n            class=\"form-control\" \n            [(ngModel)]=\"customer.postCode\" \n            name=\"PostCode\" \n            #PostCode=\"ngModel\" \n            pattern=\"[0-9]{2}-[0-9]{3}\"\n            required>\n          </div>\n          <div class=\"col-sm-3\">\n            <small class=\"text-danger\" *ngIf=\"!PostCode.valid && PostCode.touched\"> Proszę wpisać kod pocztowy</small>\n          </div>\n        </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-3\">Email:</label>\n            <div class=\"col-sm-6\">\n              <input \n                class=\"form-control\" \n                type=\"email\" \n                id=\"email\" \n                [(ngModel)]=\"customer.email\" \n                name=\"email\" \n                #EmailInput=\"ngModel\"/>\n            </div>\n            <div class=\"col-sm-3\">\n              <small class=\"text-danger\" *ngIf=\"!EmailInput.valid && EmailInput.touched\">Proszę wprowadzić poprawny e-mail</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-3\">NIP:</label>\n            <div class=\"col-sm-6\">\n              <input \n              type=\"text\" class=\"form-control\" \n              [(ngModel)]=\"customer.nip\" name=\"NIP\" \n              #NIP=\"ngModel\" required \n              pattern=\"[0-9]{10}\"\n              placeholder=\"format NIP: 1234567890\"\n              maxlength=\"10\" minlength=\"10\">\n            </div>\n            <div class=\"col-sm-3\">\n              <small class=\"text-danger\" *ngIf=\"!NIP.valid && NIP.touched\"> Proszę wpisać NIP</small>\n            </div>\n        </div>\n        <div>\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!AddCustomerForm.valid\">Dodaj klienta</button>\n        </div>\n      </div>\n    </form>\n    <div class=\"panel-footer\">\n      <button class=\"btn btn-default\" [routerLink]=\"['/customer']\">Wróć do listy</button>\n      <button class=\"btn btn-warning pull-right\" (click)=\"ResetCustomerForm()\">Wyczyść formularz</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/customers/add-customer/add-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_customer_model__ = __webpack_require__("./ClientApp/app/models/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_customer_services_customer_services__ = __webpack_require__("./ClientApp/app/services/customer services/customer.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(customerService, router, userService) {
        this.customerService = customerService;
        this.router = router;
        this.userService = userService;
        this.customer = new __WEBPACK_IMPORTED_MODULE_3__models_customer_model__["a" /* Customer */]();
        this.userService.CheckTokenExpired();
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
    };
    AddCustomerComponent.prototype.AddCustomer = function () {
        if (this.AddCustomerForm.valid) {
            this.customerService.AddCustomer(this.customer);
            this.router.navigate(['/customer']);
        }
    };
    AddCustomerComponent.prototype.ResetCustomerForm = function () {
        this.AddCustomerForm.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('AddCustomerForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], AddCustomerComponent.prototype, "AddCustomerForm", void 0);
    AddCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-customer',
            template: __webpack_require__("./ClientApp/app/components/customers/add-customer/add-customer.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/customers/add-customer/add-customer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_customer_services_customer_services__["a" /* CustomerServices */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_user_services_user_services__["a" /* UserServices */]])
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/customers/customer-details/customer-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/components/customers/customer-details/customer-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-6\">\n  <div class=\"panel panel-default\">\n  <div class=\"panel-heading\"><h3>Dane klienta: </h3></div>\n  <div class=\"panel-body\" style=\"font-size: 18px\">\n    <p><b>Nazwa:</b> {{customer.name}}</p>\n    <p><b>Miejscowość:</b> {{customer.city}}</p>\n    <p><b>Kod pocztowy:</b> {{customer.postCode}}</p>\n    <p><b>Email:</b> {{customer.email}}</p>\n    <p><b>Ulica:</b> {{customer.address}}</p>\n    <p><b>NIP:</b> {{customer.nip}}</p>\n  </div>\n  <div class=\"panel-footer\" style=\"min-height: 112px;\">\n    <a class=\"btn btn-default\" [routerLink]=\"['/customer']\">Wróć do listy</a>\n    <a class=\"btn btn-primary\" [routerLink]=\"['edit']\" [queryParams]=\"{ nip: nip}\">Edytuj</a>\n    <a class=\"btn btn-primary\" [routerLink]=\"['invoices']\" [queryParams]=\"{ nip: nip}\">Zobacz faktury</a>\n    <a class=\"btn btn-primary\" [routerLink]=\"['email']\" [queryParams]=\"{ nip: nip}\">Wyślij wiadomość</a>\n  </div>\n</div>\n</div>\n<div class=\"col-sm-6\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/customers/customer-details/customer-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_customer_model__ = __webpack_require__("./ClientApp/app/models/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_customer_services_customer_services__ = __webpack_require__("./ClientApp/app/services/customer services/customer.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(activeRoute, router, customerService, userService) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.customerService = customerService;
        this.userService = userService;
        this.customer = new __WEBPACK_IMPORTED_MODULE_2__models_customer_model__["a" /* Customer */]();
        this.userService.CheckTokenExpired();
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.nip = params['nip'];
            if (_this.customerService.GetCustomerByNip(_this.nip) == undefined) {
                _this.router.navigate(['/']);
            }
            else {
                _this.customer = _this.customerService.GetCustomerByNip(_this.nip);
            }
        });
    };
    CustomerDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customer-details',
            template: __webpack_require__("./ClientApp/app/components/customers/customer-details/customer-details.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/customers/customer-details/customer-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_customer_services_customer_services__["a" /* CustomerServices */], __WEBPACK_IMPORTED_MODULE_3__services_user_services_user_services__["a" /* UserServices */]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/customers/customer-edit/customer-edit.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid{\r\n  background-color: #ffb3b3;\r\n  border: 2px solid red;\r\n}"

/***/ }),

/***/ "./ClientApp/app/components/customers/customer-edit/customer-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3>Panel edycji:</h3>\n    </div>\n    <div class=\"panel-body\">\n        <form (ngSubmit)=\"UpdateCustomerData()\" #customerForm=\"ngForm\"> \n            <div class=\"form-group row\">\n              <label for=\"Name\" class=\"col-sm-2 col-form-label\">Nazwa</label>\n              <div class=\"col-sm-10\">\n                <input class=\"form-control\" id=\"Name\" [ngModel]=\"customer.name\" name=\"Name\" type=\"text\" #NameInput=\"ngModel\" required/>\n                <small class=\"text-danger\" *ngIf=\"!NameInput.valid && NameInput.touched\">Proszę wprowadzić nazwę firmy</small>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"City\"  class=\"col-sm-2 col-form-label\">Miasto</label>\n              <div class=\"col-sm-10\">\n                <input class=\"form-control\" id=\"City\" [ngModel]=\"customer.city\" name=\"City\" type=\"text\" #CityInput=\"ngModel\" required/>\n                <small class=\"text-danger\" *ngIf=\"!CityInput.valid && CityInput.touched\">Proszę wprowadzić nazwę firmy</small>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"Street\"  class=\"col-sm-2 col-form-label\">Adres</label>\n                <div class=\"col-sm-10\">\n                  <input class=\"form-control\" id=\"Street\" [ngModel]=\"customer.address\" name=\"Street\" type=\"text\" #StreetInput=\"ngModel\" required/>\n                  <small class=\"text-danger\" *ngIf=\"!StreetInput.valid && StreetInput.touched\">Proszę wprowadzić adres</small>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"PostCode\"  class=\"col-sm-2 col-form-label\">Kod Pocztowy</label>\n                <div class=\"col-sm-10\">\n                  <input class=\"form-control\" id=\"PostCode\" [ngModel]=\"customer.postCode\" name=\"PostCode\" type=\"text\" #PostCodeInput=\"ngModel\" required/>\n                  <small class=\"text-danger\" *ngIf=\"!PostCodeInput.valid && PostCodeInput.touched\">Proszę wprowadzić kod pocztowy</small>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"PostCode\"  class=\"col-sm-2 col-form-label\">Email</label>\n                <div class=\"col-sm-10\">\n                  <input class=\"form-control\" id=\"Email\" [ngModel]=\"customer.email\" name=\"Email\" type=\"email\" #EmailInput=\"ngModel\"/>\n                  <small class=\"text-danger\" *ngIf=\"!EmailInput.valid && EmailInput.touched\">Proszę wprowadzić kod pocztowy</small>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"NIP\"  class=\"col-sm-2 col-form-label\">NIP</label>\n                <div class=\"col-sm-10\">\n                  <input class=\"form-control\" id=\"NIP\" [ngModel]=\"customer.nip\" name=\"NIP\" type=\"text\" #NipInput=\"ngModel\" required/>\n                  <small class=\"text-danger\" *ngIf=\"!NipInput.valid && NipInput.touched\">Proszę wprowadzić poprawnyNIP</small>\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!customerForm.valid\">Zapisz</button>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/customers/customer-edit/customer-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_customer_services_customer_services__ = __webpack_require__("./ClientApp/app/services/customer services/customer.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(activeRoute, customerService, router) {
        var _this = this;
        this.activeRoute = activeRoute;
        this.customerService = customerService;
        this.router = router;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.nip = params['nip'];
            _this.customer = _this.customerService.GetCustomerByNip(_this.nip);
        });
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
    };
    CustomerEditComponent.prototype.UpdateCustomerData = function () {
        this.customer.name = this.editForm.value.Name;
        this.customer.city = this.editForm.value.City;
        this.customer.address = this.editForm.value.Street;
        this.customer.postCode = this.editForm.value.PostCode;
        this.customer.email = this.editForm.value.Email;
        this.customer.nip = this.editForm.value.NIP;
        if (this.editForm.valid) {
            this.customerService.UpdateCustomer(this.customer);
            this.router.navigate(['/customer']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('customerForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* NgForm */])
    ], CustomerEditComponent.prototype, "editForm", void 0);
    CustomerEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-customer-edit',
            template: __webpack_require__("./ClientApp/app/components/customers/customer-edit/customer-edit.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/customers/customer-edit/customer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_customer_services_customer_services__["a" /* CustomerServices */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/customers/customer-invoices/customer-invoices.component.css":
/***/ (function(module, exports) {

module.exports = ".table-striped tbody {\r\n  height: 250px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n.table-striped thead, .table-striped tbody, .table-striped tr, .table-striped td, .table-striped th {\r\n  display: block;\r\n}\r\n.table-striped tbody td, .table-striped thead > tr> td {\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}"

/***/ }),

/***/ "./ClientApp/app/components/customers/customer-invoices/customer-invoices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n      <h3>Faktury:</h3>\n  </div>\n  <div class=\"panel-body\">\n    <table class=\"table table-striped table-hover\" style=\"text-align: center;\">\n      <thead class=\"bg-primary col-sm-12\">\n        <tr>\n          <td class=\"col-sm-3\">Numer faktury:</td>\n          <td class=\"col-sm-2\">Kwota:</td>\n          <td class=\"col-sm-3\">Data wystawienia:</td>\n          <td class=\"col-sm-2\">Termin Płatności:</td>\n          <td class=\"col-sm-2\">Rozliczony:</td>\n        </tr>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let invoice of invoices;\">\n            <td class=\"col-sm-3\">\n              <a [routerLink]=\"['/invoice/details']\" [queryParams]=\"{number: invoice['invoiceNumber']}\">\n                {{invoice.invoiceNumber}}/{{invoice.invoiceDate | date:'yyyy'}}\n              </a>\n            </td>\n            <td class=\"col-sm-2\">{{invoice.itemsPriceTotal | currencyPipe}} zł</td>\n            <td class=\"col-sm-3\">{{invoice.invoiceDate | date:'dd.MM.yyyy'}}</td>\n            <td class=\"col-sm-2\">{{invoice.paymentDate | date:'dd.MM.yyyy'}}</td>\n            <td class=\"col-sm-2\">\n              <span class=\"glyphicon glyphicon-ok\" *ngIf=\"invoice.accounted;\"></span>\n              <span *ngIf=\"!invoice.accounted;\">\n                <input type=\"checkbox\" (click)=\"AddToAccountedList($event, invoice.invoiceNumber);\">\n              </span>\n            </td>\n          </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"panel-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"setteledInvoices.length == 0\" (click)=\"SettleInvoices();\">Rozlicz zaznaczone</button>\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/customers/customer-invoices/customer-invoices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerInvoicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_customer_model__ = __webpack_require__("./ClientApp/app/models/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_customer_services_customer_services__ = __webpack_require__("./ClientApp/app/services/customer services/customer.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_invoice_services_invoice_services__ = __webpack_require__("./ClientApp/app/services/invoice services/invoice.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerInvoicesComponent = /** @class */ (function () {
    function CustomerInvoicesComponent(customerService, invoiceService, activeRoute) {
        this.customerService = customerService;
        this.invoiceService = invoiceService;
        this.activeRoute = activeRoute;
        this.customer = new __WEBPACK_IMPORTED_MODULE_2__models_customer_model__["a" /* Customer */]();
        this.invoices = [];
        this.setteledInvoices = [];
    }
    CustomerInvoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.nip = params['nip'];
            _this.customer = _this.customerService.GetCustomerByNip(_this.nip);
            _this.invoices = _this.invoiceService.invoices.filter(function (i) { return i.customer.nip == _this.nip; });
        });
    };
    CustomerInvoicesComponent.prototype.AddToAccountedList = function (event, invoiceNumber) {
        var index = this.setteledInvoices.indexOf(invoiceNumber);
        if (event.target.checked) {
            if (index == -1)
                this.setteledInvoices.push(invoiceNumber);
        }
        else {
            if (index != -1)
                this.setteledInvoices.splice(index, 1);
        }
    };
    CustomerInvoicesComponent.prototype.SettleInvoices = function () {
        this.invoiceService.SettleInvoices(this.setteledInvoices, this.nip);
    };
    CustomerInvoicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customer-invoices',
            template: __webpack_require__("./ClientApp/app/components/customers/customer-invoices/customer-invoices.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/customers/customer-invoices/customer-invoices.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_customer_services_customer_services__["a" /* CustomerServices */], __WEBPACK_IMPORTED_MODULE_4__services_invoice_services_invoice_services__["a" /* InvoiceServices */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CustomerInvoicesComponent);
    return CustomerInvoicesComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/customers/customer-send-email/customer-send-email.component.css":
/***/ (function(module, exports) {

module.exports = "textarea {\r\n  resize: none;\r\n}"

/***/ }),

/***/ "./ClientApp/app/components/customers/customer-send-email/customer-send-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3>Wysyłanie wiadomości</h3>\n  </div>\n  <form #emailForm=\"ngForm\" (ngSubmit)=\"SendMessage();\">\n  <div class=\"panel-body\">\n    <div class=\"form-group row\">\n      <label for=\"email\"  class=\"col-sm-2 col-form-label\">Odbiorca:</label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control\" id=\"email\" [(ngModel)]=\"message.receiver\" name=\"email\" type=\"email\" #email=\"ngModel\" required/>\n        <small class=\"text-danger\" *ngIf=\"!email.valid && email.touched\">Proszę wprowadzić odbiorcę</small>\n      </div>\n    </div>\n\n    <div class=\"col-sm-12\"><hr></div>\n\n    <div class=\"form-group row\">\n      <label for=\"subject\"  class=\"col-sm-2 col-form-label\">Temat:</label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control\" id=\"subject\" [(ngModel)]=\"message.subject\" name=\"subject\" type=\"text\" #subject=\"ngModel\" required/>\n        <small class=\"text-danger\" *ngIf=\"!email.valid && email.touched\">Proszę podać temat</small>\n      </div>\n    </div>\n    <div class=\"col-sm-12\">\n      <textarea rows=\"7\" class=\"form-control col-sm-12\" id=\"messageBody\" [(ngModel)]=\"message.messageBody\" name=\"messageBody\" #messageBody=\"ngModel\" required></textarea>\n      <small class=\"text-danger\" *ngIf=\"!messageBody.valid && messageBody.touched\">Proszę wprowadzić treść</small>\n    </div>\n  </div>\n  <div class=\"panel-footer\">\n    <button type=\"submit\" class=\"btn btn-primary\">Wyślij</button>\n  </div>\n  </form>\n</div>\n\n\n\n\n\n\n  \n  "

/***/ }),

/***/ "./ClientApp/app/components/customers/customer-send-email/customer-send-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSendEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_email_message_model__ = __webpack_require__("./ClientApp/app/models/email-message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_email_service_email_service__ = __webpack_require__("./ClientApp/app/services/email service/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_customer_services_customer_services__ = __webpack_require__("./ClientApp/app/services/customer services/customer.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_customer_model__ = __webpack_require__("./ClientApp/app/models/customer.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerSendEmailComponent = /** @class */ (function () {
    function CustomerSendEmailComponent(activRoute, customerService, emailService) {
        this.activRoute = activRoute;
        this.customerService = customerService;
        this.emailService = emailService;
        this.customer = new __WEBPACK_IMPORTED_MODULE_5__models_customer_model__["a" /* Customer */]();
        this.message = new __WEBPACK_IMPORTED_MODULE_0__models_email_message_model__["a" /* EmailMessageModel */]();
    }
    CustomerSendEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activRoute.queryParams.subscribe(function (param) {
            var nip = param['nip'];
            if (nip != null && nip != undefined)
                _this.customer = _this.customerService.GetCustomerByNip(nip);
            if (_this.customer != null) {
                _this.message.receiver = _this.customer.email;
            }
        });
    };
    CustomerSendEmailComponent.prototype.SendMessage = function () {
        console.log(this.message.messageBody);
        this.emailService.SendMessage(this.message);
    };
    CustomerSendEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-customer-send-email',
            template: __webpack_require__("./ClientApp/app/components/customers/customer-send-email/customer-send-email.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/customers/customer-send-email/customer-send-email.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_customer_services_customer_services__["a" /* CustomerServices */], __WEBPACK_IMPORTED_MODULE_3__services_email_service_email_service__["a" /* EmailService */]])
    ], CustomerSendEmailComponent);
    return CustomerSendEmailComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/customers/customer/customer.component.css":
/***/ (function(module, exports) {

module.exports = ".sortButtons:hover{\r\n  background: #4285F4;\r\n  cursor: pointer;\r\n}\r\n\r\n.table-striped tbody {\r\n  height: 400px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n\r\n.table-striped thead, .table-striped tbody, .table-striped tr, .table-striped td, .table-striped th {\r\n  display: block;\r\n}\r\n\r\n.table-striped tbody td, .table-striped thead > tr> td {\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}"

/***/ }),

/***/ "./ClientApp/app/components/customers/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <h2>Baza klientów:</h2>\n    <hr/>\n  </div>\n  <div class=\"col-xs-6\" style=\"margin-bottom: 20px;\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"wyszukaj po NIP lub nazwie klienta\" [(ngModel)]=\"searchParam\"/>\n  </div>\n  <div class=\"col-xs-3\">\n      <button class=\"btn btn-primary\" [routerLink]=\"['add']\">Dodaj Nowego Klienta</button>\n  </div>\n  <div>\n    <table class=\"table table-striped\">\n      <thead class=\"bg-primary col-sm-12\">\n        <tr>\n          <td class=\"sortButtons col-sm-4\" (click)=\"SortCustomers('name')\">\n            <span class=\"glyphicon glyphicon-triangle-bottom\" *ngIf=\"!orderDescending\"></span>\n            <span class=\"glyphicon glyphicon-triangle-top\" *ngIf=\"orderDescending\"></span>\n            Nazwa:\n          </td>\n          <td class=\"sortButtons col-sm-3\" (click)=\"SortCustomers('address')\">\n            <span class=\"glyphicon glyphicon-triangle-bottom\" *ngIf=\"!orderDescending\"></span>\n            <span class=\"glyphicon glyphicon-triangle-top\" *ngIf=\"orderDescending\"></span>\n            Adres:\n          </td>\n          <td class=\"sortButtons col-sm-3\" (click)=\"SortCustomers('city')\">\n            <span class=\"glyphicon glyphicon-triangle-bottom\" *ngIf=\"!orderDescending\"></span>\n            <span class=\"glyphicon glyphicon-triangle-top\" *ngIf=\"orderDescending\"></span>  \n            Miasto:\n          </td>\n          <td class=\"col-sm-2\">NIP:</td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr \n          *ngFor=\"let customer of customers | customerSearch: searchParam;\"\n          (click)=\"NavigateToDetails(customer['nip'])\"\n          style=\"cursor:pointer;\"\n          >\n          <td class=\"col-sm-4\">{{customer.name}}</td>\n          <td class=\"col-sm-3\">{{customer.address}}</td>\n          <td class=\"col-sm-3\">{{customer.city}}</td>\n          <td class=\"col-sm-2\">{{customer.nip}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/customers/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customer_services_customer_services__ = __webpack_require__("./ClientApp/app/services/customer services/customer.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(customerService, router, userService) {
        this.customerService = customerService;
        this.router = router;
        this.userService = userService;
        this.customers = [];
        this.searchParam = '';
        this.orderDescending = false;
        this.customers = this.customerService.customers;
        if (this.userService.userInactive) {
            this.userService.CheckTokenExpired();
            this.userService.ResetActiveTimer();
        }
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.customersChanged.subscribe(function (customers) {
            _this.customers = customers;
        });
    };
    CustomerComponent.prototype.SortCustomers = function (sortParam) {
        if (this.orderDescending) {
            this.customers = this.customers.sort(function (a, b) {
                if (a[sortParam] < b[sortParam])
                    return 1;
                if (a[sortParam] > b[sortParam])
                    return -1;
                return 0;
            });
            this.orderDescending = !this.orderDescending;
        }
        else {
            this.customers = this.customers.sort(function (a, b) {
                if (a[sortParam] < b[sortParam])
                    return -1;
                if (a[sortParam] > b[sortParam])
                    return 1;
            });
            this.orderDescending = !this.orderDescending;
        }
    };
    CustomerComponent.prototype.NavigateToDetails = function (nip) {
        this.router.navigate(['customer/details', nip]);
    };
    CustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customer',
            template: __webpack_require__("./ClientApp/app/components/customers/customer/customer.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/customers/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_customer_services_customer_services__["a" /* CustomerServices */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_user_services_user_services__["a" /* UserServices */]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/customers/customers-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_send_email_customer_send_email_component__ = __webpack_require__("./ClientApp/app/components/customers/customer-send-email/customer-send-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_component__ = __webpack_require__("./ClientApp/app/components/customers/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_customer_add_customer_component__ = __webpack_require__("./ClientApp/app/components/customers/add-customer/add-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_details_customer_details_component__ = __webpack_require__("./ClientApp/app/components/customers/customer-details/customer-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_edit_customer_edit_component__ = __webpack_require__("./ClientApp/app/components/customers/customer-edit/customer-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_invoices_customer_invoices_component__ = __webpack_require__("./ClientApp/app/components/customers/customer-invoices/customer-invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_local_authorization_can_activate_guard_service__ = __webpack_require__("./ClientApp/app/services/local authorization/can-activate-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var customersRouting = [
    { path: 'customer', component: __WEBPACK_IMPORTED_MODULE_3__customer_customer_component__["a" /* CustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_local_authorization_can_activate_guard_service__["a" /* CanActivateGuard */]] },
    { path: 'customer/add', component: __WEBPACK_IMPORTED_MODULE_4__add_customer_add_customer_component__["a" /* AddCustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_local_authorization_can_activate_guard_service__["a" /* CanActivateGuard */]] },
    { path: 'customer/details/:nip', component: __WEBPACK_IMPORTED_MODULE_5__customer_details_customer_details_component__["a" /* CustomerDetailsComponent */], children: [
            { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_6__customer_edit_customer_edit_component__["a" /* CustomerEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_local_authorization_can_activate_guard_service__["a" /* CanActivateGuard */]] },
            { path: 'invoices', component: __WEBPACK_IMPORTED_MODULE_7__customer_invoices_customer_invoices_component__["a" /* CustomerInvoicesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_local_authorization_can_activate_guard_service__["a" /* CanActivateGuard */]] },
            { path: 'email', component: __WEBPACK_IMPORTED_MODULE_0__customer_send_email_customer_send_email_component__["a" /* CustomerSendEmailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_local_authorization_can_activate_guard_service__["a" /* CanActivateGuard */]] },
        ], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_local_authorization_can_activate_guard_service__["a" /* CanActivateGuard */]] },
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(customersRouting)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());



/***/ }),

/***/ "./ClientApp/app/components/customers/customers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customers_routing_module__ = __webpack_require__("./ClientApp/app/components/customers/customers-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__ = __webpack_require__("./ClientApp/app/components/customers/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_customer_add_customer_component__ = __webpack_require__("./ClientApp/app/components/customers/add-customer/add-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_details_customer_details_component__ = __webpack_require__("./ClientApp/app/components/customers/customer-details/customer-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_edit_customer_edit_component__ = __webpack_require__("./ClientApp/app/components/customers/customer-edit/customer-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_customer_search_pipe__ = __webpack_require__("./ClientApp/app/components/customers/pipes/customer-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customer_invoices_customer_invoices_component__ = __webpack_require__("./ClientApp/app/components/customers/customer-invoices/customer-invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_global_pipes_export_module__ = __webpack_require__("./ClientApp/app/pipes/global-pipes-export.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__customer_send_email_customer_send_email_component__ = __webpack_require__("./ClientApp/app/components/customers/customer-send-email/customer-send-email.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__pipes_customer_search_pipe__["a" /* CustomerSearchPipe */],
                __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__["a" /* CustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_customer_add_customer_component__["a" /* AddCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__customer_details_customer_details_component__["a" /* CustomerDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__customer_edit_customer_edit_component__["a" /* CustomerEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__customer_invoices_customer_invoices_component__["a" /* CustomerInvoicesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__customer_send_email_customer_send_email_component__["a" /* CustomerSendEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__customer_send_email_customer_send_email_component__["a" /* CustomerSendEmailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__customers_routing_module__["a" /* CustomersRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_global_pipes_export_module__["a" /* GlobalPipesExportModule */]
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./ClientApp/app/components/customers/pipes/customer-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomerSearchPipe = /** @class */ (function () {
    function CustomerSearchPipe() {
    }
    CustomerSearchPipe.prototype.transform = function (customerArray, param) {
        if (param != '')
            return customerArray.filter(function (c) { return c.name.toLowerCase().includes(param.toString().toLowerCase()) || c.nip.toLowerCase().includes(param.toString().toLowerCase()); });
        return customerArray;
    };
    CustomerSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'customerSearch'
        })
    ], CustomerSearchPipe);
    return CustomerSearchPipe;
}());



/***/ }),

/***/ "./ClientApp/app/components/invoices/invoice-details/invoice-details.component.css":
/***/ (function(module, exports) {

module.exports = ".signature-element{\r\n  margin-top: 40px;\r\n  border: 5px solid black;\r\n  min-height: 40px;\r\n  height: 40px;\r\n  min-width: 100px;\r\n  width: 100px;\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./ClientApp/app/components/invoices/invoice-details/invoice-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h2>Faktura nr {{invoice.invoiceNumber}}/{{invoice.invoiceDate | date:'yyyy'}}</h2>\n    </div>\n    <div class=\"panel-body\" id=\"invoiceContent\" #invoiceContent style=\"background-color: white;\">\n      <div class=\"col-sm-12\"><br></div>\n      <div class=\"col-sm-6\">\n        <strong>Data wystawnienia: {{invoice.invoiceDate | date:'dd-MM-yyyy'}}</strong>\n        <h3>Nabywca:</h3>\n        <p>{{invoice.customer.name}}</p>\n        <p>{{invoice.customer.postCode}} {{invoice.customer.city}}</p>\n        <p>{{invoice.customer.address}}</p>\n        <p>NIP: {{invoice.customer.nip}}</p>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"pull-right\">\n          <div class=\"col-sm-12\">\n            <br>\n            <h3>Sprzedawca:</h3>\n            <p>{{user.name}}</p>\n            <p>{{user.postCode}} {{user.city}}</p>\n            <p>{{user.address}}</p>\n            <p>NIP: {{user.nip}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12\" style=\"margin-top: 30px; margin-bottom: 40px; text-align: center;\">\n          <h3>FV {{invoice.invoiceNumber}}/{{invoice.invoiceDate | date:'yyyy'}}</h3>\n      </div>\n      <table class=\"table table-bordered col-sm-12\" style=\"text-align: center;\">\n        <thead>\n          <tr>\n            <td>Nazwa:</td>\n            <td>Jednostkowa cena netto:</td>\n            <td>Ilość:</td>\n            <td>Całkowita cena netto:</td>\n            <td>Stawka podatku:</td>\n            <td>Cena brutto:</td>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of invoice.invoiceItems\">\n            <td>{{item.name}}</td>\n            <td>{{item.unitPriceWithoutTax | currencyPipe}}</td>\n            <td>{{item.amount}}</td>\n            <td>{{item.totalPriceWithoutTax | currencyPipe}}</td>\n            <td>{{item.tax}}%</td>\n            <td>{{item.totalPriceWithTax | currencyPipe}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"col-sm-6\">\n        <h3>Do zapłaty: {{invoice.itemsPriceTotal | currencyPipe}} zł</h3>\n        <p>Sposób płatności: {{invoice.paymentType}}</p>\n        <p>Termin płatności: {{invoice.paymentDate | date:'dd-MM-yyyy'}}</p>\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n      <button type=\"button\" class=\"btn btn-default\" [routerLink]=\"['/']\">Wróć do listy</button>\n      <button type=\"button\" class=\"btn btn-warning\" [routerLink]=\"['/invoice/edit', invoiceNumber]\">Edytuj</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteInvoice()\" title=\"Można usunąć tylko ostatnią fakturę\">Usuń</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"GeneratePDF()\">Drukuj PDF</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/invoices/invoice-details/invoice-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_invoice_services_invoice_services__ = __webpack_require__("./ClientApp/app/services/invoice services/invoice.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("./ClientApp/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvoiceDetailsComponent = /** @class */ (function () {
    function InvoiceDetailsComponent(activRoute, router, invoiceService, userService) {
        this.activRoute = activRoute;
        this.router = router;
        this.invoiceService = invoiceService;
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* UserModel */]();
        this.userService.CheckTokenExpired();
        this.user = this.userService.userData;
    }
    InvoiceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activRoute.queryParams.subscribe(function (params) {
            _this.invoiceNumber = +params['number'];
            _this.invoice = _this.invoiceService.GetInvoiceByNumber(_this.invoiceNumber);
            if (_this.invoice == null) {
                alert("Nie można znaleść faktury, prosze spróbować ponownie");
                _this.router.navigate(['/invoice']);
            }
        });
    };
    InvoiceDetailsComponent.prototype.DeleteInvoice = function () {
        this.invoiceService.DeleteInvoice(this.invoiceNumber);
        this.router.navigate(['/']);
    };
    InvoiceDetailsComponent.prototype.GeneratePDF = function () {
        var _this = this;
        var signatureElement = document.createElement('div');
        signatureElement.classList.add('col-sm-6');
        signatureElement.innerHTML = '<div class="col-sm-4 signature-element pull-right" ><h4>Wystawił</h4><br><br><p>...................</p></div>';
        this.invoiceContent.nativeElement.appendChild(signatureElement);
        var doc = new __WEBPACK_IMPORTED_MODULE_5_jspdf__('p', 'mm', 'a4');
        doc.addHTML(this.invoiceContent.nativeElement, function () {
            doc.save('Faktura_nr_' + _this.invoice.invoiceNumber + '.pdf');
        });
        setTimeout(function () {
            _this.invoiceContent.nativeElement.removeChild(signatureElement);
        }, 10);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('invoiceContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], InvoiceDetailsComponent.prototype, "invoiceContent", void 0);
    InvoiceDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice-details',
            template: __webpack_require__("./ClientApp/app/components/invoices/invoice-details/invoice-details.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/invoices/invoice-details/invoice-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_invoice_services_invoice_services__["a" /* InvoiceServices */], __WEBPACK_IMPORTED_MODULE_3__services_user_services_user_services__["a" /* UserServices */]])
    ], InvoiceDetailsComponent);
    return InvoiceDetailsComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/invoices/invoice-edit/helpClasses/getting-form-data-operations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GettingFormDataOperations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_invoice_item_model__ = __webpack_require__("./ClientApp/app/models/invoice-item.model.ts");

var GettingFormDataOperations = /** @class */ (function () {
    function GettingFormDataOperations() {
    }
    GettingFormDataOperations.prototype.getCustomerData = function (invoiceForm, customer) {
        customer.name = invoiceForm.value.customerName;
        customer.city = invoiceForm.value.customerCity;
        customer.postCode = invoiceForm.value.customerPostCode;
        customer.address = invoiceForm.value.customerStreet;
        customer.nip = invoiceForm.value.customerNIP;
    };
    GettingFormDataOperations.prototype.getInvoiceItems = function (invoiceForm, invoiceItems) {
        var formInvoicItems = invoiceForm.get('invoiceItems');
        var invoiceItem;
        for (var _i = 0, _a = formInvoicItems.value; _i < _a.length; _i++) {
            var formInvoicItem = _a[_i];
            invoiceItem = new __WEBPACK_IMPORTED_MODULE_0__models_invoice_item_model__["a" /* InvoiceItem */]();
            invoiceItem.name = formInvoicItem.itemName;
            invoiceItem.amount = formInvoicItem.itemAmount;
            invoiceItem.tax = formInvoicItem.itemTax;
            invoiceItem.unitPriceWithoutTax = formInvoicItem.itemUnitPriceWithoutTax;
            invoiceItem.totalPriceWithoutTax = formInvoicItem.itemTotalPriceWithoutTax;
            invoiceItem.totalPriceWithTax = formInvoicItem.itemTotalPriceWithTax;
            if (invoiceItem != undefined) {
                invoiceItems.push(invoiceItem);
            }
        }
    };
    GettingFormDataOperations.prototype.getPaymentDate = function (invoiceForm) {
        return invoiceForm.value.paymentDate;
    };
    GettingFormDataOperations.prototype.getPaymentType = function (invoiceForm) {
        return invoiceForm.value.paymentType;
    };
    return GettingFormDataOperations;
}());



/***/ }),

/***/ "./ClientApp/app/components/invoices/invoice-edit/helpClasses/invoice-form-operations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceFormOperations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");

var InvoiceFormOperations = /** @class */ (function () {
    function InvoiceFormOperations() {
    }
    InvoiceFormOperations.prototype.ClearInvoiceFormArray = function (invoiceForm) {
        var arrayLength = invoiceForm.get('invoiceItems').length;
        for (var i = arrayLength; i > 0; i--) {
            invoiceForm.get('invoiceItems').removeAt(i);
        }
    };
    InvoiceFormOperations.prototype.AddItemRow = function (invoiceForm) {
        var newRow = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]({
            'itemName': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
            'itemAmount': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](1, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].min(1)]),
            'itemTax': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](23, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
            'itemUnitPriceWithoutTax': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
            'itemTotalPriceWithoutTax': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
            'itemTotalPriceWithTax': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
        });
        invoiceForm.get('invoiceItems').push(newRow);
    };
    InvoiceFormOperations.prototype.RemoveItemRow = function (invoiceForm, index) {
        invoiceForm.get('invoiceItems').removeAt(index);
    };
    InvoiceFormOperations.prototype.InitializeFormArray = function (invoiceItems, editMode, invoice) {
        if (editMode) {
            for (var _i = 0, _a = invoice['invoiceItems']; _i < _a.length; _i++) {
                var item = _a[_i];
                var inoviceItem = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]({
                    'itemName': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](item['name'], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
                    'itemAmount': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](item['amount'], [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].min(1)]),
                    'itemTax': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](item['tax'], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
                    'itemUnitPriceWithoutTax': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](item['unitPriceWithoutTax'], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
                    'itemTotalPriceWithoutTax': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](item['totalPriceWithoutTax'], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
                    'itemTotalPriceWithTax': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](item['totalPriceWithTax'], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
                });
                invoiceItems.push(inoviceItem);
            }
        }
        else {
            var inoviceItem = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]({
                'itemName': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
                'itemAmount': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](1, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].min(1)]),
                'itemTax': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](23, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
                'itemUnitPriceWithoutTax': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
                'itemTotalPriceWithoutTax': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
                'itemTotalPriceWithTax': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
            });
            invoiceItems.push(inoviceItem);
        }
    };
    return InvoiceFormOperations;
}());



/***/ }),

/***/ "./ClientApp/app/components/invoices/invoice-edit/helpClasses/price-calculation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceCalculation; });
var PriceCalculation = /** @class */ (function () {
    function PriceCalculation() {
    }
    PriceCalculation.prototype.calculateUnitPriceWithoutTax = function (formGroup, changedValue) {
        switch (changedValue) {
            case "itemTotalPriceWithoutTax": {
                var priceWithoutTax = formGroup.value.itemTotalPriceWithoutTax;
                var itemAmount = formGroup.value.itemAmount;
                var newUnitPrice = (priceWithoutTax / itemAmount).toFixed(2);
                formGroup.patchValue({
                    itemUnitPriceWithoutTax: newUnitPrice
                });
                break;
            }
            case "itemTotalPriceWithTax": {
                var TotalPriceWithTax = formGroup.value.itemTotalPriceWithTax;
                var itemAmount = formGroup.value.itemAmount;
                var tax = formGroup.value.itemTax;
                var newUnitPrice = ((TotalPriceWithTax / (1 + (tax / 100))) / itemAmount).toFixed(2);
                formGroup.patchValue({
                    itemUnitPriceWithoutTax: newUnitPrice
                });
                break;
            }
        }
    };
    PriceCalculation.prototype.calculateTotalPriceWithoutTax = function (formGroup, changedValue) {
        switch (changedValue) {
            case "itemAmount":
            case "UnitPriceWithoutTax": {
                var unitPrice = formGroup.value.itemUnitPriceWithoutTax;
                var itemAmount = formGroup.value.itemAmount;
                var newTotalPriceWithoutTax = (unitPrice * itemAmount).toFixed(2);
                formGroup.patchValue({
                    itemTotalPriceWithoutTax: newTotalPriceWithoutTax
                });
                break;
            }
            case "itemTotalPriceWithTax": {
                var TotalPriceWithTax = formGroup.value.itemTotalPriceWithTax;
                var tax = formGroup.value.itemTax;
                var newTotalPriceWithoutTax = (TotalPriceWithTax / (1 + (tax / 100))).toFixed(2);
                formGroup.patchValue({
                    itemTotalPriceWithoutTax: newTotalPriceWithoutTax
                });
                break;
            }
        }
    };
    PriceCalculation.prototype.calculateTotalPriceWithTax = function (formGroup, changedValue) {
        switch (changedValue) {
            case "UnitPriceWithoutTax":
            case "itemAmount": {
                var unitPrice = formGroup.value.itemUnitPriceWithoutTax;
                var itemAmount = formGroup.value.itemAmount;
                var tax = formGroup.value.itemTax;
                var newTotalPriceWithTax = ((unitPrice * itemAmount) * (1 + (tax / 100))).toFixed(2);
                formGroup.patchValue({
                    itemTotalPriceWithTax: newTotalPriceWithTax
                });
                break;
            }
            case "itemTax":
            case "itemTotalPriceWithoutTax": {
                var priceWithoutTax = formGroup.value.itemTotalPriceWithoutTax;
                var tax = formGroup.value.itemTax;
                var newTotalPriceWithTax = (priceWithoutTax * (1 + (tax / 100))).toFixed(2);
                formGroup.patchValue({
                    itemTotalPriceWithTax: newTotalPriceWithTax
                });
                break;
            }
        }
    };
    PriceCalculation.prototype.calculateSum = function (formGroup) {
        var itemsArray = formGroup.get('invoiceItems').value;
        var sum = 0;
        for (var _i = 0, itemsArray_1 = itemsArray; _i < itemsArray_1.length; _i++) {
            var item = itemsArray_1[_i];
            sum += Number(item.itemTotalPriceWithTax);
        }
        return Number(sum.toFixed(2));
    };
    return PriceCalculation;
}());



/***/ }),

/***/ "./ClientApp/app/components/invoices/invoice-edit/invoice-edit.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid{\r\n  background-color: #ffb3b3;\r\n  border: 2px solid red;\r\n}\r\n\r\n.autocomplete-dropdown-list{\r\n    position: absolute;\r\n    z-index: 1;\r\n    max-height: 100px;\r\n    overflow-y: auto;\r\n    background-color: white;\r\n    -webkit-transition: none;\r\n    transition: none;\r\n}\r\n\r\n.autocomplete-dropdown-item {\r\n    background-color: white;\r\n}\r\n\r\n.autocomplete-dropdown-item:hover{\r\n  background: lightgray;\r\n}"

/***/ }),

/***/ "./ClientApp/app/components/invoices/invoice-edit/invoice-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n  <h2>{{title}}</h2>\n  <hr/>\n</div>\n<div>\n  <form [formGroup]=\"invoiceForm\" (ngSubmit)=\"SubmitInvoice()\" class=\"col-sm-12\" autocomplete=\"off\">\n    <div class=\"col-sm-12\">\n      <div class=\"form-gropu row\">\n        <label class=\"col-sm-2 col-form-label\" for=\"customerName\">Nazwa:</label>\n        <div class=\"col-sm-7\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"customerName\" id=\"customerName\" autocomplete=\"off\">\n            <div class=\"autocomplete-dropdown-list col-sm-12\" *ngIf=\"!selected\">\n              <div style=\"cursor: pointer\" *ngFor=\"let name of filteredResult | async;\" (click)=\"AutocompleteForm(name)\" class=\"autocomplete-dropdown-item\">\n                {{name}}\n              </div>\n            </div>\n        </div>\n        <div class=\"col-sm-3\">\n          <small class=\"text-danger\" \n            *ngIf=\"!invoiceForm.get('customerName').valid && invoiceForm.get('customerName').touched\"\n            >Proszę podać nazwę</small>\n        </div>\n      </div>\n      <div class=\"form-gropu row\" style=\"margin-top: 10px;\">\n        <label class=\"col-sm-2 col-form-label\" for=\"customerCity\">Miejscowość:</label>\n        <div class=\"col-sm-7\">\n          <input formControlName=\"customerCity\" type=\"text\" class=\"form-control\" id=\"customerCity\"  placeholder=\"Miejscowość\" autocomplete=\"off\">\n        </div>\n        <div class=\"col-sm-3\">\n          <small class=\"text-danger\" \n            *ngIf=\"!invoiceForm.get('customerCity').valid && invoiceForm.get('customerCity').touched\"\n            >Proszę podać miejscowość</small>\n        </div>\n      </div>\n      <div class=\"form-gropu row\" style=\"margin-top: 10px;\">\n        <label class=\"col-sm-2 col-form-label\" for=\"customerPostCode\">Kod poczotwy:</label>\n        <div class=\"col-sm-7\">\n          <input formControlName=\"customerPostCode\" type=\"text\" class=\"form-control\" id=\"customerPostCode\"  placeholder=\"Kod pocztowy\" autocomplete=\"off\">\n        </div>\n        <div class=\"col-sm-3\">\n          <small class=\"text-danger\"\n           *ngIf=\"!invoiceForm.get('customerPostCode').valid && invoiceForm.get('customerPostCode').touched\"\n           >Prosze podać kod pocztowy</small>\n        </div>\n      </div>\n      <div class=\"form-gropu row\" style=\"margin-top: 10px;\">\n        <label class=\"col-sm-2 col-form-label\" for=\"customerStreet\">Adres:</label>\n        <div class=\"col-sm-7\">\n          <input formControlName=\"customerStreet\" type=\"text\" class=\"form-control\" id=\"customerStreet\"  placeholder=\"Adres\" autocomplete=\"off\">\n        </div>\n        <div class=\"col-sm-3\">\n          <small class=\"text-danger\"\n            *ngIf=\"!invoiceForm.get('customerStreet').valid && invoiceForm.get('customerStreet').touched\"\n            >Prosze podać adres</small>\n        </div>\n      </div>\n      <div class=\"form-gropu row\" style=\"margin-top: 10px;\">\n        <label class=\"col-sm-2 col-form-label\" for=\"customerNIP\">NIP:</label>\n        <div class=\"col-sm-7\">\n          <input formControlName=\"customerNIP\" type=\"text\" class=\"form-control\" id=\"customerNIP\" maxlength=\"10\" placeholder=\"format NIP: 1234567890\" autocomplete=\"off\">\n        </div>\n        <div class=\"col-sm-3\">\n          <small class=\"text-danger\"\n            *ngIf=\"!invoiceForm.get('customerNIP').valid && invoiceForm.get('customerNIP').touched\"\n            >Proszę podać poprawny NIP</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\" style=\"margin-top: 20px;\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <td>Nazwa:</td>\n            <td>Cena jenostkowa netto:</td>\n            <td>Ilość:</td>\n            <td>Stawka podatku:</td>\n            <td>Całkowita cena netto:</td>\n            <td>Całkowita cena brutto:</td>\n            <td>Usuń:</td>\n          </tr>\n        </thead>\n        <tbody formArrayName=\"invoiceItems\">\n          <tr *ngFor=\"let invoiceItem of invoiceForm.get('invoiceItems')['controls']; let i=index;\" [formGroupName]=\"i\">\n            <td><input \n                  class=\"form-control\" \n                  type=\"text\" \n                  formControlName=\"itemName\"></td>\n            <td><input class=\"form-control\" \n                  type=\"number\" \n                  formControlName=\"itemUnitPriceWithoutTax\" \n                  (blur)=\"ItemUnitPriceWithoutTaxChanged(invoiceItem)\"></td>\n            <td><input \n                  class=\"form-control\" \n                  type=\"number\" \n                  formControlName=\"itemAmount\" \n                  (blur)=\"ItemAmountChanged(invoiceItem)\"></td>\n            <td>\n              <select \n                class=\"form-control\" \n                type=\"number\" \n                formControlName=\"itemTax\"\n                (change)=\"ItemTaxChanged(invoiceItem)\">\n                <option *ngFor=\"let tax of taxValues['values'];\" value=\"{{tax}}\">{{tax}}</option>\n              </select>\n            </td>\n            <td>\n              <input \n                  class=\"form-control\" \n                  type=\"number\" \n                  formControlName=\"itemTotalPriceWithoutTax\" \n                  (blur)=\"ItemTotalPriceWithoutTaxChanged(invoiceItem)\">\n            </td>\n            <td>\n              <input \n                  class=\"form-control\" \n                  type=\"number\" \n                  formControlName=\"itemTotalPriceWithTax\"\n                  (blur)=\"ItemTotalPriceWithTaxChanged(invoiceItem)\">\n            </td>\n            <td>\n              <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"RemoveItemRow(i)\" [disabled]=\"invoiceForm.get('invoiceItems').length <= 1\">X</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <hr>\n        <div class=\"col-sm-2\">\n          <h4>Sposób płatności:</h4>\n        </div>\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" formControlName=\"paymentType\">\n            <option value=\"gotówka\">gotówka</option>\n            <option value=\"przelew\">przelew</option>\n          </select>\n        </div>\n        <div class=\"col-sm-2\">\n            <h4>Termin zapłaty:</h4>\n        </div>\n        <div class=\"col-sm-3\">\n          <input class=\"form-control\" type=\"date\" formControlName=\"paymentDate\" #paymentDate>\n        </div>\n        <div class=\"col-sm-3\" style=\"text-align: right;\">\n          <h4>Suma: {{sum | currencyPipe}} zł</h4>\n        </div>\n    </div>\n    <div class=\"col-sm-12\" style=\"margin-top: 50px;\">\n      <button type=\"button\" class=\"btn btn-default\" [disabled]=\"!invoiceForm.get('invoiceItems').valid\" (click)=\"AddItemRow()\">dodaj wiersz</button>\n      <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"!invoiceForm.valid\">{{workMode}}</button>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"ClearForm()\">Wyczyść formularz</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/invoices/invoice-edit/invoice-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpClasses_invoice_form_operations__ = __webpack_require__("./ClientApp/app/components/invoices/invoice-edit/helpClasses/invoice-form-operations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpClasses_getting_form_data_operations__ = __webpack_require__("./ClientApp/app/components/invoices/invoice-edit/helpClasses/getting-form-data-operations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpClasses_price_calculation__ = __webpack_require__("./ClientApp/app/components/invoices/invoice-edit/helpClasses/price-calculation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enums_tax_value_enum__ = __webpack_require__("./ClientApp/app/enums/tax-value.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_invoice_model__ = __webpack_require__("./ClientApp/app/models/invoice.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_customer_model__ = __webpack_require__("./ClientApp/app/models/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_invoice_services_invoice_services__ = __webpack_require__("./ClientApp/app/services/invoice services/invoice.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_customer_services_customer_services__ = __webpack_require__("./ClientApp/app/services/customer services/customer.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//#region import













//#endregion
var InvoiceEditComponent = /** @class */ (function () {
    function InvoiceEditComponent(formOperations, priceCalculation, gettingFormData, invoiceService, customerService, activRoute, router, userService, taxValues) {
        this.formOperations = formOperations;
        this.priceCalculation = priceCalculation;
        this.gettingFormData = gettingFormData;
        this.invoiceService = invoiceService;
        this.customerService = customerService;
        this.activRoute = activRoute;
        this.router = router;
        this.userService = userService;
        this.taxValues = taxValues;
        this.sum = 0;
        this.invoice = new __WEBPACK_IMPORTED_MODULE_8__models_invoice_model__["a" /* Invoice */]();
        this.customer = new __WEBPACK_IMPORTED_MODULE_9__models_customer_model__["a" /* Customer */]();
        this.workMode = "Dodaj Fakutę";
        this.editMode = false;
        this.invoiceItems = [];
        this.selected = false;
        this.userService.CheckTokenExpired();
    }
    //#endregion
    InvoiceEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting edited invoice data if exist
        this.activRoute.params.subscribe(function (params) {
            _this.index = params['id'];
            if (_this.index !== undefined) {
                _this.invoice = _this.invoiceService.GetInvoiceByNumber(+_this.index);
                if (_this.invoice != null) {
                    _this.customer = _this.invoice['customer'];
                    _this.workMode = "Zapisz zmiany";
                    _this.editMode = true;
                }
                else {
                    alert("Nie można znaleść faktury");
                    _this.router.navigate(['/invoice']);
                }
            }
            if (_this.workMode == "Zapisz zmiany") {
                _this.title = "Edycja faktury nr " + _this.invoice['invoiceNumber'];
            }
            else {
                _this.title = "Dodawanie faktury:";
            }
            _this.InitializeForm();
        });
        //price sum change subscribing
        this.CalculateSum();
        this.invoiceForm.get('invoiceItems').valueChanges.subscribe(function () {
            _this.CalculateSum();
        });
        //filter subscribing
        this.filteredResult = this.invoiceForm.get('customerName').valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (param) { return param == '' ? [] : _this.Filter(param); }));
        this.invoiceForm.get('customerName').valueChanges.subscribe(function () {
            _this.selected = false;
        });
    };
    //#region Methods which operates form
    InvoiceEditComponent.prototype.SubmitInvoice = function () {
        var paymentDate = this.gettingFormData.getPaymentDate(this.invoiceForm);
        var paymentType = this.gettingFormData.getPaymentType(this.invoiceForm);
        this.gettingFormData.getCustomerData(this.invoiceForm, this.customer);
        this.gettingFormData.getInvoiceItems(this.invoiceForm, this.invoiceItems);
        if (this.workMode == "Zapisz zmiany") {
            this.invoiceService.UpdateInvoice(this.invoice, this.customer, this.invoiceItems, paymentDate, paymentType, this.index);
            this.router.navigate(['/invoice']);
        }
        else {
            this.invoiceService.AddInvoice(this.customer, this.invoiceItems, paymentDate, paymentType);
            this.router.navigate(['/invoice']);
        }
    };
    InvoiceEditComponent.prototype.ClearForm = function () {
        this.invoiceForm.reset();
        this.formOperations.ClearInvoiceFormArray(this.invoiceForm);
    };
    InvoiceEditComponent.prototype.AddItemRow = function () {
        this.formOperations.AddItemRow(this.invoiceForm);
    };
    InvoiceEditComponent.prototype.RemoveItemRow = function (index) {
        this.formOperations.RemoveItemRow(this.invoiceForm, index);
        this.invoice.invoiceItems.splice(index, 1);
    };
    //autocomplete customer section
    InvoiceEditComponent.prototype.AutocompleteForm = function (name) {
        if (this.customerService.GetCustomerByName(name) != null) {
            this.customer = this.customerService.GetCustomerByName(name);
            this.invoiceForm.patchValue({
                'customerName': this.customer['name'],
                'customerCity': this.customer['city'],
                'customerPostCode': this.customer['postCode'],
                'customerStreet': this.customer['address'],
                'customerNIP': this.customer['nip']
            });
            this.selected = true;
        }
    };
    //#endregion
    //#region Methods refers to invoiceItem's inputs changes
    InvoiceEditComponent.prototype.ItemUnitPriceWithoutTaxChanged = function (priceFormGroup) {
        this.priceCalculation.calculateTotalPriceWithoutTax(priceFormGroup, 'UnitPriceWithoutTax');
        this.priceCalculation.calculateTotalPriceWithTax(priceFormGroup, 'UnitPriceWithoutTax');
    };
    InvoiceEditComponent.prototype.ItemAmountChanged = function (priceFormGroup) {
        this.priceCalculation.calculateTotalPriceWithoutTax(priceFormGroup, 'itemAmount');
        this.priceCalculation.calculateTotalPriceWithTax(priceFormGroup, 'itemAmount');
    };
    InvoiceEditComponent.prototype.ItemTaxChanged = function (priceFormGroup) {
        this.priceCalculation.calculateTotalPriceWithTax(priceFormGroup, 'itemTax');
    };
    InvoiceEditComponent.prototype.ItemTotalPriceWithoutTaxChanged = function (priceFormGroup) {
        this.priceCalculation.calculateUnitPriceWithoutTax(priceFormGroup, 'itemTotalPriceWithoutTax');
        this.priceCalculation.calculateTotalPriceWithTax(priceFormGroup, 'itemTotalPriceWithoutTax');
    };
    InvoiceEditComponent.prototype.ItemTotalPriceWithTaxChanged = function (priceFormGroup) {
        this.priceCalculation.calculateTotalPriceWithoutTax(priceFormGroup, 'itemTotalPriceWithTax');
        this.priceCalculation.calculateUnitPriceWithoutTax(priceFormGroup, 'itemTotalPriceWithTax');
    };
    //#endregion
    //#region Private methods
    InvoiceEditComponent.prototype.CalculateSum = function () {
        this.sum = this.priceCalculation.calculateSum(this.invoiceForm);
    };
    InvoiceEditComponent.prototype.InitializeForm = function () {
        var paymentDate;
        if (this.editMode) {
            var date = new Date(this.invoice['paymentDate']);
            paymentDate = this.SetDate(date);
        }
        else {
            var now = new Date();
            paymentDate = this.SetDate(now);
        }
        var invoiceItems = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([]);
        this.formOperations.InitializeFormArray(invoiceItems, this.editMode, this.invoice);
        this.invoiceForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'customerName': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.customer.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'customerCity': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.customer.city, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'customerPostCode': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.customer.postCode, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9]{2}-[0-9]{3}')]),
            'customerStreet': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.customer.address, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'customerNIP': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.customer.nip, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9]{10}'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10)
            ]),
            'invoiceItems': invoiceItems,
            'paymentDate': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](paymentDate, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'paymentType': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.invoice['paymentType'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    InvoiceEditComponent.prototype.Filter = function (param) {
        return this.customerService.customers
            .map(function (c) { return c.name; })
            .filter(function (name) { return name.toLocaleLowerCase().includes(param.toLocaleLowerCase()); });
    };
    InvoiceEditComponent.prototype.SetDate = function (date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var dayFormat;
        var monthFormat;
        var yearFormat = String(year);
        var today;
        if (day < 10)
            dayFormat = '0' + day;
        else
            dayFormat = day.toString();
        if (month < 10)
            monthFormat = '0' + month;
        else
            monthFormat = month.toString();
        return today = yearFormat + '-' + monthFormat + '-' + dayFormat;
    };
    InvoiceEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice-edit',
            template: __webpack_require__("./ClientApp/app/components/invoices/invoice-edit/invoice-edit.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/invoices/invoice-edit/invoice-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__helpClasses_invoice_form_operations__["a" /* InvoiceFormOperations */], __WEBPACK_IMPORTED_MODULE_5__helpClasses_getting_form_data_operations__["a" /* GettingFormDataOperations */], __WEBPACK_IMPORTED_MODULE_7__enums_tax_value_enum__["a" /* TaxValue */], __WEBPACK_IMPORTED_MODULE_6__helpClasses_price_calculation__["a" /* PriceCalculation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__helpClasses_invoice_form_operations__["a" /* InvoiceFormOperations */],
            __WEBPACK_IMPORTED_MODULE_6__helpClasses_price_calculation__["a" /* PriceCalculation */],
            __WEBPACK_IMPORTED_MODULE_5__helpClasses_getting_form_data_operations__["a" /* GettingFormDataOperations */],
            __WEBPACK_IMPORTED_MODULE_10__services_invoice_services_invoice_services__["a" /* InvoiceServices */],
            __WEBPACK_IMPORTED_MODULE_11__services_customer_services_customer_services__["a" /* CustomerServices */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_12__services_user_services_user_services__["a" /* UserServices */],
            __WEBPACK_IMPORTED_MODULE_7__enums_tax_value_enum__["a" /* TaxValue */]])
    ], InvoiceEditComponent);
    return InvoiceEditComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/invoices/invoice/invoice.component.css":
/***/ (function(module, exports) {

module.exports = ".table-striped tbody {\r\n  height: 400px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n.table-striped thead, .table-striped tbody, .table-striped tr, .table-striped td, .table-striped th {\r\n  display: block;\r\n}\r\n.table-striped tbody td, .table-striped thead > tr> td {\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}"

/***/ }),

/***/ "./ClientApp/app/components/invoices/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"well col-xs-12\">\n    <div class=\"col-xs-12\" style=\"margin-bottom: 30px;\">\n      <h2>Faktury:</h2>\n    </div>\n    <div class=\"col-xs-4\">\n      <label for=\"searchParam\">Wyszukaj:</label>\n      <input type=\"text\" name=\"searchParam\" class=\"form-control\" placeholder=\"Wyszukaj faktury po numerze\" [(ngModel)]=\"serchParam\"/>\n    </div>\n    <div class=\"col-xs-4\">\n      <label for=\"SerachFrom\">Od dnia:</label>\n      <input type=\"date\" name=\"SearchFrom\" class=\"form-control\" #SearchFrom (input)=\"OnSearchFromChange()\"/>\n    </div>\n    <div class=\"col-xs-4\">\n      <label for=\"SerachTo\">Do dnia: </label>\n      <input type=\"date\" name=\"SearchTo\" class=\"form-control\" #SearchTo (input)=\"OnSearchToChange()\"/>\n    </div>\n    <div class=\"col-xs-12\" style=\"margin-top: 10px;\">\n      <button class=\"btn btn-primary\" [routerLink]=\"['/invoice/add']\">Dodaj nową fakturę</button>\n      <button class=\"btn btn-primary pull-right\" (click)=\"SearchByDate()\" [disabled]=\"searchDisabled\">Wyszukaj według daty</button>\n      <button class=\"btn btn-warning pull-right\" (click)=\"ResetSerach()\" style=\"margin-right: 10px;\">Resetuj</button>\n    </div>\n  </div>\n  <div>\n    <table class=\"table table-striped\">\n      <thead class=\"bg-primary col-sm-12\">\n        <tr>\n          <td class=\"col-sm-6\">Odbiorca:</td>\n          <td class=\"col-sm-2\">Numer faktury:</td>\n          <td class=\"col-sm-2\">Kwota:</td>\n          <td class=\"col-sm-2\">Data wystawienia:</td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr style=\"cursor: pointer;\" *ngFor=\"let invoice of invoices | InvoiceNumberSearch:serchParam; let i=index;\" \n        [routerLink]=\"['/invoice/details']\" [queryParams]=\"{number: invoice['invoiceNumber']}\">\n          <td class=\"col-sm-6\">{{invoice.customer.name}}</td>\n          <td class=\"col-sm-2\">{{invoice.invoiceNumber}}/{{invoice.invoiceDate | date:'yyyy'}}</td>\n          <td class=\"col-sm-2\">{{invoice.itemsPriceTotal | currencyPipe}} zł</td>\n          <td class=\"col-sm-2\">{{invoice.invoiceDate | date:'dd.MM.yyyy'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/invoices/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_invoice_services_invoice_services__ = __webpack_require__("./ClientApp/app/services/invoice services/invoice.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(invoiceService, router, userService) {
        this.invoiceService = invoiceService;
        this.router = router;
        this.userService = userService;
        this.serchParam = '';
        this.searchFromChanged = false;
        this.searchToChanged = false;
        this.invoices = [];
        this.searchDisabled = false;
        if (this.userService.userInactive) {
            this.userService.CheckTokenExpired();
            this.userService.ResetActiveTimer();
        }
        this.invoices = this.invoiceService.invoices;
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SetDate(this.searchFrom);
        this.SetDate(this.searchTo);
        this.invoiceService.invoicesChanged.subscribe(function (invoices) { return _this.invoices = invoices; });
    };
    InvoiceComponent.prototype.OnSearchFromChange = function () {
        this.searchFromChanged = true;
        this.DateRangeIsValid(this.searchToChanged);
    };
    InvoiceComponent.prototype.OnSearchToChange = function () {
        this.searchToChanged = true;
        this.DateRangeIsValid(this.searchFromChanged);
    };
    InvoiceComponent.prototype.SearchByDate = function () {
        var partSearchFrom = this.searchFrom.nativeElement.value.split('-');
        var partSearchTo = this.searchTo.nativeElement.value.split('-');
        var searchFrom = new Date(partSearchFrom[0], partSearchFrom[1] - 1, partSearchFrom[2]);
        var searchTo = new Date(partSearchTo[0], partSearchTo[1] - 1, partSearchTo[2], 23);
        var newArray = [];
        for (var _i = 0, _a = this.invoiceService.invoices; _i < _a.length; _i++) {
            var invoice = _a[_i];
            var invoiceDate = new Date(invoice.invoiceDate);
            if (invoiceDate >= searchFrom && invoiceDate <= searchTo) {
                newArray.push(invoice);
            }
        }
        this.invoices = newArray;
    };
    InvoiceComponent.prototype.ResetSerach = function () {
        this.invoices = this.invoiceService.invoices;
        this.SetDate(this.searchFrom);
        this.SetDate(this.searchTo);
    };
    InvoiceComponent.prototype.DateRangeIsValid = function (change) {
        if (change) {
            var dateFromArray = this.searchFrom.nativeElement.value.split('-');
            var dateFrom = new Date(dateFromArray[0], dateFromArray[1] - 1, dateFromArray[2] - 1);
            var dateToArray = this.searchTo.nativeElement.value.split('-');
            var dateTo = new Date(dateToArray[0], dateToArray[1] - 1, dateToArray[2] - 1);
            if (dateFrom > dateTo) {
                alert("Data początkowa jest większa niż data końcowa");
                this.searchDisabled = true;
                //this.SetDate(this.searchFrom);
            }
            else {
                this.searchDisabled = false;
            }
        }
    };
    InvoiceComponent.prototype.SetDate = function (dateInput) {
        var timeNow = new Date();
        var day = timeNow.getDate();
        var month = timeNow.getMonth() + 1;
        var year = timeNow.getFullYear();
        var dayFormat;
        var monthFormat;
        var yearFormat = String(year);
        var today;
        if (day < 10)
            dayFormat = '0' + day;
        else
            dayFormat = day.toString();
        if (month < 10)
            monthFormat = '0' + month;
        else
            monthFormat = month.toString();
        today = yearFormat + '-' + monthFormat + '-' + dayFormat;
        dateInput.nativeElement.value = today;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('SearchFrom'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], InvoiceComponent.prototype, "searchFrom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('SearchTo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], InvoiceComponent.prototype, "searchTo", void 0);
    InvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-invoice',
            template: __webpack_require__("./ClientApp/app/components/invoices/invoice/invoice.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/invoices/invoice/invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_invoice_services_invoice_services__["a" /* InvoiceServices */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_user_services_user_services__["a" /* UserServices */]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/invoices/invoices-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_invoice_component__ = __webpack_require__("./ClientApp/app/components/invoices/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_details_invoice_details_component__ = __webpack_require__("./ClientApp/app/components/invoices/invoice-details/invoice-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_edit_invoice_edit_component__ = __webpack_require__("./ClientApp/app/components/invoices/invoice-edit/invoice-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_local_authorization_can_activate_guard_service__ = __webpack_require__("./ClientApp/app/services/local authorization/can-activate-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var invoicesRouting = [
    { path: 'invoice', component: __WEBPACK_IMPORTED_MODULE_1__invoice_invoice_component__["a" /* InvoiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_local_authorization_can_activate_guard_service__["a" /* CanActivateGuard */]] },
    { path: 'invoice/details', component: __WEBPACK_IMPORTED_MODULE_2__invoice_details_invoice_details_component__["a" /* InvoiceDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_local_authorization_can_activate_guard_service__["a" /* CanActivateGuard */]] },
    { path: 'invoice/add', component: __WEBPACK_IMPORTED_MODULE_3__invoice_edit_invoice_edit_component__["a" /* InvoiceEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_local_authorization_can_activate_guard_service__["a" /* CanActivateGuard */]] },
    { path: 'invoice/edit/:id', component: __WEBPACK_IMPORTED_MODULE_3__invoice_edit_invoice_edit_component__["a" /* InvoiceEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_local_authorization_can_activate_guard_service__["a" /* CanActivateGuard */]] },
];
var InvoicesRoutingModule = /** @class */ (function () {
    function InvoicesRoutingModule() {
    }
    InvoicesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(invoicesRouting)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
            ]
        })
    ], InvoicesRoutingModule);
    return InvoicesRoutingModule;
}());



/***/ }),

/***/ "./ClientApp/app/components/invoices/invoices.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_invoice_component__ = __webpack_require__("./ClientApp/app/components/invoices/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoice_edit_invoice_edit_component__ = __webpack_require__("./ClientApp/app/components/invoices/invoice-edit/invoice-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoice_details_invoice_details_component__ = __webpack_require__("./ClientApp/app/components/invoices/invoice-details/invoice-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoices_routing_module__ = __webpack_require__("./ClientApp/app/components/invoices/invoices-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_InvoiceNumberSearch_pipe__ = __webpack_require__("./ClientApp/app/components/invoices/pipes/InvoiceNumberSearch.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_global_pipes_export_module__ = __webpack_require__("./ClientApp/app/pipes/global-pipes-export.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var InvoicesModule = /** @class */ (function () {
    function InvoicesModule() {
    }
    InvoicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__invoice_invoice_component__["a" /* InvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_4__invoice_edit_invoice_edit_component__["a" /* InvoiceEditComponent */],
                __WEBPACK_IMPORTED_MODULE_5__invoice_details_invoice_details_component__["a" /* InvoiceDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_InvoiceNumberSearch_pipe__["a" /* InvoiceNumberSearchPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__invoices_routing_module__["a" /* InvoicesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_global_pipes_export_module__["a" /* GlobalPipesExportModule */]
            ]
        })
    ], InvoicesModule);
    return InvoicesModule;
}());



/***/ }),

/***/ "./ClientApp/app/components/invoices/pipes/InvoiceNumberSearch.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceNumberSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InvoiceNumberSearchPipe = /** @class */ (function () {
    function InvoiceNumberSearchPipe() {
    }
    InvoiceNumberSearchPipe.prototype.transform = function (invoiceArray, param) {
        if (param != '')
            return invoiceArray.filter(function (i) { return i.invoiceNumber == Number(param); });
        return invoiceArray;
    };
    InvoiceNumberSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'InvoiceNumberSearch'
        })
    ], InvoiceNumberSearchPipe);
    return InvoiceNumberSearchPipe;
}());



/***/ }),

/***/ "./ClientApp/app/components/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a routerLink=\"/\" class=\"navbar-brand\">Rachunkowość</a>\n        </div>\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['invoice']\">Faktury</a></li>\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['customer']\">Klienci</a></li>\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li routerLinkActive=\"active\"><a (click)=\"Logout()\" style=\"cursor: pointer;\">Wyloguj</a></li>\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['user/edit']\">Twoje konto</a></li>\n        </ul>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(userService) {
        this.userService = userService;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.Logout = function () {
        this.userService.LogOut();
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./ClientApp/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_services_user_services__["a" /* UserServices */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/users/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-box{\r\n  display: inline-block;\r\n  margin-top: 20%;\r\n  float: none;\r\n}\r\n\r\n.background{\r\n  background: #42a5f5;\r\n  height: 100vh;\r\n}\r\n\r\n.title{\r\n  background: white;\r\n  text-align: center;\r\n  border-radius: 5px 5px 0px 0px;\r\n}"

/***/ }),

/***/ "./ClientApp/app/components/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container background\">  \n  <div class=\"login-box col-sm-6 col-sm-offset-3\">\n    <div class=\"title col-sm-12\">\n      <h2>System do prowadzenia</h2>\n      <h2>faktur sprzedaży</h2>\n      <br>\n      <h4>Logowanie:</h4>\n    </div>\n    <div class=\"well\">\n      <div class=\"col-sm-12\"><br></div>\n      <form (ngSubmit)=\"Login()\" #loginForm=\"ngForm\">\n        <div class=\"form-group\">\n          <div class=\"col-sm-2\">\n            <label for=\"userName\">Login:</label>\n          </div>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" name=\"userName\" id=\"userName\" class=\"form-control\" [ngModel]=\"loginData.userName\" #login=\"ngModel\" required/>\n          </div>\n        </div>\n        <div class=\"col-sm-12\"><br></div>\n        <div class=\"form-group\">\n          <div class=\"col-sm-2\">\n            <label for=\"password\">Hasło:</label>\n          </div>\n          <div class=\"col-sm-10\">\n            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" [ngModel]=\"loginData.password\" #password=\"ngModel\" required/>\n          </div>\n        </div>\n        <div class=\"col-sm-12\"><br></div>\n        <div style=\"text-align: center;\">\n          <button type=\"submit\" class=\"btn btn-success\">Zaloguj się</button>\n          <div>\n            <h4>Lub</h4>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"NavigateRegister()\">Zarejestruj się</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/users/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loginData = {
            userName: '',
            password: '',
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        this.loginData.userName = this.loginForm.value.userName;
        this.loginData.password = this.loginForm.value.password;
        this.userService.Login(this.loginData);
    };
    LoginComponent.prototype.NavigateRegister = function () {
        this.router.navigate(['/user/register']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('loginForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./ClientApp/app/components/users/login/login.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/users/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_services_user_services__["a" /* UserServices */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/users/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid{\r\n  background-color: #ffb3b3;\r\n  border: 2px solid red;\r\n}\r\n\r\n.register-box{\r\n  position: relative;\r\n  display: block;\r\n  width: 60%;\r\n  margin-top: 10%;\r\n  margin-bottom: 10%;\r\n  margin-left: 25%;\r\n  margin-right: 25%;\r\n}\r\n\r\n.background{\r\n  background: #42a5f5;\r\n  height: 100%;\r\n}\r\n\r\n.title{\r\n  background: white;\r\n  text-align: center;\r\n  border-radius: 5px 5px 0px 0px;\r\n}\r\n\r\n.vertical-center {\r\n  min-height: 100%;\r\n  min-height: 100vh;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/components/users/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background vertical-center\">\n    <div class=\"register-box\">\n      <div class=\"title col-sm-12\" style=\"text-align: center;\">\n        <h2>Rejsetracja</h2>\n      </div>\n      <div class=\"well col-sm-12\">\n        <form (ngSubmit)=\"Register()\" #registerForm=\"ngForm\">\n          <div class=\"col-sm-12\">\n            <h4>Dane Użytkownika:</h4>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-2\">\n              <label for=\"userName\">Login:</label>\n            </div>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" \n              name=\"userName\" \n              id=\"userName\" \n              class=\"form-control\" \n              [ngModel]=\"registerData.userName\" \n              #login=\"ngModel\"\n              autocomplete=\"off\"\n              (blur)=\"IsAvailable('name', login.value)\"\n              placeholder=\"Login\"\n              required/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-2\">\n              <label for=\"password\">Hasło:</label>\n            </div>\n            <div class=\"col-sm-10\">\n              <input type=\"password\" \n              name=\"password\" \n              id=\"password\" \n              class=\"form-control\" \n              [ngModel]=\"registerData.password\" \n              autocomplete=\"off\" \n              #password=\"ngModel\"\n              required/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-2\">\n              <label for=\"email\">Email:</label>\n            </div>\n            <div class=\"col-sm-10\">\n              <input type=\"email\" \n              pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n              name=\"email\" \n              id=\"email\" \n              class=\"form-control\"\n              [ngModel]=\"registerData.email\" \n              #email=\"ngModel\"\n              placeholder=\"nazwa@mail.com\"\n              (blur)=\"IsAvailable('email', email.value)\"\n              autocomplete=\"off\" \n              required/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n\n          <div class=\"col-sm-12\">\n            <hr style=\"border-color: black;\">\n            <h4>Dane Firmy:</h4>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-2\">\n              <label for=\"name\">Nazwa:</label>\n            </div>\n            <div class=\"col-sm-10\">\n              <input \n              type=\"text\" \n              name=\"name\" \n              id=\"name\" \n              class=\"form-control\" \n              [ngModel]=\"registerData.name\" \n              #name=\"ngModel\" \n              placeholder=\"Nazwa firmy\"\n              required/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-2\">\n              <label for=\"address\">Ulica:</label>\n            </div>\n            <div class=\"col-sm-10\">\n              <input \n              type=\"text\" \n              name=\"address\" \n              id=\"address\" \n              class=\"form-control\" \n              [ngModel]=\"registerData.address\" \n              #address=\"ngModel\" \n              placeholder=\"np. Kościuszki 4a\"\n              required/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-2\">\n              <label for=\"postCode\">Kod pocztowy:</label>\n            </div>\n            <div class=\"col-sm-10\">\n              <input \n              type=\"text\" \n              name=\"postCode\" \n              id=\"postCode\" \n              class=\"form-control\" \n              [ngModel]=\"registerData.postCode\" \n              #postCode=\"ngModel\" \n              required \n              pattern=\"[0-9]{2}-[0-9]{3}\"\n              placeholder=\"np. 12-345\"\n              maxlength=\"6\"/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-2\">\n              <label for=\"city\">Miasto:</label>\n            </div>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" name=\"city\" id=\"city\" class=\"form-control\" [ngModel]=\"registerData.city\" #city=\"ngModel\" required/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-2\">\n              <label for=\"nip\">NIP:</label>\n            </div>\n            <div class=\"col-sm-10\">\n              <input \n              type=\"text\" \n              name=\"nip\" \n              id=\"nip\" \n              class=\"form-control\" \n              [ngModel]=\"registerData.nip\" \n              #nip=\"ngModel\" \n              required  \n              pattern=\"[0-9]{10}\"\n              placeholder=\"np. 1234567890\"\n              maxlength=\"10\"/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><hr style=\"border-color: black;\"></div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-2\">\n              <label for=\"nip\">Klucz dostępu:</label>\n            </div>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" name=\"specialKey\" id=\"specialKey\" class=\"form-control\" [ngModel]=\"registerData.specialKey\" #nip=\"ngModel\" required/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n          <div class=\"col-sm-12\" style=\"text-align: center;\">\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!registerForm.valid\">Zarejestruj się</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./ClientApp/app/components/users/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_register_model__ = __webpack_require__("./ClientApp/app/models/register.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_services_user_http_services__ = __webpack_require__("./ClientApp/app/services/user services/user.http.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userHttpService, userService) {
        this.userHttpService = userHttpService;
        this.userService = userService;
        this.registerData = new __WEBPACK_IMPORTED_MODULE_1__models_register_model__["a" /* RegisterModel */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.Register = function () {
        this.registerData.address = this.registerForm.value.address;
        this.registerData.city = this.registerForm.value.city;
        this.registerData.email = this.registerForm.value.email;
        this.registerData.name = this.registerForm.value.name;
        this.registerData.nip = this.registerForm.value.nip;
        this.registerData.password = this.registerForm.value.password;
        this.registerData.postCode = this.registerForm.value.postCode;
        this.registerData.userName = this.registerForm.value.userName;
        this.registerData.specialKey = this.registerForm.value.specialKey;
        this.userService.Register(this.registerData);
    };
    RegisterComponent.prototype.IsAvailable = function (parameterType, parameterValue) {
        var _this = this;
        var toValidateArray = [];
        if (parameterValue != undefined && parameterValue != '') {
            toValidateArray.push(parameterType);
            toValidateArray.push(parameterValue);
            this.userHttpService.IsAvailabel(toValidateArray).subscribe(function (isAvaliable) {
                if (!isAvaliable) {
                    _this.registerForm.form.controls[parameterType].setErrors({ 'incorrect': true });
                    alert("Nazwa zajęta");
                }
            });
        }
        ;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('registerForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./ClientApp/app/components/users/register/register.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/users/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_services_user_http_services__["a" /* UserHttpServices */], __WEBPACK_IMPORTED_MODULE_4__services_user_services_user_services__["a" /* UserServices */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/users/user-edit/user-edit.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid{\r\n  background-color: #ffb3b3;\r\n  border: 2px solid red;\r\n}"

/***/ }),

/***/ "./ClientApp/app/components/users/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n  <div class=\"col-sm-6\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3>Dane logowania:</h3>\n      </div>\n      <div class=\"panel-body\">\n        <form (ngSubmit)=\"UpdatePassword()\" #userPasswordForm=\"ngForm\">\n          <div class=\"col-sm-12\">\n            <div class=\"col-sm-4\">\n              <label for=\"oldpassword\">Stare Hasło:</label>\n            </div>\n            <div class=\"col-sm-8\">\n              <input type=\"password\" name=\"oldpassword\" id=\"oldpassword\" class=\"form-control\"  [(ngModel)]=\"oldPassword\" required #oldpassword/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n          \n          <div class=\"col-sm-12\">\n            <div class=\"col-sm-4\">\n              <label for=\"newPasswor\">Nowe Hasło:</label>\n            </div>\n            <div class=\"col-sm-8\">\n              <input type=\"password\"\n               name=\"newPasswor\" \n               id=\"newPasswor\"\n               class=\"form-control\"\n                [(ngModel)]=\"newPassword\" \n                required \n                minlength=\"6\"\n                #newPasswor/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n          \n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userPasswordForm.valid\">Zmień Hasło</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3>Dane użytkownika:</h3>\n      </div>\n      <div class=\"panel-body\">\n        <form (ngSubmit)=\"UpdateUserData()\" #userDataForm=\"ngForm\">\n          <div class=\"col-sm-12\">\n            <div class=\"col-sm-4\">\n              <label for=\"name\">Nazwa:</label>\n            </div>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" [(ngModel)]=\"user.name\" required #name/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n  \n          <div class=\"col-sm-12\">\n            <div class=\"col-sm-4\">\n              <label for=\"address\">Ulica:</label>\n            </div>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" name=\"address\" id=\"address\" class=\"form-control\" [(ngModel)]=\"user.address\" required #address/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n  \n          <div class=\"col-sm-12\">\n            <div class=\"col-sm-4\">\n              <label for=\"postCode\">Kod pocztowy:</label>\n            </div>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" name=\"postCode\" id=\"postCode\" class=\"form-control\" [(ngModel)]=\"user.postCode\" required pattern=\"[0-9]{2}-[0-9]{3}\"/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n  \n          <div class=\"col-sm-12\">\n            <div class=\"col-sm-4\">\n              <label for=\"city\">Miasto:</label>\n            </div>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" name=\"city\" id=\"city\" class=\"form-control\" [(ngModel)]=\"user.city\" required #city/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n  \n          <div class=\"col-sm-12\">\n            <div class=\"col-sm-4\">\n              <label for=\"nip\">NIP:</label>\n            </div>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" name=\"nip\" id=\"nip\" class=\"form-control\" #nip [(ngModel)]=\"user.nip\" required pattern=\"[0-9]{10}\"/>\n            </div>\n          </div>\n          <div class=\"col-sm-12\"><br></div>\n\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userDataForm.valid\">Zmień Dane</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/users/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_change_password_model__ = __webpack_require__("./ClientApp/app/models/change-password.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(userService) {
        this.userService = userService;
        this.oldPassword = '';
        this.newPassword = '';
        this.passwordData = new __WEBPACK_IMPORTED_MODULE_3__models_change_password_model__["a" /* ChangePasswordModel */]();
        this.user = this.userService.userData;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.userService.CheckTokenExpired();
    };
    UserEditComponent.prototype.UpdatePassword = function () {
        this.passwordData.password = this.oldPassword;
        this.passwordData.newPassword = this.newPassword;
        this.userService.ChangePassword(this.passwordData);
        this.passwordForm.reset();
    };
    UserEditComponent.prototype.UpdateUserData = function () {
        this.userService.ChangeUserData(this.user);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('userPasswordForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], UserEditComponent.prototype, "passwordForm", void 0);
    UserEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-edit',
            template: __webpack_require__("./ClientApp/app/components/users/user-edit/user-edit.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/users/user-edit/user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_services_user_services__["a" /* UserServices */]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./ClientApp/app/components/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("./ClientApp/app/components/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_edit_user_edit_component__ = __webpack_require__("./ClientApp/app/components/users/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_local_authorization_can_activate_guard_service__ = __webpack_require__("./ClientApp/app/services/local authorization/can-activate-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var usersRouting = [
    { path: 'user/login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'user/register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/edit', component: __WEBPACK_IMPORTED_MODULE_4__user_edit_user_edit_component__["a" /* UserEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_local_authorization_can_activate_guard_service__["a" /* CanActivateGuard */]] }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(usersRouting)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./ClientApp/app/components/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./ClientApp/app/components/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./ClientApp/app/components/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_routing_module__ = __webpack_require__("./ClientApp/app/components/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_edit_user_edit_component__ = __webpack_require__("./ClientApp/app/components/users/user-edit/user-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_edit_user_edit_component__["a" /* UserEditComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_edit_user_edit_component__["a" /* UserEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__users_routing_module__["a" /* UsersRoutingModule */]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./ClientApp/app/enums/tax-value.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxValue; });
var TaxValue = /** @class */ (function () {
    function TaxValue() {
        this.values = [0, 5, 8, 23];
    }
    return TaxValue;
}());



/***/ }),

/***/ "./ClientApp/app/models/change-password.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordModel; });
var ChangePasswordModel = /** @class */ (function () {
    function ChangePasswordModel() {
    }
    return ChangePasswordModel;
}());



/***/ }),

/***/ "./ClientApp/app/models/customer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./ClientApp/app/models/email-message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailMessageModel; });
var EmailMessageModel = /** @class */ (function () {
    function EmailMessageModel() {
    }
    return EmailMessageModel;
}());



/***/ }),

/***/ "./ClientApp/app/models/invoice-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceItem; });
var InvoiceItem = /** @class */ (function () {
    function InvoiceItem() {
    }
    return InvoiceItem;
}());



/***/ }),

/***/ "./ClientApp/app/models/invoice.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Invoice; });
var Invoice = /** @class */ (function () {
    function Invoice() {
    }
    return Invoice;
}());



/***/ }),

/***/ "./ClientApp/app/models/login.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
    }
    return LoginModel;
}());



/***/ }),

/***/ "./ClientApp/app/models/register.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModel; });
var RegisterModel = /** @class */ (function () {
    function RegisterModel() {
    }
    return RegisterModel;
}());



/***/ }),

/***/ "./ClientApp/app/models/token.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenModel; });
var TokenModel = /** @class */ (function () {
    function TokenModel() {
    }
    return TokenModel;
}());



/***/ }),

/***/ "./ClientApp/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());



/***/ }),

/***/ "./ClientApp/app/pipes/currency.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrencyPipe = /** @class */ (function () {
    function CurrencyPipe() {
    }
    CurrencyPipe.prototype.transform = function (value) {
        var regex = new RegExp('[0-9]{1,}.[0-9]{2}');
        value = Number(value).toFixed(2).toString();
        value = value.toString().replace(',', '.');
        var valueArray = value.split('');
        if (!valueArray.includes('.')) {
            valueArray.push('.00');
            value = valueArray.join('');
            return value;
        }
        for (var i = 0; i < 2; i++) {
            if (!regex.test(value)) {
                valueArray.push('0');
                value = valueArray.join('');
            }
        }
        return value;
    };
    CurrencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'currencyPipe'
        })
    ], CurrencyPipe);
    return CurrencyPipe;
}());



/***/ }),

/***/ "./ClientApp/app/pipes/global-pipes-export.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalPipesExportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__currency_pipe__ = __webpack_require__("./ClientApp/app/pipes/currency.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GlobalPipesExportModule = /** @class */ (function () {
    function GlobalPipesExportModule() {
    }
    GlobalPipesExportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__currency_pipe__["a" /* CurrencyPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__currency_pipe__["a" /* CurrencyPipe */]
            ]
        })
    ], GlobalPipesExportModule);
    return GlobalPipesExportModule;
}());



/***/ }),

/***/ "./ClientApp/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    { path: 'customer', loadChildren: '../components/customers/customers.module#CustomersModule' },
    { path: 'invoice', loadChildren: '../components/invoices/invoices.module#InvoicesModule' },
    { path: 'user', loadChildren: '../components/users/users.module#UsersModule' },
    { path: '**', redirectTo: 'invoice', pathMatch: 'full' }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./ClientApp/app/services/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_token_model__ = __webpack_require__("./ClientApp/app/models/token.model.ts");

var CommonService = /** @class */ (function () {
    function CommonService() {
        this.token = new __WEBPACK_IMPORTED_MODULE_0__models_token_model__["a" /* TokenModel */]();
        this.token['token'] = '';
    }
    return CommonService;
}());



/***/ }),

/***/ "./ClientApp/app/services/customer services/customer.http.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerHttpServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("./ClientApp/app/services/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerHttpServices = /** @class */ (function () {
    function CustomerHttpServices(httpClient, commonData) {
        this.httpClient = httpClient;
        this.commonData = commonData;
    }
    CustomerHttpServices.prototype.GetByNip = function (nip) {
        return this.httpClient.get('api/Customer/GetByNip?nip=' + nip, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    CustomerHttpServices.prototype.GetAll = function () {
        return this.httpClient.get('api/Customer/GetAll', { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    CustomerHttpServices.prototype.Add = function (customer) {
        return this.httpClient.post("api/Customer/Add", customer, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    CustomerHttpServices.prototype.Update = function (customer) {
        return this.httpClient.put("api/Customer/Update", customer, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    CustomerHttpServices.prototype.Exist = function (customer) {
        return this.httpClient.post("api/Customer/Exist", customer, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    CustomerHttpServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]])
    ], CustomerHttpServices);
    return CustomerHttpServices;
}());



/***/ }),

/***/ "./ClientApp/app/services/customer services/customer.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_http_services__ = __webpack_require__("./ClientApp/app/services/customer services/customer.http.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerServices = /** @class */ (function () {
    function CustomerServices(customerHttp, userService) {
        this.customerHttp = customerHttp;
        this.userService = userService;
        this.customers = [];
        this.customersChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    //http setting customers Array on app start
    CustomerServices.prototype.SetCustomersHttp = function () {
        var _this = this;
        this.customerHttp.GetAll().subscribe(function (response) {
            _this.customers = response;
            _this.customersChanged.next(_this.customers);
        }, function (error) {
            if (error.status == "401") {
                _this.userService.LogOut();
                return;
            }
        });
        return this.customers;
    };
    CustomerServices.prototype.AddCustomer = function (newCustomer) {
        var _this = this;
        var customerExist = this.customers.map(function (c) { return c.nip; }).indexOf(newCustomer.nip);
        if (customerExist != -1) {
            var currentCutomer = this.customers[customerExist];
            var choice = confirm("klient o podanym NIP juz jest w bazie danych:\n" + currentCutomer.name +
                "\n" + currentCutomer.city + " " + currentCutomer.postCode + "\n" + currentCutomer.address + "\n"
                + currentCutomer.nip + "\n\nCzy chcesz nadpisać klienta?");
            if (choice) {
                this.UpdateCustomer(newCustomer);
            }
        }
        else {
            this.customerHttp.Add(newCustomer).subscribe(function (response) {
                _this.customers.push(response);
            }, function (error) {
                if (error.status == "401") {
                    _this.userService.LogOut();
                    return;
                }
            });
        }
    };
    CustomerServices.prototype.UpdateCustomer = function (customer) {
        var _this = this;
        var customerIndex = this.customers.map(function (c) { return c.nip; }).indexOf(customer.nip);
        if (this.customers[customerIndex] != null) {
            try {
                this.customerHttp.Update(customer).subscribe(function (response) {
                    _this.customers[customerIndex] = response;
                }, function (error) {
                    if (error.status == "401") {
                        _this.userService.LogOut();
                        return;
                    }
                    alert("Wystapił błąd podczas połączenia z serwerem");
                });
            }
            catch (err) {
                return 0;
            }
        }
    };
    //#region Non http methods
    CustomerServices.prototype.GetCustomerByIndex = function (index) {
        return this.customers[index];
    };
    CustomerServices.prototype.GetCustomerByNip = function (nip) {
        return this.customers.find(function (c) { return c.nip == nip; });
    };
    CustomerServices.prototype.GetCustomerByName = function (name) {
        return this.customers.find(function (c) { return c.name === name; });
    };
    CustomerServices.prototype.CustomerExist = function (customer) {
        if ((this.customers.map(function (c) { return c.nip; }).indexOf(customer.nip)) == -1) {
            return false;
        }
        else {
            return true;
        }
    };
    CustomerServices.prototype.CustomerEqual = function (customer) {
        if (this.CustomerExist(customer)) {
            var index = this.customers.map(function (c) { return c.nip; }).indexOf(customer.nip);
            var passedCustomer = JSON.stringify(customer);
            var originalCustomer = JSON.stringify(this.GetCustomerByIndex(index));
            if (passedCustomer != originalCustomer) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    CustomerServices.prototype.AddCustomerNonHttp = function (customer) {
        this.customers.push(customer);
    };
    CustomerServices.prototype.UpdateCustomerNonHttp = function (customer) {
        var customerIndex = this.customers.map(function (c) { return c.nip; }).indexOf(customer.nip);
        this.customers[customerIndex] = customer;
    };
    CustomerServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__customer_http_services__["a" /* CustomerHttpServices */], __WEBPACK_IMPORTED_MODULE_2__user_services_user_services__["a" /* UserServices */]])
    ], CustomerServices);
    return CustomerServices;
}());



/***/ }),

/***/ "./ClientApp/app/services/email service/email-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("./ClientApp/app/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailHttpService = /** @class */ (function () {
    function EmailHttpService(commonData, httpService) {
        this.commonData = commonData;
        this.httpService = httpService;
    }
    EmailHttpService.prototype.SendEmail = function (mesageConfig) {
        return this.httpService.post("api/email/SendMail", mesageConfig, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    EmailHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], EmailHttpService);
    return EmailHttpService;
}());



/***/ }),

/***/ "./ClientApp/app/services/email service/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__email_http_service__ = __webpack_require__("./ClientApp/app/services/email service/email-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailService = /** @class */ (function () {
    function EmailService(emailHttp) {
        this.emailHttp = emailHttp;
    }
    EmailService.prototype.SendMessage = function (message) {
        this.emailHttp.SendEmail(message).subscribe(function (response) {
            alert("Wiadomość wysła na pomyślnie");
        }, function (error) {
            alert("Nie udało się wysłać");
        });
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__email_http_service__["a" /* EmailHttpService */]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./ClientApp/app/services/invoice services/invoice.http.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceHttpServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("./ClientApp/app/services/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoiceHttpServices = /** @class */ (function () {
    function InvoiceHttpServices(httpClient, commonData) {
        this.httpClient = httpClient;
        this.commonData = commonData;
    }
    InvoiceHttpServices.prototype.GetByNumber = function (invoiceNumber) {
        return this.httpClient.get('api/Invoice/GetByNumber?invoiceNumber=' + invoiceNumber, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    InvoiceHttpServices.prototype.GetAll = function () {
        return this.httpClient.get('api/Invoice/GetAll', { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    InvoiceHttpServices.prototype.Add = function (invoice) {
        return this.httpClient.post("api/Invoice/Add", invoice, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    InvoiceHttpServices.prototype.Update = function (invoice) {
        return this.httpClient.put("api/Invoice/Update", invoice, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    InvoiceHttpServices.prototype.Delete = function (id) {
        return this.httpClient.delete("api/Invoice/Delete?id=" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    InvoiceHttpServices.prototype.SettleInvoices = function (setteledInvoices) {
        return this.httpClient.post("api/Invoice/SettleInvoices", setteledInvoices, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    InvoiceHttpServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]])
    ], InvoiceHttpServices);
    return InvoiceHttpServices;
}());



/***/ }),

/***/ "./ClientApp/app/services/invoice services/invoice.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoice_http_services__ = __webpack_require__("./ClientApp/app/services/invoice services/invoice.http.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_services_customer_services__ = __webpack_require__("./ClientApp/app/services/customer services/customer.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_invoice_model__ = __webpack_require__("./ClientApp/app/models/invoice.model.ts");
//#region import
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//#endregion
var InvoiceServices = /** @class */ (function () {
    function InvoiceServices(customerService, invoiceHttp, userService, router) {
        this.customerService = customerService;
        this.invoiceHttp = invoiceHttp;
        this.userService = userService;
        this.router = router;
        this.invoices = [];
        this.invoicesChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
    }
    InvoiceServices.prototype.SetInvoiceshttp = function () {
        var _this = this;
        this.invoiceHttp.GetAll().subscribe(function (response) {
            if (response !== null)
                _this.invoices = response;
            _this.invoicesChanged.next(_this.invoices);
        }, function (error) {
            alert("Wystapił błąd połączenia z serwerem prosze spróbować później");
        });
    };
    InvoiceServices.prototype.GetInvoiceByNumber = function (number) {
        var index = this.invoices.map(function (i) { return i.invoiceNumber; }).indexOf(number);
        if (this.invoices[index] != null) {
            return this.invoices[index];
        }
        else {
            return null;
        }
    };
    InvoiceServices.prototype.AddInvoice = function (customer, invoiceItems, paymentDate, paymentType) {
        var _this = this;
        if (customer != null && invoiceItems != null) {
            var newInvoice_1 = new __WEBPACK_IMPORTED_MODULE_6__models_invoice_model__["a" /* Invoice */]();
            //Crating new invoice
            newInvoice_1.customer = customer;
            newInvoice_1.invoiceItems = invoiceItems;
            newInvoice_1.paymentType = paymentType;
            newInvoice_1.paymentDate = paymentDate;
            newInvoice_1.invoiceDate = this.SetInvoiceDate();
            newInvoice_1.itemsPriceTotal = this.CalculateTotalPrice(invoiceItems);
            newInvoice_1.accounted = this.SetInvoicePaymentStatus(paymentType);
            this.invoiceHttp.Add(newInvoice_1).subscribe(function (response) {
                newInvoice_1 = response;
                _this.invoices.push(newInvoice_1);
                if (!_this.customerService.CustomerExist(newInvoice_1.customer)) {
                    _this.customerService.AddCustomerNonHttp(newInvoice_1.customer);
                }
                else {
                    if (!_this.customerService.CustomerEqual(newInvoice_1.customer)) {
                        _this.customerService.UpdateCustomerNonHttp(newInvoice_1.customer);
                    }
                }
            }, function (error) {
                if (error.status == "401") {
                    _this.userService.LogOut();
                    return;
                }
                alert("Wystapił błąd proszę spróbować później");
            });
        }
    };
    InvoiceServices.prototype.UpdateInvoice = function (invoiceToUpdate, customer, invoiceItems, paymentDate, paymentType, number) {
        var _this = this;
        //set customer data
        this.SetCustomerData(invoiceToUpdate['customer'], customer);
        //set invoiceItems data
        this.SetInvoicItemsData(invoiceToUpdate['invoiceItems'], invoiceItems);
        invoiceToUpdate.paymentType = paymentType;
        invoiceToUpdate.paymentDate = paymentDate;
        invoiceToUpdate.itemsPriceTotal = this.CalculateTotalPrice(invoiceItems);
        //http update
        this.invoiceHttp.Update(invoiceToUpdate).subscribe(function (response) {
            var index = _this.invoices.map(function (i) { return i.invoiceNumber; }).indexOf(number);
            _this.invoices[index] = response;
            if (!_this.customerService.CustomerExist(invoiceToUpdate['customer'])) {
                _this.customerService.AddCustomerNonHttp(invoiceToUpdate['customer']);
            }
            else {
                if (!_this.customerService.CustomerEqual(invoiceToUpdate['customer'])) {
                    _this.customerService.UpdateCustomerNonHttp(invoiceToUpdate['customer']);
                }
            }
        }, function (error) {
            if (error.status == "401") {
                _this.userService.LogOut();
                return;
            }
            alert("Wystapił błąd proszę spróbować później, dane nie zostały zmienione");
        });
    };
    InvoiceServices.prototype.DeleteInvoice = function (invoiceNumber) {
        var _this = this;
        var index = this.invoices.map(function (i) { return i.invoiceNumber; }).indexOf(invoiceNumber);
        if (this.invoices[index] != null) {
            this.invoiceHttp.Delete(this.invoices[index].id).subscribe(function (response) {
                _this.invoices.splice(index, 1);
            }, function (error) {
                if (error['status'] == "401") {
                    _this.userService.LogOut();
                    return;
                }
                if (error.error.text == "Invoice is not last") {
                    alert("Nie można usunąć faktury, nie jest ona ostatnią wystawioną fakturą.");
                }
            });
        }
        else {
            alert("Nie znaleziono faktury");
        }
    };
    InvoiceServices.prototype.SettleInvoices = function (setteledInvoices, nip) {
        var _this = this;
        this.invoiceHttp.SettleInvoices(setteledInvoices).subscribe(function () {
            for (var _i = 0, setteledInvoices_1 = setteledInvoices; _i < setteledInvoices_1.length; _i++) {
                var number = setteledInvoices_1[_i];
                var invoce = _this.GetInvoiceByNumber(number);
                invoce.accounted = true;
            }
            _this.router.navigate(["/customer"]);
        }, function (error) {
            if (error.error.text == "Invalid user") {
                _this.userService.LogOut();
            }
            if (error.error.text == "Invalid data") {
                alert("Nie zaznaczyłeś żadnej faktury do rozlicznia");
            }
            else {
                alert("Wystapił błąd proszę spróbować później, dane nie zostały zmienione");
            }
        });
    };
    //#region private methods
    InvoiceServices.prototype.SetInvoiceDate = function () {
        var timeNow = new Date();
        return timeNow;
    };
    InvoiceServices.prototype.CalculateTotalPrice = function (invoiceItems) {
        var totalPrice = invoiceItems.map(function (i) { return i.totalPriceWithTax; }).reduce(function (a, b) { return Number(a) + Number(b); });
        return totalPrice;
    };
    InvoiceServices.prototype.SetCustomerData = function (customerToUpdate, customer) {
        if (this.customerService.GetCustomerByNip(customer.nip) != null) {
            customer = this.customerService.GetCustomerByNip(customer.nip);
        }
        customerToUpdate.id = customer.id;
        customerToUpdate.address = customer.address;
        customerToUpdate.city = customer.city;
        customerToUpdate.email = customer.email;
        customerToUpdate.name = customer.name;
        customerToUpdate.nip = customer.nip;
        customerToUpdate.postCode = customer.postCode;
    };
    InvoiceServices.prototype.SetInvoicItemsData = function (itemsToUpdate, invoiceItems) {
        var index = 0;
        for (var i = 0; i < itemsToUpdate.length; i++) {
            itemsToUpdate[i].amount = invoiceItems[i].amount;
            itemsToUpdate[i].name = invoiceItems[i].name;
            itemsToUpdate[i].tax = invoiceItems[i].tax;
            itemsToUpdate[i].totalPriceWithoutTax = invoiceItems[i].totalPriceWithoutTax;
            itemsToUpdate[i].totalPriceWithTax = invoiceItems[i].totalPriceWithTax;
            itemsToUpdate[i].unitPriceWithoutTax = invoiceItems[i].unitPriceWithoutTax;
            index++;
        }
        for (var i = index; i < invoiceItems.length; i++) {
            itemsToUpdate.push(invoiceItems[i]);
        }
    };
    InvoiceServices.prototype.SetInvoicePaymentStatus = function (paymentType) {
        if (paymentType == "gotówka")
            return true;
        return false;
    };
    InvoiceServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__customer_services_customer_services__["a" /* CustomerServices */], __WEBPACK_IMPORTED_MODULE_0__invoice_http_services__["a" /* InvoiceHttpServices */], __WEBPACK_IMPORTED_MODULE_4__user_services_user_services__["a" /* UserServices */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], InvoiceServices);
    return InvoiceServices;
}());



/***/ }),

/***/ "./ClientApp/app/services/local authorization/can-activate-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_services_user_services__ = __webpack_require__("./ClientApp/app/services/user services/user.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateGuard = /** @class */ (function () {
    function CanActivateGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    CanActivateGuard.prototype.canActivate = function () {
        if (this.userService.signedIn) {
            return true;
        }
        this.router.navigate(['/user/login']);
        return false;
    };
    CanActivateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__user_services_user_services__["a" /* UserServices */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CanActivateGuard);
    return CanActivateGuard;
}());



/***/ }),

/***/ "./ClientApp/app/services/user services/user.http.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHttpServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("./ClientApp/app/services/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserHttpServices = /** @class */ (function () {
    function UserHttpServices(userHttp, userService, commonData) {
        this.userHttp = userHttp;
        this.userService = userService;
        this.commonData = commonData;
    }
    UserHttpServices.prototype.Login = function (loginData) {
        return this.userHttp.post("api/account/Login", loginData);
    };
    UserHttpServices.prototype.LogOut = function () {
        return this.userHttp.post("api/account/Logout", null, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    UserHttpServices.prototype.Register = function (registerData) {
        return this.userHttp.post("api/account/Register", registerData);
    };
    UserHttpServices.prototype.ChangePassword = function (passwordData) {
        return this.userHttp.post("api/account/ChangePassword", passwordData, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    UserHttpServices.prototype.ChangeUserData = function (userData) {
        return this.userHttp.post("api/account/UpdateUser", userData, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    UserHttpServices.prototype.GetToken = function (loginData) {
        return this.userHttp.post("/api/account/CreateToken", loginData);
    };
    UserHttpServices.prototype.TokenExpired = function () {
        return this.userHttp.post("/api/account/CheckIfExpired", null, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.commonData.token['token']) });
    };
    UserHttpServices.prototype.IsAvailabel = function (paramsArray) {
        return this.userHttp.post('/api/account/IsAvailable', paramsArray);
    };
    UserHttpServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]])
    ], UserHttpServices);
    return UserHttpServices;
}());



/***/ }),

/***/ "./ClientApp/app/services/user services/user.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("./ClientApp/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_login_model__ = __webpack_require__("./ClientApp/app/models/login.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_service__ = __webpack_require__("./ClientApp/app/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_http_services__ = __webpack_require__("./ClientApp/app/services/user services/user.http.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//#region import







//#endregion
var UserServices = /** @class */ (function () {
    //#endregion
    function UserServices(userHttp, router, commonData) {
        this.userHttp = userHttp;
        this.router = router;
        this.commonData = commonData;
        //#region properties
        this.signedIn = false;
        this.signinStatusChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.userInactive = false;
        this.userData = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* UserModel */]();
        this.loginData = new __WEBPACK_IMPORTED_MODULE_4__models_login_model__["a" /* LoginModel */]();
    }
    UserServices.prototype.Login = function (loginData) {
        var _this = this;
        this.userHttp.Login(loginData).subscribe(function (response) {
            _this.loginData = loginData;
            _this.userData = response;
            _this.signedIn = true;
            _this.userHttp.GetToken(loginData).subscribe(function (response) {
                _this.commonData.token = response;
                _this.signinStatusChanged.next(_this.signedIn);
            });
            _this.router.navigate(["/invoice"]);
        }, function (error) {
            _this.signedIn = false;
            _this.signinStatusChanged.next(_this.signedIn);
            if (error['error'] == "Bad username or password") {
                alert("Złe dane logowania");
            }
        });
    };
    UserServices.prototype.LogOut = function () {
        var _this = this;
        this.userHttp.LogOut().subscribe(function () {
            _this.userData = null;
            _this.loginData = null;
            _this.signedIn = false;
            _this.userInactive = false;
            _this.commonData.token['token'] = '';
            _this.signinStatusChanged.next(_this.signedIn);
            _this.router.navigate(['/user/login']);
        });
    };
    UserServices.prototype.Register = function (regsiterData) {
        var _this = this;
        this.userHttp.Register(regsiterData).subscribe(function () {
            alert("Zarejstrowano pomyslnie");
            _this.router.navigate(['/user/login']);
        }, function (error) {
            if (error.error == "Register is locked") {
                alert("Nie posiadasz uprawnienień aby dokonać rejestracji");
                return;
            }
            if (error.error == "Invalid data") {
                alert("Wprowadzone dane są błędne");
                return;
            }
            alert("Błąd połączenia z serwerem");
            return;
        });
    };
    UserServices.prototype.GetToken = function (loginData) {
        var _this = this;
        this.userHttp.GetToken(loginData).subscribe(function (response) {
            _this.commonData.token = response;
        }, function (error) {
            if (_this.signedIn)
                _this.LogOut();
        });
    };
    UserServices.prototype.ChangePassword = function (newData) {
        var _this = this;
        this.userHttp.ChangePassword(newData).subscribe(function () {
            _this.loginData.password = newData.password;
            alert("Zaktualizowano hasło");
        }, function (error) {
            if (error.status == "401") {
                _this.LogOut();
                return;
            }
            alert("Błąd połączenia z serwerem");
        });
    };
    UserServices.prototype.ChangeUserData = function (newData) {
        var _this = this;
        this.userHttp.ChangeUserData(newData).subscribe(function () {
            _this.userData = newData;
            alert("Zaktualizowano Twoje dane");
        }, function (error) {
            if (error.status == "401") {
                _this.LogOut();
                return;
            }
            alert("Błąd połączenia z serwerem");
        });
    };
    UserServices.prototype.CheckTokenExpired = function () {
        var _this = this;
        if (this.commonData.token['token'] != '' && this.commonData.token != null) {
            this.userHttp.TokenExpired().subscribe(function (notExpired) {
                _this.GetToken(_this.loginData);
            }, function (expired) {
                if (_this.signedIn)
                    _this.LogOut();
            });
        }
    };
    UserServices.prototype.StartActiveTimer = function () {
        var _this = this;
        this.activeTimer = setTimeout(function () {
            _this.userInactive = true;
        }, 60000);
    };
    UserServices.prototype.ResetActiveTimer = function () {
        clearTimeout(this.activeTimer);
        this.userInactive = false;
        this.StartActiveTimer();
    };
    UserServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__user_http_services__["a" /* UserHttpServices */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */]])
    ], UserServices);
    return UserServices;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./ClientApp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map