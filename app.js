const path = require('path');
const url = require('url');
const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;

function createWindowTerminal(server, username, name)
{
  let win = new BrowserWindow({ width: 800, height: 600 });
  //win.loadURL('www.google.com');

  //no menu bar
  win.setMenu(null);

  win.toggleDevTools();

  // and load the index.html of the app.

  win.loadURL('file://' + __dirname + '/terminal.html?server=' + server + '&user=' + username + '&name=' + name);
  //win.loadURL("http://codepen.io/AndrewBarfield/full/qEqWMq/");

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

$(document).ready(function (){
  $('[name=run-terminal]').click(function(event) {
    createWindowTerminal($(this).attr('ssh-server'), $(this).attr('ssh-user'), $(this).attr('ssh-name'));
  });
});

// Or load a local HTML file
//win.loadURL(`file://${__dirname}/app/index.html`);
