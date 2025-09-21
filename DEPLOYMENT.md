# Deployment Guide

## 🚀 Quick Deploy to GitHub Pages

1. **Create Repository**
   ```bash
   # Create new repo on GitHub: instarinse-calculator
   ```

2. **Upload Files**
   ```bash
   git init
   git add .
   git commit -m "Initial calculator deployment"
   git branch -M main
   git remote add origin https://github.com/yourusername/instarinse-calculator.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: "Deploy from a branch" → `main` → `/ (root)`
   - Save

4. **Your calculator is live!**
   ```
   https://yourusername.github.io/instarinse-calculator/
   ```

## 🧪 Test Before Deploy

```bash
# Run comprehensive tests
npm test

# Test calculations manually  
npm run test:calc

# Start local server
npm start
# Open http://localhost:8000
```

## 📱 Embedding Options

### Direct Link
```html
<a href="https://yourusername.github.io/instarinse-calculator/" target="_blank">
  Calculate Your Savings
</a>
```

### Modal Integration
```html
<button onclick="openCalculator()">Open Savings Calculator</button>

<div id="calculatorModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:1000;">
  <iframe src="https://yourusername.github.io/instarinse-calculator/" 
          style="width:90%; height:90%; margin:5%; border:none; border-radius:16px;">
  </iframe>
  <button onclick="closeCalculator()" style="position:absolute; top:20px; right:20px;">✕</button>
</div>

<script>
function openCalculator() { document.getElementById('calculatorModal').style.display = 'block'; }
function closeCalculator() { document.getElementById('calculatorModal').style.display = 'none'; }
</script>
```

### Embedded iFrame
```html
<iframe src="https://yourusername.github.io/instarinse-calculator/" 
        width="100%" 
        height="800px" 
        frameborder="0"
        style="border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
</iframe>
```

## 🛠️ Customization

To modify assumptions, edit the `GLOBAL_ASSUMPTIONS` object in `index.html`:

```javascript
const GLOBAL_ASSUMPTIONS = {
    electricityRate: 0.22,        // £ per kWh
    paperCup: { 
        cost: 0.15,               // £ per cup
        water: 0.25,              // L per cup (manufacturing)
        co2: 0.012                // kg CO₂ per cup
    },
    // ... other assumptions
};
```

## 📊 Analytics (Optional)

Add Google Analytics before closing `</head>` tag:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security

- ✅ No server-side code required
- ✅ No user data stored or transmitted  
- ✅ All calculations client-side
- ✅ HTTPS ready for GitHub Pages

## 🌐 Custom Domain

1. Add `CNAME` file to repository with your domain
2. Configure DNS with your provider:
   - Type: CNAME
   - Name: calculator (or subdomain)
   - Value: yourusername.github.io

## 📞 Support

Test suite validates:
- ✅ File structure and sizes
- ✅ HTML element structure  
- ✅ JavaScript functions
- ✅ Calculation logic
- ✅ Input validation
- ✅ Responsive design

Run `npm test` to verify everything works before deployment.

---

**Simple. Clean. Ready to deploy.** 🚀