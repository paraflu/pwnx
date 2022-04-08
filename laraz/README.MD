# LARAZ

```10.10.10.11```

# Portscan

`rustscan -a 10.10.10.11 --ulimit 5000`

Found port

- 8000

  Laravel v8.76.2 (PHP v7.4.3)



# Directory fuzing

`feroxbuster -u http://10.10.10.11:8000 -w /usr/share/wordlist/dirbuster/directory-list-2.3-medium -o feroxbuster.log`

200      GET      119l      979w        0c http://10.10.10.11:8000/
200      GET      119l      979w        0c http://10.10.10.11:8000/
200      GET      119l      979w        0c http://10.10.10.11:8000/
200      GET        0l        0w        0c http://10.10.10.11:8000/.htaccess
200      GET        0l        0w        0c http://10.10.10.11:8000/favicon.ico
200      GET        0l        0w        0c http://10.10.10.11:8000/hello
200      GET      119l      979w        0c http://10.10.10.11:8000/index.php
200      GET        2l        3w       24c http://10.10.10.11:8000/robots.txt
200      GET       28l       74w     1194c http://10.10.10.11:8000/web.config



