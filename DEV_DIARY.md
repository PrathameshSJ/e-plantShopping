# Developer Diary

## 2026-10-14 00:51
- **Task**: Cloned e-plantShopping repo into `github/`, stripped commit history, verified and updated all files to meet AI-Graded Submission Checklist (Option 1).
- **Actions Taken**:
  - Replaced legacy/placeholder references with "Paradise Nursery" across `AboutUs.jsx`, `App.jsx`, `ProductList.jsx`, and `README.md`.
  - Updated `CartSlice.jsx` reducers (`addItem`, `removeItem`, `updateQuantity`) for resilient payload parsing and synchronized item counts.
  - Updated `ProductList.jsx`:
    - Enforced unique plant items across 5 distinct categories (6 plants each).
    - Added `disabled` attribute to "Added to Cart" buttons.
    - Integrated Navbar visible across Product Listing & Cart pages with functional links to Home, Plants, and Cart.
    - Added real-time dynamic total cart item badge.
  - Updated `CartItem.jsx` with unit price display, cost calculations, quantity controls, delete item action, "Continue Shopping", and "Coming Soon" checkout alert.
  - Fixed linting errors and verified production build with Vite.
- **Next Steps / Notes**:
  - Push repository to GitHub account (`PrathameshSJ/e-plantShopping`).
  - Provide direct file URLs for submission.
