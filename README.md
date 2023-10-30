# maid-app-using-similarity-search
This documentation will help you at installation of the product easily and quickly . Please go through the documentation carefully to understand how to set up the code and get everything running smoothly. We have tried our best to document each and every steps for any beginners or with intermediate expertise to get the app up and running.

Requirements
You will need the following sofwares to customize this template.

Code Editing Software (eg: Visual Studio Code , Sublime Text or Notepad Plus)
Web Browser for testing (eg: Google Chrome or Mozilla Firefox)
FTP Tool to upload files to Server (eg: FileZilla)
To deploy to iOS you need Mac Machine with X-Code installed.
To publish the app on Apple App Store you need an active Apple Developer Account.
To publish the app on Google Play Store you need an active Google Play Developer / Publisher Account.
Though we have made every attempt to document all steps to get you going, we assume you to have some basic knowlege of Mobile programing or Web to get this up and running. Please note that this app was built using ionic Capacitor.



**Demo Walkthrough**
**iOS App Demo**
The iOS App can be downloaded from here: iOs App for Customers & Cleaners
https://drive.google.com/drive/folders/1hFcB2XseJdtwKllu91RKe2f2SeeoLIVv?usp=sharing

**Android App Demo**
The Android App can be downloaded from here: Android App for Customers & Cleaners
https://drive.google.com/drive/folders/1hFcB2XseJdtwKllu91RKe2f2SeeoLIVv?usp=sharing
**Backend Admin Demo**
The backend admin control panel can be viewed here https://cleaners.v1tl.com/admin/login
Username: admin@demo.com
Password: demo123

**App Login Details**
For demo purposes you can use these accounts to login:
User Account:user@demo.com Password: demo123
Cleaner Account:cleaner@demo.com Password: demo123


 
**Requirements: **
1. Domain Name 
2. Hosting Account with Access to Database 
3. Google Playstore Account  
4. Apple App Store Account  
5. Firebase Account 
6. One Signal Account 
7. Stripe Account for Payments 
8. Google’s Geo-Coding enabled project api key 
**Step by Step Installation Guide: Once you have set up the server or if you are on a shared hosting and have access to the FTP or cPanel, the following step by step guide will help you do a full installation. You wi**ll need ionic setup for the installation to work. 
1. Uploading Web & Admin Files: 
a. Go to your cpanel (e.g.: www.domainname.com/cpanel) and login with your username and password. 
b. Under 'File' section click "File Manager" 
c. Double click public_html or your www root folder 
d. Under public_html or your www root folder upload all admin and api files 
 
2. Database Creation: 
a. In your cPanel under "Database" section click "MySQL® Database Wizard" 
b. Type new database name then click "Next" 
c. Enter username, Password twice then click "Create User" 
d. Checked "ALL PRIVILEGES" then click "Next Step" 
e. Click "Return Home" 
 
3. Go to file manager edit .env file then change all the creden5als and save the file. 
 
4. Firebase setup: 
a. Open 
**https://console.firebase.google.com**
 and login using your id and password. If you don’t have one, you will need to create a new one. 
b. Click Create project 
c. Enter project name then follow the next process 
d. Go to project setting on firebase console 
e. Got to cloud messaging > copy Server key and Sender ID 
f. Go to projects overview and click on add app, proceed android and iOS both one by one. 
g. For iOS you need to generate a .p8 file from your apple’s developer account and upload on firebase when asked. 
h. Download the both json file provided by firebase, and put those in the app’s root folder when you are about to setup the app. 
https://v1technologies.co.uk  v1technologiesuk@gmail.com  
V1 Technologies 2021  
 
5.  One signal Setup: 
a. Open 
**https://onesignal.com**
 and login using your id and password. If you don’t have one, you will need to create a new one. A free account is fine to begin with. 
b. Create new app 
c. Enter Name of your app or website 
d. Select the platform then click configure your platform 
e. For android Enter Firebase Server Key and Firebase Sender ID and finish, for iOS export a .p12 cer5ficate from Apple’s push no5fica5on cer5ficate and upload(instruc5ons also available on one signal).  
f. After comple5ng the process go to Keys and IDs and copy ONESIGNAL APP ID and paste it in your config file located in your server where you uploaded all the files (edit .env file) 
 
6. Create an Email for sending out Order Emails: Generally we use noreply@ 
a. Go to cPanel search "Email" then click "Email Account" 
b. Click create 
c. Enter email and password then click create below 
d. For SMTP setting go to Connect Device from right side in the all email listing 
e. Get the all SMTP email and email credentials put into config file located in your server where you uploaded all the files (application>config> edit config.php) 
 
7. Google Console setup for Geolocation and Geocoding keys for distance calculation. (Remember to Enable Billing for your app, otherwise it will not work.) 
a. login into google 
**https://console.cloud.google.com/**
 
b. Complete the procees "Step 1 of 2 Account Information” 
c. Click APIs and Services (on the left side) 
d. Click "APIs and Service" on the top side 
e. Click Enable APIs and Service 
f. Search Geocoding API then click "Enable" 
g. Search Geolocation API then click "Enable" 
h. On left side click "Credentials" then click "Credentials in APIs & Services" 
i. On top click "Create Credentials" then click "API key" 
j. Copy and put the api key on config file located in your server where you uploaded all the files (.env file) 
k. **Remember to Enable Billing for your app, otherwise it will not work.** 
 
8. App Environment Setup 
a.  Install Node.js (
**https://nodejs.org/en**
) 
b. Install Ionic framework run “npm install -g @ionic/cli“  
c. Install Cordova-res run “npm install -g cordova-res“  
d. Install iOS deploy run “npm install -g ios-deploy”  
e. Install Xcode and Android studio 
 
  
9.** App Setup **
a. Extract all the files on your Mac System / Windows PC 
b. Replace icon and splash into Customer APP Folder > resources> 
c. Open terminal from user app folder or use Putty if you are using a Windows PC 
d. Type "npm install" in your app’s root directory. 
e. Edit the project folder > capacitor.config.ts file and change the appId & appName  
f. Go to project folder > src > environments 
g. Open environment.ts file then change all the credentials as relevant.  
h. Now add platorms using this command "ionic cap add android" and “ionic cap add ios"  
i. Run "cordova-res ios --skip-config —copy" and "cordova-res android --skip-config -- copy" (for icon and splash regenera5on)  
j. Run "ionic cap build android” or “ionic cap build ios” to build the app  
k. Connect device or open simulator for app run. 
 
10. Please change any text or logo or branding or icons etc as desired. You will know all of this when you test the app. 
 
11. Next step is to sign and upload your app on the relevant app stores. Please refer to various online help or YouTube videos on how to upload your app on the app store and play store. 

 
**If doing the full setup, we would need from you the following: **
1. Domain Name 
2. Hosting Account with Access to Database 
3. Google Playstore Account  
4. Apple App Store Account  
5. Firebase Account 
6. One Signal Account 
7. Stripe Account for Payments 
8. Google’s Geo-Coding enabled project api key 
9. Logo 
10. Colour Theme / Colour Codes 
11. Splash Screen Branding 
12. App Icon 
13. Any other Images / Icons that you want us to change. 
14. Any text you want us to change 
15. App Name 
16. App Description 
17. Email SMTP Details for outgoing mail. Preferably noreply@yourdomain.com 
