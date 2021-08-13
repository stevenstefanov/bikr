# Bikr App

## Project Description

Bikr **(pronounced as Biker)* is an application that lets New Yorkers buy and sell bicycles. In a city of traffic jams and subway construction, it sometimes seems that the most reliable way to get around town is by bike. However, Citi bikes aren't always the most comfortable and a nicer brank new bike can set you back a few hundred if not a few thousand dollars. Here is where Bikr comes in. It's the perfect place to buy and sell bicycles, unlike Craigslist which is too broad and crowded with items. Here, a person can know that they will see only bikes and can find the exact one they want.

## Project Screenshot 

![Screenshot 1](./public/images/image1.png)

![Screenshot 2](./public/images/image2.png)

![Screenshot 3](./public/images/image3.png)

![Screenshot 4](./public/images/image4.png)

## Link to Deployed Project

https://bikr-app.herokuapp.com

## Background

I really wanted to creare **Bikr** because of my passion for biking. I love how one gets to experience New York City on a bicycle. This project allows local users to find other sellers and buyers of bikes, search for posted bikes and list their own for sale. It takes away from having to scroll through all the clutter on Craigslist and gives the user only what they are looking for.

## Challenges

Using **Cloudinary** was defininely a challenge and took a lot of troubleshooting to be able to figure out. The issue was with the formats required to post an image to **Cloudinary**. Once that was figured out, it was easy from there to display the image through its link on the posting.

## Learnings

During this project, I learned a lot about how to set up a database, I got a lot more comfortable with **Sequelize** and setting up the routes to be able to perform **CRUD** (Create, Read, Update, Delete) operations. I also got a lot of practice using **Handlebars** and got to reasearch and troubleshoot **Cloudinary**.

## Installation

This project is ran in the browser, however there are a few steps that need to be done prior to running. Save the project to your local computer. Navigate inside the project folder and install all necessary dependencies by typing:

``npm init``

followed by:

``npm install``

Open db/schema.sql, copy the code, paste into MySQL Workbench to set up your database. Back in your command line, run the seed file by typing:

``node seeds/seeds.js``

Once that has fully run, type:

``npm start``

in your the CLI and press the Enter button to launch the server and connect to the database. The command line with tell you what port the server is running on (it should be port 3001). Go to your browser and navigate to:

http://localhost:``server_port``/

## Usage

Bikr is very straight forward. Landing on the homepage, the user is presented with a list of all the bikes from the database and they can click into a certain listing to see more information about that bicycle. The user has the option to create an account and when logged in, they can still continue browsing or go to their dashboard where they are presented with a form to list their own bicycle for sale. After listing a bike, the user's bike will be displayed on the homepage, as well as on their dashboard where they are able to upload an image for the listing or delete that listing.

# License

Copyright (c) 2021 Steven Stefanov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.