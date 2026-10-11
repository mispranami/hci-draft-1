# Food Delivery App - FoodHub

A complete 16-screen food delivery application built with HTML, CSS, and JavaScript.

## How to Use

1. **Open the app**: Open `index.html` in your web browser (Chrome, Safari, Firefox, Edge)
2. **Navigate screens**: Use the left panel with 15 buttons to jump to any screen
3. **In-app navigation**: Click buttons within each screen to navigate (like real app flows)

## 📱 16 Screens Included

### Onboarding (4 screens)
- Splash Screen - App logo animation
- Onboarding 1 - Order from stores
- Onboarding 2 - Choose meals
- Onboarding 3 - Instant delivery

### Authentication (4 screens)
- Sign Up - Create account with email
- Login - Enter credentials
- Forgot Password - Reset password flow
- Reset Password - Enter reset code via keypad

### Main App (7 screens)
- Home - Browse restaurants and food
- Product Details - View item details and quantity
- Shopping Cart - Manage cart items
- Payment - Enter delivery and payment info
- Orders - View order history
- Settings - Delivery and payment settings
- Success - Order confirmation

## Features

✅ **Fully Interactive**
- All forms work
- Quantity selectors
- Navigation system
- Keypad input for reset password

✅ **Mobile-Optimized Design**
- 375x812px mobile screen size
- Responsive to 100% width on smaller displays
- Touch-friendly buttons and inputs

✅ **Pixel-Perfect Design**
- Matches Figma mockups exactly
- Orange (#FF8C42) primary color
- Teal (#008B7E) secondary accents
- Clean typography and spacing

✅ **Easy Navigation**
- Left sidebar with all 16 screens
- Click-through app flows
- Back button functionality
- Demo buttons show active screen

## File Structure

```
/HCI/
├── index.html      - Complete structure with all 16 screens
├── styles.css      - 900+ lines of responsive CSS
├── script.js       - Navigation and interaction logic
└── README.md       - This file
```

## Browser Compatibility

Works on all modern browsers:
- Chrome ✅
- Safari ✅
- Firefox ✅
- Edge ✅

## Customization

### Change Primary Color
Edit `:root` in `styles.css`:
```css
--primary-color: #FF8C42; /* Change this */
```

### Add More Screens
1. Add HTML in `index.html` with unique ID
2. Add CSS styling in `styles.css`
3. Register screen in `ScreenNavigator.screens` object in `script.js`

### Remove Demo Navigation
If you want to hide the left sidebar:
1. In `styles.css`, hide `.demo-nav`: `display: none;`
2. Adjust screen positioning as needed

## Tips

- Click any button in the left panel to jump to that screen
- Use in-app buttons to follow natural flow
- All form submissions work (no backend needed)
- Quantity and quantity controls are fully functional
- The app auto-updates the active button in the sidebar

Enjoy! 🚀
