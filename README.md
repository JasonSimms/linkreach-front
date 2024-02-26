# LinkReach (formerly My Bitly) FrontEnd UI & Admin

This is a front end react UI for interacting with my-bitly API [INSERT LINK HERE]('INSERT LINK HERE')

It should provide 3 purposes:
- [ ] Provide a demonstration of the API uses as a demo w/ fake data (FUZZ DATA NEEDED)
- [ ] Provide actual consumption methods of the my-bitly API for myself (AUTH NEEDED)
- [ ] Provide user specific functionality of my-bitly(my-bitly v2)



### TODO
- [x] Build Campaign Table - Heart of the app displays each Campaign and its click history. Collapsable Table
- [ ] Build Link Form - User Input  regarding a link that will be re-used in multiple campaigns. 
- [ ] Build Campaign Form - Let user input info and tags regarding a specific application to generate unique links
- [ ] Build Campaign Card - Displays Generated Links for Consumption
- [ ] Build modal editing of existing content
- [ ] Build Error handling in modal or toast
- [ ] Add Visualization Graph
- [ ] Style into a flow w/ Auth add navbar
- [ ] Add Auth
- [ ] Add backend or mock SQL



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
