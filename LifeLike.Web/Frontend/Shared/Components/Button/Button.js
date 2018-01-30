"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var classNames = ['btn'].concat(this.props.extraClassNames).join(' ');
        if (this.props.link) {
            return React.createElement("a", { className: classNames, href: this.props.href }, this.props.children);
        }
        else {
            return React.createElement("button", { className: classNames }, this.props.children);
        }
    };
    return Button;
}(React.Component));
exports["default"] = Button;
