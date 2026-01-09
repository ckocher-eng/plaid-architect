# 🏗️ Plaid Solutions Architect AI

An AI-powered tool that generates complete Plaid integration guides with architecture diagrams, code samples, scope calculations, and live demos.

## ✨ Features

- **AI-Powered Analysis**: Describe your use case, get instant product recommendations
- **Architecture Diagrams**: Auto-generated Mermaid sequence diagrams
- **Ready-to-Use Code**: Node.js and Python examples for all products
- **Scope Calculator**: Estimate timeline, complexity, and team size
- **Live Demo**: Test your integration with real Plaid API calls
- **Export Options**: PDF, Markdown, or JSON

## 🚀 Quick Start

### Option 1: Local Testing (5 minutes)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the backend:**
   ```bash
   npm start
   ```

3. **Open the HTML file:**
   - Open `plaid_solutions_architect_ai.html` in your browser
   - Enter your Plaid Client ID and Secret
   - Start generating guides!

### Option 2: Deploy & Share (10 minutes)

**Perfect for sharing with colleagues and clients!**

1. **Deploy the backend** (choose one):
   - **Railway** (easiest): [railway.app](https://railway.app/) → Deploy from GitHub
   - **Render**: [render.com](https://render.com/) → New Web Service
   - **Vercel**: Run `npx vercel` in project folder
   
   See [DEPLOY.md](./DEPLOY.md) for detailed instructions.

2. **Update the HTML:**
   - Open `plaid_solutions_architect_ai.html`
   - Find the line: `value="http://localhost:3000/api"`
   - Change to: `value="https://your-deployed-backend.com/api"`

3. **Share it:**
   - Upload the HTML to GitHub Pages, Netlify, or any static host
   - Or just send the HTML file directly!

## 📁 Project Structure

```
PlaidProjects/
├── plaid_solutions_architect_ai.html   # Main tool (frontend)
├── demo-backend-server.js              # Backend API server
├── package.json                        # Dependencies
├── README.md                           # This file
└── DEPLOY.md                           # Deployment guide
```

## 🎯 How It Works

1. **Enter your use case** (e.g., "I need to verify bank accounts for ACH payments")
2. **AI analyzes** and recommends Plaid products
3. **Get a complete guide** with:
   - Product recommendations
   - Architecture diagrams
   - Implementation code
   - Scope estimates
   - Live demo capability

## 🔧 Products Supported

- **Auth**: Account/routing number verification
- **Transactions**: Transaction history
- **Balance**: Real-time balances
- **Signal**: Payment risk assessment
- **Transfer**: ACH transfers
- **Income**: Income verification
- **Identity Verification**: KYC/AML
- **Assets**: Asset reports
- **Check**: Payroll/check data

## 📊 Live Demo Tab

The Live Demo tab lets you test the integration in real-time:

1. Enter your Plaid credentials
2. Click "Launch Plaid Link Demo"
3. Connect a test account (Sandbox: `user_good` / `pass_good`)
4. See real data from Plaid APIs!

## 🔒 Security Notes

- ⚠️ Only use Sandbox/Development credentials in shared demos
- ⚠️ Never expose Production secrets in frontend tools
- ✅ The backend properly proxies API calls (Client ID/Secret never exposed to browser in production)

## 💡 Use Cases

- **Sales/Pre-sales**: Generate custom solution guides for prospects
- **Solution Engineers**: Create technical architecture docs quickly
- **Customer Success**: Help customers understand their integration scope
- **Internal Teams**: Prototype and test Plaid integrations

## 🆘 Troubleshooting

### "Failed to fetch" error
- Make sure the backend is running
- Check the Backend URL in "Advanced" settings
- Verify CORS is enabled on your backend

### Backend won't start
- Run `npm install` first
- Check if port 3000 is already in use
- Try a different port: `PORT=3001 npm start`

### Demo not working
- Verify you're using Sandbox credentials
- Check that products are enabled in your Plaid Dashboard
- Look at browser console for detailed errors

## 📝 License

MIT

## 🤝 Contributing

This is an internal Plaid tool. For questions or improvements, contact your Solutions team.

## 🔗 Resources

- [Plaid Dashboard](https://dashboard.plaid.com/)
- [Plaid Docs](https://plaid.com/docs/)
- [Plaid API Reference](https://plaid.com/docs/api/)
- [Plaid Quickstart](https://github.com/plaid/quickstart)

---

**Built with ❤️ for Plaid Solutions Engineers**
