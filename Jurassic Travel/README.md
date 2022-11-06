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

Now time to extract data with `steghide` and get `time_package.zip`, also password protected, now is time of fcrackzip.

Easy `fcrackzip -u -D -p /usr/share/wordlist/rockyou.txt time_package.zip ` and get the password `PASSWORD FOUND!!!!: pw == 1friends1`

The zip file contains this message

```
gzzzzzz......

Hello...gzzzzz...fellow, I'm Piero, my zzzission..ziii..goin..on.. ..gzzsteroid....kill ev.ry cutie dino...

..ZzzZI took a break...ip...cannot stay here anymore..gzzzhey...p.trackin..communicati..i...

I landed on several epochs and I was near the death... Try to search for the best time period for meeting dinosaurs... the best for you, not for them... the beginning for them, not for you...
...
I'll try..gzzz.do.....same...See..you...gzz..hope...

...gzZZz..give..u..this.. 

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

they...gZZzz..can.t..gzz.decode.it..trust...gZzzZ111Pp..yOu

P. A.

zZzzzZ......

```

Tried to base64 decode it  `echo H4sI..nITAAA= | base64 -d | gzip -d` and got this

```

              ____                  _                        _     _            
             /___ \_   _  __ _ _ __| | __   /\/\   __ _  ___| |__ (_)_ __   ___ 
            //  / / | | |/ _` | '__| |/ /  /    \ / _` |/ __| '_ \| | '_ \ / _ \
           / \_/ /| |_| | (_| | |  |   <  / /\/\ \ (_| | (__| | | | | | | |  __/
           \___,_\ \__,_|\__,_|_|  |_|\_\ \/    \/\__,_|\___|_| |_|_|_| |_|\___|
                                                                      
                         @                                                                
               @                &                                                         
                     ,/%&/,                                                               
         ,&    ,@##(,,**/(####@*     &@                                                   
             (&#(**,,*(#######&#@(                                                        
            #%#(**/############@#%#                                                       
           .@##(/#################&                                                       
              (@@#############%@#     (          .                                        
                     .#(((/     @/*% . (         (   @(*%                                 
                      #(//*     @((&(( ..#   ,,/( (/ @(/@                                 
                     .((//*     @((&      # *(  .    @((&                                 
                 #@@&(%(/(#/////@((&///////((////////@((@&&&%#/((#%##%&&%&&@@@@@&*.       
            #@@//////////////////((//////////////////(@&////////////////(@%****,,,&       
         .@&%####((((((///////((((###((((((((((###%%%%&@&&%%%&%%%//&%/*****/(///,,@       
        .&##(((((//((((//////////////////////////////////(((//((###(///(((////(/**%       
        .@##((..((((((((((((((((((((((((((///////////////////...###((((((((((((/*/(       
         @###((((((((((((((((((#@@#,        ,#@%((((///////((((((##(((((#%/*******@###(   
         &###((((((((((////@@ ....,......../../.. @((((((((((((((#%(((((#@%##%%%&&@@@&    
  .@(((((@%#(((((((((///#@  (.....      ........(...%#(((((((((((#&(((((((((((((((@,      
   #    ,@%(((((((((//(@,../..   @@#           .../...@(((((((((((@(((((((((((&(***,,*/@  
   @%  # @#(((((((((((@ .....    , .(     @@@.   ......&((((((((((@(((((#&%%&**,,,,.,,**@*
   %     @(((((((((((@,               & #% **     ..*** @(((((((((&((((&****#***********#(
   @.  @ @#(((((((((((((((((((((((((((((((((((((####%#%#((((((((/(#%((((%@&@@********&**@*
  %,     @#((((((((((((((((((((((((((((((((((((((((((((((((((((//(&#(((((##(((@/*****#@&* 
   @(***(&#(#((((((((((((((((((((((((((((((((((((((((((((((((((//(@#((((((((((((((&/      
    @@@@@%##(((((////////////((((((((((((((((((((((((((((((/(((//(&(((((((((((((((@/      
         &((((((&***********&(((((#(********(%(((((((//##&#(/(///(&(((((((((((((((@(      
         %((((((&***********#((((&**#......@*/&(((((//@####&#(///(@((((((&%(//////##((@   
         %#(((((@***********##((#**/(......@**&((((/#%######@#(/((&(((((((&%%&@@@@@&%&    
         &((((((&***********#((((@***&/,(@%**%##(((@##########%(((&#((((((###(((((&@      
        ,&((((((((#((#((###(#(((((#&*******(###((((&##%%&&&&&@&#((%((((((((((((((%@/      
        /@((..,#(//(((/((((((((((((((###(#(#((///(((((((((((((..@(&(((((((((&@#*,......   
        ,@####(((((////////////////////////////////////(((((((((((&###&@#,&%#((((((*,,,,  
              *@##############@###%#/////////////@########%%%%@&&@*(###%%(,,,,/           
            ,,,/@@@@@&@@@@&&@@@%*,***/////,,,,,,,#@@@@@@&&@@@@&,,,,,,,,,,                


                   _____           _                   _   _                 
                   \_   \_ __  ___| |_ _ __ _   _  ___| |_(_) ___  _ __  ___ 
                    / /\/ '_ \/ __| __| '__| | | |/ __| __| |/ _ \| '_ \/ __|
                 /\/ /_ | | | \__ \ |_| |  | |_| | (__| |_| | (_) | | | \__ \
                 \____/ |_| |_|___/\__|_|   \__,_|\___|\__|_|\___/|_| |_|___/
                                                            

# Chapter 1: The Quark Machine

This document discusses about the usage of Quark Machine, allowing the user to travel across the epochs with no risks during the process.

# Chapter 2: Configuration

The configuration of Quark Machine is very easy! Just insert the time value you need and hope to land on a rock surface.

# Chapter 3: Time Token

Quark Machine Time Token formula => token = md5(T)

where T is the time value in Years!

The time reference of Quark Machine is the present time.

# Chapter 4: Examples

Would you like to visit the Cenozoic? token = md5(66000000) = 830708439e5810eac84535866012b49a

Do you prefer to land on Earth during Jurassic epoch? token = md5(201000000) = 9603b31ca8a878504a55597ce63438da

# Chapter 5: Warnings

Be careful to insert time values. You could land on dangerous environments, full of predators or toxic atmosphere!

```