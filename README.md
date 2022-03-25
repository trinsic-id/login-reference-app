# Trinsic's Login Reference App

A sample application to showcase how Trinsic Studio features to implement a passwordless login use case. Trinsic utilizes Self-sovereign identity and verifiable credentials to protect and ensure credibility of everyone's online identity.

## Technologies

- [Trinsic](https://trinsic.id/)
- [Next.js](https://nextjs.org)
- [Tailwind](https://tailwindcss.com/)

## Use Case
This sample is exemplify how to use Trinsic capabilities to build a passwordless authentication flow using verifiable credentials and DIDs with modern web technologies.

## Prerequisites:
- [npm](https://www.npmjs.com/get-npm)
- The Trinsic Wallet app. Download the [Android](https://play.google.com/store/apps/details?id=id.streetcred.apps.mobile) or [iOS](https://apps.apple.com/us/app/trinsic-wallet/id1475160728) version for free and set up an account
- A [Trinsic Studio](https://trinsic.studio) account (free tier will suffice) 

## Setup

### Clone repositories and install dependencies

```sh
# 1. Clone repo
git clone https://github.com/trinsic-id/login-reference-app.git
cd login-reference-app

# 2. Install dependencies
npm i
```

With the dependencies installed, open the repository with a code editor of your choice. And rename the file [example.env](./example.env) to `.env`.

### Configure your organization
 1. Go to <a href="https://studio.trinsic.id" target="_blank">Trinsic Studio</a> and login or create an account.
 2. Click the **+ Organization** button to slide out the **Add Organization** slider.
 3. Enter an organization name and make sure that the **Select Network** dropdown is set to "Sovrin Staging".
 ![add organization](https://raw.githubusercontent.com/trinsic-id/verifier-reference-app/master/assets/addOrg.png)
 4. Click the **Continue to Review** button and then click on **Confirm** to create the organization.
    - It might take a few seconds to create the organization. Just wait for it to finish.
 5. Click on the **Details** button on the organization tile to go to the detials view and retrieve the API Key from the tile on the right.
 6. In the .env file, add your organization's Access Token to the `ACCESSTOK` field.
    
### Define a credential
 1. Click on the organization tile to bring up the dashboard.
 2. Click on the **Credentials** tab on the left sidebar to navigate to the Credentials View.
 3. Click on the **Create Template** button using the **New Schema** option.
 4. Name the Template "Login" and add the following values
     - AccountID
     - Name
     - Email

 ![add credential](https://i.ibb.co/5MtNcL2/Screen-Shot-2022-03-22-at-10-50-34-AM.png)

 5. Click **Continue to Review** and then **Confirm**.
 6. Copy the `Credential Template ID` to the `.env` file under `TRINSIC_CREDENTIAL_ID`.
 7. Click on the information icon next to the definition and copy the `Schema ID` to the `.env` file under `TRINSIC_SCHEMA_ID`.
 
### Define a verification
1. Click on the **Verifications** tab on the left sidebar to navigate to the Verifications View.
2. Click on the **Create Template** button to slide out the **Create Verification Template** slider.
3. Enter a Verification Title.
4. Click the **+ Credential Request** button and give it a name.
5. Enter "login" as the Policy Name and enter "AccountID", "Name", and "Email" as attributes.
![add verification](https://i.ibb.co/MP4zwfV/Screen-Shot-2022-03-22-at-10-54-59-AM.png)
6. Click the **Create** button to create the verification proof.
    - It might take a few seconds to define the verification proof. Just wait for it to finish.
7. In the `.env` file, add the verification's Verification ID to the `TRINSIC_VERIFICATION_ID` field.
8. Your .env file should now be completely filled out.

## Run the web app
 
### Start and use the application

Using npm run the following commands

```
# Production mode
npm run build
npm start

# Development mode
npm run dev
```

After running these commands the app should be running on http://localhost:3000


## Author

Lucas Castro – [lucasacastro.dev](https://www.lucasacastro.dev) – lucasamonrc@gmail.com

[@lucasamonrc](https://github.com/lucasamonrc)
