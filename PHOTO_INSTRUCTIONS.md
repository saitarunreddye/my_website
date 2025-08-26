# 📸 Adding Your Photo to the Portfolio

## 🎯 **How to Add Your Photo**

### **Step 1: Prepare Your Photo**
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x800 pixels or larger (square aspect ratio works best)
- **Quality**: High resolution for crisp display
- **Style**: Professional headshot or portrait

### **Step 2: Add Your Photo**
1. **Copy your photo** to the `public/images/` folder
2. **Rename it** to `profile-photo.jpg` (or update the code to match your filename)
3. **Refresh the website** - your photo will appear automatically!

### **Step 3: Alternative File Names**
If you prefer a different filename, update these lines in the code:
- `src/components/Hero.tsx` - Line with `src="/images/profile-photo.jpg"`
- `src/components/About.tsx` - Line with `src="/images/profile-photo.jpg"`

## 📁 **File Structure**
```
my_website/
├── public/
│   └── images/
│       └── profile-photo.jpg  ← Add your photo here
├── src/
│   └── components/
│       ├── Hero.tsx          ← Hero section photo
│       └── About.tsx         ← About section photo
```

## 🎨 **Photo Features**
- **Gradient Border**: Beautiful emerald-to-blue gradient frame
- **Hover Effects**: Subtle scale animation on hover
- **Floating Elements**: Animated decorative elements
- **Fallback**: Shows initials if photo isn't found
- **Responsive**: Looks great on all devices

## 💡 **Tips for Best Results**
- **Professional**: Use a high-quality professional photo
- **Background**: Simple, clean background works best
- **Lighting**: Good lighting for clear visibility
- **Expression**: Friendly, approachable expression
- **Clothing**: Professional attire

## 🔧 **Customization Options**
- **Size**: Adjust photo size by modifying the `w-80 h-80` classes
- **Shape**: Change from rounded to circular by updating border radius
- **Border**: Modify gradient colors in the CSS
- **Position**: Adjust photo placement in the layout

Your photo will make the portfolio much more personal and professional! 🚀
