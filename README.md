# Habit Tracker: store build kit

The whole app is `www/index.html`. Everything else wraps it:
- **Capacitor** turns it into an Android and an iOS app.
- **Electron** turns it into a Windows, Mac or Linux program.

## 0. One-time setup
1. Install Node.js (LTS) from nodejs.org.
2. In this folder run:

       npm install
       npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
       npm install -D @capacitor/assets electron electron-builder

3. Change the app ID `com.yourname.habittracker` to your own (for example `com.janedoe.habits`) in **both** `capacitor.config.json` and `package.json` (under `build.appId`). It can't be changed after you publish.

## 1. PC (Windows, Mac, Linux)
    npm run desktop      # try it in a window
    npm run dist:win     # installer in dist/ (.exe), build this on Windows
    npm run dist:mac     # .dmg, build this on a Mac
    npm run dist:linux   # .AppImage

Unsigned Windows installers show a SmartScreen warning. A code-signing certificate removes it. To list it in the Microsoft Store, check Microsoft's current developer registration terms.

## 2. Android (Google Play)
    npx cap add android
    npm run icons
    npx cap sync
    npx cap open android

In Android Studio: Build > Generate Signed App Bundle (AAB). Keep the keystore file and password safe. Upload the AAB in Google Play Console (one-time developer fee, currently $25). New personal accounts must run a closed test before going public.

## 3. iOS (App Store), requires a Mac with Xcode
    npx cap add ios
    npm run icons
    npx cap sync
    npx cap open ios

In Xcode: choose your Team under Signing, then Product > Archive > Distribute App. Submit in App Store Connect (Apple Developer Program, currently $99 a year).

## Updating
Edit `www/index.html`, then run `npx cap sync` for mobile or rebuild for desktop.

## Notes
- Fonts load from Google Fonts. Offline, the app falls back to system fonts. For the exact look offline, download Orbitron and Rajdhani, put them in `www/fonts/` and point `@font-face` at them.
- Data is saved on each device. There is no sync between devices.
- Apple can reject apps that are only a website in a wrapper. Adding native features such as local reminder notifications (`@capacitor/local-notifications`) helps with review.
