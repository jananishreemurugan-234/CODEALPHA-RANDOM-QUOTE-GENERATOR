# CODEALPHA-RANDOM-QUOTE-GENERATOR

## Project Overview
The Random Quote Generator is a full-stack web application developed as part of the CodeAlpha Internship (App Development Domain). Its goal is to provide users with motivational or insightful quotes in a simple, elegant, and responsive interface.

The project integrates both frontend (React.js) and backend (Node.js + Express.js) development. Quotes are stored in a JSON file on the backend, and the frontend fetches them dynamically through a REST API. The app also supports IP-based access, so users can open it on mobile devices connected to the same Wi-Fi network.

## Objective
The objective of this project is to build a minimal yet engaging tool that shows users a new random quote each time they refresh the page or click a button. By combining frontend interactivity and backend API handling, the project demonstrates a solid foundation in full-stack web development.

## Features
- Random Quote on Load – A fresh quote appears whenever the app opens.
- “New Quote” Button – Generates a different quote instantly.
- Quote & Author – Both text and author are displayed clearly.
- Responsive Design – Works smoothly on desktop and mobile screens.
- Double-Color Gradient Background – Clean and modern visual style.
- Backend API – Quotes served from quotes.json via Express.
- IP Access for Mobile – Host via local IP for smartphone use.

## User Interface
The frontend is designed for simplicity and readability:
- A centered quote box with smooth hover animations.
- Clearly displayed quote text and author name.
- A stylish “New Quote” button with gradient colors.
- Fully responsive layout, optimized for both desktop and mobile.

## How It Works
1. The backend (server.js) runs an Express server and reads quotes from quotes.json.
2. The server exposes an API endpoint:/api/random-quote

which returns a random quote as JSON.

3. The frontend React app (App.jsx) fetches quotes from the backend API.
4. Users can click “New Quote” to trigger another API call and load a different quote.
5. With .env and config.js, the app can be configured to run on localhost or a local IP address for mobile access.

## Installation and Setup

1. Clone the repository:

`git clone https://github.com/your-username/random-quote-generator.git`

`cd random-quote-generator`

2. Setup backend:

`cd backend`

`npm install`

Create a .env file:

`PORT=5000`

`HOST=0.0.0.0`

Run the server:

`node server.js`

3. Setup frontend:

`cd ../frontend`

`npm install`

`npm start`

4. Access the app:

- Desktop → http://localhost:5173

- Mobile → http://your-ip address:5173

## Project Structure

`random-quote-generator/`

`│`

`├── backend/`

`│   ├── data/`

`│   │   └── quotes.json          # Stores quotes`

`│   ├── server.js                # Express backend server`

`│   └── package.json             # Backend dependencies`

`|   |___.env`

`│`

`├── frontend/`

`│   ├── public/`
        
`|       |__index.html`
         
`│   ├── src/`

`|       |___App.jsx`

`|        |___config.js`

`|       |___index.js`

`|        |___main.jsx`

`|       |___styles.css`

`|___ .env`

`|___ package.json       # Frontend dependencies`
        
## Conclusion
The Random Quote Generator demonstrates:
- React-based frontend development
- Express.js backend with REST API
- JSON data handling
- Responsive, mobile-ready UI

Built as part of the CodeAlpha Internship, this project highlights essential skills in full-stack development and serves as a strong portfolio addition.

## Future Enhancements
- Fetch quotes from public APIs (e.g., Quotable API).
- Add social sharing (Twitter, LinkedIn).
- Add multiple themes (light/dark).
- Switch to database (MongoDB) for scalability.
- Convert to mobile app (React Native).

## Output
Desktop

<img width="1912" height="1190" alt="Screenshot 2025-09-21 222032" src="https://github.com/user-attachments/assets/08c0e2a7-cdf7-4ff7-9b86-c7b643ba3789" />

Mobile

![Screenshot_2025_0921_222608](https://github.com/user-attachments/assets/ff1aa5f3-74f2-452a-b716-d826ed6224e3)
