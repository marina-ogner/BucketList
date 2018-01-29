webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>\n    {{name}}'s Bucket List</h1>\n\n<h2>Done</h2>\n<ng-container *ngFor=\"let item of items\">\n    <p *ngIf=\"item._creator==aboutUser._id && item.checkbox==1 || item._tagged._id==aboutUser._id && item.checkbox==1\">\n        <ng-container *ngIf=\"item._creator==userId || item._tagged._id==userId; else elseTemplate\">\n            <input type=\"checkbox\" (click)=\"checkbox(item._id)\" checked> {{item._tagged.name}} | {{item.title}} - {{item.desc}} - {{item.createdAt | date:'MMM. d, yyyy'}}\n        </ng-container>\n        <ng-template #elseTemplate>\n            <input  [disabled] = \"true\" type=\"checkbox\" checked> {{item._tagged.name}} | {{item.title}} - {{item.desc}} - {{item.createdAt | date:'MMM. d, yyyy'}}\n        </ng-template>\n</ng-container>\n\n<h2>Pending</h2>\n<ng-container *ngFor=\"let item of items\">\n    <p *ngIf=\"item._creator==aboutUser._id && item.checkbox==0 || item._tagged._id==aboutUser._id && item.checkbox==0\">\n        <ng-container *ngIf=\"item._creator==userId || item._tagged._id==userId; else elseTemplate\">\n            <input type=\"checkbox\" (click)=\"checkbox(item._id)\"> {{item._tagged.name}} | {{item.title}} - {{item.desc}} - {{item.createdAt | date:'MMM. d, yyyy'}}\n        </ng-container>\n        <ng-template #elseTemplate>\n            <input [disabled] = \"true\" type=\"checkbox\"> {{item._tagged.name}} | {{item.title}} - {{item.desc}} - {{item.createdAt | date:'MMM. d, yyyy'}}\n        </ng-template>\n</ng-container>\n\n\n\n\n\n\n<!-- <ng-container *ngFor=\"let item of items\">\n    <p *ngIf=\"item._creator==aboutUser._id || item._tagged._id==aboutUser._id\">\n        <ng-container *ngIf=\"item.checkbox==1; else elseTemplate\">\n            <input type=\"checkbox\" (click)=\"checkbox(item._id)\" checked> {{item._tagged.name}} | {{item.title}} - {{item.desc}}\n        </ng-container>\n        <ng-template #elseTemplate>\n            <input type=\"checkbox\" (click)=\"checkbox(item._id)\"> {{item._tagged.name}} | {{item.title}} - {{item.desc}}\n        </ng-template>\n\n    </p> -->"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var main_service_1 = __webpack_require__("../../../../../src/app/main.service.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(_mainService, _http, _router, _route) {
        this._mainService = _mainService;
        this._http = _http;
        this._router = _router;
        this._route = _route;
        this.items = [];
    }
    AboutComponent.prototype.checkSession = function () {
        var _this = this;
        this._mainService.checkSession(function (res) {
            if (!res) {
                _this._router.navigate([""]);
            }
            else {
                _this.user = res;
                _this.userName = res.name;
                _this.userId = res._id;
            }
        });
    };
    ;
    // getAbout(){
    //   this._mainService.getAbout( (data) => {
    //     this.aboutUser = data;
    //     // console.log(data);
    //     })
    // };
    AboutComponent.prototype.showItems = function () {
        var _this = this;
        this._mainService.showItems(function (data) {
            _this.items = data;
        });
    };
    ;
    AboutComponent.prototype.checkbox = function (_id) {
        var _this = this;
        // console.log("in component");
        this._mainService.checkbox(_id, function (data) {
            _this.showItems();
        });
    };
    ;
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getAbout();
        this._route.paramMap.subscribe(function (params) {
            // console.log(params.get('id'));
            var id = params.get('id');
            _this._mainService.about(id, function (data) {
                _this.aboutUser = data;
                _this.name = _this.aboutUser.name;
                _this.showItems();
                _this.checkSession();
            });
        });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [main_service_1.MainService, http_1.Http, router_1.Router, router_2.ActivatedRoute])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var routes = [{ path: '', pathMatch: "full",
        component: login_component_1.LoginComponent },
    { path: 'home',
        component: home_component_1.HomeComponent },
    { path: 'user/:id',
        component: about_component_1.AboutComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var main_service_1 = __webpack_require__("../../../../../src/app/main.service.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [main_service_1.MainService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.logout{\r\n    position: absolute;\r\n    top: 30px;\r\n    right: 30px;\r\n}\r\n\r\n h5{\r\n     color: red;\r\n }\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- {{items | json}} -->\n\n<!-- {{user | json}} -->\n<h1>Welcome {{userName}}!</h1>\n<a class=\"logout\" href=\"/logout\">Log out </a>\n\n<form (submit)=\"create()\" #formData='ngForm'>\n    <input type=\"text\" placeholder = \"Title*\" name=\"title\" required minlength=\"5\" [(ngModel)]=\"item.title\" pattern=\"^(.{5,})$\" #titleModel=\"ngModel\"> \n    <input type=\"text\" placeholder = \"Description**\" name=\"desc\" required minlength=\"10\" [(ngModel)]=\"item.desc\" pattern=\"^(.{10,})$\" #descModel=\"ngModel\"> \n    <select name=\"tagged\" id=\"\" [(ngModel)]=\"item._tagged\" #taggedModel=\"ngModel\">\n        <option value=\"\" disabled selected>Select...</option>\n        <option *ngFor=\"let user of users\" value={{user._id}}>{{user.name}}</option>\n    </select>\n    <input type=\"submit\"  [disabled]=\"!formData.valid\" value=\"Add to List\">\n</form>\n\n<h5>*Title must be at least 5 characters.</h5>\n<h5>**Description must be at least 10 characters.</h5>\n\n\n<h3>Before I die I want to....</h3>\n\n<ng-container *ngFor=\"let item of items\">\n    <p *ngIf=\"item._creator==user._id || item._tagged._id==user._id\">\n        <ng-container *ngIf=\"item.checkbox==1; else elseTemplate\">\n            <input type=\"checkbox\" (click)=\"checkbox(item._id)\" checked> {{item._tagged.name}} | {{item.title}} - {{item.desc}} - {{item.createdAt | date:'MMM. d, yyyy'}}\n        </ng-container>\n        <ng-template #elseTemplate>\n            <input type=\"checkbox\" (click)=\"checkbox(item._id)\"> {{item._tagged.name}} | {{item.title}} - {{item.desc}} - {{item.createdAt | date:'MMM. d, yyyy'}}\n        </ng-template>\n\n    </p>\n</ng-container>\n\n<h3>List of other users (Click to view profile):</h3>\n<p *ngFor=\"let user of users\">\n    <a href=\"javascript:void(0);\" (click)=\"about(user._id)\" *ngIf=\"user.name!=userName\">\n        {{user.name}}\n    </a>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var main_service_1 = __webpack_require__("../../../../../src/app/main.service.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_mainService, _http, _router) {
        this._mainService = _mainService;
        this._http = _http;
        this._router = _router;
        this.users = [];
        this.items = [];
        // this.item = { _creator: this.userId, title: '', desc: '', _tagged: '' };
        this.item = { title: '', desc: '', _tagged: '' };
    }
    HomeComponent.prototype.checkSession = function () {
        var _this = this;
        this._mainService.checkSession(function (res) {
            if (!res) {
                _this._router.navigate([""]);
            }
            else {
                _this.user = res;
                _this.userName = res.name;
                _this.userId = res._id;
            }
        });
    };
    ;
    HomeComponent.prototype.showUsers = function () {
        var _this = this;
        this._mainService.showUsers(function (data) {
            return _this.users = data;
        });
    };
    ;
    HomeComponent.prototype.create = function () {
        var _this = this;
        this._mainService.create(this.item, function () {
            _this.showItems();
        });
        this.item = { title: '', desc: '', _tagged: '' };
    };
    ;
    HomeComponent.prototype.showItems = function () {
        var _this = this;
        this._mainService.showItems(function (data) {
            _this.items = data;
        });
    };
    ;
    HomeComponent.prototype.about = function (_id) {
        this._router.navigate(["user", _id]);
    };
    ;
    HomeComponent.prototype.checkbox = function (_id) {
        var _this = this;
        // console.log("in component");
        this._mainService.checkbox(_id, function (data) {
            _this.showItems();
        });
    };
    ;
    HomeComponent.prototype.ngOnInit = function () {
        this.checkSession();
        this.showUsers();
        this.showItems();
    };
    ;
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [main_service_1.MainService, http_1.Http, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\r\n    margin: 0px;\r\n    display: inline-block;\r\n}\r\n\r\ninput{\r\n    margin-top: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"login()\" #formData='ngForm'>\n  Name: <input type=\"text\" name=\"name\" required minlength=\"2\" pattern = \"^([a-zA-Z0-9@* #]{2,})$\" [(ngModel)]=\"user.name\" #name=\"ngModel\">\n  <!-- {{name.valid | json}} -->\n  <p *ngIf=\"!name.valid\">Name must be at least 2 characters long.</p>\n  <br>\n  <input [disabled]=\"!formData.valid\" type=\"submit\" value=\"Login/Registration\">\n\n</form>\n\n<!-- pattern = \"/^(?=^([a-zA-Z0-9@* #]{2,})$)(?=^$).*$/\" -->"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var main_service_1 = __webpack_require__("../../../../../src/app/main.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_mainService, _router) {
        this._mainService = _mainService;
        this._router = _router;
        this.user = { name: '' };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._mainService.login(this.user, function (data) {
            // console.log(data);
            if (data) {
                _this._router.navigate(['/home']);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [main_service_1.MainService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/main.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var MainService = /** @class */ (function () {
    // quotes: Array<any>;
    function MainService(_http) {
        this._http = _http;
    }
    MainService.prototype.login = function (user, cb) {
        var _this = this;
        this._http.post('/login', user).subscribe(function (res) {
            _this.user = res.json();
            // console.log(this.user);
            cb(res.json());
        });
    };
    ;
    MainService.prototype.checkSession = function (cb) {
        // console.log("in service")
        this._http.get('/check').subscribe(function (res) {
            cb(res.json());
        });
    };
    ;
    MainService.prototype.showUsers = function (cb) {
        var _this = this;
        this._http.get('/showUsers').subscribe(function (res) {
            _this.users = res.json();
            cb(_this.users);
        });
    };
    ;
    MainService.prototype.create = function (item, cb) {
        var _this = this;
        this._http.post('/create', item).subscribe(function (res) {
            _this.item = res.json();
            cb();
        });
    };
    ;
    MainService.prototype.showItems = function (cb) {
        var _this = this;
        this._http.get('/showItems').subscribe(function (res) {
            _this.items = res.json();
            cb(_this.items);
        });
    };
    ;
    MainService.prototype.about = function (_id, cb) {
        var _this = this;
        this._http.get('/about/' + _id).subscribe(function (res) {
            _this.aboutUser = res;
            // console.log(res.json(), 'df');
            cb(res.json());
        });
    };
    ;
    MainService.prototype.getAbout = function (cb) {
        // console.log("in service");
        cb(this.aboutUser.json());
    };
    ;
    MainService.prototype.checkbox = function (_id, cb) {
        // console.log("in service", _id);
        this._http.get('/checkbox/' + _id).subscribe(function (res) {
            // console.log(res.json(), 'df');
            cb(res.json());
        });
    };
    ;
    MainService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MainService);
    return MainService;
}());
exports.MainService = MainService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map