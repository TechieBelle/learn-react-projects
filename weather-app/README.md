# 🌤 Weather App

A responsive weather application built with React and Tailwind CSS that fetches real-time weather data using the OpenWeatherMap API.

## Features

- Search weather by city name
- Displays temperature, weather condition, humidity, wind speed, and feels like temperature
- Loading state while fetching data
- Error handling for invalid city names
- Press **Enter** or click **Search** to fetch weather

## Tech Stack

- React (Vite)
- Tailwind CSS v3
- OpenWeatherMap API

## Getting Started

### Prerequisites

- Node.js v18 or above
- An API key from [OpenWeatherMap](https://openweathermap.org)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project
   ```
   VITE_API_KEY=your_api_key_here
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:5173`



## Concepts Learned

- Fetching data from a REST API using `fetch`
- `async/await` and `try/catch/finally`
- Managing multiple state variables with `useState`
- Conditional rendering
- Controlled inputs
- Protecting API keys with environment variables

