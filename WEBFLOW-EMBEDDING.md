# Webflow Embedding Guide for instarinse® Calculator

## 🚀 **Step 1: Enable GitHub Pages**

1. **Go to your GitHub repository**: https://github.com/salmon2706/instarinse-calculator-website-official
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** in left sidebar
4. **Source**: Select "Deploy from a branch"
5. **Branch**: Select "main" 
6. **Folder**: Select "/ (root)"
7. **Click "Save"**

**Your calculator will be live at:**
```
https://salmon2706.github.io/instarinse-calculator-website-official/
```

*Note: It may take 5-10 minutes for GitHub Pages to deploy*

---

## 🌐 **Step 2: Embed in Webflow**

### **Method 1: Full-Screen iFrame (Recommended)**

1. **Add an Embed Element** to your Webflow page
2. **Paste this code**:

```html
<div style="width: 100%; height: 100vh; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
  <iframe 
    src="https://salmon2706.github.io/instarinse-calculator-website-official/" 
    width="100%" 
    height="100%" 
    frameborder="0"
    style="border: none; display: block;">
  </iframe>
</div>
```

### **Method 2: Fixed Height iFrame**

```html
<div style="width: 100%; max-width: 1200px; margin: 0 auto; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
  <iframe 
    src="https://salmon2706.github.io/instarinse-calculator-website-official/" 
    width="100%" 
    height="1200px" 
    frameborder="0"
    style="border: none; display: block;">
  </iframe>
</div>
```

### **Method 3: Modal Popup (Advanced)**

```html
<!-- Trigger Button -->
<div style="text-align: center; margin: 40px 0;">
  <button onclick="openCalculator()" style="background: #007AFF; color: white; border: none; padding: 16px 32px; border-radius: 12px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">
    🧮 Open Savings Calculator
  </button>
</div>

<!-- Modal -->
<div id="calculatorModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000;">
  <div style="position: relative; width: 95%; height: 95%; margin: 2.5%; background: white; border-radius: 20px; overflow: hidden;">
    <button onclick="closeCalculator()" style="position: absolute; top: 20px; right: 20px; background: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 1.2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.2); z-index: 10001;">✕</button>
    <iframe 
      src="https://salmon2706.github.io/instarinse-calculator-website-official/" 
      width="100%" 
      height="100%" 
      frameborder="0"
      style="border: none; border-radius: 20px;">
    </iframe>
  </div>
</div>

<script>
function openCalculator() {
  document.getElementById('calculatorModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeCalculator() {
  document.getElementById('calculatorModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeCalculator();
});
</script>
```

---

## 📱 **Mobile Optimization**

The calculator is already mobile-optimized, but for best results in Webflow:

### **Responsive iFrame CSS**
```css
.calculator-iframe {
  width: 100%;
  height: 100vh;
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .calculator-iframe {
    height: 120vh; /* Extra height for mobile scrolling */
    border-radius: 12px;
  }
}
```

---

## 🎨 **Styling Tips for Webflow**

### **Container Styling**
```css
/* Add this to your Webflow page's custom CSS */
.calculator-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.08);
}
```

### **Section Spacing**
```css
.calculator-section {
  margin: 80px 0;
}

.calculator-section h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #1C1C1E;
}
```

---

## ⚡ **Quick Test**

After setting up GitHub Pages, test your embedding:

1. **Wait 5-10 minutes** for GitHub Pages deployment
2. **Visit**: https://salmon2706.github.io/instarinse-calculator-website-official/
3. **Verify calculator works** properly
4. **Test on mobile** device
5. **Embed in Webflow** using Method 1 above

---

## 🔧 **Troubleshooting**

### **If calculator doesn't load:**
- Check GitHub Pages is enabled and deployed
- Verify the URL is correct
- Try opening the GitHub Pages URL directly first

### **If iframe is too small:**
- Increase height value (try 1400px or 100vh)
- Add scrolling: `scrolling="yes"`

### **If mobile doesn't work well:**
- Use Method 1 with `height: 100vh`
- Add responsive CSS above

---

## 📊 **Final URLs**

- **GitHub Repository**: https://github.com/salmon2706/instarinse-calculator-website-official
- **Live Calculator**: https://salmon2706.github.io/instarinse-calculator-website-official/
- **For Webflow Embedding**: Use the iframe code above with this URL

---

**Your calculator is now live and ready to embed anywhere!** 🎉
