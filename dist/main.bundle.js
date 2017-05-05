webpackJsonp([1,4],{

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 190;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(199);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(263),
        styles: [__webpack_require__(253)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mydatepicker__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mydatepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mydatepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__date_calculator_form_date_calculator_form_component__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__date_calculator_form_date_calculator_form_component__["a" /* DateCalculatorFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_mydatepicker__["MyDatePickerModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateCalculatorFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateCalculatorFormComponent = (function () {
    function DateCalculatorFormComponent() {
        this.myDatePickerOptions = {
            dateFormat: 'dd-mm-yyyy',
        };
        this.model = {};
        this.duration = null;
        this.endDateIncluded = false;
        this.displayResult = false;
    }
    DateCalculatorFormComponent.prototype.onSubmit = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_moment__(this.model['endDate'].jsdate).isBefore(this.model['startDate'].jsdate)) {
            var tmp = this.model['endDate'];
            this.model['endDate'] = this.model['startDate'];
            this.model['startDate'] = tmp;
        }
        this.duration = __WEBPACK_IMPORTED_MODULE_1_moment__(this.model['endDate'].jsdate).diff(this.model['startDate'].jsdate, 'days');
        if (this.endDateIncluded) {
            this.duration += 1;
        }
        this.displayResult = true;
    };
    return DateCalculatorFormComponent;
}());
DateCalculatorFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'date-calculator-form',
        template: __webpack_require__(264),
        styles: [__webpack_require__(254)]
    })
], DateCalculatorFormComponent);

//# sourceMappingURL=date-calculator-form.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, " h1 {\r\n    text-align: center;\r\n}\r\n\r\np {\r\n    font-size: 15px;\r\n    line-height: 1.5;\r\n    margin: 0 0 7px;\r\n}\r\n\r\n.container {\r\n    margin: 50px auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "form {\r\n    padding: 15px 15px 15px 30px;\r\n    background: #fcf7f7;\r\n    border-left: 3px solid #dec6c6;\r\n    margin: 15px 0;\r\n}\r\n\r\n.row {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\na:link, a:visited {\r\n    color: #176db3;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    padding: 5px 0px;\r\n}\r\n\r\na:hover {\r\n   text-decoration: underline;\r\n}\r\n\r\n.result{\r\n    padding: 15px;\r\n    background: #f4fcf0;\r\n    border-left: 3px solid #ccdec4;\r\n    margin: 15px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 65,
	"./af.js": 65,
	"./ar": 72,
	"./ar-dz": 66,
	"./ar-dz.js": 66,
	"./ar-kw": 67,
	"./ar-kw.js": 67,
	"./ar-ly": 68,
	"./ar-ly.js": 68,
	"./ar-ma": 69,
	"./ar-ma.js": 69,
	"./ar-sa": 70,
	"./ar-sa.js": 70,
	"./ar-tn": 71,
	"./ar-tn.js": 71,
	"./ar.js": 72,
	"./az": 73,
	"./az.js": 73,
	"./be": 74,
	"./be.js": 74,
	"./bg": 75,
	"./bg.js": 75,
	"./bn": 76,
	"./bn.js": 76,
	"./bo": 77,
	"./bo.js": 77,
	"./br": 78,
	"./br.js": 78,
	"./bs": 79,
	"./bs.js": 79,
	"./ca": 80,
	"./ca.js": 80,
	"./cs": 81,
	"./cs.js": 81,
	"./cv": 82,
	"./cv.js": 82,
	"./cy": 83,
	"./cy.js": 83,
	"./da": 84,
	"./da.js": 84,
	"./de": 87,
	"./de-at": 85,
	"./de-at.js": 85,
	"./de-ch": 86,
	"./de-ch.js": 86,
	"./de.js": 87,
	"./dv": 88,
	"./dv.js": 88,
	"./el": 89,
	"./el.js": 89,
	"./en-au": 90,
	"./en-au.js": 90,
	"./en-ca": 91,
	"./en-ca.js": 91,
	"./en-gb": 92,
	"./en-gb.js": 92,
	"./en-ie": 93,
	"./en-ie.js": 93,
	"./en-nz": 94,
	"./en-nz.js": 94,
	"./eo": 95,
	"./eo.js": 95,
	"./es": 97,
	"./es-do": 96,
	"./es-do.js": 96,
	"./es.js": 97,
	"./et": 98,
	"./et.js": 98,
	"./eu": 99,
	"./eu.js": 99,
	"./fa": 100,
	"./fa.js": 100,
	"./fi": 101,
	"./fi.js": 101,
	"./fo": 102,
	"./fo.js": 102,
	"./fr": 105,
	"./fr-ca": 103,
	"./fr-ca.js": 103,
	"./fr-ch": 104,
	"./fr-ch.js": 104,
	"./fr.js": 105,
	"./fy": 106,
	"./fy.js": 106,
	"./gd": 107,
	"./gd.js": 107,
	"./gl": 108,
	"./gl.js": 108,
	"./gom-latn": 109,
	"./gom-latn.js": 109,
	"./he": 110,
	"./he.js": 110,
	"./hi": 111,
	"./hi.js": 111,
	"./hr": 112,
	"./hr.js": 112,
	"./hu": 113,
	"./hu.js": 113,
	"./hy-am": 114,
	"./hy-am.js": 114,
	"./id": 115,
	"./id.js": 115,
	"./is": 116,
	"./is.js": 116,
	"./it": 117,
	"./it.js": 117,
	"./ja": 118,
	"./ja.js": 118,
	"./jv": 119,
	"./jv.js": 119,
	"./ka": 120,
	"./ka.js": 120,
	"./kk": 121,
	"./kk.js": 121,
	"./km": 122,
	"./km.js": 122,
	"./kn": 123,
	"./kn.js": 123,
	"./ko": 124,
	"./ko.js": 124,
	"./ky": 125,
	"./ky.js": 125,
	"./lb": 126,
	"./lb.js": 126,
	"./lo": 127,
	"./lo.js": 127,
	"./lt": 128,
	"./lt.js": 128,
	"./lv": 129,
	"./lv.js": 129,
	"./me": 130,
	"./me.js": 130,
	"./mi": 131,
	"./mi.js": 131,
	"./mk": 132,
	"./mk.js": 132,
	"./ml": 133,
	"./ml.js": 133,
	"./mr": 134,
	"./mr.js": 134,
	"./ms": 136,
	"./ms-my": 135,
	"./ms-my.js": 135,
	"./ms.js": 136,
	"./my": 137,
	"./my.js": 137,
	"./nb": 138,
	"./nb.js": 138,
	"./ne": 139,
	"./ne.js": 139,
	"./nl": 141,
	"./nl-be": 140,
	"./nl-be.js": 140,
	"./nl.js": 141,
	"./nn": 142,
	"./nn.js": 142,
	"./pa-in": 143,
	"./pa-in.js": 143,
	"./pl": 144,
	"./pl.js": 144,
	"./pt": 146,
	"./pt-br": 145,
	"./pt-br.js": 145,
	"./pt.js": 146,
	"./ro": 147,
	"./ro.js": 147,
	"./ru": 148,
	"./ru.js": 148,
	"./sd": 149,
	"./sd.js": 149,
	"./se": 150,
	"./se.js": 150,
	"./si": 151,
	"./si.js": 151,
	"./sk": 152,
	"./sk.js": 152,
	"./sl": 153,
	"./sl.js": 153,
	"./sq": 154,
	"./sq.js": 154,
	"./sr": 156,
	"./sr-cyrl": 155,
	"./sr-cyrl.js": 155,
	"./sr.js": 156,
	"./ss": 157,
	"./ss.js": 157,
	"./sv": 158,
	"./sv.js": 158,
	"./sw": 159,
	"./sw.js": 159,
	"./ta": 160,
	"./ta.js": 160,
	"./te": 161,
	"./te.js": 161,
	"./tet": 162,
	"./tet.js": 162,
	"./th": 163,
	"./th.js": 163,
	"./tl-ph": 164,
	"./tl-ph.js": 164,
	"./tlh": 165,
	"./tlh.js": 165,
	"./tr": 166,
	"./tr.js": 166,
	"./tzl": 167,
	"./tzl.js": 167,
	"./tzm": 169,
	"./tzm-latn": 168,
	"./tzm-latn.js": 168,
	"./tzm.js": 169,
	"./uk": 170,
	"./uk.js": 170,
	"./ur": 171,
	"./ur.js": 171,
	"./uz": 173,
	"./uz-latn": 172,
	"./uz-latn.js": 172,
	"./uz.js": 173,
	"./vi": 174,
	"./vi.js": 174,
	"./x-pseudo": 175,
	"./x-pseudo.js": 175,
	"./yo": 176,
	"./yo.js": 176,
	"./zh-cn": 177,
	"./zh-cn.js": 177,
	"./zh-hk": 178,
	"./zh-hk.js": 178,
	"./zh-tw": 179,
	"./zh-tw.js": 179
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 255;


/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>Date Duration Calculator</h1>\r\n    <h2></h2>\r\n    <p>This calculator calculates the duration, which is the day count and the number of days, months and years between two\r\n        dates. Among other things, it can be used to find how many days old you are :)</p>\r\n    <date-calculator-form></date-calculator-form>\r\n</div>"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<form #dateDurationCalculatorForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h2>Start Date</h2>\n      <my-date-picker name=\"startDate\" [options]=\"myDatePickerOptions\"\n                    [(ngModel)]=\"model.startDate\" required></my-date-picker>\n    </div>\n    <div div class=\"col-md-6\">\n      <h2>End Date</h2>\n      <my-date-picker name=\"endDate\" [options]=\"myDatePickerOptions\"\n                    [(ngModel)]=\"model.endDate\" required></my-date-picker>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div div class=\"col-md-12\">\n      <label>\n        <input type=\"checkbox\" name=\"endDateIncluded\" [(ngModel)]=\"endDateIncluded\">\n        Include end date in calculation (1 day is added)\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div div class=\"col-md-12\">\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!dateDurationCalculatorForm.form.valid\" >Calculate Duration</button>\n    </div>\n  </div>\n</form>\n\n<div [hidden]=\"!displayResult\" class=\"result row\">\n  <h2>Result: {{duration}} days</h2>\n  <p>It is {{duration}} day(s) from the start date to the end date.</p>\n</div>"

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ })

},[290]);
//# sourceMappingURL=main.bundle.js.map