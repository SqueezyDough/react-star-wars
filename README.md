# Star Wars Universe
This project was intended for educational purposes to learn React.js and the code / workflow standards at [INFO](https://info.nl)

## Table of contents
- [Application](#application)
- - [Description](#description)
- - [Data](#data)
- [Prerequisites](#prerequisites)
- [Environment variables](#environment-variables)
- - [Variables](#variables)
- [Install notes](#install-notes)
- - [Create empty directory](#create-empty-directory)
- - [Clone repo](#clone-repo)
- - [Install dependancies](#install-dependancies)
- [Usage](#usage)
- [Sources](#sources)
- [License](#license)

---

## Application
### Description
Star Wars Universe (SWU) shows characters and other entities from the Star Wars universe. 

![image](https://user-images.githubusercontent.com/33430653/94445009-3e38ad00-01a7-11eb-8f28-1cc871967202.png)

The user sees an overview of all selected characters, filtered by category.

---

![image](https://user-images.githubusercontent.com/33430653/94445028-455fbb00-01a7-11eb-81aa-8ca33cdd2519.png)


The user sees character details and a list of other characters from that category that includes the first character in its name.

### Data
#### API
The application consumes the [Star Wars](https://swapi.dev/) API for all its data.

#### Categories
- People
- Planets
- Films
- Species
- Vehicles
- Starships

#### Character properties
The character properties may differ per character type, see [Listed properties](https://bitbucket.org/infonl/internship-bootcamp/src/master/src/data/listed-props.json).


---

## Prerequisites
Make sure you have the following package(s) installed.

- [NodeJS](https://nodejs.org/en/)

---

## Environment variables
Before you run the application you should create a .env file in your root directory.

### Variables
To get access to environment variables, create a [new issue](https://bitbucket.org/infonl/internship-bootcamp/issues?status=new&status=open) for this repo.

---

## Install notes
### Create empty directory
Create a folder wherever you like and type `cd <path>` in your terminal.

### Clone repo
`git clone git@bitbucket.org:infonl/internship-bootcamp.git`

### Install dependancies
`npm install`

---

## Usage
- To start the application: `npm run start`
- To build the application: `npm run build`
- To test the application: `npm run test`

---

## Sources
- [React docs](https://reactjs.org/)
- [Testing docs](https://jestjs.io/)
- [Styling components](https://styled-components.com/)
- [Git hooks](https://github.com/typicode/husky)
- [Commit linter](https://commitlint.js.org/#/)
- [JS linter](https://www.npmjs.com/package/standard)

## License
[MIT](https://opensource.org/licenses/MIT) - INFO
