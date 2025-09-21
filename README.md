# instarinse® Savings Calculator

**Super simple calculator for website visitors to estimate their savings with instarinse®**

## 🎯 Design Philosophy

**Simple 3-Step Flow:**
1. **Tell us about your workplace** - Team size, office days, cups per person
2. **How do you currently clean cups?** - Paper, hand washing, dishwasher mix  
3. **How would you use instarinse®?** - Your optimal mix with instarinse®

**Results appear instantly** when both mixes total exactly 100%

## ✨ Key Features

- ✅ **Super Easy Flow** - Anyone can use it without instructions
- ✅ **Real-time Results** - Instant calculations as you adjust sliders
- ✅ **Exact Validation** - Must total 100% (matches original dashboard)
- ✅ **Complete Results Table** - Annual breakdown with detailed comparisons
- ✅ **Professional PDF Export** - Branded reports for stakeholders
- ✅ **Mobile Perfect** - Touch-friendly design for all devices

## 🧮 Exact Calculations

**Matches original dashboard assumptions:**
- **Electricity**: £0.25/kWh
- **Labour**: £12.21/hour  
- **Paper Cups**: £0.15/cup + 0.25L water + 12g CO₂
- **Hand Washing**: £0.01 detergent + 1.0L water + 0.08 kWh + 20g CO₂
- **Dishwasher**: 40 cups/load, 13.2L water, 0.9 kWh, 10min labour, £0.15 detergent
- **instarinse®**: 50ml water, 8Wh energy, 2g CO₂, 3 seconds labour

## 🚀 Quick Start

```bash
# Test locally
python3 -m http.server 8000
open http://localhost:8000

# Test calculations
node test.js calc
```

## 📊 What Users Get

### Instant Results
- **Annual Cost Savings** (£)
- **Water Saved** (Olympic swimming pools)  
- **CO₂ Reduction** (tonnes per year)
- **Time Saved** (working days equivalent)

### Detailed Breakdown Table
- Current situation vs With instarinse® vs Savings
- Annual cost, water usage, CO₂ emissions
- Clear green savings highlighting

### Professional PDF Report
- Company name personalization
- Complete configuration summary
- Branded instarinse® formatting
- Ready for stakeholder presentations

## 🌐 Perfect for Website Embedding

**Size**: Only 33KB (perfect for any platform)
**Dependencies**: Just jsPDF for PDF export
**Mobile**: Touch-optimized for phones/tablets
**Clean**: No complex navigation or confusing options

## 📱 User Experience

### Desktop
- Clean 3-step layout
- Large, obvious sliders
- Results appear on the right

### Mobile  
- Stacked single-column layout
- Touch-friendly sliders
- Clear validation messages

### Validation
- **Green checkmark**: "✓ Perfect! Total: 100%" 
- **Red warning**: "Total: 85% (adjust to 100%)"
- **Results hidden** until both mixes are exactly 100%

## 📁 Files

```
instarinse-calculator/
├── index.html          # Simple calculator (33KB)
├── test.js            # Test suite with calculation verification  
├── package.json       # NPM scripts for testing
├── README.md          # This file
└── DEPLOYMENT.md      # GitHub Pages deployment guide
```

## 🎯 Perfect For

- Website visitors exploring instarinse®
- Facilities managers doing quick estimates
- Procurement teams building business cases
- Sustainability officers measuring impact
- Anyone who needs instant, accurate savings calculations

---

**Simple. Fast. Accurate. Ready for your website.** 🚀