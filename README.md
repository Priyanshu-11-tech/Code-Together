# 🖥️ Code Together

**Code Together** is a collaborative web-based code editor where multiple people can code together in real time.  
It is built with **React**, **Node.js**, **Express**, and **Socket.IO** to provide a smooth and interactive coding experience.

---

## ✨ Features
- 🔗 Create or join rooms using a unique Room ID.
- 👥 Real-time collaborative code editing.
- 📡 Live user list to see who is connected.
- ⚡ Powered by **WebSockets (Socket.IO)** for instant updates.
- 🎨 Clean and simple UI for smooth collaboration.

---

## 🛠️ Tech Stack
- **Frontend:** React, React Router, React Hot Toast
- **Backend:** Node.js, Express
- **Real-time Communication:** Socket.IO
- **Other Tools:** Nodemon, dotenv

---

## 📂 Project Structure
code-together/
│── server.js # Backend server (Express + Socket.IO)
│ └── ...
│
│── src/ # Frontend (React)
│ ├── components/ # UI Components (Editor, Client, etc.)
│ ├── pages/ # Pages (EditorPage, HomePage, etc.)
│ ├── socket.js # Socket client setup
│ ├── Actions.js # Socket action constants
│ └── ...
│
│── .env # Environment variables (React + Server)
│── package.json
│── README.md


---

## ⚙️ Installation & Setup
```bash
git clone https://github.com/your-username/code-together.git
cd code-together
# In root/frontend folder
npm install

# In server folder
cd server
npm install

REACT_APP_BACKEND_URL=http://localhost:5000

PORT=5000

//starts backend(refer the package.json file)
cd server
nodemon server.js

//starts frontend
npm start
