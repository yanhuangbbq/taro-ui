(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"118":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0},o=_interopRequireDefault(n(1)),l=_interopRequireDefault(n(4)),i=n(131),u=n(138),c=_interopRequireDefault(n(133));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(528);var s=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"number1":1,"number2":1,"number3":1,"number4":1,"number5":1,"number6":1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,l.default.Component),a(Index,[{"key":"handleNumberChange","value":function handleNumberChange(e,t,n){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t)),console.log("Event:",n)}},{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"page"},o.default.createElement(c.default,{"title":"Input Number 数字输入框"}),o.default.createElement(i.View,{"className":"doc-body"},o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"基础用法"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(i.View,{"className":"example-item__desc"},"min=0, max=10, step=1"),o.default.createElement(u.AtInputNumber,{"min":0,"max":10,"step":1,"value":this.state.number1,"onChange":this.handleNumberChange.bind(this,"number1")})))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"小数"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(i.View,{"className":"example-item__desc"},"min=0, max=10, step=0.1"),o.default.createElement(u.AtInputNumber,{"type":"digit","min":0,"max":10,"step":.1,"value":this.state.number2,"onChange":this.handleNumberChange.bind(this,"number2")})))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"禁用状态"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(u.AtInputNumber,{"disabled":!0,"min":0,"max":10,"step":1,"value":this.state.number3,"onChange":this.handleNumberChange.bind(this,"number3")})))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"禁用输入状态"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(u.AtInputNumber,{"disabledInput":!0,"min":0,"max":10,"step":1,"value":this.state.number6,"onChange":this.handleNumberChange.bind(this,"number6")})))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"自定义宽度"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(u.AtInputNumber,{"width":200,"min":0,"max":10,"step":1,"value":this.state.number4,"onChange":this.handleNumberChange.bind(this,"number4")})))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"大尺寸"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(u.AtInputNumber,{"size":"large","min":0,"max":10,"step":1,"value":this.state.number5,"onChange":this.handleNumberChange.bind(this,"number5")}))))))}},{"key":"componentDidMount","value":function componentDidMount(){r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this)&&r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}();t.default=s},"133":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(4)),l=_interopRequireDefault(n(132)),i=n(131);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(134);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,o.default.Component),a(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(i.View,{"className":"doc-header"},r.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":l.default.string}},"134":function(e,t,n){},"528":function(e,t,n){}}]);