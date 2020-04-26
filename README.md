## Zebu Coding Challenge

### Live Demo: (http://zebu.halim.ca/)
This app is deployed on Heroku.

### Code Structure

Inside App.tsx We have MasterForm which is the multistep form containing the 4 screens.
MasterForm will import the 4 steps from the Steps/ folder which contains the function to display the screen.
Each tsx file in Steps/ will import from GroupItems which will group either Box (to hold selection items) or toppings.
The final screen will import from ToppingsSummary to generate a list of toppings.

```text
zebu-challenge/
├─ public/
├─ src/
│   ├─ App.tsx
│   ├─ App.css
│   ├─ index.tsx
│   ├─ index.css
│   ├─ static/
│   └─ components/
│       ├─ Box.tsx
│       ├─ GroupItems.tsx
│       ├─ MasterForm.tsx
│       ├─ constants.ts
│       ├─ Steps/
│       │   ├─ Step1.tsx
│       │   ├─ Step2.tsx
│       │   ├─ Step3.tsx
│       │   └─ Step4.tsx
│       └─ Toppings/
│           ├─ Toppings.tsx
│           └─ ToppingsSummary.tsx       
├─ package.json
├─ package-lock.json
└─ tsconfig.json
```

### Backend
Information such as list of pizza size, crust, and toppings are dynamically fetched from the backend server.
The backend is written in python using flask and is deployed on heroku.

Server Link: (http://zebu-backend.halim.ca/)
Source Code: (https://github.com/HansaHalim/zebu-challenge-backend)

Only the GET requests are implemented here to allow our frontend to retrieve the data. In the backend, the data are
retrieved from a csv file, although this can be modified to fetch from different types of databases.

#### App Specifications

Screens:
- Select pizza size
- Select pizza crust
- Select Toppings
- Review Custom Pizza

There are 3 sizes:
- Small ($8)
- Medium ($10)
- Large ($12)

2 Crust Type:
- Thin (+ $2)
- Thick (+ $4)

With 10 different toppings where the first 3 toppings are free of charge and then its $0.5 each thereafter. Small pizza has a maximum of 
5 toppings, medium has 7, and large has 9. The user can only choose 1 topping each with no repetition.

After selection is done, user will be given a review of their pizza containing all detailed information and total price.

## Build/Run

#### Requirements

- Node.js
- NPM

```javascript

/* First, Install the needed packages */
npm install

/* Then start both Node and React */
npm start

```
