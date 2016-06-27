/* Copyright 2010-2013 Kevin Zhou. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY Kevin Zhou "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE FREEBSD PROJECT OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */
var integrity = true;
if (navigator.onLine || md5) {
	try {
		if (localStorage.resources) {
			var resources = localStorage.resources.split(";");
			for (var i = 0; i < resources.length - 1; i++) {
				if (hex_md5(localStorage[resources[i]]) != manifest.md5[resources[i]]) {
					integrity = false;
				}
			}
		} else {
			if (localStorage.length > (localStorage.resources.split(";").length + 1)) {
				integrity = false;
			}
		}
	} catch (e) {
		integrity = false;
	}
}

if (!integrity) {
	localStorage.clear();
	console.error("Integrity check failed");
	alert("Files were modified (and/or minor update released). File cache has been cleared. Page will now reload to download files.");
	location.reload();
} else {
	console.log("Integrity check complete, file cache OK");
}