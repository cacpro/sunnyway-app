# Sunnyway App

This is the Sunnyway app.

<h2>Local Development</h2>

Run the following commands from a terminal to perform livereload development:
ionic cap run ios -l
ionic cap run android -l

This will open the appropriate IDE and allow you to run the app in a simulator.

<h2>Build Process</h2>
npm run build

npx cap copy ios
npx cap copy android

npx cap open ios
npx cap open android
