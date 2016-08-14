React Spalah App
============

---
[Demo](http://notesapp.onwebdev.net/)
---

### Getting up and running

1. Clone this repo from `https://github.com/OnwebdevNet/react-spalah-app.git`
2. Run `npm install` from the root directory
3. Run `gulp dev` (may require installing Gulp globally `npm install gulp -g`)
4. Your browser will automatically be opened and directed to the browser-sync proxy address
5. To prepare assets for production, run the `npm run build` task (Note: the production task does not fire up the browser-sync server, and won't provide you with browser-sync's live reloading. Simply use `gulp dev` during development. More information below)

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.


##### Production Task

Just as there is the `gulp dev` task for development, there is also a `npm run build` task for putting your project into a production-ready state. This will run each of the tasks, while also adding the image minification task discussed above. There is also an empty `gulp deploy` task that is included when running the production task. This deploy task can be fleshed out to automatically push your production-ready site to your hosting setup.

