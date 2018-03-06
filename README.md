# homework

## Dev server

for running server 

````
npm run dev
```` 

for frontend part

````
npm run webpack
```` 

for run test 

````
npm run test
```` 

page for testing is available on `localhost:{port}/`

## Ways to go beyond the minimal solution
- phone keyboard -like UI = `nope`
- great project setup = `nope`
- mobile app in React Native = `nope`
- filtering to include only real words based on a suitable word list = `partly yes`


### Filtering words based on static file

in `config.js` need to be set `useWordslist` on true.

You can add new words via request PUT `localhost:{port}/phonewords`

request body should be array

````
["pridej", "si", "sva", "vytouzena", "slova"]
```` 