# 🚀 Live Deployment Steps for Plaid Solutions Architect AI

Follow these steps to deploy your solution guide as a live, shareable website.

---

## ✅ Prerequisites
- GitHub account
- Render account (free - sign up at https://render.com)

---

## Step 1: Push Code to GitHub (2 minutes)

### 1a. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `plaid-solutions-architect`
3. Set to **Public**
4. **Don't** initialize with README (you already have files)
5. Click "Create repository"

### 1b. Push Your Code

**Replace `YOUR_GITHUB_USERNAME` with your actual username:**

```bash
cd /Users/ckocher/Downloads/plaid-cursor-setup/PlaidProjects

# Add GitHub as remote (replace YOUR_GITHUB_USERNAME!)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/plaid-solutions-architect.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
```bash
# If your username is "jsmith"
git remote add origin https://github.com/jsmith/plaid-solutions-architect.git
git branch -M main
git push -u origin main
```

✅ **Result:** Your code is now on GitHub!

---

## Step 2: Deploy Backend to Render (3 minutes)

### 2a. Sign Up for Render
1. Go to https://render.com
2. Click "Get Started" (it's free!)
3. Sign in with your GitHub account

### 2b. Create Web Service
1. On Render dashboard, click **"New +"** → **"Web Service"**
2. Click **"Connect account"** to link GitHub
3. **Find and select** your `plaid-solutions-architect` repository
4. Click **"Connect"**

### 2c. Configure Service
Fill in these settings:

| Field | Value |
|-------|-------|
| **Name** | `plaid-solutions-architect-backend` |
| **Region** | Oregon (US West) or closest to you |
| **Branch** | `main` |
| **Root Directory** | (leave blank) |
| **Environment** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Plan** | Free |

5. Scroll down and click **"Create Web Service"**

### 2d. Wait for Deployment
- Render will install dependencies and start your server
- Wait 2-3 minutes for "Live" status (green indicator)
- **Copy your backend URL** - it will look like:
  ```
  https://plaid-solutions-architect-backend-abc123.onrender.com
  ```

✅ **Test it:** Visit `https://your-url.onrender.com/` - you should see `{"status":"ok"}`

✅ **Result:** Your backend is now live!

---

## Step 3: Deploy HTML Frontend to GitHub Pages (2 minutes)

### 3a. Update HTML with Backend URL

**Before deploying, update the HTML file with your deployed backend URL:**

1. Open `plaid_solutions_architect_ai.html` in a text editor
2. Find line **2481** (search for `value="https://your-backend.onrender.com/api"`)
3. Replace it with your actual Render URL + `/api`:
   ```html
   value="https://plaid-solutions-architect-backend-abc123.onrender.com/api"
   ```
4. Save the file

### 3b. Commit and Push Changes

```bash
cd /Users/ckocher/Downloads/plaid-cursor-setup/PlaidProjects

git add plaid_solutions_architect_ai.html
git commit -m "Update backend URL for deployment"
git push origin main
```

### 3c. Enable GitHub Pages

1. Go to your GitHub repo: `https://github.com/YOUR_USERNAME/plaid-solutions-architect`
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in left sidebar
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

### 3d. Get Your Live URL

After deployment, GitHub will show your live URL:
```
https://YOUR_USERNAME.github.io/plaid-solutions-architect/plaid_solutions_architect_ai.html
```

✅ **Result:** Your tool is now live on the internet!

---

## Step 4: Share with Your Team! 🎉

**Your live URL:**
```
https://YOUR_USERNAME.github.io/plaid-solutions-architect/plaid_solutions_architect_ai.html
```

**Share this link via:**
- Slack
- Email
- Team wiki
- Confluence

**What teammates can do:**
1. Open the link (no installation needed!)
2. Enter their Plaid Client ID and Secret
3. Generate solution guides instantly
4. Export as PDF or HTML

---

## 🔧 Testing Your Deployment

### Test the Full Flow:

1. **Open your live URL** in a browser
2. **Enter a use case**: "I need to verify bank accounts for ACH payments"
3. **Click "Generate Solution Architecture"**
4. **Review the tabs**: Overview, Architecture, Code, Scope, Export
5. **Try the Live Demo tab**:
   - Get Plaid credentials from https://dashboard.plaid.com/developers/keys
   - Enter Client ID and Secret
   - Click "Launch Plaid Link Demo"
   - Use sandbox credentials: `user_good` / `pass_good`
   - View live data!

---

## 🆘 Troubleshooting

### Backend Not Working?
**Problem:** "Failed to fetch" error in Live Demo tab

**Solution:**
1. Check backend is running: Visit `https://your-backend-url.onrender.com/`
2. Should see: `{"status":"ok"}`
3. If not, check Render logs: Dashboard → Your Service → "Logs" tab

### GitHub Pages Not Loading?
**Problem:** 404 error when visiting GitHub Pages URL

**Solution:**
1. Wait 2-3 minutes after enabling Pages
2. Check Settings → Pages shows "Your site is live at..."
3. Make sure you're using the full URL with `/plaid_solutions_architect_ai.html`

### Wrong Backend URL?
**Problem:** Demo works locally but not on live site

**Solution:**
1. Open the live HTML in browser
2. Right-click → "View Page Source"
3. Search for `demoBackendUrl`
4. Verify it matches your Render URL with `/api` at the end
5. If wrong, update HTML locally and push again

---

## 📊 Usage Statistics

Want to track how many people use your tool?

**Option 1: Render Metrics**
- Go to Render Dashboard → Your Service → "Metrics"
- See request counts, response times

**Option 2: Google Analytics** (optional)
- Add GA tracking code to HTML `<head>`
- Track page views and user interactions

---

## 🔄 Making Updates

When you want to update the tool:

```bash
cd /Users/ckocher/Downloads/plaid-cursor-setup/PlaidProjects

# Make your changes to plaid_solutions_architect_ai.html or backend files

# Commit and push
git add .
git commit -m "Description of changes"
git push origin main
```

**For backend changes:**
- Render will auto-deploy (takes 2-3 minutes)

**For HTML changes:**
- GitHub Pages will auto-update (takes 1-2 minutes)

---

## 🎯 What's Next?

1. **Share with 1-2 teammates first** (pilot test)
2. **Gather feedback** on usability
3. **Add to team wiki** or internal tools page
4. **Train team** on how to use it (5-minute demo)
5. **Iterate and improve** based on feedback

---

## 💡 Pro Tips

### For Teammates:
- **Bookmark the live URL** for quick access
- **Save common use cases** as templates
- **Export PDFs** for customer proposals
- **Use Cursor AI** with `@plaid-solutions-architect-ai` for help

### For You (Admin):
- **Monitor Render logs** for backend errors
- **Check GitHub Actions** for frontend deployment status
- **Update Plaid SDK** periodically (`npm update plaid`)
- **Backup** your customizations

---

**🎉 Congratulations!** Your Plaid Solutions Architect AI is now live and shareable!

**Questions?** Check `README.md`, `DEPLOY.md`, or `HOW_TO_SHARE.md`

---

**Created:** January 2026  
**Last Updated:** January 2026  
**Maintained by:** Solutions Engineering Team

