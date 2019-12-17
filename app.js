const electron = require("electron");

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;


let mainWindow;


function createWindow() {

    mainWindow = new BrowserWindow({
        width: 1200,
        height: 850,
        center: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.getMachineCode = function() {
        const execSync = require('child_process').execSync;
        var platform = process.platform;
        if (platform == 'darwin') {
            var cmd = execSync('system_profiler SPHardwareDataType | grep Serial').toString();
            var cmdArray = cmd.replace(/\n/, '').split(':');
            if (cmdArray && cmdArray.length >= 2) {
                return cmdArray[1].trim();
            }
        } else if (platform.indexOf('win') !== -1) {
            var cmd = execSync('wmic cpu get ProcessorId').toString();
            var cmdArray = cmd.split('\r\n');
            if (cmdArray && cmdArray.length >= 2) {
                return cmdArray[1].trim();
            }
        }
        return 'bugbug';
    }


    mainWindow.loadURL('file://' + __dirname + '/index.html');



    mainWindow.on("closed", function() {
        mainWindow = null;
    });
}


app.on("ready", createWindow);


app.on("window-all-closed", function() {

    if (process.platform != "darwin") {

        app.quit();
    }
});


app.on("activate", function() {
    if (mainWindow === null) {
        createWindow();
    }
});