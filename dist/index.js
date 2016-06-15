'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (domNode, provider) {
  var reducer = (0, _redux.combineReducers)((0, _extends3.default)({}, _api2.default.reducers, _shortcuts2.default.reducers, _provider2.default.reducers, _ui2.default.reducers));

  var reduxStore = (0, _redux.createStore)(reducer);

  var context = (0, _context2.default)(reduxStore, domNode, provider);
  var app = (0, _mantraCore.createApp)(context);

  app.loadModule(_api2.default);
  app.loadModule(_shortcuts2.default);
  app.loadModule(_provider2.default);
  app.loadModule(_ui2.default);

  app.init();
};

var _redux = require('redux');

var _mantraCore = require('mantra-core');

var _context = require('./context.js');

var _context2 = _interopRequireDefault(_context);

var _api = require('./modules/api');

var _api2 = _interopRequireDefault(_api);

var _shortcuts = require('./modules/shortcuts');

var _shortcuts2 = _interopRequireDefault(_shortcuts);

var _ui = require('./modules/ui');

var _ui2 = _interopRequireDefault(_ui);

var _provider = require('./modules/provider');

var _provider2 = _interopRequireDefault(_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }