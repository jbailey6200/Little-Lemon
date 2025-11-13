# Little Lemon Restaurant - Table Booking System

A modern, accessible web application for the Little Lemon restaurant that allows customers to reserve tables online.

## 🚀 Features

- **Table Reservations**: Dynamic booking form with date and time selection
- **Real-time Availability**: Integrated with booking API to show available time slots
- **Form Validation**: HTML5 and React validation for data integrity
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Bookings Display**: View current reservations in a table format

## 🛠️ Technologies Used

- React 19.1.1
- React Router DOM 7.9.5
- Vite 7.1.7
- CSS3 (Custom styling)
- Booking API integration

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v20 or higher)
- npm (v8 or higher)

## 🔧 Installation & Setup

1. **Clone the repository**

# Little Lemon Restaurant - Table Booking System

A modern, accessible web application for the Little Lemon restaurant that allows customers to reserve tables online.

## 🚀 Features

- **Table Reservations**: Dynamic booking form with date and time selection
- **Real-time Availability**: Integrated with booking API to show available time slots
- **Form Validation**: HTML5 and React validation for data integrity
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Bookings Display**: View current reservations in a table format

## 🛠️ Technologies Used

- React 19.1.1
- React Router DOM 7.9.5
- Vite 7.1.7
- CSS3 (Custom styling)
- Booking API integration

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v20 or higher)
- npm (v8 or higher)

## 🔧 Installation & Setup

1. **Clone the repository**
```bash
   git clone https://github.com/YOUR-USERNAME/little-lemon.git
   cd little-lemon
```

2. **Install dependencies**
```bash
   npm install
```

3. **Run the development server**
```bash
   npm run dev
```

4. **Open in browser**
```
   Navigate to: http://localhost:5173
```

## 📁 Project Structure
```
little-lemon/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Highlights.jsx
│   │   ├── Testimonials.jsx
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── ReservationForm.jsx
│   │   └── BookingsTable.jsx
│   ├── pages/           # Page components
│   │   └── Reservations.jsx
│   ├── utils/           # Utility functions
│   │   └── bookingAPI.js
│   ├── styles/          # CSS files
│   │   └── global.css
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
└── README.md
```

## 🎨 Features Breakdown

### 1. Reservation Form
- Date selection with minimum date validation
- Dynamic time slots based on selected date
- Guest count (1-10 validation)
- Occasion selection
- Name and email with validation
- Special requests (optional)
- Real-time form validation feedback
- Disabled submit button until form is valid

### 2. API Integration
- `initializeTimes()` - Loads available times for today
- `updateTimes(date)` - Updates times when date changes
- `submitBooking()` - Submits reservation to API
- Fallback data if API unavailable

### 3. Accessibility Features
- Semantic HTML5 elements
- ARIA labels and attributes
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Error announcements

### 4. Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid system
- Touch-friendly interface

## 🧪 Testing the Application

### Test Reservation Flow:
1. Navigate to the Reservations page
2. Select a date (today or future)
3. Choose a time from the dropdown
4. Enter number of guests (1-10)
5. Fill in name and email
6. Submit the form
7. Verify confirmation message appears

### Test Validation:
1. Try submitting with empty fields
2. Enter invalid email format
3. Select guests outside 1-10 range
4. Verify error messages appear
5. Verify submit button is disabled when form is invalid

### Test Accessibility:
1. Navigate using Tab key
2. Test with screen reader
3. Verify ARIA labels are present
4. Check color contrast

## 📱 Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 900px
- **Desktop**: > 900px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎯 Validation Rules

- **Date**: Required, must be today or future date
- **Time**: Required, must select from available slots
- **Guests**: Required, must be between 1-10
- **Name**: Required, minimum 2 characters
- **Email**: Required, must be valid email format
- **Special Requests**: Optional

## 🔗 API Integration

The application integrates with an external booking API:
```javascript
// Fetch available times for a date
window.fetchAPI(date) 

// Submit booking data
window.submitAPI(formData)
```

## 👥 Author

Jeremy - Coursera Meta Front-End Developer Certificate

## 📄 License

This project is for educational purposes as part of the Meta Front-End Developer Certificate program.

## 🙏 Acknowledgments

- Meta/Coursera for the course structure
- Little Lemon restaurant concept
- React documentation
- MDN Web Docs for accessibility guidelines
