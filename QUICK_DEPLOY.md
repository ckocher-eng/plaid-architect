# 🚀 Quick Deployment Guide

## Method 1: Render (Easiest - No CLI needed!)

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com/new)
2. Create a new repository (e.g., "plaid-demo-backend")
3. Run these commands in your terminal:

```bash
cd /Users/ckocher/Downloads/plaid-cursor-setup/PlaidProjects

# Add remote
git remote add origin https://github.com/YOUR-USERNAME/plaid-demo-backend.git

# Push code
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Render
1. Go to [render.com](https://render.com/)
2. Sign up (free)
3. Click **"New +"** → **"Web Service"**
4. Click **"Connect GitHub"** → select your repository
5. Configure:
   - **Name**: plaid-demo-backend
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Click **"Create Web Service"**

✅ **You'll get a URL like**: `https://plaid-demo-backend.onrender.com`

### Step 3: Update Your HTML
1. Open `plaid_solutions_architect_ai.html`
2. Find line with: `value="https://your-backend.onrender.com/api"`
3. Replace with YOUR actual Render URL: `https://plaid-demo-backend-abc123.onrender.com/api`
4. Save the file

### Step 4: Share It!
- Upload the HTML to GitHub Pages, Netlify, etc.
- Or just email the HTML file directly to colleagues!

---

## Method 2: Railway

### Step 1: Create GitHub Repository (same as above)

### Step 2: Deploy to Railway
1. Go to [railway.app](https://railway.app/)
2. Sign up with GitHub
3. Click **"New Project"** → **"Deploy from GitHub repo"**
4. Select your repository
5. Railway auto-deploys!

✅ **You'll get a URL like**: `https://your-app.railway.app`

### Step 3: Update & Share (same as above)

---

## Method 3: Vercel (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /Users/ckocher/Downloads/plaid-cursor-setup/PlaidProjects
vercel

# Follow prompts
```

---

## Testing Your Deployment

After deploying, test your backend:

1. Visit: `https://your-deployed-url.com/`
2. You should see:
   ```json
   {
     "status": "ok",
     "message": "Plaid Solutions Architect Demo Backend"
   }
   ```

If you see this, it's working! ✅

---

## Sharing with Colleagues

Once deployed:

### Option A: Host the HTML
- GitHub Pages
- Netlify (drag & drop)
- Vercel
- Your company server

### Option B: Email the HTML File
Just send `plaid_solutions_architect_ai.html`!
- It works as a standalone file
- Users just need their Plaid credentials
- Backend URL is pre-configured

---

## Cost

All platforms offer **FREE** tiers:
- Render: Free tier (spins down after 15 min idle)
- Railway: $5 credit/month free
- Vercel: Free tier

---

## Need Help?

If deployment fails:
1. Check the build logs in your hosting platform
2. Verify `package.json` has all dependencies
3. Ensure `demo-backend-server.js` is in the root

Common issues:
- **Port binding**: Backend automatically uses `process.env.PORT` (already configured)
- **CORS errors**: CORS is enabled for all origins (already configured)
- **Node version**: Using Node 14+ (specified in package.json)

