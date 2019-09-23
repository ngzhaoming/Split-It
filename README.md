# Split-It user guide

__Table of contents__

<a href="#1">1. General Information</a>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#1.1">1.1 System overview</a>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#1.2">1.2 Organization of READ.me</a>
<br>
<br>
<a href="#2">2. Getting Started</a>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#2.1">2.1 Installation of Split-It</a>
<br>
<br>
<a href="#3">3. Using Split-It</a>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#3.1">3.1 Account Creation</a>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#3.2">3.2 Features of Split-It</a>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#3.2.1">3.2.1 Splitting Methods</a>
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#3.2.2">3.2.2 OCR recognition</a>
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#3.2.3">3.2.3 Financal Tracker</a>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#3.3">3.3 Administrative matters</a>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#3.4">3.4 Help and support</a>
<br>

<a href="#4">4. Feedback and Contact us</a>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#4.1">4.1 Contact us</a>


---
## <a id="1">1. General Information</a>
### <a id="1.1">1.1 System overview</a>
Welcome to Split-It! Split-It is is a mobile application created using React Native which functions on both Android and iOS devices. Ever felt that bill-splitting of sharing meals with your friends, or settling utility bills with your other room mates a chore? Worry no more cause Split-It is here to convenience your life! With Split-It, it will help facilitate your bill-splitting activities and ensure that everyone pays their share hassle free! What are you waiting for? Get a copy of your Split-App application today!
<br>

### <a id="1.2">1.2 Organization of READ.me</a>
The user's manual consists of 4 sections: General Information, Getting Started, instructions on how to use Split-It and Feedback and Contact us.
<br>

| Section   | Description    | 
|-----------|------------|
| General Information    |Gives a broad overview of what Split-It does and the <br> purpose for which it is intended
| Getting started			 |Instructions to installing Split-It and the commands <br> to run the application|	
| Using Split-It  |Gives a step-by-step instruction on how to use <br> the features in Split-It| 
|Feedback / Contact|Provide information to contact the creator of Split-It|   
<br>

---

## <a id="2">2. Getting started</a>
### <a id="2.1">2.1 Installation of Split-It</a>
To get your very own of Split-It, go to my GitHub [Split-It](https://github.com/ngzhaoming/Split-It) repository. At that page, click the button `clone or download` and download the zip file. Open up Terminal (**macOS**) or Command Prompt (**Windows**) and navigate to the repository directory that was downloaded.
<br>
<br>
1. &nbsp;Download Expo application onto your phone and create an account in the Expo app
2. &nbsp;From the terminal that you are using, go to the directory `Split-It master` located &nbsp;within the repository. 
3. &nbsp;Install the node modules for this application first by typing `npm install` 
4. &nbsp;Once the installation for the node modules is done, type `expo start` to open up the &nbsp;metro bundler and run the app. A QR code will be made available in metro bundler. 
5. &nbsp;Open your phone's camera and use it to scan the QR code provided in the metro &nbsp;bundler.
6. &nbsp;A prompt from Expo will be shown on the top of the screen. 
7. &nbsp;Select it to allow Expo to access the Split-It app. 

Once you are directed to the login page, create an account using the signup button below and feel free to try out the features that are available for Split-It application.


---

## <a id="3">3. Using Split-It</a>
Here is a [video](https://youtu.be/gk_IqOI5EVQ) guide which showcase an overview on the features made available on Split-It. This step-by-step video will show you on how to create accounts up till using the features that are made available in Split-It to facilitate your bill-splitting activites.

### <a id="3.1">3.1 Account Creation</a>
Upon starting up Split-It application on the expo app, you will first be greeted with Split-It login page. Click on the `sign up` link at the bottom to be directed to the sign up page. After selecting the choice of language, register a Split-It account using your **email** and **password**. A verification email will be sent to you to verify your email.
<br><br>
Proceeding on from the previous page, you will be able to customize your profile, by inserting a profile picture and also entering your phone number. Once done, users will be immediately directed to the Split-It homepage where they can start using those cool features implemented.

### <a id="3.2">3.2 Features of Split-It</a>
#### <a id="3.2.1">3.2.1 Splitting Methods</a>
Split-It application supports two forms of splitting methods. To start a bill-splitting activitiy, click on the black `SPLIT` button located in the homepage. Users will be directed to the contact page. Split-It will sync the user's contact page on their phone and filter out only other registered users to be shown. Select the contacts whom are involved in the bill-splitting activity and select `proceed`.

* **Equally** : The total amount of the bill will be split equally amongst the total number of people that are included when selecting the contacts in the contact page. Users are then prompted to:
 <br>
&nbsp;&nbsp;&nbsp;&nbsp;1. Categorize their bill-splitting activity
<br>
&nbsp;&nbsp;&nbsp;&nbsp;2. Add a short description of the bill-splitting activity
<br>
&nbsp;&nbsp;&nbsp;&nbsp;3. Input the total amount
<br>
&nbsp;&nbsp;&nbsp;&nbsp;4. Add in additional notes
<br>
Once done, users can select `SPLIT BILL` and Split-It will calculate the total amount each person has to pay.

* **Receipt** : Upon navigating to that tab, users will be prompted to insert a picture of their receipt through uploading a picture from their gallery or taking a photo of it using the in-built camera on their phone. The billing information will be automatically in the next page. The details of the receipt will also be stored inside their phone for future reference.

#### <a id="3.2.2">3.2.2 OCR recognition</a>
The OCR recognition feature is implemented using Google Vision Cloud API. It is mainly used for the receipt bill-splitting method. Upon navigating to the `receipt` tab, users will be directed to a page where they can upload a photo through their Gallery or use their in-built camera to take a picture of the receipt. Once the picture has been uploaded, the `Analyze` button will appear. Click on it for Split-It to process the picture of the receipt. Once the data has been shown, click on `Proceed` for Split-It to process the receipt details.
<br><br>
Users will be directed to the splitting page where the total amount of the receipt will be automatically inserted into the `Total Amount` field. Users are recommended to categorize their bill-splitting activity so that the Split-It can help track their individual spendings.
<br>

#### <a id="3.2.3">3.2.3 Financial Tracker</a>
The financial tracker is located in the homepage of Split-It application. It keeps tracks of the user's spendings based on the different categories:
* General
* Food and Drinks
* Entertainment
* Transport
* Groceries
* Home
* Life
* Utilities
* Others

When adding a new bill-splitting activity, users are prompted to categorized their activity so that Split-It can use these data to keep a track record of the  user's spendings.
<br>


### <a id="3.3">3.3 Administrative matters</a>
Under the `more` tab in the homepage, users are able to edit their account. They can select the `profile` tab which allows them to change their:
* Profile picture
* Username
* Email Address
* Password

These accounts are managed through Google Firebase RealTime Database.
<br>

### <a id="3.4">3.4 Help and support</a>
Also under the `more` tab in the homepage, users can select the `Help and FAQ` section to view some of the potential problems that they can face while using Split-It application. This will be followed up with a guide on how to address these issues for a smoother experience with Split-It.
<br><br>
The `help and FAQ` feature are categorized into two sections, app help which covers the functionality aspects of Split-It while FAQ covers the common errors and bugs that users can potentially face while using Split-It.
<br>
<br>
---
## <a id="4">4. Feedback and Contact us</a>
### <a id="4.1">4.1 Contact us</a>
Thank you for using Split-It. Feel free to drop the developer a feedback in order to improve Split-It application further! I can be connected through the following channels:

1.  <a href="https://github.com/ngzhaoming">Github</a> 
2.  <a href="https://www.instagram.com/zhaoming_boiboi/">Instagram</a>
3.  <a href="www.linkedin.com/in/zhaoming-ng"> LinkedIn</a>

```
 ________  ________  ___       ___  _________             ___  _________   
|\   ____\|\   __  \|\  \     |\  \|\___   ___\          |\  \|\___   ___\ 
\ \  \___|\ \  \|\  \ \  \    \ \  \|___ \  \_|__________\ \  \|___ \  \_| 
 \ \_____  \ \   ____\ \  \    \ \  \   \ \  \|\__________\ \  \   \ \  \  
  \|____|\  \ \  \___|\ \  \____\ \  \   \ \  \|__________|\ \  \   \ \  \ 
    ____\_\  \ \__\    \ \_______\ \__\   \ \__\            \ \__\   \ \__\
   |\_________\|__|     \|_______|\|__|    \|__|             \|__|    \|__|
   \|_________|                                                              
                                                                             
                                                                             
```