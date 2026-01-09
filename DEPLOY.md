# Deploy Plaid Solutions Architect Demo Backend

This guide shows you how to deploy the backend server so anyone can use the demo tool with just their Plaid Client ID and Secret.

## Quick Deploy Options (All Free!)

### Option 1: Railway (Easiest - 5 minutes)

1. Go to [Railway.app](https://railway.app/)
2. Click "Start a New Project"
3. Connect your GitHub account
4. Click "Deploy from GitHub repo" (or create new repo with these files)
5. Railway will auto-detect Node.js and deploy!
6. Copy your deployed URL (e.g., `https://your-app.railway.app`)
7. Update the HTML file's default backend URL to: `https://your-app.railway.app/api`

**That's it!** Your backend is live.

### Option 2: Render (Very Easy - 5 minutes)

1. Go to [Render.com](https://render.com/)
2. Click "New" → "Web Service"
3. Connect your GitHub repo
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Click "Create Web Service"
6. Copy your deployed URL (e.g., `https://your-app.onrender.com`)
7. Update the HTML file's default backend URL to: `https://your-app.onrender.com/api`

### Option 3: Heroku (Classic)

1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Run these commands:
```bash
heroku login
heroku create plaid-demo-backend
git init
git add .
git commit -m "Deploy backend"
heroku git:remote -a plaid-demo-backend
git push heroku main
```
3. Your URL: `https://plaid-demo-backend.herokuapp.com/api`

### Option 4: Vercel (Serverless)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts (choose all defaults)
4. Your URL will be provided: `https://your-project.vercel.app/api`

## Files Needed

Make sure you have these files in your project:
- `demo-backend-server.js` - The backend code
- `package.json` - Dependencies
- `plaid_solutions_architect_ai.html` - The frontend tool

## After Deployment

1. **Test your backend**: Visit `https://your-deployed-url.com/` in a browser
   - You should see: `{"status":"ok","message":"Plaid Solutions Architect Demo Backend"}`

2. **Update the HTML**: 
   - Open `plaid_solutions_architect_ai.html`
   - Find the line: `value="http://localhost:3000/api"`
   - Change it to: `value="https://your-deployed-url.com/api"`

3. **Share the HTML file**:
   - Host it on GitHub Pages, Netlify, or any static host
   - Or just send the HTML file - it works offline!

## Environment Variables (Optional)

If you want to pre-configure credentials (not recommended for shared use):
- `PORT` - Server port (default: 3000)

## Sharing with Colleagues/Clients

### Option A: Host the HTML (Recommended)
Upload `plaid_solutions_architect_ai.html` to:
- GitHub Pages (free)
- Netlify (free, drag-and-drop)
- Vercel (free)
- Your company's web server

Then share the URL!

### Option B: Share the File
Just send `plaid_solutions_architect_ai.html` - it works as a standalone file!
Users just need:
1. The HTML file
2. Their Plaid Client ID & Secret
3. Your deployed backend URL (already pre-filled!)

## Cost

All these options are **FREE** for demo/development use with reasonable traffic limits.

## Security Note

⚠️ Users will enter their Plaid credentials in the frontend. This is acceptable for internal tools and demos, but remind users:
- Only use Sandbox/Development credentials in shared demos
- Never share Production secrets in browser-based tools
- For production apps, handle all Plaid calls server-side only

## Support

If you run into issues:
1. Check the backend logs in your hosting platform
2. Verify the backend URL is correct in the HTML
3. Test the backend health endpoint: `https://your-url.com/`

