# New York Times article search application
## How to run this project
1. Run `npm install` to install all the dependencies
2. Create an `.env` file with
`REACT_APP_API_KEY=<YOUR_API_KEY>`
and place it at the root of the project (next to package.json)
3. Run `npm start` to start the local server
4. Open `localhost:3000` in your browser

Notes:
The .env file creates some obfuscation but the environment variable value is still going to be in the build so it's not the best solution. The best would be to have a server proxy. That server would be the one with the API key and it would add it to the client-side requests before contacting the API.