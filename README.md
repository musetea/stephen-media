# Media

## tilewind
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```
```js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

```vite.config.js
import tailwindcss from "tailwindcss";
css: {
        postcss: {
            plugins: [tailwindcss()],
        },   
    }, 
```
npm install -D tailwindcss postcss autoprefixer

### redux
- react-redux
- @reduxjs/toolkit

- npm install --save-exact @faker-js/faker@7.6.0 react-icons@4.6.0
- axios
- classnames