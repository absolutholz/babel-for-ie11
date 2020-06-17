const summaryPageCoupon = function (elCouponBlock) {
    let collapsible;
    const elForm = elCouponBlock.querySelector('#couponForm');
    const elUnallowedMessage = elCouponBlock.querySelector('#couponInformationText_PaymentMethod');
    const nlPaymentTypeRadios = document.querySelectorAll('[name="radio_paymenttype"]');

    function init() {
        collapsible = Collapsible(elForm);
        bindEvents();
        adjustForPaymentMethod();
    }

    function bindEvents() {
        [...nlPaymentTypeRadios].forEach((elPaymentTypeRadio) => {
            elPaymentTypeRadio.addEventListener('change', (event) => {
                adjustForPaymentMethod();
            });
        });
    }

    function adjustForPaymentMethod() {
        const isPaymentByCard = [...nlPaymentTypeRadios].filter((elPaymentTypeRadio) => elPaymentTypeRadio.checked)[0].value === 'CARD';
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

[...document.querySelectorAll('.js-couponPaymentMethodCheck')].forEach(function (element) {
    summaryPageCoupon(element);
});
