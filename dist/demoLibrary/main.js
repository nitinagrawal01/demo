(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accordian/accordian.component.css":
/*!***************************************************!*\
  !*** ./src/app/accordian/accordian.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    text-align: left;\r\n    display: block;\r\n    background-color:#eee;\r\n    padding: 8px;\r\n    font-weight: 500;\r\n\r\n}\r\nli {\r\n\r\n    margin: 7px\r\n}"

/***/ }),

/***/ "./src/app/accordian/accordian.component.html":
/*!****************************************************!*\
  !*** ./src/app/accordian/accordian.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n        <span>\n            <h5>Accordion</h5>\n            <p>- Heading</p>\n            <p>- Body</p>\n            <p>- Section disable</p>\n          </span><br>\n      <!-- <span> Accordian without subheading with body open and section disable </span>&nbsp; -->\n      <ng-dynamic-accordion [option]=accordianWithOneHeading></ng-dynamic-accordion>\n    </li>\n    <li class=\"list-group-item\">\n        <span>\n            <h5>Accordion</h5>\n            <p>- Heading</p>\n            <p>- Body close</p>\n            <p>- Section enable</p>\n          </span><br>\n      <!-- <span>Accordian without subheading with body close and section enable </span>&nbsp; -->\n      <ng-dynamic-accordion [option]=accordianWithOneHeadingDisable></ng-dynamic-accordion>\n    </li>\n    <li class=\"list-group-item\">\n        <span>\n            <h5>Accordion</h5>\n            <p>- Subheading</p>\n            <!-- <p>- Subheading</p>\n            <p>- Body close</p>\n            <p>- Section enable</p> -->\n          </span><br>\n      <!-- <span>Accordian with subheading</span>&nbsp; -->\n      <ng-dynamic-accordion [option]=options></ng-dynamic-accordion>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/accordian/accordian.component.ts":
/*!**************************************************!*\
  !*** ./src/app/accordian/accordian.component.ts ***!
  \**************************************************/
/*! exports provided: AccordianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordianComponent", function() { return AccordianComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AccordianComponent = /** @class */ (function () {
    function AccordianComponent() {
        this.userArray = [];
    }
    AccordianComponent.prototype.ngOnInit = function () {
        this.userArray = [
            {
                // tslint:disable-next-line:max-line-length
                heading: 'Where does it come from?', desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ', isDisable: false, isOpen: false,
                // tslint:disable-next-line:max-line-length
                group: [{ subHeading: 'The standard Lorem Ipsum passage', isOpen: false, subDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' }]
            },
            {
                // tslint:disable-next-line:max-line-length
                heading: 'What is Lorem Ipsum?', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', isDisable: false, isOpen: false,
                // tslint:disable-next-line:max-line-length
                group: [{ subHeading: ' Translation by H. Rackham', isOpen: false, subDesc: 'But i must explain to you how all this mistaken idea of denouncing' }]
            },
            {
                // tslint:disable-next-line:max-line-length
                heading: '1914 translation by H. Rackham', desc: 'On the other hand, we denounce with righteous indignation and dislike men', isDisable: false, isOpen: false,
                // tslint:disable-next-line:max-line-length
                group: [{ subHeading: 'Used since the 1500', isOpen: false, subDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun' }]
            },
        ];
        this.options = {
            textKeyHeading: 'heading',
            textKeyDesc: 'desc',
            textKeysubHeading: 'subHeading',
            textKeysubDesc: 'subDesc',
            addCssClass: 'display',
            array: this.userArray // Array of accordion.
        };
        this.arrayWithOneHeading = [
            {
                // tslint:disable-next-line:max-line-length
                heading: 'Technology – An Integral Part of Our Life', desc: 'Technology has become an integral part of our lives. It is ever-evolving and is responsible for our changing lifestyle. ', isDisable: true, isOpen: true,
            },
            {
                // tslint:disable-next-line:max-line-length
                heading: 'The Downside of Technology', desc: 'The use of technological equipment has given rise to various types of pollution', isDisable: true, isOpen: true,
            },
            {
                heading: 'Depletion of Natural Resource',
                desc: 'Many natural resources are being over-exploited to produce technological equipment', isDisable: true, isOpen: true,
            },
        ];
        this.accordianWithOneHeading = {
            textKeyHeading: 'heading',
            textKeyDesc: 'desc',
            array: this.arrayWithOneHeading
        };
        this.arrayWithOneHeadingDisableFasle = [
            {
                // tslint:disable-next-line:max-line-length
                heading: 'The Global South', desc: 'Resence and minimizing the potential negative effects gain cooperation of the local people.', isDisable: false, isOpen: false,
            },
            {
                // tslint:disable-next-line:max-line-length
                heading: 'Local economy', desc: 'To strengthen local economy: Studies have shown that buying from an independent', isDisable: false, isOpen: false,
            },
            {
                // tslint:disable-next-line:max-line-length
                heading: 'Employment', desc: 'Putnam reported that many studies have shown that the highest predictor of job satisfaction', isDisable: false, isOpen: false,
            },
        ];
        this.accordianWithOneHeadingDisable = {
            textKeyHeading: 'heading',
            textKeyDesc: 'desc',
            array: this.arrayWithOneHeadingDisableFasle
        };
    };
    AccordianComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accordian',
            template: __webpack_require__(/*! ./accordian.component.html */ "./src/app/accordian/accordian.component.html"),
            styles: [__webpack_require__(/*! ./accordian.component.css */ "./src/app/accordian/accordian.component.css")]
        })
    ], AccordianComponent);
    return AccordianComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\ndiv{\r\n\r\nwidth: 100%;\r\nbackground-color:#3f51b5;\r\n\r\n}\r\n\r\n.btn {\r\n  border: none;\r\n  outline: none;\r\n  padding: 10px 16px;\r\n  background-color:#3f51b5;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Style the active class (and buttons on mouse-over) */\r\n\r\n.active, .btn:hover {\r\n  color: white;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myDIV\">\n  <button class=\"btn active\" [routerLink]=\"['accordion']\">ACCORDIONS</button>\n\n  <button class=\"btn\" [routerLink]=\"['datepicker']\">DATEPICKERS</button>\n  <button class=\"btn\" [routerLink]=\"['autocompletesearch']\">AUTO COMPLETES</button>\n  <button class=\"btn\" [routerLink]=\"['multi-single-selectdropdown']\"> DROP-DOWNS</button>\n  <button class=\"btn\" [routerLink]=\"['table']\">TABLES</button>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    // tslint:disable-next-line:use-life-cycle-interface
    AppComponent.prototype.ngOnInit = function () {
        var btnContainer = document.getElementById('myDIV');
        console.log(btnContainer);
        var btns = btnContainer.getElementsByClassName('btn');
        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function () {
                var current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace('active', '');
                this.className += ' active';
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_multi_single_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-multi-single-dropdown */ "./node_modules/angular-multi-single-dropdown/index.js");
/* harmony import */ var ng_dynamic_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-dynamic-accordion */ "./node_modules/ng-dynamic-accordion/index.js");
/* harmony import */ var ng6_datepickers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-datepickers */ "./node_modules/ng6-datepickers/index.js");
/* harmony import */ var ng_dynamic_autocomplete_searchfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-dynamic-autocomplete-searchfield */ "./node_modules/ng-dynamic-autocomplete-searchfield/index.js");
/* harmony import */ var ng_creating_dynamic_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-creating-dynamic-table */ "./node_modules/ng-creating-dynamic-table/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _autocompletesearch_autocompletesearch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./autocompletesearch/autocompletesearch.component */ "./src/app/autocompletesearch/autocompletesearch.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/datepicker/datepicker.component.ts");
/* harmony import */ var _multiselectdropdown_multiselectdropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./multiselectdropdown/multiselectdropdown.component */ "./src/app/multiselectdropdown/multiselectdropdown.component.ts");
/* harmony import */ var _accordian_accordian_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./accordian/accordian.component */ "./src/app/accordian/accordian.component.ts");
/* harmony import */ var _dynamictable_dynamictable_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dynamictable/dynamictable.component */ "./src/app/dynamictable/dynamictable.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _autocompletesearch_autocompletesearch_component__WEBPACK_IMPORTED_MODULE_9__["AutocompletesearchComponent"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__["DatepickerComponent"],
                _multiselectdropdown_multiselectdropdown_component__WEBPACK_IMPORTED_MODULE_11__["MultiselectdropdownComponent"],
                _accordian_accordian_component__WEBPACK_IMPORTED_MODULE_12__["AccordianComponent"],
                _dynamictable_dynamictable_component__WEBPACK_IMPORTED_MODULE_13__["DynamictableComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_dynamic_autocomplete_searchfield__WEBPACK_IMPORTED_MODULE_5__["AutocompleteSearchModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                ng_creating_dynamic_table__WEBPACK_IMPORTED_MODULE_6__["DynamicTableModule"],
                angular_multi_single_dropdown__WEBPACK_IMPORTED_MODULE_2__["multiSingleDropDownModule"],
                ng_dynamic_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"],
                ng6_datepickers__WEBPACK_IMPORTED_MODULE_4__["DatepickersModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autocompletesearch_autocompletesearch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocompletesearch/autocompletesearch.component */ "./src/app/autocompletesearch/autocompletesearch.component.ts");
/* harmony import */ var _accordian_accordian_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordian/accordian.component */ "./src/app/accordian/accordian.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/datepicker/datepicker.component.ts");
/* harmony import */ var _multiselectdropdown_multiselectdropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multiselectdropdown/multiselectdropdown.component */ "./src/app/multiselectdropdown/multiselectdropdown.component.ts");
/* harmony import */ var _dynamictable_dynamictable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamictable/dynamictable.component */ "./src/app/dynamictable/dynamictable.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/accordion', pathMatch: 'full' },
    { path: 'autocompletesearch', component: _autocompletesearch_autocompletesearch_component__WEBPACK_IMPORTED_MODULE_2__["AutocompletesearchComponent"] },
    { path: 'accordion', component: _accordian_accordian_component__WEBPACK_IMPORTED_MODULE_3__["AccordianComponent"] },
    { path: 'datepicker', component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__["DatepickerComponent"] },
    { path: 'table', component: _dynamictable_dynamictable_component__WEBPACK_IMPORTED_MODULE_6__["DynamictableComponent"] },
    { path: 'multi-single-selectdropdown', component: _multiselectdropdown_multiselectdropdown_component__WEBPACK_IMPORTED_MODULE_5__["MultiselectdropdownComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/autocompletesearch/autocompletesearch.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/autocompletesearch/autocompletesearch.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    text-align: left;\r\n    display: block;\r\n    background-color: #eee;\r\n    font-weight: 500;\r\n    padding-left: 8px;\r\n}li {\r\n\r\n    margin: 7px\r\n}"

/***/ }),

/***/ "./src/app/autocompletesearch/autocompletesearch.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/autocompletesearch/autocompletesearch.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <span> Auto-complete search by one key</span><br>\n      <ng-dynamic-autocompleteField [options]=dataByFirstNameDisplayByLastName (changeEvent)=\"receiveRowValue($event)\">\n      </ng-dynamic-autocompleteField>\n    </li>\n     <li class=\"list-group-item\">\n         \n      <span>  Auto-complete search by all keys</span><br>\n      <ng-dynamic-autocompleteField [options]=dataByAllFieldAndSearchByallField (changeEvent)=\"receiveRowValue($event)\">\n      </ng-dynamic-autocompleteField>\n\n    </li>\n    <li class=\"list-group-item\">\n        <span> Auto-complete search with default highlight color</span><br>\n      <!-- <span>Search with default highlight color</span><br> -->\n      <ng-dynamic-autocompleteField [options]=dataWithDefaultHighlightColor (changeEvent)=\"receiveRowValue($event)\">\n      </ng-dynamic-autocompleteField>\n    </li>\n    <li class=\"list-group-item\">\n      <span>Auto-complete search with given highlight color</span><br>\n      <ng-dynamic-autocompleteField [options]=options (changeEvent)=\"receiveRowValue($event)\">\n      </ng-dynamic-autocompleteField>\n    </li> \n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/autocompletesearch/autocompletesearch.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/autocompletesearch/autocompletesearch.component.ts ***!
  \********************************************************************/
/*! exports provided: AutocompletesearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompletesearchComponent", function() { return AutocompletesearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutocompletesearchComponent = /** @class */ (function () {
    function AutocompletesearchComponent(_eref) {
        this._eref = _eref;
        this.data = [
            { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
            { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
            { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
            { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
            { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
            { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
            { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
        ];
        this.searchData = {
            'searchBy': ['FirstName', 'LastName'],
            'displayBy': ['FirstName', 'LastName'],
            'placeHolder': 'Firstname LastName',
            'noRecord': 'no record found',
            'highlightColour': 'green',
            'ishighlight': true // this is for you want highlight or not
        };
        this.options = {
            searchData: this.searchData,
            data: this.data // this is the data of the field
        };
        this.searchByNameDisplayByName = {
            'searchBy': ['FirstName'],
            'displayBy': ['FirstName'],
            'placeHolder': '',
            'noRecord': '',
            'highlightColour': '',
            'ishighlight': false // this is for you want highlight or not
        };
        this.dataByFirstNameDisplayByLastName = {
            searchData: this.searchByNameDisplayByName,
            data: this.data // this is the data of the field
        };
        this.searchByAllFieldAndDisplayAllField = {
            'searchBy': ['FirstName', 'LastName', 'Id'],
            'displayBy': ['FirstName', 'LastName', 'Id'],
            'placeHolder': 'FirstName LastName',
            'noRecord': 'No record found',
            'highlightColour': '',
            'ishighlight': false // this is for you want highlight or not
        };
        this.dataByAllFieldAndSearchByallField = {
            searchData: this.searchByAllFieldAndDisplayAllField,
            data: this.data // this is the data of the field
        };
        this.searchByAllFieldAndDisplayAllField = {
            'searchBy': ['FirstName', 'LastName', 'Id'],
            'displayBy': ['FirstName', 'LastName', 'Id'],
            'placeHolder': 'FirstName LastName',
            'noRecord': 'no record found',
            'highlightColour': '',
            'ishighlight': false // this is for you want highlight or not
        };
        this.displayWithDefaultHighLightColor = {
            'searchBy': ['FirstName', 'LastName', 'Id'],
            'displayBy': ['FirstName', 'LastName', 'Id'],
            'placeHolder': 'FirstName LastName',
            'noRecord': '',
            'highlightColour': '',
            'ishighlight': true // this is for you want highlight or not
        };
        this.dataWithDefaultHighlightColor = {
            searchData: this.displayWithDefaultHighLightColor,
            data: this.data // this is the data of the field
        };
    }
    AutocompletesearchComponent.prototype.onClick = function (event) {
        if (!this._eref.nativeElement.contains(event.target)) {
        }
    };
    AutocompletesearchComponent.prototype.receiveRowValue = function (event) {
        console.log(event);
    };
    AutocompletesearchComponent.prototype.ngOnInit = function () {
    };
    AutocompletesearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autocompletesearch',
            template: __webpack_require__(/*! ./autocompletesearch.component.html */ "./src/app/autocompletesearch/autocompletesearch.component.html"),
            styles: [__webpack_require__(/*! ./autocompletesearch.component.css */ "./src/app/autocompletesearch/autocompletesearch.component.css")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '(document:click)': 'onClick($event)',
            },
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AutocompletesearchComponent);
    return AutocompletesearchComponent;
}());



/***/ }),

/***/ "./src/app/datepicker/datepicker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    text-align: left;\r\n    display: block;\r\n    background-color: #eee;\r\n    font-weight: 500;\r\n    padding-left: 8px;\r\n}\r\nli {\r\n\r\n    margin: 7px\r\n}"

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.html":
/*!******************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <span>\n        <h5>Datepicker </h5>\n        <p>- Format (mm dd, yy) </p>\n        <p>- First day (sun)</p>\n        <p>- Min (Before 6 month) and Max (After one month) date</p>\n      </span><br>\n      <input type=\"text\" [option]=datePickerWithMmDdFormat (eventDate)=\"receiveDate($event)\" appMydatepicker>\n    </li>\n    <li class=\"list-group-item\">\n      <span>\n        <h5>Datepicker </h5>\n        <p>- Format (dd mm, yy) </p>\n        <p>- First day (mon)</p>\n        <p>- Min (today) and Max (After 5 month) date</p>\n        <p>- Button panel</p>\n      </span><br>\n      <input type=\"text\" [option]=datePickerWithDdMmFormat (eventDate)=\"receiveDate($event)\" appMydatepicker>\n    </li>\n    <li class=\"list-group-item\">\n      <span>\n        <h5>Datepicker </h5>\n        <p>- Weak</p>\n        <p>- Month, year dropdown</p>\n        <p>- Year range</p>\n        <p>- Hide prev, next </p>\n        <p>- Skip two month </p>\n      </span><br>\n      <input type=\"text\" [option]=datePickerWithWeak (eventDate)=\"receiveDate($event)\" appMydatepicker>\n    </li>\n    <li class=\"list-group-item\">\n      <span>\n        <h5>Datepicker</h5>\n        <p>- Animation fast, fadeIn</p>\n        <p>- Show next or prev as later or earlier</p>\n      </span><br>\n      <input type=\"text\" [option]=datePickerWithanimation (eventDate)=\"receiveDate($event)\" appMydatepicker>\n    </li>\n    <li class=\"list-group-item\">\n      <span>\n        <h5>Datepicker </h5>\n        <p>- Display next month date</p>\n        <p>- Select next month date</p>\n        <p>- Show month before year</p>\n        <p>- Show text on title bar </p>\n      </span><br>\n\n      <input type=\"text\" [option]=selectAndShowOtherMonthDate (eventDate)=\"receiveDate($event)\" appMydatepicker>\n    </li>\n    <li class=\"list-group-item\">\n      <span>\n        <h5>Datepicker </h5>\n        <p>- Icon</p>\n        <p>- Image on icon</p>\n      </span><br>\n      <input type=\"text\" [option]=datePickerWithIconAndImage (eventDate)=\"receiveDate($event)\" appMydatepicker>\n    </li>\n    <li class=\"list-group-item\">\n      <span>\n        <h5>Datepicker </h5>\n        <p>- Text on icon</p>\n        <p>- Show more than one month</p>\n        <p>- Position of current month</p>\n      </span><br>\n      <input type=\"text\" [option]=numberOfMonthDisplayButtonIconText (eventDate)=\"receiveDate($event)\" appMydatepicker>\n    </li>\n    <li class=\"list-group-item\">\n      <span>\n        <h5>Datepicker </h5>\n        <p>- Show RTL format</p>\n      </span><br>\n      <input type=\"text\" [option]=options (eventDate)=\"receiveDate($event)\" appMydatepicker>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.ts ***!
  \****************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        this.options = {
            dateFormat: 'dd MM, yy',
            firstCalendarDay: 1,
            minimumDate: new Date(),
            maximumDate: '+1y +1w',
            showButtonPanel: true,
            closeButtonText: 'Close',
            dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            // tslint:disable-next-line:max-line-length
            monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            showWeek: true,
            weekHeaderName: 'W',
            MonthsSkip: 2,
            yearsRange: '2017:2020',
            appendText: '(dd-mm-yyyy)',
            monthDropDown: false,
            yearDropDown: false,
            animationDuration: 'fast',
            showAnimation: 'fadeIn',
            hideIfNoPrevNext: true,
            isRTL: true,
            nextIconText: 'Later',
            prevIconText: 'Earlier',
            numberOfMonthsDisplay: [2, 2],
            showCurrentMonthAtPos: 1,
            selectOtherMonthsDate: true,
            showOtherMonthsDate: true,
            showBarMonthAfterYear: false,
            yearSuffix: '',
            showOn: 'both',
            buttonImageOnly: true,
            buttonIconImage: 'assets/calendar1.gif',
            buttonIconText: 'Calendar' // set tooltip for icon of datepicker.
        };
        this.datePickerWithMmDdFormat = {
            dateFormat: 'MM dd, yy',
            firstCalendarDay: 0,
            minimumDate: '-6m',
            maximumDate: '+1m',
            showButtonPanel: false,
            closeButtonText: 'Close',
            dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            // tslint:disable-next-line:max-line-length
            monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            showWeek: false,
            weekHeaderName: 'W',
            MonthsSkip: 1,
            // yearsRange: '2016:2018', // set range of years in-between.
            appendText: '(mm-dd-yyyy)',
            monthDropDown: false,
            yearDropDown: false,
            animationDuration: 'medium',
            showAnimation: 'slideDown',
            hideIfNoPrevNext: false,
            isRTL: false,
            // nextIconText: 'Later', // set tooltip for nextbutton icon. default set is next.
            // prevIconText: 'Earlier', set tooltip for prevbutton icon. default set is prev.
            // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
            // showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
            selectOtherMonthsDate: false,
            showOtherMonthsDate: false,
            showBarMonthAfterYear: true,
            yearSuffix: '',
        };
        this.datePickerWithDdMmFormat = {
            dateFormat: 'dd MM, yy',
            firstCalendarDay: 1,
            minimumDate: new Date(2017, 1, 1),
            maximumDate: '+5m',
            showButtonPanel: true,
            closeButtonText: 'Close',
            dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            // tslint:disable-next-line:max-line-length
            monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            showWeek: false,
            weekHeaderName: 'W',
            MonthsSkip: 1,
            // yearsRange: '2016:2018', // set range of years in-between.
            appendText: '(dd-mm-yyyy)',
            monthDropDown: false,
            yearDropDown: false,
            animationDuration: 'medium',
            showAnimation: 'slideDown',
            hideIfNoPrevNext: false,
            isRTL: false,
            // nextIconText: 'Later', // set tooltip for nextbutton icon. default set is next.
            // prevIconText: 'Earlier', set tooltip for prevbutton icon. default set is prev.
            // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
            // showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
            selectOtherMonthsDate: false,
            showOtherMonthsDate: false,
            showBarMonthAfterYear: true,
            yearSuffix: '',
        };
        this.datePickerWithWeak = {
            dateFormat: 'dd MM, yy',
            firstCalendarDay: 1,
            minimumDate: new Date(),
            maximumDate: '+1y +1w',
            showButtonPanel: true,
            closeButtonText: 'Close',
            dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            // tslint:disable-next-line:max-line-length
            monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            showWeek: true,
            weekHeaderName: 'W',
            MonthsSkip: 2,
            yearsRange: '2017:2020',
            appendText: '(dd-mm-yyyy)',
            monthDropDown: true,
            yearDropDown: true,
            animationDuration: 'medium',
            showAnimation: 'slideDown',
            hideIfNoPrevNext: true,
            isRTL: false,
            // nextIconText: 'Later', // set tooltip for nextbutton icon. default set is next.
            // prevIconText: 'Earlier', set tooltip for prevbutton icon. default set is prev.
            // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
            // showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
            selectOtherMonthsDate: false,
            showOtherMonthsDate: false,
            showBarMonthAfterYear: true,
            yearSuffix: '',
        };
        this.datePickerWithanimation = {
            dateFormat: 'dd MM, yy',
            firstCalendarDay: 1,
            minimumDate: new Date(),
            maximumDate: '+1y +1w',
            showButtonPanel: true,
            closeButtonText: 'Close',
            dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            // tslint:disable-next-line:max-line-length
            monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            showWeek: true,
            weekHeaderName: 'W',
            MonthsSkip: 2,
            yearsRange: '2017:2020',
            appendText: '(dd-mm-yyyy)',
            monthDropDown: true,
            yearDropDown: true,
            animationDuration: 'fast',
            showAnimation: 'fadeIn',
            hideIfNoPrevNext: true,
            isRTL: false,
            nextIconText: 'Later',
            prevIconText: 'Earlier',
            // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
            // showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
            selectOtherMonthsDate: false,
            showOtherMonthsDate: false,
            showBarMonthAfterYear: true,
            yearSuffix: '',
        };
        this.selectAndShowOtherMonthDate = {
            dateFormat: 'dd MM, yy',
            firstCalendarDay: 1,
            minimumDate: new Date(2017, 1, 1),
            maximumDate: '++1y +1w',
            showButtonPanel: true,
            closeButtonText: 'Close',
            dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            // tslint:disable-next-line:max-line-length
            monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            showWeek: true,
            weekHeaderName: 'W',
            MonthsSkip: 2,
            yearsRange: '2017:2020',
            appendText: '(dd-mm-yyyy)',
            monthDropDown: true,
            yearDropDown: true,
            animationDuration: 'fast',
            showAnimation: 'fadeIn',
            hideIfNoPrevNext: true,
            isRTL: false,
            nextIconText: 'Later',
            prevIconText: 'Earlier',
            // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
            // showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
            selectOtherMonthsDate: true,
            showOtherMonthsDate: true,
            showBarMonthAfterYear: false,
            yearSuffix: 'choose date',
        };
        this.datePickerWithIconAndImage = {
            dateFormat: 'dd MM, yy',
            firstCalendarDay: 1,
            minimumDate: new Date(2017, 1, 1),
            maximumDate: '++1y +1w',
            showButtonPanel: true,
            closeButtonText: 'Close',
            dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            // tslint:disable-next-line:max-line-length
            monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            showWeek: true,
            weekHeaderName: 'W',
            MonthsSkip: 2,
            yearsRange: '2017:2020',
            appendText: '(dd-mm-yyyy)',
            monthDropDown: true,
            yearDropDown: true,
            animationDuration: 'fast',
            showAnimation: 'fadeIn',
            hideIfNoPrevNext: true,
            isRTL: false,
            nextIconText: 'Later',
            prevIconText: 'Earlier',
            // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
            // showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
            selectOtherMonthsDate: true,
            showOtherMonthsDate: true,
            showBarMonthAfterYear: false,
            yearSuffix: 'choose date',
            showOn: 'both',
            buttonImageOnly: true,
            buttonIconImage: 'assets/calendar1.gif',
        };
        this.numberOfMonthDisplayButtonIconText = {
            dateFormat: 'dd MM, yy',
            firstCalendarDay: 1,
            minimumDate: new Date(),
            maximumDate: '+1y +1w',
            showButtonPanel: true,
            closeButtonText: 'Close',
            dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            // tslint:disable-next-line:max-line-length
            monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            showWeek: true,
            weekHeaderName: 'W',
            MonthsSkip: 2,
            yearsRange: '2017:2020',
            appendText: '(dd-mm-yyyy)',
            monthDropDown: false,
            yearDropDown: false,
            animationDuration: 'fast',
            showAnimation: 'fadeIn',
            hideIfNoPrevNext: true,
            isRTL: false,
            nextIconText: 'Later',
            prevIconText: 'Earlier',
            numberOfMonthsDisplay: [2, 2],
            showCurrentMonthAtPos: 1,
            selectOtherMonthsDate: true,
            showOtherMonthsDate: true,
            showBarMonthAfterYear: false,
            yearSuffix: '',
            showOn: 'both',
            buttonImageOnly: true,
            buttonIconImage: 'assets/calendar1.gif',
            buttonIconText: 'Calendar' // set tooltip for icon of datepicker.
        };
    };
    DatepickerComponent.prototype.receiveDate = function (selectedDate) {
        console.log(selectedDate); // selected date
    };
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/datepicker/datepicker.component.html"),
            styles: [__webpack_require__(/*! ./datepicker.component.css */ "./src/app/datepicker/datepicker.component.css")]
        })
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/dynamictable/dynamictable.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dynamictable/dynamictable.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    text-align: left;\r\n    display: block;\r\n    background-color: #eee;\r\n    font-weight: 500;\r\n    padding-left: 8px;\r\n}li {\r\n\r\n    margin: 7px\r\n}"

/***/ }),

/***/ "./src/app/dynamictable/dynamictable.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dynamictable/dynamictable.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <span> Default table</span><br>\n      <ng-dynamic-Table [options]=table (changeEvent)=\"receiveRowValue($event)\"></ng-dynamic-Table>\n    </li>\n    <li class=\"list-group-item\">\n      <span> Table with footer</span><br>\n      <ng-dynamic-Table [options]=tableWithFooter (changeEvent)=\"receiveRowValue($event)\"></ng-dynamic-Table>\n    </li>\n    <li class=\"list-group-item\">\n        <span>\n            <h5>Table</h5>\n            <p>- Default sorting</p>\n            <p>- Sort by multiple keys</p>\n          </span><br>\n      <!-- <span> Table with default sorting and sort by multiple columns name</span><br> -->\n      <ng-dynamic-Table [options]=tableWithSoorting (changeEvent)=\"receiveRowValue($event)\"></ng-dynamic-Table>\n    </li>\n    <li class=\"list-group-item\">\n        <span>\n            <h5>Table</h5>\n            <p>- Search by one key</p>\n            <p>- Default placeholder</p>\n            <p>- Default message(No Data Found)</p>\n          </span><br>\n      <!-- <span> Table with search and search by firstname with default placeholder ,default message if the record not\n        found</span><br> -->\n      <ng-dynamic-Table [options]=tableWithSearching (changeEvent)=\"receiveRowValue($event)\"></ng-dynamic-Table>\n    </li>\n    <li class=\"list-group-item\">\n        <span>\n            <h5>Table</h5>\n            <p>- Search all keys</p>\n            <p>- Given placeholder</p>\n            <p>- Set message(No Record Found)</p>\n          </span><br>\n      <!-- <span> Table with search and search more than one field with given placeholder, given message if the record not\n        found</span><br> -->\n\n      <ng-dynamic-Table [options]=tableWithSearchingbyMultipleName (changeEvent)=\"receiveRowValue($event)\"></ng-dynamic-Table>\n    </li>\n    <li class=\"list-group-item\">\n      <span>\n        Table with pagination\n\n      </span><br>\n      <ng-dynamic-Table [options]=options (changeEvent)=\"receiveRowValue($event)\"></ng-dynamic-Table>\n    </li>\n\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/dynamictable/dynamictable.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dynamictable/dynamictable.component.ts ***!
  \********************************************************/
/*! exports provided: DynamictableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamictableComponent", function() { return DynamictableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamictableComponent = /** @class */ (function () {
    function DynamictableComponent() {
        this.tableData = [
            { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
            { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
            { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
            { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
            { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
            { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
            { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
            { Id: 64, FirstName: 'Jenette', LastName: 'Kelly' },
        ];
        this.pagination = {
            isPagination: true,
            showEntries: [3, 4],
        };
        this.searchData = {
            'isSearching': true,
            'searchBy': ['FirstName', 'LastName'],
            'searchTitle': ' FirstName lastName Id',
            'noRecord': 'No record found' // this is for the msg if records does not found
        };
        this.headerData = [
            {
                'columnName': 'FirstName',
                'sortBy': 'FirstName',
                'isSorting': true,
                'keyName': 'FirstName',
                'defaultSorting': 'FirstName' // this is for default sorting
            },
            {
                'columnName': 'LastName',
                'sortBy': 'LastName',
                'isSorting': true,
                'keyName': 'LastName',
            },
            {
                'columnName': 'Id',
                'sortBy': 'Id',
                'isSorting': true,
                'keyName': 'Id',
            },
        ];
        this.options = {
            headerData: this.headerData,
            tableData: this.tableData,
            footerData: true,
            searchData: this.searchData,
            pagination: this.pagination // this is for the pagination
        };
        this.dataForOnlyTable = [
            { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
            { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
            { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
            { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
            { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
            { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
            { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
            { Id: 64, FirstName: 'Jenette', LastName: 'Kelly' },
        ];
        this.tableSearchData = {
            'isSearching': false,
            'searchBy': ['FirstName', 'LastName'],
            'searchTitle': 'search by  name or lastName',
            'noRecord': 'No record found' // this is for the msg if records does not found
        };
        this.tableHeaderData = [
            {
                'columnName': 'FirstName',
                'sortBy': 'FirstName',
                'isSorting': false,
                'keyName': 'FirstName',
                'defaultSorting': 'FirstName' // this is for default sorting
            },
            {
                'columnName': 'LastName',
                'sortBy': 'LastName',
                'isSorting': false,
                'keyName': 'LastName',
            },
            {
                'columnName': 'Id',
                'sortBy': 'Id',
                'isSorting': false,
                'keyName': 'Id',
            },
        ];
        this.tablePagination = {
            isPagination: false,
            showEntries: [3, 4],
        };
        this.table = {
            headerData: this.tableHeaderData,
            tableData: this.dataForOnlyTable,
            footerData: false,
            searchData: this.tableSearchData,
            pagination: this.tablePagination // this is for the pagination
        };
        // table with footer
        this.dataForOnlyTableWithFooter = [
            { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
            { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
            { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
            { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
            { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
            { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
            { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
            { Id: 64, FirstName: 'Jenette', LastName: 'Kelly' },
        ];
        this.tableWithFooter = {
            headerData: this.tableHeaderData,
            tableData: this.dataForOnlyTableWithFooter,
            footerData: true,
            searchData: this.tableSearchData,
            pagination: this.tablePagination // this is for the pagination
        };
        // table with soorting
        this.tableDataForSorting = [
            { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
            { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
            { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
            { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
            { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
            { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
            { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
            { Id: 64, FirstName: 'Jenette', LastName: 'Kelly' },
        ];
        this.tableWithDefaultSortingandAndSortbySomeFields = [
            {
                'columnName': 'FirstName',
                'sortBy': 'FirstName',
                'isSorting': true,
                'keyName': 'FirstName',
                'defaultSorting': 'FirstName' // this is for default sorting
            },
            {
                'columnName': 'LastName',
                'sortBy': 'LastName',
                'isSorting': true,
                'keyName': 'LastName',
            },
            {
                'columnName': 'Id',
                'sortBy': 'Id',
                'isSorting': true,
                'keyName': 'Id',
            },
        ];
        this.tableWithSoorting = {
            headerData: this.tableWithDefaultSortingandAndSortbySomeFields,
            tableData: this.tableDataForSorting,
            footerData: true,
            searchData: this.tableSearchData,
            pagination: this.tablePagination // this is for the pagination
        };
        // this is for the search
        this.tableDataForSearch = [
            { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
            { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
            { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
            { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
            { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
            { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
            { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
            { Id: 64, FirstName: 'Jenette', LastName: 'Kelly' },
        ];
        this.tablesearchData = {
            'isSearching': true,
            'searchBy': ['FirstName'],
            'searchTitle': '',
            'noRecord': '' // this is for the msg if records does not found
        };
        this.tableWithSearching = {
            headerData: this.tableWithDefaultSortingandAndSortbySomeFields,
            tableData: this.tableDataForSearch,
            footerData: true,
            searchData: this.tablesearchData,
            pagination: this.tablePagination // this is for the pagination
        };
        // table data ssearch by multiole column name
        this.tableDataSearchByMultipleField = [
            { Id: 4, FirstName: 'Narco', LastName: 'Ramos' },
            { Id: 2, FirstName: 'Bombasto', LastName: 'Cox' },
            { Id: 34, FirstName: 'Celeritas', LastName: 'Williamson' },
            { Id: 44, FirstName: 'Magneta', LastName: 'Nash' },
            { Id: 5, FirstName: 'RubberMan', LastName: 'Vance' },
            { Id: 6, FirstName: 'Dynama', LastName: 'Stevens' },
            { Id: 7, FirstName: 'Dr IQ', LastName: 'Bradshaw' },
            { Id: 64, FirstName: 'Jenette', LastName: 'Kelly' },
        ];
        this.tablesearchDataBymultipleName = {
            'isSearching': true,
            'searchBy': ['FirstName', 'LastName', 'Id'],
            'searchTitle': 'FirstName LastName Id',
            'noRecord': 'No Record Found' // this is for the msg if records does not found
        };
        this.tableWithSearchingbyMultipleName = {
            headerData: this.tableWithDefaultSortingandAndSortbySomeFields,
            tableData: this.tableDataSearchByMultipleField,
            footerData: true,
            searchData: this.tablesearchDataBymultipleName,
            pagination: this.tablePagination // this is for the pagination
        };
    }
    // this is for the to get the value of the row of table
    DynamictableComponent.prototype.receiveRowValue = function (event) {
        console.log(event);
    };
    DynamictableComponent.prototype.ngOnInit = function () {
    };
    DynamictableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamictable',
            template: __webpack_require__(/*! ./dynamictable.component.html */ "./src/app/dynamictable/dynamictable.component.html"),
            styles: [__webpack_require__(/*! ./dynamictable.component.css */ "./src/app/dynamictable/dynamictable.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamictableComponent);
    return DynamictableComponent;
}());



/***/ }),

/***/ "./src/app/multiselectdropdown/multiselectdropdown.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/multiselectdropdown/multiselectdropdown.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    text-align: left;\r\n    display: block;\r\n    background-color: #eee;\r\n    font-weight: 500;\r\n    padding-left: 8px;\r\n}\r\nli {\r\n\r\n    margin: 7px\r\n}"

/***/ }),

/***/ "./src/app/multiselectdropdown/multiselectdropdown.component.html":
/*!************************************************************************!*\
  !*** ./src/app/multiselectdropdown/multiselectdropdown.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"list-group\">\n\n\n    <li class=\"list-group-item\">\n      <Span> Multiselect with default button name</Span><br>\n      <ng-multi-select-dropdown [option]= simpleMultiSelect (messageEvent)='onItemSelect($event)'>\n      </ng-multi-select-dropdown>\n    </li>\n    <li class=\"list-group-item\">\n      <span>\n        <h5> Multiselect </h5>\n        <p>- Search </p>\n        <p>- Select or unselect all</p>\n        <p>- Given placeholder</p>\n\n       \n      </span><br>\n    \n      <ng-multi-select-dropdown [option]= MultiSelectFilter (messageEvent)='onItemSelect($event)'>\n      </ng-multi-select-dropdown>\n    </li>\n    <li class=\"list-group-item\">\n        <span>\n            <h5> Multiselect </h5>\n            <p>- Single select </p>\n          </span><br>\n     \n      <ng-multi-select-dropdown [option]= multiselectAsSingleSelect (messageEvent)='onItemSelect($event)'>\n      </ng-multi-select-dropdown>\n    </li>\n    <li class=\"list-group-item\">\n      <span>\n        Multiselect with show items in the list\n      </span><br>\n      <ng-multi-select-dropdown [option]= options (messageEvent)='onItemSelect($event)'>\n      </ng-multi-select-dropdown>\n    </li>\n\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/multiselectdropdown/multiselectdropdown.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/multiselectdropdown/multiselectdropdown.component.ts ***!
  \**********************************************************************/
/*! exports provided: MultiselectdropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectdropdownComponent", function() { return MultiselectdropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MultiselectdropdownComponent = /** @class */ (function () {
    function MultiselectdropdownComponent() {
        this.userArray = [];
        this.selectedItems = [];
    }
    MultiselectdropdownComponent.prototype.ngOnInit = function () {
        this.userArray = [
            { name: 'Ashton', id: 1 },
            { name: 'Bradley ', id: 2 },
            { name: 'Bruno ', id: 3 },
            { name: 'Cara ', id: 4 },
            { name: 'Cedric ', id: 5 },
            { name: 'ngelica ', id: 6 },
            { name: 'Brielle ', id: 7 }
        ]; // in array, Id is optional
        this.options = {
            allowSearchFilter: true,
            isSelect: true,
            isMultiSelectOrSingleSelect: true,
            textKey: 'name',
            valueKey: 'name',
            array: this.userArray,
            itemsShowLimit: 5,
            addCssClass: '',
            texts: {
                selectPlaceHolder: 'Select Items',
                closeButtonName: '',
                selectAllButtonName: 'Select All',
                unSelectAllButtonName: 'UnSelect All',
                searchPlaceHolder: 'Search items' // user can change or edit search placehoder
            },
            disableDropdown: false // disable dropdown
        };
        // this is for the simple multiselect
        this.arrayForSimpleMultiSelect = [{ name: 'santosh', id: 1 },
            { name: 'Ashton', id: 1 },
            { name: 'Bradley ', id: 2 },
            { name: 'Bruno ', id: 3 },
            { name: 'Cara ', id: 4 },
            { name: 'Cedric ', id: 5 },
            { name: 'ngelica ', id: 6 },
            { name: 'Brielle ', id: 7 }
        ];
        this.simpleMultiSelect = {
            allowSearchFilter: false,
            isSelect: false,
            isMultiSelectOrSingleSelect: true,
            textKey: 'name',
            valueKey: 'name',
            array: this.arrayForSimpleMultiSelect,
            // itemsShowLimit: 3,  // option if user want to show minimum 3 selected data in drop-down button
            addCssClass: '',
            texts: {
                selectPlaceHolder: '',
                closeButtonName: '',
                selectAllButtonName: 'Select All',
                unSelectAllButtonName: 'UnSelect All',
                searchPlaceHolder: 'Search items' // user can change or edit search placehoder
            },
            disableDropdown: false // disable dropdown
        };
        //  this is the multiselect with filter
        this.arrayForMultiSelectWithFilter = [
            { name: 'Ashton', id: 1 },
            { name: 'Bradley ', id: 2 },
            { name: 'Bruno ', id: 3 },
            { name: 'Cara ', id: 4 },
            { name: 'Cedric ', id: 5 },
            { name: 'ngelica ', id: 6 },
            { name: 'Brielle ', id: 7 }
        ];
        this.MultiSelectFilter = {
            allowSearchFilter: true,
            isSelect: true,
            isMultiSelectOrSingleSelect: true,
            textKey: 'name',
            valueKey: 'name',
            array: this.arrayForMultiSelectWithFilter,
            // itemsShowLimit: 3,  // option if user want to show minimum 3 selected data in drop-down button
            addCssClass: '',
            texts: {
                selectPlaceHolder: 'Select Items',
                closeButtonName: '',
                selectAllButtonName: 'Select All',
                unSelectAllButtonName: 'UnSelect All',
                searchPlaceHolder: 'Search items' // user can change or edit search placehoder
            },
            disableDropdown: false // disable dropdown
        };
        //   multiselect as a single select
        this.arrayForSingleSelect = [
            { name: 'Ashton', id: 1 },
            { name: 'Bradley ', id: 2 },
            { name: 'Bruno ', id: 3 },
            { name: 'Cara ', id: 4 },
            { name: 'Cedric ', id: 5 },
            { name: 'ngelica ', id: 6 },
            { name: 'Brielle ', id: 7 }
        ];
        this.multiselectAsSingleSelect = {
            allowSearchFilter: true,
            isSelect: true,
            isMultiSelectOrSingleSelect: false,
            textKey: 'name',
            valueKey: 'name',
            array: this.arrayForSingleSelect,
            // itemsShowLimit: 3,  // option if user want to show minimum 3 selected data in drop-down button
            addCssClass: '',
            texts: {
                selectPlaceHolder: 'Select Items',
                closeButtonName: '',
                selectAllButtonName: 'Select All',
                unSelectAllButtonName: 'UnSelect All',
                searchPlaceHolder: 'Search items' // user can change or edit search placehoder
            },
            disableDropdown: false // disable dropdown
        };
    };
    MultiselectdropdownComponent.prototype.onItemSelect = function (event) {
        this.selectedItems = event; // getArrayData is your selected checkbox data array
        console.log(this.selectedItems);
    };
    MultiselectdropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiselectdropdown',
            template: __webpack_require__(/*! ./multiselectdropdown.component.html */ "./src/app/multiselectdropdown/multiselectdropdown.component.html"),
            styles: [__webpack_require__(/*! ./multiselectdropdown.component.css */ "./src/app/multiselectdropdown/multiselectdropdown.component.css")]
        })
    ], MultiselectdropdownComponent);
    return MultiselectdropdownComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\demoLibrary\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map