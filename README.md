# Google Spreadsheets Public Document JSON API

> This project is a HTTP-server that exposes a **published** _Google Sheets_-spreadsheet as a JSON API. It can be be modified to access unpublished sheets but that requires further authentication and to set up a service account: [explained here](https://github.com/theoephraim/node-google-spreadsheet#service-account-recommended-method).



## Setup

1 . Create a [Google Spreadsheet](https://docs.google.com/spreadsheets/u/0/)


2 . Make that spreadsheet public with **File>Publish to the web**

![Publish to the web](https://i.imgur.com/GPQpwHv.png)
![Publish to the web](https://i.imgur.com/hbEChuJ.png)

3 . Rename `.env.example` to just `.env` and change `SPREADSHEET_ID` to your own spreadsheet id. If your URL is `https://docs.google.com/spreadsheets/d/1163sy6EHjP2c0t4110DL1MCX4g5436fadfHBJ1wGGWIqE` the ID is `1163sy6EHjP2c0t4110DL1MCX4g5436fadfHBJ1wGGWIqE`.

4 . Run `npm install`

5 . Run `npm start`

6 . Make some edits in the spreadsheet and visit `https://localhost:3000` to get the data as JSON.