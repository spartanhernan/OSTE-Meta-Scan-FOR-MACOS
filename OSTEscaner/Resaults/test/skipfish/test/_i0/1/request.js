var req = {'data':'POST /DVWA/vulnerabilities/xss_s/ HTTP/1.1\x0d\x0aHost: localhost\x0d\x0aAccept-Encoding: gzip\x0d\x0aConnection: keep-alive\x0d\x0aUser-Agent: Mozilla/5.0 SF/2.10b\x0d\x0aRange: bytes=0-399999\x0d\x0aReferer: http://localhost/\x0d\x0aCookie: security=impossible; PHPSESSID=2jbm30tl1u4tquk4nlef2a1qdm\x0d\x0aContent-Type: application/x-www-form-urlencoded\x0d\x0aContent-Length: 119\x0d\x0a\x0d\x0atxtName=Smith&mtxMessage=skipfish&btnSign=Sign%20Guestbook&btnClear=9876sfi&user_token=cb6c41e484650af8018ab47290072c05'}