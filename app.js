/**
 * Created by Yash on 12/7/2016.
 */
    'use strict';


    var modal = document.getElementById("myModal");
    var modal2 = document.getElementById("deleteModal");
    var span = document.getElementById("sendModal");
    var del_modal = document.getElementById("deleteMod");
    var okBtn = document.getElementById("okBtn");

    function overlay() {
        var el = document.getElementById("overlay");
        el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
    }
    function send() {
        var rec = document.getElementById("recepient").value;
        var subject = document.getElementById("subj").value;
        var mail = document.getElementById("txt").value;
        document.getElementById("overlay").style.visibility = "hidden";

        modal.style.display = "block";
        modal.style.overflow = "inherit";
        span.onclick = function () {
          modal.style.display = "none";
        };
        okBtn.onclick = function () {
          modal.style.display = "none";
        };
        var parent = document.getElementById("sentmail");
        // var anchor = document.createElement("a");
        // anchor.className = "anchorTag";
        var divs = document.createElement("div");
        divs.className = "inbox_container";
        var input = document.createElement("input");
        input.type = "checkbox";
        var sp1 = document.createElement("span");
        sp1.className = "name";
        var rec_name = document.createTextNode(rec);
        sp1.appendChild(rec_name);
        var sp2 = document.createElement("span");
        sp2.className = "data";
        var data = document.createTextNode(subject + " -");
        sp2.appendChild(data);
        var sp3 = document.createElement("span");
        sp3.className = "email";
        var message = document.createTextNode(mail);
        sp3.appendChild(message);
        var br = document.createElement("br");
        divs.appendChild(input);
        divs.appendChild(sp1);
        divs.appendChild(sp2);
        divs.appendChild(sp3);
        parent.appendChild(divs);
        console.log(parent);
    }
    function openSent() {
        var parent = document.getElementById("sentmail");
        parent.style.display = "inherit";
        var elem = document.getElementById("tab");
        elem.style.display = "none";
        document.getElementById("inbox").className = "button2 font-8";
        document.getElementById("trashBtn").className = "button2 font-8";
        document.getElementById("sentBtn").className += " active";
    }
    function openInbox() {
        var parent = document.getElementById("sentmail");
        parent.style.display = "none";
        var trash = document.getElementById("trashmail");
        trash.style.display = "none";
        var elem = document.getElementById("tab");
        elem.style.display = "inherit";
        document.getElementById("inbox").className += " active";
        document.getElementById("sentBtn").className = "button2 font-8";
        document.getElementById("trashBtn").className = "button2 font-8";
    }
    
    function deleteMails() {
        var checked = document.querySelectorAll('input:checked');
        var arr = [];
        for (var i = 0; i < checked.length; i++) {
            arr.push(checked[i].parentElement);
            checked[i].parentElement.remove();
        }
        var trash = document.getElementById("trashmail");
        for (var i = 0; i < arr.length; i++) {
            trash.appendChild(arr[i]);
        }
        // console.log(trash);
    }
    
    function openTrash() {
        var parent = document.getElementById("trashmail");
        parent.style.display = "inherit";
        var elem = document.getElementById("tab");
        elem.style.display = "none";
        var sent = document.getElementById("sentmail");
        sent.style.display = "none";
        document.getElementById("inbox").className = "button2 font-8";
        document.getElementById("sentBtn").className = "button2 font-8";
        document.getElementById("trashBtn").className += " active";
    }
    function modalDelete() {
        modal2.style.display = "block";
        modal2.style.overflow = "inherit";
        document.getElementById("cancelBtn").onclick = function () {
            modal2.style.display = "none";
        }
        del_modal.onclick = function () {
            modal2.style.display = "none";
        }
    }

    function cont() {
        modal2.style.display = "none";
        deleteMails();
    }