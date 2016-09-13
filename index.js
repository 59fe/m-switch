'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("./index.less");
var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_React$Component) {
    _inherits(Switch, _React$Component);

    function Switch(props) {
        _classCallCheck(this, Switch);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Switch).call(this, props));

        _this.state = {
            switchChecked: _this.props.defaultChecked || false
        };
        return _this;
    }

    _createClass(Switch, [{
        key: 'handleTap',
        value: function handleTap(e) {
            e.preventDefault();
            var newChecked = !this.state.switchChecked;
            this.setState({
                switchChecked: newChecked
            });
            this.props.onChange && this.props.onChange.call(this, e, newChecked);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'switch', onClick: this.handleTap.bind(this) },
                _react2.default.createElement('input', _extends({ type: 'checkbox', readOnly: true }, this.props, { checked: this.state.switchChecked })),
                _react2.default.createElement('div', null)
            );
        }
    }]);

    return Switch;
}(_react2.default.Component);

exports.default = Switch;
module.exports = exports['default'];
