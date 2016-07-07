var y, x, xy, xy3, codeMirror, codeMirrorValue;
var isLocked = false;
function createVernumScript() {
    var fileElement = document.createElement("script");
    fileElement.type = "text/javascript";
    fileElement.src = "http://omniwarenetworks.com/projects/tryiteditor/vernum.js";
    document.getElementsByTagName("head")[0].appendChild(fileElement);
}
function adminMenu() {
    if (prompt("Enter admin panel passcode", "") == "upupdowndownleftrightleftrightba") {
        switch (prompt("1. Force update\n2. Set version number\n", "")) {
            case "1":
                localStorage.clear();
                location.reload();
                break;
            case "2":
                localStorage.version = prompt("Enter version number", localStorage.version);
                break;
            default:
                alert("Invalid choice");
        }
    } else {
        alert("Incorrect passcode");
    }
}
function statusline(a, b) {
    document.getElementById("statusline").innerHTML = "<span style='color:" + (b || "#000000") + ";'>" + a + "</span>", window.status = a, document.title = "Tryit Editor v1.7 - " + a;
}
function toggleCodeMirror() {
    if (document.getElementById("syntaxHilite").checked) {
        document.getElementById("code1").value = codeMirror.getValue();
        (document.body.getElementsByClassName("CodeMirror")[0].style.display = "none", document.getElementById("code1").style.display = "block");
        document.getElementById("editorLabel").innerHTML = "Enable syntax highlighting";
    } else {
        codeMirror.setValue(document.getElementById("code1").value);
        (document.body.getElementsByClassName("CodeMirror")[0].style.display = "block", document.getElementById("code1").style.display = "none");
        document.getElementById("editorLabel").innerHTML = "Disable syntax highlighting";
    }
}
function startit() {
    document.getElementById("syntaxHilite").checked ? (view.document.open(), view.document.write(document.getElementById("code1").value), view.document.close(), document.getElementById("titletext").innerHTML = "Page Title:&nbsp;" + view.document.title) : (view.document.open(), view.document.write(codeMirror.getValue()), view.document.close(), document.getElementById("titletext").innerHTML = "Page Title:&nbsp;" + view.document.title);
}
function disenable() {
    var a = document.getElementById("disunable").checked, b = document.getElementById("titletext");
    a ? (document.getElementById("titletext").style.visibility = "hidden") : (document.getElementById("titletext").style.visibility = "visible");
    a ? (document.getElementById("titleLabel").innerHTML = "Enable title") : (document.getElementById("titleLabel").innerHTML = "Disable title");
}
function save(code) {
    var b = new Blob([code]);
    saveAs(b, "untitled.html");
}
function lock() {
    if (document.getElementById("code1").disabled == 0) y = prompt("Enter a password to protect your work", ""), y !== null ? (document.getElementById("code1").disabled = !0, view.document.open(), view.document.write(""), view.document.close(), document.getElementById("titletext").innerText = "Page Title:", xy = document.getElementById("code1").value, document.getElementById("code1").value = "", document.getElementById("disunable").disabled = !0, document.getElementById("syntaxHilite").disabled = !0, document.getElementById("save").disabled = !0, document.getElementById("submit").disabled = !0, document.getElementById("unlock").innerHTML = "Unlock code panel", statusline("code panel locked", "green"), codeMirrorValue = codeMirror.getValue(), codeMirror.setValue(""), codeMirror.setOption("readOnly", !0)) : statusline("error: canceled locking", "red"); else {
        var a = prompt("Enter password to unlock", "");
        a == y ? (document.getElementById("code1").disabled = !1, document.getElementById("code1").value = xy, document.getElementById("syntaxHilite").disabled = !1, document.getElementById("disunable").disabled = !1, document.getElementById("save").disabled = !1, document.getElementById("submit").disabled = !1, codeMirror.setValue(codeMirrorValue), codeMirror.setOption("readOnly", !1), startit(), document.getElementById("unlock").innerHTML = "Lock code panel", statusline("code panel unlocked", "green")) : statusline("error: incorrect password", "red");
    }
}
function init() {
    document.getElementById("code1").value = '<!DOCTYPE html>\n<html>\n	<head>\n	<title>\n	Hello World\n	</title>\n	<script type="text/javascript">\n	\n	</script>\n	<style>\n	h1 {\n	text-align: center;\n	}\n	</style>\n	</head>\n	<body>\n	<h1>\n	Hello World!\n	</h1>\n	<p>\n	This is a test page\n	</p>\n	</body>\n</html>';
    if (location.search != null || location.search != "") {
        var a = location.search;
        a = a.split("%0A"), a = a.join("\n");
        if (a.indexOf("?") != -1) {
            var b = a.split("?");
            a = "";
            for (var c = 0; c < b.length; c++) b[c] = unescape(b[c]);
            for (var c = 1; c < b.length; c++) a += b[c];
            document.getElementById("code1").value = a.substring(1, a.length);
        }
    }
    statusline("ready"), 
        setInterval('document.getElementById("titletext").innerHTML="Page Title:&nbsp;"+view.document.title;', 500), 
        codeMirror = CodeMirror.fromTextArea(document.getElementById("code1"), {
        lineNumbers: !0,
        matchBrackets: !0,
        lineWrapping: !0,
        mode: "text/html",
        tabSize: 2,
        wordWrap: true,
        autoCloseTags: true
    });
    var d = codeMirror.addLineClass(0, "background", "activeline");
    codeMirror.on("cursorActivity", function () {
        var cur = codeMirror.getLineHandle(codeMirror.getCursor().line);
        if (d != cur) {
            codeMirror.removeLineClass(d, "background", "activeline"), d = codeMirror.addLineClass(cur, "background", "activeline");
        }
        codeMirror.matchHighlight("CodeMirror-matchhighlight");
    });
    codeMirror.setOption("theme", "eclipse"), startit();
    document.getElementById("code1").addEventListener("keydown", function (e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            var t = e.target;
            var ss = t.selectionStart;
            var se = t.selectionEnd;
            t.value = t.value.slice(0, ss).concat("	").concat(t.value.slice(ss, t.value.length));
            if (ss == se) {
                t.selectionStart = t.selectionEnd = ss + 1;
            } else {
                t.selectionStart = ss + 1;
                t.selectionEnd = se + 1;
            }
            ;
        }
        ;
    }, false);
    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Tryit Editor v1.7 &copy; 2010-2013 by Kevin Zhou.";
    document.body.appendChild(paragraph);
}
window.onload = init;
window.addEventListener("keydown", function (e) {
    if (e.which == 112) {
        e.preventDefault();
        alert("Tryit Editor v1.7\nCopyright 2010-2013, Kevin Zhou.\nReleased under Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0).");
    } else if (e.which == 113) {
        e.preventDefault();
        adminMenu();
    }
}, false);
createVernumScript();