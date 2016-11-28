  var get_req = global.location.search;
$(function() {
  $('title').html(findGetParameter('user') + '@' + findGetParameter('server') + ' (' + findGetParameter('name') + ')');
  // Set the command-line prompt to include the user's IP Address
  //$('.prompt').html('[' + codehelper_ip["IP"] + '@HTML5] # ');
    $('.prompt').html('[' + findGetParameter('user') + '@' + findGetParameter('server') + '] $ ');

  // Initialize a new terminal object
  var term = new Terminal('#input-line .cmdline', '#container output');
  term.init();

});

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    get_req
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}
