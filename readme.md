
# iOS Automation Helper

## Prerequisite

1. Install xCode 9.0 or later
2. Download required simulators

## Install

Using npm:
```bash
npm i ios-automation-helper
```

Using Node.js:
```bash
var iosCmd = require('ios-automation-helper');
```

or

```bash
import iosCmd from 'ios-automation-helper';
```

## Usage

1. To get Device UDID
2. A promise based function and resolves to a device udid
```bash
iosCmd.getUDID('iPhone 6s', '11.4').then(result => {
});
```

1. To get App Bundle ID
2. A promise based function which resolve the app bundle id
```bash
ioskdownCmd.getBundleId(<appPath>).then(bundleId => {

});
```

## Notes

1. If you are using .ipa file, pls follow below steps to get BundleId.
    1. Right click and Open with Archive Utility
    2. You can see .app file inside Payload folder.


## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://www.npmjs.com/package/npm
