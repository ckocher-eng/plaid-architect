# 🚀 How to Share Plaid Solutions Architect AI with Your Team

Your Plaid Solutions Architect AI tool is now **ready to share** with colleagues! Here's how others can use it.

## 📦 What You Have

```
PlaidProjects/
├── plaid_solutions_architect_ai.html          ← Main tool (share this!)
├── demo-backend-server.js                     ← Backend server
├── package.json                               ← Dependencies
├── .cursor/rules/
│   └── plaid-solutions-architect-ai.mdc      ← Cursor AI documentation
├── README.md                                  ← Project docs
├── DEPLOY.md                                  ← Deployment guide
└── QUICK_DEPLOY.md                            ← Quick deploy steps
```

## 🎯 Three Ways to Share

### Option 1: Share the HTML File Only (Simplest)

**Best for:** Quick sharing with non-technical users

**Steps:**
1. Deploy the backend once (see [Deployment](#deploying-the-backend) below)
2. Update the backend URL in the HTML (line ~2480)
3. Send `plaid_solutions_architect_ai.html` via email or Slack
4. Recipients just open in browser and use!

**Users need:**
- Web browser
- Their Plaid Client ID & Secret (from Plaid Dashboard)

---

### Option 2: Share via GitHub (Best for Teams)

**Best for:** Collaborative teams, version control

**Steps:**

```bash
# 1. Create GitHub repo
cd /Users/ckocher/Downloads/plaid-cursor-setup/PlaidProjects
git add .
git commit -m "Add Plaid Solutions Architect AI tool"
git push origin main

# 2. Share repo URL with team
```

**Team members clone and use:**
```bash
git clone https://github.com/your-org/plaid-solutions-architect-ai.git
cd plaid-solutions-architect-ai
open plaid_solutions_architect_ai.html
```

**Benefits:**
- ✅ Everyone has the latest version
- ✅ Cursor rules automatically work for whole team
- ✅ Easy to update and improve

---

### Option 3: Host on Company Intranet (Best for Enterprise)

**Best for:** Large teams, enterprise deployment

**Steps:**
1. Deploy backend to company infrastructure
2. Upload HTML to company web server or SharePoint
3. Share internal URL

**Example:**
```
https://internal.company.com/tools/plaid-solutions-architect
```

---

## 🔧 Deploying the Backend

**The backend MUST be deployed for the Live Demo feature to work.**

### Quick Deploy to Render (5 minutes, FREE)

1. **Push code to GitHub** (if not already):
   ```bash
   cd /Users/ckocher/Downloads/plaid-cursor-setup/PlaidProjects
   
   # Initialize git (if needed)
   git init
   git add demo-backend-server.js package.json .gitignore
   git commit -m "Add backend server"
   
   # Push to GitHub
   git remote add origin https://github.com/YOUR-ORG/plaid-backend.git
   git push -u origin main
   ```

2. **Deploy to Render**:
   - Go to [render.com](https://render.com/)
   - Sign up (free)
   - Click **"New +"** → **"Web Service"**
   - Connect your GitHub repo
   - Settings:
     - Build Command: `npm install`
     - Start Command: `npm start`
   - Click **"Create Web Service"**

3. **Copy your URL**: `https://plaid-backend-abc123.onrender.com`

4. **Update the HTML**:
   ```bash
   # Open plaid_solutions_architect_ai.html
   # Find line ~2480:
   value="http://localhost:3000/api"
   
   # Change to:
   value="https://plaid-backend-abc123.onrender.com/api"
   ```

5. **Done!** Now share the HTML file.

---

## 👥 How Your Team Uses It

### Using Cursor AI (Recommended)

If your team uses Cursor, they get AI assistance automatically!

**In Cursor chat:**
```
@plaid-solutions-architect-ai How do I create a guide for ACH payments?

@plaid-solutions-architect-ai What products should I recommend for lending?

@plaid-solutions-architect-ai How do I deploy the backend?
```

The AI will have full context about:
- How to use the tool
- Product recommendations
- Code patterns
- Deployment instructions
- Troubleshooting

### Using Without Cursor

Just open the HTML file in any browser and:
1. Enter a use case (e.g., "Verify bank accounts for payments")
2. Review recommended products
3. Explore the tabs:
   - **Overview** - Product recommendations
   - **Architecture** - API flow diagrams
   - **Code** - Ready-to-use examples
   - **Live Demo** - Test with real API
   - **Scope** - Timeline estimates
   - **Export** - Download guide

---

## 📚 Documentation for Team

Share these resources:

**Quick Start:**
- `README.md` - Overview and usage

**For Cursor Users:**
- `.cursor/rules/plaid-solutions-architect-ai.mdc` - AI documentation
- `.cursor/rules/README.md` - How to use Cursor rules

**Deployment:**
- `DEPLOY.md` - Full deployment guide
- `QUICK_DEPLOY.md` - Simplified steps

**Backend:**
- `demo-backend-server.js` - Backend code (if they want to customize)

---

## 🎓 Training Your Team

### Quick Demo (5 minutes)

1. **Open the tool** in a browser
2. **Enter a sample use case**: "I need to verify bank accounts and check balances"
3. **Show the generated guide**:
   - Products recommended (Auth, Balance)
   - Architecture diagram
   - Code samples
   - Scope estimate
4. **Try adding a product**: Click on "Transactions" badge to add it
5. **Export as PDF** to show deliverable

### Advanced Features (10 minutes)

1. **Live Demo Tab**:
   - Show how to enter Plaid credentials
   - Launch Link with sandbox account (`user_good` / `pass_good`)
   - Display real data from Plaid

2. **Dynamic Product Selection**:
   - Add/remove products
   - Guide regenerates automatically
   - Show how diagrams update

3. **Export Options**:
   - PDF for customer proposals
   - Markdown for documentation
   - JSON for programmatic use

---

## 🔐 Security Notes for Team

**Important reminders:**
- ✅ Only use Sandbox/Development credentials in demos
- ✅ Never expose Production secrets in browser tools
- ✅ The backend properly proxies API calls
- ❌ Never commit credentials to GitHub
- ❌ Don't share production secrets via Slack/email

---

## 📝 Cursor Rules Included

Your team gets these Cursor AI rules automatically:

### `@plaid-solutions-architect-ai`
Complete documentation for the solution guide tool:
- Product recommendations
- Architecture patterns
- Code generation
- Scope estimation
- Deployment

### `@call-prep`
Generate customer call preparation documents:
- Call agenda templates
- Account insights
- Technical Q&A prep

### `@share-guide`
Upload documents to ShareGuide for easy sharing

---

## 🆘 Troubleshooting for Team

### "Failed to fetch" error
**Problem:** Demo tab shows connection error  
**Solution:** Backend not deployed or wrong URL
- Check Backend URL in "Advanced" settings
- Verify backend is running: Visit `https://your-backend.com/` (should show `{"status":"ok"}`)

### Diagrams not rendering
**Problem:** Architecture tab shows no diagrams  
**Solution:** Mermaid.js failed to load
- Refresh the page
- Check browser console for errors
- Try different browser

### Products not detected
**Problem:** Wrong products recommended  
**Solution:** Use case too vague
- Be more specific in use case description
- Manually add/remove products using badges
- Guide will regenerate

---

## 🚀 Next Steps

1. **Deploy the backend** (see above)
2. **Update the HTML** with your backend URL
3. **Share with 1-2 teammates** first (pilot test)
4. **Gather feedback** and iterate
5. **Roll out to full team**

---

## 📞 Support

**Questions?**
- Check `README.md` for usage docs
- Check `DEPLOY.md` for deployment help
- Check `.cursor/rules/plaid-solutions-architect-ai.mdc` for Cursor AI help
- Contact: [Your name / team lead]

**Feature Requests:**
- Open GitHub issue
- Submit PR with improvements
- Discuss in team chat

---

**Built with ❤️ for Plaid Solutions Engineering**

**Last Updated:** January 2026

