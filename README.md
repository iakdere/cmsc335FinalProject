# Space Explorer

Submitted by: **YOUR_NAME (YOUR_DIRECTORY_ID)**

Group Members: **YOUR_NAME (YOUR_DIRECTORY_ID)**

App Description: A space-themed app that lets users explore NASA's Astronomy Picture of the Day (APOD), search by date, discover random cosmic images, and save favorites to a personal collection.

YouTube Video Link: **YOUR_YOUTUBE_LINK**

APIs: [NASA Astronomy Picture of the Day (APOD)](https://api.nasa.gov/)

Contact Email: **YOUR_EMAIL**

Deployed App Link: **YOUR_DEPLOYED_LINK**

AI Use: 1. Claude

---

## Setup Instructions

1. **Clone the repo** and `cd` into it.

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory with:
   ```
   MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/space-explorer?retryWrites=true&w=majority
   NASA_API_KEY=DEMO_KEY
   PORT=3000
   ```
   - Replace the MongoDB URI with your own connection string.
   - You can get a free NASA API key at https://api.nasa.gov/ or use `DEMO_KEY` (rate-limited).

4. **Run the app:**
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

