# Website Deployment Guide

## Quick Start (5 minutes)

### Option 1: GitHub Pages (Recommended)

1. **Create GitHub Repository**
   ```bash
   # Create new repo: carla-nav2-website
   # Make it PUBLIC
   ```

2. **Upload Files**
   ```bash
   git init
   git add .
   git commit -m "Initial website deployment"
   git remote add origin https://github.com/YOUR_USERNAME/carla-nav2-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "main" branch as source
   - Click "Save"

4. **Wait ~1-2 minutes**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/carla-nav2-website`

✅ **Done!** Website is now live and automatically updates when you push changes.

---

### Option 2: Netlify (Most User-Friendly)

1. **Sign up at netlify.com**
   - Use GitHub login for easier setup

2. **Connect Repository**
   - Click "New site from Git"
   - Select your GitHub repo
   - Netlify auto-detects (no build command needed)

3. **Deploy**
   - Netlify automatically deploys on every push
   - Get custom domain for free
   - SSL certificate included

✅ **Done!** Website is live with automatic updates.

---

### Option 3: Vercel (Zero Config)

1. **Sign up at vercel.com**
   - Click "Import Project"
   - Select GitHub repository

2. **Deploy**
   - Click "Deploy"
   - Vercel handles everything

✅ **Done!** Website is live instantly.

---

## File Structure for Deployment

```
carla-nav2-website/
├── index.html          ← Main file
├── styles.css          ← Styling
├── script.js           ← Functionality
├── data.js             ← Content (UPDATE THIS)
├── README.md           ← Documentation
└── DEPLOYMENT.md       ← This file
```

**No build process needed!** These are static HTML/CSS/JS files.

---

## Update Workflow

### To Update Website Content:

1. **Edit `data.js`**
   ```bash
   # Add new updates, change team info, etc.
   nano data.js
   ```

2. **Push Changes**
   ```bash
   git add data.js
   git commit -m "Update project information"
   git push origin main
   ```

3. **Website Updates Automatically**
   - GitHub Pages: ~1 minute
   - Netlify: ~30 seconds
   - Vercel: ~10 seconds

---

## Custom Domain

### With GitHub Pages

1. Buy domain (GoDaddy, Namecheap, etc.)
2. Settings → Pages → Custom Domain
3. Enter your domain
4. Follow DNS setup instructions

### With Netlify

1. Domain Settings → Add Domain
2. Update DNS records (super easy with Netlify)
3. SSL auto-renewed annually

---

## Local Testing

```bash
# Start simple server
python3 -m http.server 8000

# Visit: http://localhost:8000
# Edit files in your editor
# Refresh browser to see changes
```

---

## Troubleshooting

**Site not updating?**
- GitHub Pages: Wait 2 minutes after push
- Netlify: Check deployment logs
- Clear browser cache (Ctrl+Shift+Delete)

**Images not showing?**
- Check GitHub raw URLs are correct
- Verify image paths in HTML
- Test image URLs in browser directly

**Styling looks wrong?**
- Clear browser cache completely
- Hard refresh: Ctrl+Shift+R
- Check CSS file size (should be ~30KB)

---

## Performance Optimization

### Compress Images

```bash
# Install ImageMagick
sudo apt install imagemagick

# Compress all images
mogrify -quality 85 *.jpg
```

### Minify CSS/JS (Optional)

Use online tools:
- CSS: https://cssminifier.com/
- JS: https://minifycode.com/javascript-minifier/

---

## Monitor Traffic (Optional)

### Google Analytics

1. Create Google Analytics account
2. Get tracking ID
3. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_ID');
   </script>
   ```

---

## Backup Strategy

### Option 1: Git (Recommended)

```bash
# All changes tracked
git log                  # See history
git diff                 # See changes
git revert COMMIT_ID     # Undo changes
```

### Option 2: Local Backup

```bash
# Backup entire folder
cp -r carla-nav2-website ~/backups/website_backup_$(date +%Y%m%d)
```

---

## Scaling Up

When you need more features:

1. **Add Blog**
   - Create `blog.html`
   - Link from navbar
   - Add blog posts as HTML files

2. **Add Comments**
   - Use Disqus (free tier available)
   - Embed on sections

3. **Add Contact Form**
   - Use Formspree.io
   - Free contact form submissions

4. **Add Newsletter**
   - Use Mailchimp
   - Free tier: up to 500 contacts

---

## Security Checklist

- ✅ No sensitive data in code
- ✅ Use HTTPS (automatic with GitHub Pages/Netlify)
- ✅ Keep dependencies updated
- ✅ Regular backups via Git

---

## Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| GitHub Pages | FREE | Unlimited traffic |
| Netlify | FREE | Includes analytics |
| Vercel | FREE | Zero config deployment |
| Custom Domain | ~$10/year | Optional |

**Total Cost: FREE (if no custom domain)**

---

## Quick Reference Commands

```bash
# Clone website locally
git clone https://github.com/YOUR_USERNAME/carla-nav2-website.git
cd carla-nav2-website

# Edit content
nano data.js

# Test locally
python3 -m http.server 8000

# Update online
git add .
git commit -m "Update content"
git push origin main

# View changes live (in ~1-2 minutes)
```

---

## Support

**Need help?**
1. Check README.md
2. Review this deployment guide
3. Check GitHub Pages documentation
4. Contact project lead

---

**Website ready to deploy! 🚀**
