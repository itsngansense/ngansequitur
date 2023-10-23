# ngansequitur creative studio website

design + art portfolio website using next.js, typescript, eslint, scss, and hosting with vercel

## setup + installation for macOS

before installing next.js, make sure you have your dev environment set up correctly. there are a few system requirements, such as [node.js v16.4](https://nodejs.org/) or later

### dev environment + system requirements

before installing node.js, you'll need to make sure you have **xcode command line tools** (an integrated dev environment (IDE) comprised of software dev tools) and **homebrew** installed on your macOS.

check if xcode is already installed using `xcode-select --version` and if it isn't, execute this command to install:

```zsh
$ xcode-select --install
```

check if homebrew is installed using `brew --version`

if it isn't, execute this command:

```zsh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

you'll then be given a few prompts to proceed, enter your password, and enter `y` to confirm installation. verify that homebrew is set up correctly, `brew doctor` should output `your system is ready to brew` if no updates are required.

once homebrew is set up, install node.js (which includes `npm` packages) with `brew install nodejs`

to check which version of node.js and npm you have: use `node -v` and `npm -v`

to update your version of node.js, first update homebrew `brew update` and then upgrade node.js itself `brew upgrade nodejs`

### create next.js app

to start a new next.js project with everything set up automatically, run:

```zsh
npx create-next-app@latest
```

### install sass

run the following command to install sass and use scss in your app:

```zsh
npm install sass
```

## local development

run the local development server [http://localhost:3000](http://localhost:3000)

```zsh
npm run dev
```

you can start editing the page by modifying `app/page.tsx` and the page will auto-update as you edit the file

## deployment

we'll use [vercel](https://vercel.com) to deploy our project and host our website.