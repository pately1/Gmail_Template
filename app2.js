/**
 * Created by Yash on 12/7/2016.
 */
'use strict';

$('#compose').click(function () {
    $('#overlay').css("visibility", "visible");
});

$('#sendBtn').click(function () {
    var rec = $('#recepient').val();
    var subject = $("#subj").val();
    var mail = $("#txt").val();
    $("#overlay").css("visibility","hidden");

    var anchor = $("<a></a>");
    anchor.addClass("anchorTag");
    var input = $("<input/>", {type: 'checkbox'});
    var sp1 = $("<span></span>");
    sp1.addClass("name");
    sp1.text(rec);
    var sp2 = $("<span></span>");
    sp2.addClass("data");
    sp2.text(subject + " - ");
    var sp3 = $("<span></span>");
    sp3.addClass("email");
    sp3.text(mail);
    var br = $("<br>");
    anchor.append(input,sp1,sp2,sp3)
    $('#sentmail').append(anchor, br);
    $('#tab').css("visibility", "hidden");
});

$('#sendBtn').click(function () {
    $('#sentmail').css("display", "inherit");
    $('#tab').css("display", "none");
    $('#inbox').addClass("font-8 button2").removeClass("active")    ;
    $('#sentBtn').addClass("active");
});

$('#sentBtn').click(function () {
    $('#sentmail').css("display", "inherit");
    $('#tab').css("display", "none");
    $('#inbox').addClass("font-8 button2").removeClass("active")    ;
    $('#sentBtn').addClass("active");
});

$('#inbox').click(function () {
    $('#sentmail').css("display", "none");
    $('#tab').css("display", "inherit").css("visibility", "visible");
    $('#inbox').addClass("active");
    $('#sentBtn').removeClass("active");
});