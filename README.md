#Chrome Extension

It is a Chrome extension designed to simplify filling out online job application forms. It allows you to store frequently used data (like your name, email, phone number, etc.) and quickly copy it to your clipboard with a single click. Perfect for job seekers who want to save time and avoid repetitive typing!

---

## Features

- **Pre-filled Data**: Store your personal and professional information in one place.
- **Copy to Clipboard**: Easily copy any field's value to your clipboard with a click.
- **Simple and Lightweight**: No complex setup or dependencies.
- **Customizable**: Edit the `popup.js` file to add or modify fields as needed.

---

## How to Use

1. **Install the Extension**:
   - Download or clone this repository.
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer Mode** (toggle in the top-right corner).
   - Click **Load unpacked** and select the folder named "Chrome-Extension".

2. **Using the Extension**:
   - Click on the app icon in the Chrome toolbar.
   - A popup will display your stored data fields.
   - Click the "V" icon next to any field to copy its value to your clipboard.
   - Paste the copied value into your job application form.

---

## Customizing Data

To add or modify the data fields:

1. Open the `popup.js` file in the repository.
2. Locate the `jobData` object:
   ```javascript
   const jobData = {
     "Name": "John Doe",
     "Email": "john.doe@example.com",
     "Phone": "+1234567890",
     "LinkedIn": "https://linkedin.com/in/johndoe",
     "GitHub": "https://github.com/johndoe",
     "Portfolio": "https://johndoeportfolio.com"
   };