# ANST Study - Ứng dụng Quản lý Học tập Thông minh

## 📖 Giới thiệu

ANST Study là một ứng dụng web React được thiết kế để hỗ trợ việc học tập hiệu quả thông qua phương pháp Pomodoro và theo dõi tiến độ học tập. Ứng dụng giúp người dùng tập trung vào việc học, quản lý thời gian và phân tích hiệu suất học tập của mình.

## 🚀 Tính năng chính

### 1. 🕐 Hệ thống Timer Pomodoro
- **Timer học tập**: Đếm ngược thời gian học tập với các mốc thời gian linh hoạt
- **Timer nghỉ ngơi**: Hỗ trợ các khoảng thời gian nghỉ ngơi (5, 15, 30 phút)
- **Âm thanh thông báo**: Phát âm thanh khi bắt đầu và kết thúc phiên học
- **Hiển thị trên title**: Thời gian đếm ngược hiển thị trên tiêu đề trình duyệt

### 2. 📝 Quản lý Task và Ghi chú
- **Tạo task học tập**: Đặt tên và thời gian cho từng phiên học
- **Ghi chú học tập**: Thêm ghi chú cho mỗi phiên học
- **Đánh giá hiệu quả**: Cho điểm mức độ hài lòng sau mỗi phiên học
- **Lưu trữ kỹ năng**: Ghi lại kỹ năng đã học trong phiên

### 3. 👤 Hệ thống Người dùng
- **Đăng ký/Đăng nhập**: Xác thực người dùng an toàn
- **Quản lý profile**: Cập nhật thông tin cá nhân
- **Upload avatar**: Thay đổi ảnh đại diện
- **Upload ảnh học tập**: Thêm ảnh nền cho không gian học tập

### 4. 📊 Báo cáo và Phân tích
- **Biểu đồ ApexCharts**: Hiển thị thống kê thời gian học và mức độ hài lòng
- **Phân tích AI**: Đưa ra nhận xét và đề xuất cải thiện
- **Theo dõi tiến độ**: Xem lịch sử học tập theo ngày
- **Thống kê chi tiết**: Phân tích xu hướng học tập

### 5. 🎨 Giao diện và Trải nghiệm
- **Responsive Design**: Tương thích với mọi thiết bị
- **Animation mượt mà**: Sử dụng Framer Motion cho hiệu ứng chuyển trang
- **Theme tùy chỉnh**: Giao diện thân thiện và dễ sử dụng
- **Loading states**: Hiển thị trạng thái tải dữ liệu

## 🛠️ Công nghệ sử dụng

### Frontend
- **React 18.2.0**: Framework chính
- **Redux Toolkit**: Quản lý state toàn cục
- **React Router DOM**: Điều hướng trang
- **Framer Motion**: Animation và hiệu ứng
- **Reactstrap**: UI Components
- **React Icons**: Bộ icon phong phú

### Biểu đồ và Visualization
- **ApexCharts**: Biểu đồ tương tác
- **React Google Charts**: Biểu đồ Google

### Form và Validation
- **Formik**: Quản lý form
- **Yup**: Validation schema

### HTTP Client
- **Axios**: Gọi API

### Development Tools
- **PostCSS**: Xử lý CSS
- **Autoprefixer**: Tự động thêm prefix CSS

## 📁 Cấu trúc dự án

```
src/
├── app/                    # Redux store configuration
├── components/            
│   ├── Auth/              # Xác thực người dùng
│   │   ├── Loggin.jsx     # Component đăng nhập
│   │   ├── ModalSignIn.jsx # Modal đăng nhập
│   │   └── ModalSignUp.jsx # Modal đăng ký
│   ├── Study/             # Tính năng học tập
│   │   ├── Study.jsx      # Component chính học tập
│   │   ├── timer.jsx      # Timer Pomodoro
│   │   ├── Countdown.jsx  # Đếm ngược nghỉ ngơi
│   │   └── Note.jsx       # Ghi chú học tập
│   ├── Report/            # Báo cáo và thống kê
│   │   ├── Profile.jsx    # Trang profile người dùng
│   │   ├── ApexChart.js   # Biểu đồ thống kê
│   │   └── AIcom.jsx      # Phân tích AI
│   ├── User/              # Quản lý người dùng
│   └── Toggle/            # Components toggle
├── features/              # Redux slices
│   ├── user/              # Quản lý user state
│   ├── data/              # Quản lý data state
│   └── toggle/            # Quản lý UI state
└── util/                  # Utilities và API calls
```

## 🚀 Cài đặt và Chạy dự án

### Yêu cầu hệ thống
- Node.js >= 14.0.0
- npm hoặc yarn

### Cài đặt
```bash
# Clone repository
git clone [repository-url]

# Di chuyển vào thư mục dự án
cd FE-anst

# Cài đặt dependencies
npm install

# Tạo file .env và cấu hình API URL
echo "REACT_APP_API_URL=http://localhost:3333" > .env
```

### Chạy ứng dụng
```bash
# Chạy ở môi trường development
npm start

# Build cho production
npm run build

# Deploy lên GitHub Pages
npm run deploy
```

## 🔧 Cấu hình

### Environment Variables
```env
REACT_APP_API_URL=http://localhost:3333  # URL của backend API
```

### Backend API
Ứng dụng cần kết nối với backend API để:
- Xác thực người dùng
- Lưu trữ dữ liệu học tập
- Quản lý profile và upload file

## 📱 Hướng dẫn sử dụng

### 1. Đăng ký/Đăng nhập
- Truy cập ứng dụng và click vào avatar ở góc phải
- Chọn "Sign In" để đăng nhập hoặc "Sign Up" để đăng ký
- Điền thông tin và xác thực

### 2. Bắt đầu học tập
- Tại trang chủ, click "Bắt đầu" để mở form tạo task
- Nhập tên task và chọn thời gian học (mặc định 25 phút)
- Click "Start" để bắt đầu phiên học
- Tập trung học tập cho đến khi timer kết thúc

### 3. Nghỉ ngơi
- Sau khi hoàn thành phiên học, chọn thời gian nghỉ ngơi
- Hệ thống sẽ phát âm thanh và đếm ngược thời gian nghỉ

### 4. Đánh giá và ghi chú
- Sau mỗi phiên học, đánh giá mức độ hài lòng (1-10)
- Thêm ghi chú về những gì đã học
- Ghi lại kỹ năng đã rèn luyện

### 5. Xem báo cáo
- Truy cập trang Profile để xem thống kê học tập
- Xem biểu đồ thời gian học và mức độ hiệu quả
- Đọc phân tích AI để cải thiện phương pháp học

## 🎯 Roadmap

### Phiên bản tiếp theo
- [ ] Thêm chế độ học nhóm
- [ ] Tích hợp calendar để lên lịch học
- [ ] Thêm nhiều loại âm thanh thông báo
- [ ] Xuất báo cáo PDF
- [ ] Tích hợp với các ứng dụng học tập khác
- [ ] Chế độ dark mode
- [ ] Thông báo push
- [ ] Gamification (điểm thưởng, achievement)

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp! Vui lòng:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem file `LICENSE` để biết thêm chi tiết.

## 📞 Liên hệ

- **GitHub**: [nstanw](https://github.com/nstanw)
- **Demo**: [https://nstanw.github.io/FE-anst/](https://nstanw.github.io/FE-anst/)

## 🙏 Cảm ơn

Cảm ơn tất cả những người đã đóng góp vào dự án này và cộng đồng open source đã cung cấp các thư viện tuyệt vời!