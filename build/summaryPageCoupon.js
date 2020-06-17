"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var summaryPageCoupon = function summaryPageCoupon(elCouponBlock) {
  var collapsible;
  var elForm = elCouponBlock.querySelector('#couponForm');
  var elUnallowedMessage = elCouponBlock.querySelector('#couponInformationText_PaymentMethod');
  var nlPaymentTypeRadios = document.querySelectorAll('[name="radio_paymenttype"]');

  function init() {
    collapsible = Collapsible(elForm);
    bindEvents();
    adjustForPaymentMethod();
  }

  function bindEvents() {
    _toConsumableArray(nlPaymentTypeRadios).forEach(function (elPaymentTypeRadio) {
      elPaymentTypeRadio.addEventListener('change', function (event) {
        adjustForPaymentMethod();
      });
    });
  }

  function adjustForPaymentMethod() {
    var isPaymentByCard = _toConsumableArray(nlPaymentTypeRadios).filter(function (elPaymentTypeRadio) {
      return elPaymentTypeRadio.checked;
    })[0].value === 'CARD';

    if (isPaymentByCard) {
      elUnallowedMessage.removeAttribute('hidden');
      collapsible.hide();
      collapsible.disable();
    } else {
      elUnallowedMessage.setAttribute('hidden', '');
      collapsible.enable();
    }
  }

  init();
};

_toConsumableArray(document.querySelectorAll('.js-couponPaymentMethodCheck')).forEach(function (element) {
  summaryPageCoupon(element);
});