# vueapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# To integrate with Pyze, do the following steps:

1. Add the tracking snippet in the index.js file or the file where the routes are defined.
2. Replace "YOUR_PYZE_APP_KEY" with the key obtained from your growth.pyze.com account for this app.
3. Call the Pyze.postPageView method within the afterEach method of your router instance. (See router -> index.js)
4. Call events in any of your component's .Vue file. (See components -> Hello.Vue)
