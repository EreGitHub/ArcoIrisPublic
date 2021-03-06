﻿$(function () {
    var chat = $.connection.NotificacionHubs;
    var username;
    do {
        username = prompt("Insert your username: ");
    } while (username === null || username === "");

    chat.client.updateUsers = function (userCount, userList) {
        $('#onlineUsersCount').text('Online users: ' + userCount);
        $('#userList').empty();
        userList.forEach(function (username) {
            $('#userList').append('<li>' + username + '</li>');
        });
    };

    chat.client.broadcastMessages = function (username, message) {
        $('#messagesArea').append('<li><strong>' + username + '</strong>: --' + message);
    };


    $.connection.hub.start().done(function () {
        chat.server.connect(username);
    });

    $('#btnSendMessage').click(function(){
        var message = $('#userMessage').val();
        chat.server.send(message);
        $('#userMessage').val("");
    });

});

