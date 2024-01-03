/** Laying the foundation **/

E3 P1 - TOPICS

- what is npx parcel index.html?
- how do we create different scripts in Dev and Prod?
- How do we run on our app in dev and prod?

npx parcel index.html
(We are executing a npm) + (package) + (We give a source file {index.html})

They are different for dev and prod build
We will create a different command instead of writing this again and again

- We need to make use of 'scripts' in the package.json file and configure it
- we will create one for development and one for production

package.json:
"scripts: {
"start": "npx parcel index.html", // Runs our project in dev build by running this script
"build": "npx parcel build index.html", // Runs our project in prod build by running this script
"test": "jest"
}

- Writing it like this is a industry standard

How do we run on our app in dev and prod?

- We make use of the following commands:

npm run start / npm start - command to run/ start the app in DEV
npm run build / npm build - command to run/ build the app in PROD
