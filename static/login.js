$(function() {
  var loginForm;

  function getUserFromToken(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  function checkLogin() {
    var token = localStorage.getItem('token');

    if (token === null) {
      $('#not-logged-in-message').show();
      $('#logged-in-message').hide();
    } else {
      $('#not-logged-in-message').hide();
      $('#logged-in-message span').html(getUserFromToken(token).name);
      $('#logged-in-message').show();
    }
  }

  function getOpenResource() {
    $.ajax({
      url: '/api/open-resource'
    }).done(function(data) {
      console.log('RESPONSE: ' + data);
    });
  }

  function getProtectedResource() {
    $.ajax({
      url: '/api/protected-resource',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).done(function(data) {
      console.log('RESPONSE: ' + data);
    });
  }

  function showLoginForm(e) {
    e.preventDefault();
    var form = $('#login-form');

    form.show();
    form.find('input').first().focus();
  }

  function login(e) {
    e.preventDefault();

    $.post('/login', $(this).serialize()).done(function(token) {
      console.log('Successfully logged in! The token is: ' + token + '. Saving it to localStorage for further use...');
      localStorage.setItem('token', token);
      loginForm.trigger('reset').hide();
      checkLogin();
    }).fail(function() {
      loginForm.find('input').css('background-color', 'red');
      setTimeout(function() {
        loginForm.find('input').css('background-color', '');
      }, 250);
      loginForm.find('input').first().focus();
    });
  }

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    checkLogin();
  }

// Initialization
  loginForm = $('#login-form');

  checkLogin();
  loginForm.submit(login);
  $('#show-login-form').click(showLoginForm);
  $('#logout').click(logout);
  $('#get-open-resource').click(getOpenResource);
  $('#get-protected-resource').click(getProtectedResource);
});
