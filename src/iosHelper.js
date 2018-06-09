import cmd from "node-cmd";
import { isNull } from "util";

const iosCommands = {
    runCommand: function (commandStr) {
        return new Promise((resolve, reject) => {
            cmd.get(commandStr, (err, data, stderror) => {
                if (err || stderror) return reject();
                return resolve(data);
            });
        });
    },

    getBundleId: async function (appPath) {
        try {
            const result = await iosCommands.runCommand(`osascript -e 'id of app "${appPath.trim()}"'`);

            return result;
        } catch (error) {
            console.log("Please check your .app file path");

            return null;
        }
    },

    getUDID: async function (phoneName, version) {
        try {
            const result = await iosCommands.runCommand(`instruments -s devices | grep "${phoneName.trim()} (${version.trim()})"`);
            const arrResult = result.split("[");
            const final = arrResult[1].split("]");

            return final[0];
        } catch (error) {
            console.log("Error Reason: device might not be unavailable, runtime profile not found");
            console.log("Please download simulator and try again...");

            return null;
        }
    },
};

module.exports = iosCommands;
