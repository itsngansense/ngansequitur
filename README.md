# ngansequitur creative studio website
design + art portfolio website using next.js, scss, and hosting with vercel

## setup + installation for macOS
before installing next.js, make sure you have your dev environment set up correctly. there are a few system requirements, such as [node.js v16.4](https://nodejs.org/) or later

### dev environment + system requirements
before installing node.js, you'll need to make sure you have **xcode command line tools** (an integrated dev environment (IDE) comprised of software dev tools) and **homebrew** installed on your macOS.

check if xcode is already installed using `$ xcode-select --version` and if it isn't, execute this command to install:
```
$ xcode-select --install
```

check if homebrew is installed using `$ brew --version`

if it isn't, execute this command:
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
you'll then be given a few prompts to proceed, enter your password, and enter `y` to confirm installation.

verify that homebrew is set up correctly, `$ brew doctor` should output `your system is ready to brew` if no updates are required.

once homebrew is set up, install node.js (which includes `npm` packages) with `brew install nodejs`

to check which version of node.js and npm you have: use `node -v` and `npm -v`

to update your version of node.js, first update homebrew `brew update` and then upgrade node.js itself `brew upgrade nodejs`




