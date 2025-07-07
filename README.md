# 🤖 LetsAsk - Chatbot App

**LetsAsk** is an AI-powered chatbot mobile app built with **React Native** and **Redux Toolkit**, integrated with the **OpenAI GPT API**. The app allows users to chat in a conversational format with AI and get instant responses, with a beautiful and responsive UI.

![LetsAsk Screenshot](https://raw.githubusercontent.com/aditya-kumar96/LetsAsk/main/assets/chat1.png)
![LetsAsk Screenshot](https://raw.githubusercontent.com/aditya-kumar96/LetsAsk/main/assets/chat2.png)


---

## 🚀 Features

- 🔥 Ask anything, anytime – real-time AI conversation
- 📦 State management with Redux Toolkit
- 🎨 Smooth UI/UX with Typewriter effect, Typing indicators, and chat bubbles
- 🔐 Secure OpenAI API integration (via `.env`)
- 🧠 Uses GPT-4o (or GPT-3.5-turbo) for smart responses
- 💡 Fully functional message input, history, and loading indicators

---

## 🧰 Tech Stack

| Tech            | Description                         |
|-----------------|-------------------------------------|
| React Native    | Cross-platform mobile development   |
| Redux Toolkit   | State management                    |
| TypeScript      | Strong typing & tooling             |
| OpenAI API      | ChatGPT integration                 |
| NativeWind      | Tailwind CSS in React Native        |


---

## 🛠️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/aditya-kumar96/LetsAsk.git
   cd LetsAsk
   
2. **Install dependencies**
   ```bash
    npm install
  
3. **Create a .env file**
   ```bash
   OPENAI_API_KEY=your-openai-secret-key
4. **Add @env support in babel.config.js**
    ```
      plugins: [
        ["module:react-native-dotenv", {
          "moduleName": "@env",
          "path": ".env"
        }]
      ]

5. **Start the app**
    ```
    npx react-native run-android
    # or
    npx react-native run-ios



---

## 💬 Folder Structure

    LetsAsk/
    │
    ├── src/
    │   ├── app/                # Redux store setup
    │   ├── assets/             # Images, icons, fonts
    │   ├── components/         # UI components like MessageBubble, Input
    │   ├── features/
    │   │   └── chat/           # Chat slice, API handler
    │   └── screens/
    │       └── ChatScreen.tsx  # Main chat UI
    │
    ├── .env                    # Environment secrets (ignored)
    ├── App.tsx                 # Root component
    └── README.md               # Project docs

---

## 📌 Important Notes
   - Do NOT commit .env or API keys to GitHub.
   - .env is already in .gitignore and filtered from history.
   - Follow best practices for secret handling and security.

---

## 🙋‍♂️ Author
  Aditya Kumar
    🔗 GitHub
  📧 aadi.kori.9085@gmail.com

---

## 📝 License
  This project is licensed under the MIT License.
---

## 🌟 Support & Contribution
  - ⭐ Star this repo if it helped you
  - 🛠️ Pull requests welcome!
  - 📧 Reach out for suggestions or collaboration
---

## ⚠️ Disclaimer:
This app is a personal project to explore OpenAI + React Native integration. Make sure to follow OpenAI usage policies when deploying to production.

---





