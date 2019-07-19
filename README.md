This is a simple TODO web app created with [Create React React App](https://github.com/facebook/create-react-app) and [AWS Amplify](https://aws-amplify.github.io/).

## Running this sample
1. `npm install`

1. `amplify init` (select `no` when prompted about existing environment, and enter your own desired environment name like `dev`)

1. `amplify push` (select `no` when asked about generating code for the GraphQL API)


1. `npm start`

1. Create an account, verify your code emailed to you during account creation, and log in.

1. Make some TODOs manually in the broweser or try running the end-to-end automated integration tests.


## Running end-to-end tests locally
1. Update `src/tests/pages/signIn.js` with the username and password you used to create an account above.

1. `npm run test:integration`

Edit `jest-puppeteer.config.js` to toggle headless mode or to change the local dev server config.

## Running the load tester lambda
```


ENV_NAME=$(jq -r .envName amplify/.config/local-env-info.json)
LOAD_TESTER_FUNCTION_NAME=$(jq -r '.function | keys[0]' amplify/backend/backend-config.json)
aws lambda invoke \
--profile=$PROFILE_NAME \
--function-name "$LOAD_TESTER_FUNCTION_NAME-$ENV_NAME" \
--payload '{ "mode": "master", "workers": { "count": 1 } }' \
--log-type Tail \
--query 'LogResult' \
--output text \
/dev/null \
|  base64 -D
```
