
echo Building app...
rem ionic cordova build android --release

echo Signing app...
rem jarsigner --verbose --sigalg SHA1withRSA --digestalg SHA1 --keystore timelapser.keystore platforms\android\build\outputs\apk\android-release.apk timelapser

echo Zipaligning app...
zipalign -v 4 platforms\android\build\outputs\apk\android-release.apk final.apk

echo Extracting key for Google Play Store use
keytool -exportcert -keystore timelapser.keystore -list -v
