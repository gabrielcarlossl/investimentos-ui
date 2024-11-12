# Investimentos UI

Investments-UI is a fake website that promotes and gives tips on  financial investments.
On the form screen, click the "Junte-se" PT translation button or "Introduce yourself" EN translation, in the header, then type your username in the input. It will make a GET request to the GitHub API at the /user endpoint. If you enter anything other than an existing username, it will say that you don't have an investor profile. Otherwise, it will say you have a good investor profile.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

What things you need to install the software and how to install them

* NodeJS v20 +
    - Install through [NVM - Node Version Manager](https://github.com/nvm-sh/nvm)
    - After instaling nvm, run ```nvm install 20```, followed by ```nvm use 20```
    - The application was tested with Node in versions at least 20.

### Installing and Running

* For development purposes, run the following command to install all the dependencies and to run the application, respectively:
  1. ```npm install```
  2. ``` npm run dev ``` (check the available command scripts at the *package.json* file)

## Built With

* ReactJS
* React Hook Form
* Redux Toolkit
* Axios
* I18 Translation 
* Material UI
* [GitHub API](https://docs.github.com/en/rest) 

## Authors

* **Gabriel Carlos** - *Initial work, Setup and Layout development* - [Gabriel Carlos](https://github.com/gabrielcarlossl)