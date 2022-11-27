# Remix Starter

Starter files and defaults for getting started on a remix project.

## What's in the stack

-   [Netlify](https://netlify.com/) deployment to the [Edge](https://www.netlify.com/products/edge) + deploy previews and CI/CD
-   [Playwright](https://playwright.dev/) end-to-end testing
-   [Vitest](https://vitest.dev/) for unit/integration testing
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-   [Prettier](https://prettier.io) code formatting
-   [Stylelint](https://stylelint.io/) linting scss/css
-   [ESLint](https://eslint.org) linting
-   [TypeScript](https://typescriptlang.org) static typing

---

## Development

-   Install all dependencies & the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

    ```sh
    npm install
    ```

<details>
<summary>Optional: Setting up Netlify</summary>

-   Install netlify cli

    ```sh
    npm install netlify-cli -g
    ```

-   Create or connect to your Netlify project by running through the Netlify `init` script:

    ```sh
    netlify init
    ```

    </details>

### Running Locally

The Remix dev server starts your app in development mode, rebuilding assets on file changes. To start the Remix dev server:

```sh
npm run dev
```

The Netlify CLI builds a production version of your Remix App Server and splits it into Netlify Functions that run locally. This includes any custom Netlify functions you've developed. The Netlify CLI runs all of this in its development mode.

It will pull in all the [environment variables](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables) of your Netlify project. You can learn more about this project's Supabase environment variables in [the Database section below](#database).

To start the Netlify development environment:

```sh
netlify dev
```

<details>
<summary>Developing with Netlify cli</summary>

With Netlify Dev you can also:

-   test functions
-   test redirects
-   share a live session via url with `netlify dev --live`
-   [and more](https://cli.netlify.com/netlify-dev/) :)

Note: When running the Netlify CLI, file changes will rebuild assets, but you will not see the changes to the page you are on unless you do a browser refresh of the page. Due to how the Netlify CLI builds the Remix App Server, it does not support hot module reloading.

</details>

---

You can add your environment variables to an `.env` file (like shown in the sample [`.env.sample`](./.env.sample)) which will not be committed publicly because it is added to the `.gitignore` file. Or you can add it to your Netlify project environment variables (Site settings/Build & deploy/Environment) as shown in the [Development section](#development) so that they can be [easily shared with teammates](https://www.netlify.com/blog/2021/12/09/use-access-and-share-environment-variables-on-netlify).

---

## Deployment

This stack has the Netlify [configuration file (netlify.toml)](./netlify.toml) that contains all the information needed to deploy your project to Netlify's [edge nodes](https://www.netlify.com/products/edge).

### Deploy from the Command Line

Clone this repo with the `git clone` command. Then install the [Netlify CLI](https://docs.netlify.com/cli/get-started/) tool and run `netlify init`.

```sh
git clone <your repo>

npm install netlify-cli -g # to install the Netlify CLI tool globally

netlify init # initialize a new Netlify project & deploy
```

### CI/CD

Using the the `init` process will also set up continuous deployment for your project so that a new build will be triggered & deployed when you push code to the repo (you can change this from your project dashboard: Site Settings/Build & deploy/Continuous Deployment).

You can also use `netlify deploy` or `netlify deploy --prod` to manually deploy then `netlify open` to open your project dashboard.

> 💡 If you don't use `--prod` on the deploy command you will deploy a preview of your application with a link to share with teammates to see the site deployed without deploying to production

---

## Testing

### Playwright

I have set up the basic configuration files for [Playwright](https://playwright.dev/) End-to-End tests in this project. You'll find those in the `e2e` directory.

To run these tests in development, run `npm run test:e2e` which will start the dev server for the app and run your tests.

If you want to debug any tests you can run `npm run test:e2e:debug` which will open the test with the Playwright debugger.

You can also run `npm run test:e2e:codegen` and perform actions in the browser, Playwright will then generate the code for the tests.

### Vitest

I also have setup basic config for testing with [Vitest](https://vitest.dev/).

Use [`@testing-library/react`](https://testing-library.com/react) for selecting elements on the page semantically.

Run `npm run test:watch` to start the test runner.

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting your JavaScript / Typescript files. That is configured in `.eslintrc.js`.

We're also using Stylelint for linting Sass / css files. That is configured in `.stylelintrc.json`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
