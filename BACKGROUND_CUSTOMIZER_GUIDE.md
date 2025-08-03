# 🖼️ Background Customizer - Hướng dẫn sử dụng

## 🎯 Tổng quan
Background Customizer cho phép người dùng tùy chỉnh hình nền của ứng dụng với 3 cách khác nhau: Upload từ máy, nhập URL, hoặc chọn từ gallery có sẵn.

## ✨ Tính năng chính

### 📤 Upload từ máy
- ✅ **Drag & Drop**: Kéo thả file trực tiếp
- ✅ **File Browser**: Click để chọn file
- ✅ **Format Support**: JPG, PNG, GIF
- ✅ **Size Limit**: Up to 10MB
- ✅ **Preview**: Xem trước trước khi áp dụng

### 🔗 Image URL
- ✅ **URL Input**: Nhập link ảnh trực tiếp
- ✅ **Validation**: Kiểm tra URL hợp lệ
- ✅ **Tips**: Hướng dẫn sử dụng
- ✅ **Loading State**: Indicator khi load ảnh

### 🖼️ Gallery
- ✅ **Predefined Backgrounds**: 6 ảnh có sẵn
- ✅ **Categories**: Study, Nature, Abstract
- ✅ **High Quality**: Unsplash images
- ✅ **Responsive Grid**: Tự động adjust

### 🎨 Additional Features
- ✅ **Live Preview**: Xem trước real-time
- ✅ **Reset Function**: Về background mặc định
- ✅ **Responsive Design**: Mobile-friendly
- ✅ **Theme Integration**: Hoạt động với mọi theme

## 🚀 Cách sử dụng

### Truy cập Background Customizer
1. **Profile Page**: Click "Change Background" trên cover image
2. **Guest Mode**: Click "Try Custom Background"

### Upload Image từ máy
1. **Drag & Drop**: Kéo file ảnh vào vùng upload
2. **Click to Browse**: Click vào vùng upload để chọn file
3. **Preview**: Xem ảnh trong preview section
4. **Apply**: Click "Apply Background"

### Sử dụng Image URL
1. **Enter URL**: Nhập link ảnh vào input field
2. **Validate**: Click check button để validate
3. **Preview**: Ảnh sẽ hiện trong preview
4. **Apply**: Click "Apply Background"

### Chọn từ Gallery
1. **Browse Gallery**: Xem các ảnh có sẵn
2. **Select**: Click vào ảnh muốn chọn
3. **Preview**: Ảnh được hiển thị trong preview
4. **Apply**: Click "Apply Background"

## 🎨 Gallery Images

### Study Category
- **Study Desk**: Workspace inspiration
- **Library**: Classic study environment
- **Modern Workspace**: Clean, minimal setup

### Nature Category
- **Mountain View**: Peaceful landscape
- **Forest**: Natural green environment

### Abstract Category
- **Abstract Blue**: Modern gradient
- **Purple Gradient**: Colorful abstract

## 🔧 Technical Implementation

### Component Structure
```
BackgroundCustomizer/
├── BackgroundCustomizer.jsx - Main component
├── background-customizer.css - Styles
└── index.js - Export file
```

### Redux Integration
```javascript
// Background Slice
{
  currentBackground: '',
  backgroundType: 'default',
  customBackgrounds: [],
  isCustomizerOpen: false
}

// Actions
- setBackground(url, type)
- addCustomBackground(background)
- openCustomizer()
- closeCustomizer()
- resetBackground()
```

### State Management
```javascript
const backgroundState = useSelector(state => state.background);

// Open customizer
dispatch(openCustomizer());

// Apply background
dispatch(setBackground({ url: imageUrl, type: 'url' }));
```

## 🎯 Features Detail

### File Upload
```javascript
// Drag & Drop support
const handleDrop = (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  handleFileSelect(file);
};

// File validation
if (file && file.type.startsWith('image/')) {
  // Process file
}
```

### URL Validation
```javascript
// Image URL testing
const img = new Image();
img.onload = () => setPreviewImage(imageUrl);
img.onerror = () => alert('Invalid image URL');
img.src = imageUrl;
```

### Background Application
```javascript
// Apply to body element
document.body.style.backgroundImage = `url(${imageUrl})`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundAttachment = 'fixed';
```

## 📱 Responsive Design

### Desktop (>768px)
- **Modal**: 800px max width
- **Gallery**: 3-4 columns grid
- **Tabs**: Horizontal layout

### Tablet (≤768px)
- **Modal**: 95% width
- **Gallery**: 2 columns grid
- **Tabs**: Vertical stack

### Mobile (≤480px)
- **Gallery**: Single column
- **URL Input**: Stacked layout
- **Buttons**: Full width

## 🎨 UI/UX Features

### Modal Design
- **Backdrop Blur**: Glass effect
- **Slide Animation**: Smooth entrance
- **Close Options**: X button, overlay click
- **Tab Navigation**: Upload, URL, Gallery

### Interactive Elements
- **Hover Effects**: Scale, shadow changes
- **Loading States**: Spinners, disabled states
- **Drag Feedback**: Visual drag-over indication
- **Selection**: Active state highlighting

### Accessibility
- **Keyboard Navigation**: Tab support
- **ARIA Labels**: Screen reader friendly
- **Focus Management**: Proper focus handling
- **Error Messages**: Clear feedback

## 🔮 Advanced Features

### Custom Background History
```javascript
// Store user's custom backgrounds
customBackgrounds: [
  {
    id: '1234567890',
    url: 'data:image/jpeg;base64...',
    name: 'My Custom Background',
    timestamp: '2024-01-01T00:00:00.000Z'
  }
]
```

### Background Persistence
- **LocalStorage**: Save user preferences
- **Session**: Temporary backgrounds
- **User Account**: Sync across devices

### Performance Optimization
- **Image Compression**: Reduce file sizes
- **Lazy Loading**: Load images on demand
- **Caching**: Store frequently used images
- **CDN Integration**: Fast image delivery

## 🚀 Future Enhancements

### Possible Additions
- **Image Filters**: Blur, brightness, contrast
- **Crop Tool**: Resize and crop images
- **Color Overlay**: Add color tints
- **Pattern Generator**: Create patterns
- **AI Backgrounds**: Generate with AI

### Advanced Features
- **Background Scheduler**: Time-based changes
- **Weather Integration**: Dynamic backgrounds
- **Location-based**: Backgrounds by location
- **Social Sharing**: Share custom backgrounds
- **Community Gallery**: User-submitted backgrounds

## 🎯 Best Practices

### Image Guidelines
- **Resolution**: 1920x1080 or higher
- **Aspect Ratio**: 16:9 recommended
- **File Size**: Under 5MB for best performance
- **Format**: JPG for photos, PNG for graphics

### URL Sources
- **Unsplash**: Free high-quality images
- **Pexels**: Free stock photos
- **Direct Links**: Ensure stable hosting
- **HTTPS**: Secure image URLs

### Performance Tips
- **Optimize Images**: Compress before upload
- **Use WebP**: Modern format when possible
- **Preload**: Critical background images
- **Fallback**: Always have default background

---

**Background Customizer sẵn sàng để personalize trải nghiệm! 🖼️✨🎨**