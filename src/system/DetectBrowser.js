
export default function DetectBrowser(userAgent) {

    let browser = {
        name : undefined,
        version : 0,
        manufacturer : {
            firefox : false,
            opera : false,
            ie : false,
            edge : false,
            chrome : false,
            blink : false,
            safari : false,
            silk : false
        }
    }

    /// MAYBE IS BETTER TODO WITH REGEX

    // Opera 8.0+
    browser.manufacturer.opera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    browser.manufacturer.firefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    browser.manufacturer.safari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    browser.manufacturer.ie = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    browser.manufacturer.edge = !browser.manufacturer.edge && !!window.StyleMedia;

    // Chrome 1+
    browser.manufacturer.chrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    browser.manufacturer.blink = (browser.manufacturer.chrome ||  browser.manufacturer.opera) && !!window.CSS;

    /// GET VERSION

    let pattern = /(\w+)(?:\D+|\/)?((\d+)?\.?(\d+)?)?;?/;
    let match = pattern.exec(userAgent);
    let version = 0;

    browser.name = match[0];

    if (match[1] !== undefined)
        version = parseInt(match[1], 10);

    browser.version = version;
    

    return browser;

} 