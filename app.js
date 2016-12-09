/**
 * Created by Yash on 12/7/2016.
 */
    'use strict';

    function overlay() {
        var el = document.getElementById("overlay");
        el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
    }
    function send() {
        var rec = document.getElementById("recepient").value;
        var subject = document.getElementById("subj").value;
        var mail = document.getElementById("txt").value;
        document.getElementById("overlay").style.visibility = "hidden";

        var parent = document.getElementById("sentmail");
        var anchor = document.createElement("a");
        anchor.className = "anchorTag";
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
        anchor.appendChild(input);
        anchor.appendChild(sp1);
        anchor.appendChild(sp2);
        anchor.appendChild(sp3);
        parent.appendChild(anchor);
        parent.appendChild(br);
        openSent();
    }
    function openSent() {
        var parent = document.getElementById("sentmail");
        parent.style.display = "inherit";
        var elem = document.getElementById("tab");
        elem.style.display = "none";
        document.getElementById("inbox").className = "button2 font-8";
        document.getElementById("sentBtn").className += " active";
    }
    function openInbox() {
        var parent = document.getElementById("sentmail");
        parent.style.display = "none";
        var elem = document.getElementById("tab");
        elem.style.display = "inherit";
        document.getElementById("inbox").className += " active";
        document.getElementById("sentBtn").className = "button2 font-8";
    }