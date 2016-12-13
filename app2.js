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

    var divs = $('<div></div>');
    divs.addClass('inbox_container');
    // var anchor = $("<a></a>");
    // anchor.addClass("anchorTag");
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
    // anchor.append(input,sp1,sp2,sp3);
    divs.append(input, sp1, sp2, sp3);
    $('#sentmail').append(divs).addClass("sent");
    // $('#tab').css("visibility", "hidden");
});

$('#sendBtn').click(function () {
    $('#myModal').modal('show');
    //$('#sentmail').css("display", "inherit").addClass("sent");
    //$('#tab').css("display", "none");
    //$('#inbox').addClass("font-8 button2").removeClass("active")    ;
    //$('#sentBtn').addClass("active");
});

$('#sentBtn').click(function () {
    $('#sentmail').css("display", "inherit");
    $('#tab').css("display", "none");
    $('#inbox').addClass("font-8 button2").removeClass("active")    ;
    $('#trashBtn').addClass("font-8 button2").removeClass("active");
    $('#sentBtn').addClass("active");
    $('#trashmail').css('display', 'none');
});

$('#inbox').click(function () {
    $('#sentmail').css("display", "none");
    $('#tab').css("display", "inherit").css("visibility", "visible");
    $('#inbox').addClass("active");
    $('#sentBtn').removeClass("active");
    $('#trashmail').css('display', 'none');
    $('#trashBtn').removeClass("active");
});

$('#deleteBtn').click(function () {
    $('#deleteModal').modal('show');
   // var checked = $("input:checked").parent().remove();
   //  console.log(checked);
   //  // checked.remove();
   //  if ($('#sentmail').css("display") != "none") {
   //      $('#tab').css("display", "none");
   //      $('#inbox').addClass("font-8 button2").removeClass("active");
   //      $('#trashmail').append(checked);
   //      $('#sentmail').removeClass("sent").css("display", "inherit");
   //  }
   //  if ($('#tab').css("display") != "none") {
   //      console.log("in");
   //      $('#tab').css("display", "inherit");
   //      $('#sentmail').css("display", "none");
   //      $('#sentBtn').addClass("font-8 button2").removeClass("active");
   //      $('#trashmail').append(checked).css("display", "none");
   //      $('#sentmail').removeClass("sent");
   //  }
});

$('#btnDel').click(function () {
    var checked = $("input:checked").parent().remove();
     console.log(checked);
    console.log($('input:checked').length);
    $('input:checked').attr('checked', false);
     // checked.remove();
     if ($('#sentmail').css("display") != "none") {
         $('#tab').css("display", "none");
         $('#inbox').addClass("font-8 button2").removeClass("active");
         $('#trashmail').append(checked);
         $('#sentmail').removeClass("sent").css("display", "inherit");
     }
     if ($('#tab').css("display") != "none") {
         console.log("in");
         $('#tab').css("display", "inherit");
         $('#sentmail').css("display", "none");
         $('#sentBtn').addClass("font-8 button2").removeClass("active");
         $('#trashmail').append(checked).css("display", "none");
         $('#sentmail').removeClass("sent");
     }
});

$('#trashBtn').click(function () {
    $('#trashmail').css("display", "inherit");
    $('#tab').css("display", "none");
    $('#inbox').addClass("font-8 button2").removeClass("active")    ;
    $('#sentBtn').addClass("font-8 button2").removeClass("active");
    $('#trashBtn').addClass("active");
    $('#sentmail').css('display', 'none');
});

$("input:checkbox").click(function() {
    console.log("in");
    $("#deleteBtn").attr("disabled", !this.checked).css("pointer-events", "auto");
});