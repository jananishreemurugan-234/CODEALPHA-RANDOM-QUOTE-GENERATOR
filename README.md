# CODEALPHA-RANDOM-QUOTE-GENERATOR

## Project Overview
The Random Quote Generator is a full-stack web application developed as part of the CodeAlpha Internship (App Development Domain). Its purpose is to provide users with motivational and inspiring quotes each time they open the app or click a button.

The project demonstrates skills in both frontend (HTML, CSS, JavaScript) and backend (Node.js + Express.js) development. The backend stores a list of quotes and provides them through an API, while the frontend fetches and displays quotes dynamically with a clean, minimal, and responsive user interface. The app is also designed to run on a local IP address, allowing accessibility from mobile devices connected to the same Wi-Fi network.

## Objective
The main objective of this project is to create a simple yet engaging web app that displays random quotes with authors. With every button click or page refresh, users can discover new quotes for daily motivation.

## Features
- Random Quote on Page Load – A new quote is displayed whenever the app loads.
- New Quote Button – Users can generate a new quote instantly with one click.
- Author Name Displayed – Each quote is paired with its respective author.
- Minimal & Clean UI – Designed with a focus on readability and user experience.
- Double-Color Background – Stylish gradient background for visual appeal.
- Responsive Design – Works on both desktop and mobile devices.
- Mobile IP Access – Runs on local IP so smartphones can access the app over Wi-Fi.

## User Interface
The user interface is designed to be lightweight and distraction-free:

- A centered quote box with smooth hover animation.
- Quote text and author name displayed clearly.
- A stylish “New Quote” button with gradient colors.
- Responsive layout that adapts across screen sizes.

## How It Works
1. The backend (server.js) runs an Express server and provides quotes from quotes.json via an API endpoint (/api/random-quote).
2. The frontend (index.html + JavaScript) fetches data from the API using fetch() and displays it in the browser.
3. Each time the “New Quote” button is clicked, the app requests a fresh random quote from the server.
4. The app can be accessed via localhost or through a local IP address for mobile viewing.

## Installation and Setup

1. Clone the repository:

`git clone https://github.com/your-username/random-quote-generator.git`

`cd random-quote-generator`

2. Install backend dependencies:

`cd backend`
`npm install`

3. Start the backend server:

`node server.js`

4. Open the frontend in browser:

Simply open frontend/index.html in your browser, or run with a live server.

5. Access via IP for mobile:

http://your-ip:5000

## Project Structure

`random-quote-generator/`

`│`

`├── backend/`

`│   ├── data/`

`│   │   └── quotes.json          # Stores quotes`

`│   ├── server.js                # Express backend server`

`│   └── package.json             # Backend dependencies`

`│

`├── frontend/`

`│   ├── index.html               # Frontend UI`

`│   ├── script.js                # Fetches and displays quotes`

`│   └── styles.css               # UI styling`

## Conclusion
The Random Quote Generator is a simple but powerful project that demonstrates:

- Frontend + backend integration
- API communication using JavaScript
- Clean and responsive UI design
- Mobile device compatibility with IP-based access

Developed under the CodeAlpha Internship, this project highlights essential full-stack skills and is a great addition to a professional portfolio.

## Future Enhancements
- Option to share quotes on social media
- Fetch quotes from external APIs
- Database integration for scalable storage
- Customizable themes for personalization
- Convert into a mobile app with React Native
