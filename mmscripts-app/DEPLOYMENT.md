# MMSCRIPTS Deployment Guide

## 📋 Pre-Deployment Checklist

- [ ] All dependencies installed
- [ ] Firebase project created and configured
- [ ] Environment variables set up
- [ ] Build tested locally
- [ ] Content added to Firebase (books, articles, achievements)
- [ ] Images optimized
- [ ] SEO meta tags configured

---

## 🔥 Firebase Setup (Detailed)

### Step 1: Create Firebase Project

1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter project name: **MMSCRIPTS**
4. Enable Google Analytics (recommended)
5. Create project

### Step 2: Enable Required Services

#### Firestore Database
1. Go to Firestore Database
2. Click "Create database"
3. Start in **Production mode**
4. Choose location closest to your users
5. Click "Enable"

#### Firebase Storage
1. Go to Storage
2. Click "Get started"
3. Start in **Production mode**
4. Click "Done"

#### Firebase Hosting (Optional)
1. Go to Hosting
2. Click "Get started"
3. Follow the setup instructions

### Step 3: Get Configuration

1. Go to Project Settings (gear icon)
2. Scroll to "Your apps"
3. Click web icon (</>)
4. Register app name: **MMSCRIPTS Web**
5. Copy the configuration object
6. Paste into `.env.local`:

```env
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=mmscripts.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=mmscripts
VITE_FIREBASE_STORAGE_BUCKET=mmscripts.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
VITE_FIREBASE_MEASUREMENT_ID=G-ABC123
```

### Step 4: Set Up Firestore Collections

Create these collections with sample data:

#### Books Collection
```javascript
// Document: book1
{
  title: "The Journey Within",
  author: "Sarah Mitchell",
  cover: "https://your-storage-url/book1.jpg",
  description: "A profound exploration of self-discovery...",
  amazonLink: "https://amazon.com/...",
  featured: true,
  genre: "Fiction",
  createdAt: Firebase.Timestamp.now()
}
```

#### Articles Collection
```javascript
// Document: article1
{
  title: "Welcome to MMSCRIPTS",
  author: "Founder, MMSCRIPTS",
  date: "December 1, 2025",
  excerpt: "Today marks the beginning...",
  content: "Full article content here...",
  image: "https://your-storage-url/article1.jpg",
  category: "Founders Note",
  createdAt: Firebase.Timestamp.now()
}
```

#### Achievements Collection
```javascript
// Document: achievement1
{
  year: "2025",
  title: "MMSCRIPTS Founded",
  description: "Established with a mission...",
  icon: "🚀",
  order: 1
}
```

### Step 5: Configure Security Rules

#### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /books/{bookId} {
      allow read: if true;
      allow write: if false; // Admin only via Firebase Console
    }
    match /articles/{articleId} {
      allow read: if true;
      allow write: if false;
    }
    match /achievements/{achievementId} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

#### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## 🚀 Vercel Deployment

### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables
vercel env add VITE_FIREBASE_API_KEY
vercel env add VITE_FIREBASE_AUTH_DOMAIN
# ... add all other variables

# Deploy to production
vercel --prod
```

### Method 2: GitHub Integration (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/mmscripts.git
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Vite
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all Firebase variables from `.env.local`
   - Apply to: Production, Preview, Development

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your live site!

---

## 🌐 Custom Domain Setup

### Add Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your domain: `www.mmscripts.com`
3. Follow DNS configuration instructions
4. Add these DNS records to your domain provider:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

5. Wait for DNS propagation (can take up to 48 hours)
6. Vercel will automatically provision SSL certificate

---

## 📊 Post-Deployment Tasks

### 1. Test All Features
- [ ] All pages load correctly
- [ ] Navigation works on mobile and desktop
- [ ] Forms submit properly
- [ ] Images load from Firebase Storage
- [ ] Data loads from Firestore
- [ ] Links work (internal and external)

### 2. SEO Optimization
- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta tags are correct
- [ ] Check mobile-friendliness
- [ ] Test page speed with Lighthouse

### 3. Analytics Setup
- [ ] Verify Firebase Analytics is working
- [ ] Set up Google Analytics (optional)
- [ ] Configure conversion tracking

### 4. Monitoring
- [ ] Set up Vercel Analytics
- [ ] Monitor Firebase usage
- [ ] Set up error tracking (e.g., Sentry)

---

## 🔧 Troubleshooting

### Build Fails on Vercel

**Issue**: Build command fails  
**Solution**: Check `package.json` scripts, ensure all dependencies are in `dependencies` not `devDependencies`

### Firebase Connection Issues

**Issue**: Cannot connect to Firebase  
**Solution**: Verify environment variables are set correctly on Vercel

### Images Not Loading

**Issue**: Images don't load from Firebase Storage  
**Solution**: Check Storage rules allow public read access

### Routing Issues

**Issue**: Page refreshes show 404  
**Solution**: Vercel should auto-detect React Router, but add `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 📈 Performance Optimization

### Image Optimization
- Use WebP format
- Compress images before upload
- Implement lazy loading (already included)

### Code Splitting
- React Router automatically code-splits by route
- Consider dynamic imports for heavy components

### Caching
- Vercel automatically caches static assets
- Configure Firebase caching headers

---

## 🔐 Security Recommendations

1. **Never expose Firebase Admin SDK credentials**
2. **Use environment variables for all sensitive data**
3. **Enable Firebase App Check** for production
4. **Implement rate limiting** on contact form
5. **Regular security audits** of dependencies
6. **Monitor Firebase usage** to prevent abuse

---

## 📞 Support

For deployment assistance:
- **Vercel Support**: https://vercel.com/support
- **Firebase Support**: https://firebase.google.com/support
- **Project Issues**: Create an issue on GitHub

---

**Deployment complete! 🎉**

Your MMSCRIPTS website is now live and ready to showcase your publishing services to the world.
