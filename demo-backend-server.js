// Plaid Solutions Architect Demo - Backend Server
// Deploy this to Railway, Render, or Vercel for free!

const express = require('express');
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins (needed for demo)
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Plaid Solutions Architect Demo Backend',
    endpoints: [
      '/api/link_token',
      '/api/exchange_token', 
      '/api/balance',
      '/api/auth',
      '/api/transactions'
    ]
  });
});

// POST /api/link_token - Create Link Token
app.post('/api/link_token', async (req, res) => {
  try {
    const { client_id, secret, user_id, products, environment } = req.body;
    
    if (!client_id || !secret) {
      return res.status(400).json({ error: 'client_id and secret are required' });
    }
    
    const config = new Configuration({
      basePath: PlaidEnvironments[environment],
      baseOptions: {
        headers: {
          'PLAID-CLIENT-ID': client_id,
          'PLAID-SECRET': secret,
        },
      },
    });
    const client = new PlaidApi(config);
    
    const response = await client.linkTokenCreate({
      user: { client_user_id: user_id || 'demo_user' },
      client_name: 'Plaid Solutions Architect Demo',
      products: products || ['transactions'],
      country_codes: ['US'],
      language: 'en',
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Link token error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: error.response?.data?.error_message || error.message 
    });
  }
});

// POST /api/exchange_token - Exchange Public Token
app.post('/api/exchange_token', async (req, res) => {
  try {
    const { client_id, secret, public_token, environment } = req.body;
    
    if (!client_id || !secret || !public_token) {
      return res.status(400).json({ error: 'client_id, secret, and public_token are required' });
    }
    
    const config = new Configuration({
      basePath: PlaidEnvironments[environment],
      baseOptions: {
        headers: {
          'PLAID-CLIENT-ID': client_id,
          'PLAID-SECRET': secret,
        },
      },
    });
    const client = new PlaidApi(config);
    
    const response = await client.itemPublicTokenExchange({ public_token });
    res.json(response.data);
  } catch (error) {
    console.error('Token exchange error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: error.response?.data?.error_message || error.message 
    });
  }
});

// POST /api/balance - Get Account Balances
app.post('/api/balance', async (req, res) => {
  try {
    const { client_id, secret, access_token, environment } = req.body;
    
    if (!client_id || !secret || !access_token) {
      return res.status(400).json({ error: 'client_id, secret, and access_token are required' });
    }
    
    const config = new Configuration({
      basePath: PlaidEnvironments[environment],
      baseOptions: {
        headers: {
          'PLAID-CLIENT-ID': client_id,
          'PLAID-SECRET': secret,
        },
      },
    });
    const client = new PlaidApi(config);
    
    const response = await client.accountsBalanceGet({ access_token });
    res.json(response.data);
  } catch (error) {
    console.error('Balance error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: error.response?.data?.error_message || error.message 
    });
  }
});

// POST /api/auth - Get Auth Data (account/routing numbers)
app.post('/api/auth', async (req, res) => {
  try {
    const { client_id, secret, access_token, environment } = req.body;
    
    if (!client_id || !secret || !access_token) {
      return res.status(400).json({ error: 'client_id, secret, and access_token are required' });
    }
    
    const config = new Configuration({
      basePath: PlaidEnvironments[environment],
      baseOptions: {
        headers: {
          'PLAID-CLIENT-ID': client_id,
          'PLAID-SECRET': secret,
        },
      },
    });
    const client = new PlaidApi(config);
    
    const response = await client.authGet({ access_token });
    res.json(response.data);
  } catch (error) {
    console.error('Auth error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: error.response?.data?.error_message || error.message 
    });
  }
});

// POST /api/transactions - Get Transactions
app.post('/api/transactions', async (req, res) => {
  try {
    const { client_id, secret, access_token, environment } = req.body;
    
    if (!client_id || !secret || !access_token) {
      return res.status(400).json({ error: 'client_id, secret, and access_token are required' });
    }
    
    const config = new Configuration({
      basePath: PlaidEnvironments[environment],
      baseOptions: {
        headers: {
          'PLAID-CLIENT-ID': client_id,
          'PLAID-SECRET': secret,
        },
      },
    });
    const client = new PlaidApi(config);
    
    const response = await client.transactionsSync({ access_token });
    res.json(response.data);
  } catch (error) {
    console.error('Transactions error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: error.response?.data?.error_message || error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Plaid Demo Backend running on port ${PORT}`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`🚀 Ready to accept requests!`);
});

