var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Tue, 12 Dec 2023 11:51:55 GMT\x0aServer: Apache/2.4.54 (Unix) OpenSSL/1.1.1s PHP/8.2.0 mod_perl/2.0.12 Perl/v5.34.1\x0aX-Powered-By: PHP/8.2.0\x0aContent-Range: bytes 0-639/640\x0aContent-Length: 640\x0aKeep-Alive: timeout=5, max=91\x0aConnection: Keep-Alive\x0aContent-Type: text/html; charset=UTF-8\x0a\x0a\x3c!DOCTYPE html\x3e\x0a\x3chtml\x3e\x0a\x3chead\x3e\x0a   \x3ctitle\x3eXSS 1\x3c/title\x3e\x0a\x3clink rel=\x22shortcut icon\x22 href=\x22../Resources/hmbct.png\x22 /\x3e\x0a\x3c/head\x3e\x0a\x3cbody\x3e\x0a\x09\x0a\x09 \x3cdiv style=\x22background-color:#c9c9c9;padding:15px;\x22\x3e\x0a      \x3cbutton type=\x22button\x22 name=\x22homeButton\x22 onclick=\x22location.href=\x27../homepage.html\x27;\x22\x3eHome Page\x3c/button\x3e\x0a      \x3cbutton type=\x22button\x22 name=\x22mainButton\x22 onclick=\x22location.href=\x27xssmainpage.html\x27;\x22\x3eMain Page\x3c/button\x3e\x0a    \x3c/div\x3e\x0a\x3cdiv align=\x22center\x22\x3e\x0a   \x3cform method=\x22GET\x22 action=\x22\x22 name=\x22form\x22\x3e\x0a   \x3cp\x3eYour name:\x3cinput type=\x22text\x22 name=\x22username\x22\x3e\x3c/p\x3e\x0a   \x3cinput type=\x22submit\x22 name=\x22submit\x22 value=\x22Submit\x22\x3e\x0a\x3c/form\x3e\x0a\x09\x3c/div\x3e\x0aYour name is Smith\x3c/body\x3e\x0a\x3c/html\x3e\x0a'}