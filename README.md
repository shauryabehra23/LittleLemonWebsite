# 🍋 Little Lemon Restaurant Website

A modern, fully-functional restaurant web application built with React. Browse the menu, search for dishes, manage your shopping cart, and make reservations—all in one place!

## 📋 Overview

**Little Lemon** is a contemporary restaurant website that showcases a Mediterranean dining experience. The application provides an intuitive interface for customers to explore menu items, add selections to cart, and book reservations. Built with React and modern web technologies, it features a responsive design, persistent cart management, and smooth user interactions.

---

## ✨ Key Features

### 🍽️ **Menu Browsing**
- Browse 16+ restaurant menu items with prices and descriptions
- **Search functionality** - Find dishes by name or description
- **Category filtering** - Filter by appetizers, mains, desserts, drinks, and more
- **Visual feedback** - "Added!" confirmation when items are added to cart

### 🛒 **Shopping Cart**
- **Context API State Management** - Global cart state across the entire app
- **localStorage Persistence** - Cart items saved and restored on refresh
- **Quantity Controls** - Increment/decrement item quantities
- **Total Calculation** - Automatic price computing with tax estimation (8%)
- **Cart Badge** - Real-time item count displayed on navbar

### 📅 **Reservations**
- **Table Booking System** - Reserve tables with date and time selection
- **Available Times** - Dynamic time slots based on API
- **Confirmation Page** - Booking confirmation with details

### 🧭 **Navigation**
- Responsive navbar with multiple navigation routes
- Cart icon with live item count badge
- Smooth page transitions
- Mobile-friendly layout with proper spacing

### 🎨 **Modern Design**
- Unified color palette (Professional Green #495E57, Golden Yellow #F4CE14, Coral #E07A5F)
- Responsive design across all screen sizes
- Hover effects and smooth transitions
- Professional footer with information

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19.1.1** | UI framework & components |
| **React Router v6** | Client-side navigation |
| **Context API** | Global state management (cart) |
| **localStorage** | Cart persistence |
| **CSS3** | Styling & animations |
| **Create React App** | Build tooling |

---

## 📦 Installation

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LittleLemonWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app opens automatically at `http://localhost:3002`

---

## 🚀 Available Scripts

### `npm start`
Runs the app in development mode. The page auto-reloads on changes.  
📍 Open [http://localhost:3002](http://localhost:3002) in your browser

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Creates an optimized production build in the `build/` folder  
Ready for deployment with minified files and optimized performance

---

## 📂 Project Structure

```
src/
├── App.js                    # Main app component with routing
├── App.css                   # Global styles & design system
├── CartContext.js            # Cart state management with Context API
├── Cart.js                   # Shopping cart page component
├── Menu.js                   # Menu display with search & filter
├── Navbar.js                 # Navigation bar with cart badge
├── Header.js                 # Hero/banner section
├── Home.js                   # Landing page
├── Reservations.js           # Booking interface
├── confirmedBooking.js       # Booking confirmation page
├── About.js                  # Restaurant info
├── Contact.js                # Contact page
├── Login.js                  # Authentication page
├── Footer.js                 # Footer component
├── index.css                 # Base styles
└── api.js                    # API integration
```

---

## 🎨 Design System

### Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Green | `#495E57` | Headers, backgrounds, text |
| Golden Yellow | `#F4CE14` | Call-to-action buttons, highlights |
| Coral Accent | `#E07A5F` | Hover states, secondary elements |
| White | `#FFFFFF` | Primary backgrounds, text |
| Light Gray | `#F5F5F5` | Secondary backgrounds |

### Responsive Breakpoints
- **Desktop** - Full layout (1200px+)
- **Tablet** - Optimized 2-column (768px - 1199px)
- **Mobile** - Single column & touch-friendly (≤600px)

---

## 💡 How to Use

### 📍 Browse Menu
1. Click **Menu** in the navbar
2. Search for dishes using the search bar
3. Filter by category using buttons
4. Click **Add to Cart** on desired items

### 🛒 Manage Cart
1. Click the **cart icon** in the navbar
2. View all items with quantities
3. Use **+** / **−** buttons to adjust quantities
4. See **total price** with tax calculation
5. Click **Clear Cart** to remove all items
6. Items automatically save to localStorage

### 📅 Make a Reservation
1. Click **Reservations** or **Order Online** in navbar
2. Select date and number of guests
3. Choose preferred time
4. Confirm your booking
5. View confirmation with your reservation details

---

## 🔄 State Management

### Cart State with Context API
```javascript
// useCart() hook provides:
- cartItems[]           // Array of items in cart
- addToCart(item)       // Add/increment item
- removeFromCart(id)    // Remove item completely
- updateQuantity(id)    // Modify quantity
- getTotalPrice()       // Calculate total with tax
- getCartCount()        // Get total items count
- clearCart()           // Empty entire cart
```

All cart data persists via localStorage and survives page refreshes.

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify** - Connect GitHub repo for automatic deployments
- **Vercel** - React-optimized hosting with zero configuration
- **GitHub Pages** - Free static hosting
- **Traditional Hosting** - Upload `build/` folder contents

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔧 Features in Development

- [ ] User authentication & accounts
- [ ] Order history tracking
- [ ] Dietary preferences filters
- [ ] Special requests during checkout
- [ ] Real payment integration
- [ ] Email receipt delivery
- [ ] Multi-language support

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [React Router Guide](https://reactrouter.com)
- [Context API Tutorial](https://react.dev/reference/react/useContext)
- [Create React App Docs](https://create-react-app.dev)

---

## 🤝 Contributing

Contributions welcome! To suggest improvements:

1. Test the feature thoroughly
2. Document any changes
3. Ensure code follows existing style
4. Submit feedback or pull request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 About This Project

Built as a portfolio project to demonstrate:
- React hooks and Context API
- State management patterns
- Responsive design principles
- Component composition
- localStorage integration
- Modern React best practices

**Status:** ✅ Fully Functional  
**Last Updated:** March 2026  
**Version:** 1.0.0
