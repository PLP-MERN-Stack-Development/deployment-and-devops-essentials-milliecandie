# Week 7 MERN Deployment Assignment

## 🌍 Deployed Links
- Frontend: https://your-vercel-url.vercel.app
- Backend API: https://your-render-url.onrender.com

## 🗂 Folder Structure
mern-deployment-week7/
 ├── backend/
 ├── frontend/
 └── .github/workflows/

## ⚙️ Environment Variables
See `.env.example` file.

## 🚀 Deployment
- Backend → Render  
- Frontend → Vercel  
- CI/CD → GitHub Actions

## 🩺 Monitoring Setup
- **Health Check:** `/` endpoint
- **Express Status Monitor:** `/status`
- **Logging:** Winston logs (console + server.log)
- **Uptime Monitoring:** Added via UptimeRobot
- **Performance Tracking:** Express monitor metrics (CPU, memory, response time)

## 📅 Maintenance
- Schedule database backups on MongoDB Atlas  
- Keep dependencies updated  
- Review error logs weekly