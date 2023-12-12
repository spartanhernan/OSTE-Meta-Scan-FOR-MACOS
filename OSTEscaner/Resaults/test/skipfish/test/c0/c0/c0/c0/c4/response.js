var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Tue, 12 Dec 2023 11:42:45 GMT\x0aServer: Apache/2.4.54 (Unix) OpenSSL/1.1.1s PHP/8.2.0 mod_perl/2.0.12 Perl/v5.34.1\x0aX-Powered-By: PHP/8.2.0\x0aExpires: Tue, 23 Jun 2009 12:00:00 GMT\x0aCache-Control: no-cache, must-revalidate\x0aPragma: no-cache\x0aContent-Range: bytes 0-4959/4960\x0aContent-Length: 4960\x0aKeep-Alive: timeout=5, max=95\x0aConnection: Keep-Alive\x0aContent-Type: text/html;charset=utf-8\x0a\x0a\x3c!DOCTYPE html\x3e\x0a\x0a\x3chtml lang=\x22en-GB\x22\x3e\x0a\x0a\x09\x3chead\x3e\x0a\x09\x09\x3cmeta http-equiv=\x22Content-Type\x22 content=\x22text/html; charset=UTF-8\x22 /\x3e\x0a\x0a\x09\x09\x3ctitle\x3eVulnerability: Stored Cross Site Scripting (XSS) :: Damn Vulnerable Web Application (DVWA)\x3c/title\x3e\x0a\x0a\x09\x09\x3clink rel=\x22stylesheet\x22 type=\x22text/css\x22 href=\x22../../dvwa/css/main.css\x22 /\x3e\x0a\x0a\x09\x09\x3clink rel=\x22icon\x22 type=\x22\x5cimage/ico\x22 href=\x22../../favicon.ico\x22 /\x3e\x0a\x0a\x09\x09\x3cscript type=\x22text/javascript\x22 src=\x22../../dvwa/js/dvwaPage.js\x22\x3e\x3c/script\x3e\x0a\x0a\x09\x3c/head\x3e\x0a\x0a\x09\x3cbody class=\x22home\x22\x3e\x0a\x09\x09\x3cdiv id=\x22container\x22\x3e\x0a\x0a\x09\x09\x09\x3cdiv id=\x22header\x22\x3e\x0a\x0a\x09\x09\x09\x09\x3cimg src=\x22../../dvwa/images/logo.png\x22 alt=\x22Damn Vulnerable Web Application\x22 /\x3e\x0a\x0a\x09\x09\x09\x3c/div\x3e\x0a\x0a\x09\x09\x09\x3cdiv id=\x22main_menu\x22\x3e\x0a\x0a\x09\x09\x09\x09\x3cdiv id=\x22main_menu_padded\x22\x3e\x0a\x09\x09\x09\x09\x3cul class=\x22menuBlocks\x22\x3e\x3cli class=\x22\x22\x3e\x3ca href=\x22../../.\x22\x3eHome\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../instructions.php\x22\x3eInstructions\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../setup.php\x22\x3eSetup / Reset DB\x3c/a\x3e\x3c/li\x3e\x0a\x3c/ul\x3e\x3cul class=\x22menuBlocks\x22\x3e\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/brute/\x22\x3eBrute Force\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/exec/\x22\x3eCommand Injection\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/csrf/\x22\x3eCSRF\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/fi/.?page=include.php\x22\x3eFile Inclusion\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/upload/\x22\x3eFile Upload\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/captcha/\x22\x3eInsecure CAPTCHA\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/sqli/\x22\x3eSQL Injection\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/sqli_blind/\x22\x3eSQL Injection (Blind)\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/weak_id/\x22\x3eWeak Session IDs\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/xss_d/\x22\x3eXSS (DOM)\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/xss_r/\x22\x3eXSS (Reflected)\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22selected\x22\x3e\x3ca href=\x22../../vulnerabilities/xss_s/\x22\x3eXSS (Stored)\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/csp/\x22\x3eCSP Bypass\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/javascript/\x22\x3eJavaScript\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../vulnerabilities/open_redirect/\x22\x3eOpen HTTP Redirect\x3c/a\x3e\x3c/li\x3e\x0a\x3c/ul\x3e\x3cul class=\x22menuBlocks\x22\x3e\x3cli class=\x22\x22\x3e\x3ca href=\x22../../security.php\x22\x3eDVWA Security\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../phpinfo.php\x22\x3ePHP Info\x3c/a\x3e\x3c/li\x3e\x0a\x3cli class=\x22\x22\x3e\x3ca href=\x22../../about.php\x22\x3eAbout\x3c/a\x3e\x3c/li\x3e\x0a\x3c/ul\x3e\x3cul class=\x22menuBlocks\x22\x3e\x3cli class=\x22\x22\x3e\x3ca href=\x22../../logout.php\x22\x3eLogout\x3c/a\x3e\x3c/li\x3e\x0a\x3c/ul\x3e\x0a\x09\x09\x09\x09\x3c/div\x3e\x0a\x0a\x09\x09\x09\x3c/div\x3e\x0a\x0a\x09\x09\x09\x3cdiv id=\x22main_body\x22\x3e\x0a\x0a\x09\x09\x09\x09\x0d\x0a\x3cdiv class=\x22body_padded\x22\x3e\x0d\x0a\x09\x3ch1\x3eVulnerability: Stored Cross Site Scripting (XSS)\x3c/h1\x3e\x0d\x0a\x0d\x0a\x09\x3cdiv class=\x22vulnerable_code_area\x22\x3e\x0d\x0a\x09\x09\x3cform method=\x22post\x22 name=\x22guestform\x22 \x22\x3e\x0d\x0a\x09\x09\x09\x3ctable width=\x22550\x22 border=\x220\x22 cellpadding=\x222\x22 cellspacing=\x221\x22\x3e\x0d\x0a\x09\x09\x09\x09\x3ctr\x3e\x0d\x0a\x09\x09\x09\x09\x09\x3ctd width=\x22100\x22\x3eName *\x3c/td\x3e\x0d\x0a\x09\x09\x09\x09\x09\x3ctd\x3e\x3cinput name=\x22txtName\x22 type=\x22text\x22 size=\x2230\x22 maxlength=\x2210\x22\x3e\x3c/td\x3e\x0d\x0a\x09\x09\x09\x09\x3c/tr\x3e\x0d\x0a\x09\x09\x09\x09\x3ctr\x3e\x0d\x0a\x09\x09\x09\x09\x09\x3ctd width=\x22100\x22\x3eMessage *\x3c/td\x3e\x0d\x0a\x09\x09\x09\x09\x09\x3ctd\x3e\x3ctextarea name=\x22mtxMessage\x22 cols=\x2250\x22 rows=\x223\x22 maxlength=\x2250\x22\x3e\x3c/textarea\x3e\x3c/td\x3e\x0d\x0a\x09\x09\x09\x09\x3c/tr\x3e\x0d\x0a\x09\x09\x09\x09\x3ctr\x3e\x0d\x0a\x09\x09\x09\x09\x09\x3ctd width=\x22100\x22\x3e&nbsp;\x3c/td\x3e\x0d\x0a\x09\x09\x09\x09\x09\x3ctd\x3e\x0d\x0a\x09\x09\x09\x09\x09\x09\x3cinput name=\x22btnSign\x22 type=\x22submit\x22 value=\x22Sign Guestbook\x22 onclick=\x22return validateGuestbookForm(this.form);\x22 /\x3e\x0d\x0a\x09\x09\x09\x09\x09\x09\x3cinput name=\x22btnClear\x22 type=\x22submit\x22 value=\x22Clear Guestbook\x22 onClick=\x22return confirmClearGuestbook();\x22 /\x3e\x0d\x0a\x09\x09\x09\x09\x09\x3c/td\x3e\x0d\x0a\x09\x09\x09\x09\x3c/tr\x3e\x0d\x0a\x09\x09\x09\x3c/table\x3e\x0a\x09\x09\x09\x3cinput type=\x27hidden\x27 name=\x27user_token\x27 value=\x275eb35fbcb90aa3b03d1b5fc0d489f220\x27 /\x3e\x0d\x0a\x09\x09\x3c/form\x3e\x0d\x0a\x09\x09\x0d\x0a\x09\x3c/div\x3e\x0d\x0a\x09\x3cbr /\x3e\x0d\x0a\x0d\x0a\x09\x3cdiv id=\x22guestbook_comments\x22\x3eName: Smith\x3cbr /\x3eMessage: skipfish\x3cbr /\x3e\x3c/div\x3e\x0a\x0d\x0a\x09\x3cbr /\x3e\x0d\x0a\x0d\x0a\x09\x3ch2\x3eMore Information\x3c/h2\x3e\x0d\x0a\x09\x3cul\x3e\x0d\x0a\x09\x09\x3cli\x3e\x3ca href=\x22https://owasp.org/www-community/attacks/xss\x22 target=\x22_blank\x22\x3ehttps://owasp.org/www-community/attacks/xss\x3c/a\x3e\x3c/li\x3e\x0d\x0a\x09\x09\x3cli\x3e\x3ca href=\x22https://owasp.org/www-community/xss-filter-evasion-cheatsheet\x22 target=\x22_blank\x22\x3ehttps://owasp.org/www-community/xss-filter-evasion-cheatsheet\x3c/a\x3e\x3c/li\x3e\x0d\x0a\x09\x09\x3cli\x3e\x3ca href=\x22https://en.wikipedia.org/wiki/Cross-site_scripting\x22 target=\x22_blank\x22\x3ehttps://en.wikipedia.org/wiki/Cross-site_scripting\x3c/a\x3e\x3c/li\x3e\x0d\x0a\x09\x09\x3cli\x3e\x3ca href=\x22http://www.cgisecurity.com/xss-faq.html\x22 target=\x22_blank\x22\x3ehttp://www.cgisecurity.com/xss-faq.html\x3c/a\x3e\x3c/li\x3e\x0d\x0a\x09\x09\x3cli\x3e\x3ca href=\x22http://www.scriptalert1.com/\x22 target=\x22_blank\x22\x3ehttp://www.scriptalert1.com/\x3c/a\x3e\x3c/li\x3e\x0d\x0a\x09\x3c/ul\x3e\x0d\x0a\x3c/div\x3e\x0a\x0a\x09\x09\x09\x09\x3cbr /\x3e\x3cbr /\x3e\x0a\x09\x09\x09\x09\x0a\x0a\x09\x09\x09\x3c/div\x3e\x0a\x0a\x09\x09\x09\x3cdiv class=\x22clear\x22\x3e\x0a\x09\x09\x09\x3c/div\x3e\x0a\x0a\x09\x09\x09\x3cdiv id=\x22system_info\x22\x3e\x0a\x09\x09\x09\x09\x3cinput type=\x22button\x22 value=\x22View Help\x22 class=\x22popup_button\x22 id=\x27help_button\x27 data-help-url=\x27../../vulnerabilities/view_help.php?id=xss_s&security=impossible&locale=en\x27 )\x22\x3e \x3cinput type=\x22button\x22 value=\x22View Source\x22 class=\x22popup_button\x22 id=\x27source_button\x27 data-source-url=\x27../../vulnerabilities/view_source.php?id=xss_s&security=impossible\x27 )\x22\x3e \x3cdiv align=\x22left\x22\x3e\x3cem\x3eUsername:\x3c/em\x3e Unknown\x3cbr /\x3e\x3cem\x3eSecurity Level:\x3c/em\x3e impossible\x3cbr /\x3e\x3cem\x3eLocale:\x3c/em\x3e en\x3cbr /\x3e\x3cem\x3eSQLi DB:\x3c/em\x3e mysql\x3c/div\x3e\x0a\x09\x09\x09\x3c/div\x3e\x0a\x0a\x09\x09\x09\x3cdiv id=\x22footer\x22\x3e\x0a\x0a\x09\x09\x09\x09\x3cp\x3eDamn Vulnerable Web Application (DVWA)\x3c/p\x3e\x0a\x09\x09\x09\x09\x3cscript src=\x27../../dvwa/js/add_event_listeners.js\x27\x3e\x3c/script\x3e\x0a\x0a\x09\x09\x09\x3c/div\x3e\x0a\x0a\x09\x09\x3c/div\x3e\x0a\x0a\x09\x3c/body\x3e\x0a\x0a\x3c/html\x3e'}