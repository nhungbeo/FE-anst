# Hướng dẫn sử dụng hệ thống Theme

## Tổng quan
Đã thêm thành công hệ thống chuyển đổi theme và chọn màu chủ đạo vào ứng dụng với các tính năng sau:

## Tính năng chính

### 1. Chuyển đổi Theme
- **5 theme có sẵn**: Light, Dark, Ocean, Forest, Sunset
- **Toggle nhanh**: Nút chuyển đổi nhanh giữa Light/Dark
- **Theme panel**: Panel cài đặt chi tiết với preview

### 2. Tùy chỉnh màu chủ đạo
- **10 màu có sẵn**: Blue, Purple, Green, Orange, Red, Pink, Indigo, Cyan, Teal, Lime
- **Color picker**: Chọn màu tùy chỉnh với color input
- **Real-time preview**: Xem trước màu ngay lập tức

### 3. Responsive Design
- Tối ưu cho mobile và desktop
- Panel thu gọn trên màn hình nhỏ
- Touch-friendly controls

## Cách sử dụng

### Chuyển đổi theme nhanh
1. Click vào nút Sun/Moon ở góc phải trên cùng
2. Theme sẽ chuyển đổi giữa Light và Dark

### Cài đặt chi tiết
1. Click vào nút Settings (⚙️) bên cạnh nút toggle
2. Chọn tab "Themes" để xem và chọn theme
3. Chọn tab "Colors" để tùy chỉnh màu chủ đạo
4. Click "Reset" để về cài đặt mặc định

### Sử dụng trong code

#### Lấy theme hiện tại
```javascript
import { useSelector } from 'react-redux';
import { getCurrentTheme } from '../features/theme/themeSlice';

const MyComponent = () => {
  const theme = useSelector(getCurrentTheme);
  
  return (
    <div style={{ color: theme.colors.primary }}>
      Current theme: {theme.name}
    </div>
  );
};
```

#### Dispatch theme actions
```javascript
import { useDispatch } from 'react-redux';
import { setTheme, setPrimaryColor, toggleTheme } from '../features/theme/themeSlice';

const MyComponent = () => {
  const dispatch = useDispatch();
  
  const handleThemeChange = () => {
    dispatch(setTheme('dark'));
    // hoặc
    dispatch(setPrimaryColor('#ff0000'));
    // hoặc
    dispatch(toggleTheme());
  };
};
```

## CSS Variables

Hệ thống sử dụng CSS Variables để áp dụng theme:

```css
/* Sử dụng trong CSS */
.my-component {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
}
```

### Các biến có sẵn:
- `--color-primary`: Màu chủ đạo
- `--color-secondary`: Màu phụ
- `--color-background`: Background gradient
- `--color-surface`: Màu nền component
- `--color-text`: Màu text chính
- `--color-textSecondary`: Màu text phụ
- `--color-border`: Màu border
- `--color-shadow`: Màu shadow
- `--shadow-sm/md/lg/xl`: Shadow presets
- `--border-radius/border-radius-sm/border-radius-lg`: Border radius

## Files đã thêm/sửa đổi

### Files mới:
1. `src/features/theme/themeSlice.js` - Redux slice cho theme
2. `src/components/Theme/ThemeProvider.jsx` - Provider component
3. `src/components/Theme/ThemeSwitcher.jsx` - UI component chuyển đổi theme
4. `src/components/Theme/theme.css` - Styles cho theme switcher
5. `src/components/Theme/ThemeDemo.jsx` - Demo component
6. `src/theme-variables.css` - CSS variables

### Files đã sửa đổi:
1. `src/app/store.js` - Thêm themeReducer
2. `src/App.js` - Thêm ThemeProvider và ThemeSwitcher
3. `src/App.css` - Cập nhật để sử dụng CSS variables
4. `src/components/Animation.js` - Thêm route cho ThemeDemo

## Demo
Truy cập `/theme-demo` để xem demo các component với theme mới.

## Cài đặt và chạy
```bash
npm install
npm start
```

Sau khi chạy, bạn sẽ thấy:
- Nút toggle theme ở góc phải trên
- Nút settings để mở panel cài đặt
- Tất cả component sẽ tự động áp dụng theme được chọn

## Tùy chỉnh thêm

### Thêm theme mới:
Sửa file `src/features/theme/themeSlice.js` và thêm theme vào object `themes`.

### Thêm màu mới:
Sửa object `primaryColors` trong cùng file.

### Thêm CSS variables:
Sửa file `src/theme-variables.css` để thêm biến mới.