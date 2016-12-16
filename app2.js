'use strict';

// Compose Email pop-up function
$('#compose').click(function () {
    $('#overlay').css("visibility", "visible");
});

// Click on send email button function
$('#sendBtn').click(function () {
    $('#myModal').modal('show');
    $("#overlay").css("visibility","hidden");
    var divs = $('<div></div>');
    var input = $("<input/>", {type: 'checkbox'});
    var sp1 = $("<span></span>").addClass("name").text($('#recepient').val());
    var sp2 = $("<span></span>").addClass("data").text($("#subj").val() + " - ");
    var sp3 = $("<span></span>").addClass("email").text($("#txt").val());
    divs.append(input, sp1, sp2, sp3);
    $('#sentMail').append(divs).addClass("sent");
});

// Confirmation Modal for deletion of E-mails
$('#deleteBtn').click(function () {
    $('#deleteModal').modal('show');
});

// Click event for closing the modal.
$('#okBtn, #sendModal, #deleteMod').click(function () {
    $('#myModal').modal('hide');
});

// Click on Sent Mail button in left panel
$('#sentBtn').click(function () {
    $('#sentMail').css("display", "inherit");
    $('#tab, #trashMail').css("display", "none");
    $('#inbox, #trashBtn').addClass("font-8 button2").removeClass("active")    ;
    $('#sentBtn').addClass("active");
});

// Click on Inbox button in left panel
$('#inbox').click(function () {
    $('#sentMail, #trashMail').css("display", "none");
    $('#tab').css("display", "inherit");
    $('#inbox').addClass("active");
    $('#sentBtn, #trashBtn').removeClass("active");
});

// Click on Trash button in left panel
$('#trashBtn').click(function () {
    $('#trashMail').css("display", "inherit");
    $('#tab, #sentMail').css("display", "none");
    $('#inbox, #sentBtn').addClass("font-8 button2").removeClass("active")    ;
    $('#trashBtn').addClass("active");
});

// Delete function when click on Continue in the Delete Modal
$('#btnDel').click(function () {
    $("#deleteModal").modal("hide");
    var all_checked = $("input:checked");
    $("input:checked").parent().remove();
    $('input:checked').attr('checked', false);

     if ($('#sentMail').css("display") != "none") {
         for (var a = 0; a < all_checked.length; a++) {
             var rec = all_checked[a].nextSibling.innerHTML;
             var sub = all_checked[a].nextSibling.nextSibling.innerHTML;
             var txt = all_checked[a].nextSibling.nextSibling.nextSibling.innerHTML;
             localStorage.setItem("sent"+a,rec+"!@!"+sub+"!@!"+txt);
         }

         $('#tab').css("display", "none");
         $('#inbox').addClass("font-8 button2").removeClass("active");
         $('#sentMail').removeClass("sent").css("display", "inherit");

        for (var i = 0; i < localStorage.length; i++) {
            var divs = $('<div></div>');
            var input = $("<input>", {type: 'checkbox'});
            var sp1 = $("<span></span>").addClass("name").text(localStorage.getItem("sent"+i).split("!@!")[0]);
            var sp2 = $("<span></span>").addClass("data").text(localStorage.getItem("sent"+i).split("!@!")[1]);
            var sp3 = $("<span></span>").addClass("email").text(localStorage.getItem("sent"+i).split("!@!")[2]);
            divs.append(input, sp1, sp2, sp3);
            $('#trashMail').append(divs);
        }
     }
     if ($('#tab').css("display") != "none") {
         for (var a = 0; a < all_checked.length; a++) {
             var rec = all_checked[a].nextSibling.innerHTML;
             var sub = all_checked[a].nextSibling.nextSibling.innerHTML;
             var txt = all_checked[a].nextSibling.nextSibling.nextSibling.innerHTML;
             localStorage.setItem("inbx"+a,rec+"!@!"+sub+"!@!"+txt);
         }

         $('#tab').css("display", "inherit");
         $('#sentMail').css("display", "none");
         $('#sentBtn').addClass("font-8 button2").removeClass("active");
         $('#sentMail').removeClass("sent");

         for (var i = 0; i < localStorage.length; i++) {
             var divs = $('<div></div>');
             var input = $("<input/>", {type: 'checkbox'});
             var sp1 = $("<span></span>").addClass("name").text(localStorage.getItem("inbx" + i).split("!@!")[0]);
             var sp2 = $("<span></span>").addClass("data").text(localStorage.getItem("inbx" + i).split("!@!")[1]);
             var sp3 = $("<span></span>").addClass("email").text(localStorage.getItem("inbx" + i).split("!@!")[2]);
             divs.append(input, sp1, sp2, sp3);
             $('#trashMail').append(divs).css("display", "none");
         }
     }
    if ($('#trashMail').css("display") != "none") {
        localStorage.clear();
    }
});

// Function for continuously watching checkboxes
window.setInterval(function () {
    $("input:checkbox").click(function() {
        $("#deleteBtn").attr("disabled", !this.checked).css("pointer-events", "auto");
    });
},1000);

// Emptying localStorage in the beginning.
localStorage.clear();