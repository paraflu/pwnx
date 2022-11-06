 # Jurassic Travel

 `nmap` to get some info. Is a ngix web server. Plain homepage, found some data in robots.txt

 ```

        _____
     _.'_____`._
   .'.-'  12 `-.`.
  /,' 11      1 `.\
 // 10      /   2 \\
;;         /       ::
|| 9  ----O      3 ||
::                 ;;
 \\ 8           4 //
  \`. 7       5 ,'/
   '.`-.__6__.-'.'
    ((-._____.-))
    _))       ((_
   '--'       '--'

I'm the God of Time, it is over for these big chickens! It is the TIME of the extinction and noone can stop my PLAN!

Noone should know about my cutie time machine!

r3s3t_t1m3M4ch1N3.php

Ok but... Why am I talking alone? And where did I put the Time Machine instructions?

No worries! It is encrypted!

Before I delete these chickens from the planet, I need to think about my doubts about dinosaurs... Ok, later I continue on my philosophical_notes.txt

I'm still talking alone, I'm going to get some Jurassic KFC...
```

So I've a page to visit `http://10.10.10.6/r3s3t_t1m3M4ch1N3.php` ad a file to read `philosophical_notes.txt`

Here the notes in `philosophical_notes.txt`

```
############################################
#                                          #
#               TIME NOTES                 #
#                                          #
############################################

...

                         .       .
                        / `.   .' \
                .---.  <    > <    >  .---.
                |    \  \ - ~ ~ - /  /    |
                 ~-..-~             ~-..-~
             \~~~\.'                    `./~~~/
   .-~~^-.    \__/                        \__/
 .'  O    \     /               /       \  \
(_____,    `._.'               |         }  \/~~~/
 `----.          /       }     |        /    \__/
       `-.      |       /      |       /      `. ,~~|
           ~-.__|      /_ - ~ ^|      /- _      `..-'   f: f:
                |     /        |     /     ~-.     `-. _||_||_
                |_____|        |_____|         ~ - . _ _ _ _ _>


Can this dinosaurhide? What is its name... St...something... I don't remember...

For sure, it is so big that can only hide itself on a big landscape.

...

```

Ok thanks to zan.e on discord I'm on the right way. The solution is st...eganograpy on the single image on the site.

I've tried `stegbrute` with this command line `stegbrute -f 1773.jpg -w /snap/seclists/current/Passwords/500-worst-passwords.txt`

Here the result

```
Bruteforcing the file '1773.jpg' with the wordlist '/snap/seclists/current/Passwords/500-worst-passwords.txt' using 3 threads
password try: angela - Success 
File extracted!
Password: angela
Results written in: stegbrute_results.txt
Tried passwords : 319
Successfully cracked in 1.63s
============================================================
```

Now time to extract data with `steghide` and get `
