#### Server --help

##### To init the project.
  ```
    npm init -y
  ```

##### Packages:
  ```
    yarn add --dev nodemon babel-cli babel-preset-env babel-preset-stage-3
  ```

##### Setup nodemon to start the server:
  ```
    "start": "nodemon --exec babel-node index.js"
  ```

##### Setup babelrc
  ```
    { “presets”: [“env”, “stage-3”]}
  ```

##### Setup GraphQL Apollo-Server
  ```
    yarn add express apollo-server-express merge-graphql-schemas
  ```

##### Setup database
  ```
    yarn add sequelize pg
  ```
