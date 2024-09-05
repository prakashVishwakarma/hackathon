# ####################################################################################

#  TASK UPDATE

#  1 WEBSITE LINK    =  https://prakash-hackathon.netlify.app/
#  1 GITHUB  LINK    =  https://github.com/prakashVishwakarma/hackathon

#  1  UI IMCOMPLETE WITH RESPONSIVENESS AND ALL
#  2  ADDED LOGIN SIGNUP UI, FUNCTIONALITY AND VALIDATION
#  3  ON HOME PAGE "Create Challenge" BUTTON HAS A VALIDATION 
#  4  ON DETAILS PAGE Edit and Delete BUTTON HAS A VALIDATION 
#  5  IF YOU ARE ON A HOME PAGE AND DELETE LOCAL STORAGE DATE THEN PAGE REDIRECT TO SIGNUP PAGE
#  6  I CAN IMPROVE UI AND THE FUNCTIONALITY BUT DUE TO THE DEADLINE I COULD NOT. PLEASE GIVE MORE TIME TO COMPLETE THE TASK
#  7  IN CARD UI Active, Upcoming AND Past TEXT UPDATE DYNAMICALLY ALSO ADDED easy, mediam and hard TEXT IN THE CARD UI
  
#  REQUEST- PLEASE GIVE ME SOME MORE TIME TO COMPLETE THE TASK. I CAN DO IT 

#  HERE ARE SOME MORE PROJECTS TO ASSESS ME WHICH IS SIMILAR TO HACKATHON PROJECT

#  PROJECT 1

#  1 WEBSITE LINK    =  https://my-todos-v2.vercel.app/
#  1 GITHUB  LINK    =  https://github.com/prakashVishwakarma/my-todo-v2
#  1 EXPLANATION     =  ( MULTI USER LOGIN TODO ) THIS IS THE TODO APP WHERE USER CAN LOGIN SIGNUP AND USER CAN CRUD ( CREATE READ UPDATE DELETE ) THE TODO
#                       YOU CAN USE INDIVIDUAL USER AS A INDIVIDUAL BROWSER'S TABS TO CHECK THE MULTI USER LOGIN TODO

#  PROJECT 2

#  2 WEBSITE LINK    =  https://my-todo-kohl.vercel.app/
#  2 GITHUB  LINK    =  https://github.com/prakashVishwakarma/my-todo
#  2 EXPLANATION     =  ( SINGLE USER LOGIN TODO ) ONLY ONE USER CAN USE THIS APP, VERY SIMPLE AND BASIC APP

#  ####################################################################################





















# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```