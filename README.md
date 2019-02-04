# ReachFive React Sandbox

This sandbox showcases how to use the ReachFive SDK along with two of its widgets in a SPA setup

## Requirements

* Yarn

## Install

    git clone git@github.com:ReachFive/reachfive-sandbox-react.git
    cd reachfive-sandbox-react
    yarn

## Configuration

Copy `.env` to `.env.local` and replace the values for `REACH5_DOMAIN`, `REACH5_CLIENT_ID`, and `REACH5_CLIENT_SECRET` with your ReachFive credentials.

Do not forget to add `http://localhost:3000` in the allowed origins (CORS) field of your Reach5 client.

## Run

    yarn start

You can now see the app running at `http://localhost:3000`.

## Author

[ReachFive](https://reachfive.co)
