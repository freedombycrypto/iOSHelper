'use strict';

var _nodeCmd = require('node-cmd');

var _nodeCmd2 = _interopRequireDefault(_nodeCmd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const iosCommands = {
    runCommand: function (commandStr) {
        return new Promise((resolve, reject) => {
            _nodeCmd2.default.get(commandStr, (err, d, stderror) => {
                if (err || stderror) reject({
                    error: err,
                    message: 'run command error'
                });
                resolve(d);
            });
        });
    },

    getBundleId: async function (appPath) {
        let result = await iosCommands.runCommand(`osascript -e 'id of app "${appPath.trim()}"'`);
        return result;
    },

    getUDID: async function (phoneName, version) {
        try {
            let result = await iosCommands.runCommand(`instruments -s devices | grep "${phoneName.trim()} (${version.trim()})"`);
            let arrResult = result.split('[');
            let final = arrResult[1].split(']');
            console.log(final[0]);
            return final[0];
        } catch (err) {
            console.log("Error Reason: device might not be unavailable, runtime profile not found");
            console.log("Please download simulator and try again...");
        }
    }
};
module.exports = iosCommands;