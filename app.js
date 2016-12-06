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
var ssh_server = "";
var ssh_user = "";
var ssh_name = "";
$(document).ready(function (){
  $('[name=run-terminal]').click(function(event) {
    $('#myModal').modal();
    ssh_server = $(this).attr('ssh-server');
    ssh_user = $(this).attr('ssh-user');
    ssh_name = $(this).attr('ssh-name');
  });

  $('#passwd_submit').click(function() {
    var passwd = $('#pass_field').val();
    $('#pass_field').html("");
    createWindowTerminal(ssh_user, ssh_user, ssh_name, passwd);
  });

  $('#clear_passwd').click(function() {
    $('#pass_field').html("");
  });

  /*$('#flat-checkbox-2').iCheck({
    checkboxClass: 'icheckbox_flat',
    radioClass: 'iradio_flat'
  });*/

  $('#add-server-btn').click(function() {
    $('#add-server-modal').modal();

  });

});

// Or load a local HTML file
//win.loadURL(`file://${__dirname}/app/index.html`);
