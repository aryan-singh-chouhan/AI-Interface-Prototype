# 🚀 DEPLOYMENT STEPS - FOLLOW EXACTLY

## ✅ Your build is working! (Already tested)

Now follow these steps to deploy:

---

## **METHOD 1: Netlify (Easiest - Recommended)**

### Step 1: Create GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up"
3. Complete registration

### Step 2: Create New Repository on GitHub
1. Login to GitHub
2. Click "+" icon (top right) → "New repository"
3. Repository name: `AI-Interface-Prototype`
4. Make it **Public** ✅
5. Do **NOT** check "Add README"
6. Click "Create repository"

### Step 3: Push Your Code to GitHub

Open PowerShell in `C:\Assessment\AI-Interface-Prototype` and run these commands:

```powershell
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Add GitHub remote (REPLACE 'YOUR-USERNAME' with your GitHub username!)
git remote add origin https://github.com/YOUR-USERNAME/AI-Interface-Prototype.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important**: Replace `YOUR-USERNAME` with your actual GitHub username!

### Step 4: Deploy on Netlify

1. Go to https://www.netlify.com
2. Click "Sign up" → "Sign up with GitHub"
3. Authorize Netlify to access GitHub
4. Click "Add new site" → "Import an existing project"
5. Click "Deploy with GitHub"
6. Find and select your `AI-Interface-Prototype` repository
7. Build settings (should auto-detect, but verify):
   ```
   Build command: npm run build
   Publish directory: dist
   ```
8. Click "Deploy site"
9. **Wait 2-3 minutes**

### Step 5: Get Your Live URL

After deployment completes:
- You'll see: `https://random-name.netlify.app`
- Click "Site settings" → "Change site name" 
- Change to something like: `ai-interface-yourname`
- Your final URL: `https://ai-interface-yourname.netlify.app`

---

## **METHOD 2: Vercel (Alternative)**

### Steps:
1. Go to https://vercel.com
2. Click "Sign Up" → "Continue with GitHub"
3. Click "Add New" → "Project"
4. Import your `AI-Interface-Prototype` repository
5. Click "Deploy"
6. Done! Get your URL like `https://ai-interface-xyz.vercel.app`

---

## 📝 After Deployment

### Update Your README
Add at the top of `README.md`:

```markdown
🔗 **Live Demo**: https://your-deployed-url.netlify.app
📦 **GitHub**: https://github.com/YOUR-USERNAME/AI-Interface-Prototype
```

### Test Your Live Site
Visit your URL and check:
- ✅ Chat interface loads
- ✅ Can send messages
- ✅ Dark mode works
- ✅ Sidebar opens/closes

---

## 🎯 What to Submit for Assessment

1. **Live URL**: `https://your-site.netlify.app` (or vercel.app)
2. **GitHub Repository**: `https://github.com/YOUR-USERNAME/AI-Interface-Prototype`

---

## ❓ Troubleshooting

### If build fails on Netlify:
1. Check that "Build command" is: `npm run build`
2. Check that "Publish directory" is: `dist`
3. Click "Retry deploy"

### If site shows blank page:
- Wait 1-2 more minutes (it might still be deploying)
- Check browser console for errors
- Try hard refresh: `Ctrl + Shift + R`

### Need help with GitHub push:
Make sure you're in the right folder:
```powershell
cd C:\Assessment\AI-Interface-Prototype
```

Then try the git commands again.

---

## 🎉 You're Done!

Once deployed, you'll have:
- ✅ Working live website
- ✅ Code on GitHub
- ✅ Ready to submit for assessment

**Start with Step 1 above and follow each step carefully!**
