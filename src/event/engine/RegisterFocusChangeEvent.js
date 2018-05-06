export default function RegisterFocusChangeEvent(eventManager) {

    /* The visibilitychange event is fired when the content of a tab has become visible or has been hidden.*/
    let visibilitychange;

    // check if have visibility change
    if (document.hidden !== undefined) {
        visibilitychange = 'visibilitychange';
    } else {
        let vendors = ['webkit', 'moz', 'ms'];

        vendors.forEach(
            function (prefix) {
                if (document[prefix + 'Hidden'] !== undefined) {
                    document.hidden = function () {
                        return document[prefix + 'Hidden'];
                    };

                    visibilitychange = prefix + 'visibilitychange';
                }
            });
    }

    // register event listener
    let onVisibilityChange = function (event) {
        if (document.hidden || event.type === 'pause') {
            eventManager.dispatch('hidden');
        } else {
            eventManager.dispatch('visible');
        }
    };

    if (visibilitychange) {
        document.addEventListener(visibilitychange, onVisibilityChange, false);
    }

    window.onblur = function () {
        eventManager.dispatch('blur');
    };

    window.onfocus = function () {
        eventManager.dispatch('focus');
    };



}