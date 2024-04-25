# React Context Workshop

## Introduction

The objective of this workshop is to discover the notion of context in React with the implementation of a theme manager to switch from a light mode to a dark mode and vice versa.
![darkmodegif](./src/assets/exemple.gif)

### Ressources

[documentation](https://react.dev/reference/react/createContext)
[tutorial](https://www.freecodecamp.org/news/context-api-in-react/)

## Steps

- 1/ Create and export context objects and provider components in contexts/theme.js

- 2/ Initialize state of the theme in the context provider, the default value should be something like `dark` or `light`.

- 3/ Import the context on the `main.jsx` and encapsule all your routes within

- 4/ In the `Navbar.jsx` component, use the `useContext` hook to import your theme context and on click on the theme button switch the value of your context (`dark` <--> `light`).

- 5/ Import now your context in the `Home.jsx`, `Detail.jsx`, `Navbar.jsx` components, use your context value to apply the corresponding className `dark` or `light`
