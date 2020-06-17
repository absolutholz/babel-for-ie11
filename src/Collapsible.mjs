const Collapsible = function (elTarget) {
    const elTrigger = document.querySelector(`[aria-controls*="${elTarget.getAttribute('id')}"]`);

    function _init() {
        _setVisualState(_isVisible());
        _bindEvents();
    }

    function _isVisible() {
        return !elTarget.hasAttribute('hidden');
    }

    function disable() {
        elTrigger.setAttribute('disabled', '');
    }

    function enable() {
        elTrigger.removeAttribute('disabled');
    }

    function hide() {
        _setVisualState(false);
    }

    function show() {
        _setVisualState(true);
    }

    function _setVisualState(bVisibility) {
        if (bVisibility) {
            elTarget.removeAttribute('hidden');
        } else {
            elTarget.setAttribute('hidden', '');
        }

        elTrigger.setAttribute('aria-expanded', bVisibility);
    }

    function _bindEvents() {
        elTrigger.addEventListener('click', (event) => {
            _setVisualState(!_isVisible());
            event.preventDefault();
        });
    }

    _init();

    return Object.freeze({
        hide,
        show,
        disable,
        enable
    });
};
