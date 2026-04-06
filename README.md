# Luxe Beauty Studio 🌿✨

A premium, high-performance web application for a luxury beauty salon, featuring state-of-the-art animations, a curated design system, and a seamless user experience.

---

## 🚀 Technology Stack

| Category | Tools |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [GSAP](https://gsap.com/), [Framer Motion](https://framer.com/motion/) |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Routing** | [React Router Dom v7](https://reactrouter.com/) |

---

## 🎨 Design System

### Color Palette
The project uses a sophisticated, harmonious palette designed for a premium aesthetics.

| Color | Hex | Purpose |
| :--- | :--- | :--- |
| **Primary Gold** | `#C9A24A` | Brand identity, primary buttons, accents |
| **Gold Container** | `#E5C98E` | Lighter gold for containers and hover states |
| **Secondary Cream**| `#D9C3A5` | Supporting elements and soft borders |
| **Tertiary Navy** | `#1F3A5F` | Deep contrast for dark modes or secondary sections |
| **Background** | `#F4F1EC` | Main page background (Luxury Cream) |
| **Charcoal Slate** | `#2B2B2B` | Main typography and heavy backgrounds |

### Typography
Fluid typography is implemented using `clamp()` to ensure perfect readability across all device sizes.

- **Primary Heading**: `Poppins` (Bold & Commanding)
- **Secondary Heading**: `Montserrat` (Elegant & Modern)
- **Body Text**: `Inter` (Clean & Readable)
- **Decorative**: `Pacifico` & `Gelasio` (Italic & Script accents)

---

## 🧩 Key Components

### 🎴 ServiceCard
A custom premium card component used in the Services section.
- **Features**: Hover-reveal descriptions, image scaling on hover, and an integrated price tag.
- **Tech**: Framer Motion for smooth Y-axis transitions.

### 🎠 ShuffleGrid / Hero
The landing hero section features a dynamic "shuffling" image grid.
- **Features**: Randomly shuffling layout every few seconds, spring-based animations.
- **Tech**: Framer Motion `layout` prop.

### 📖 GalleryChapters
A storytelling section for the portfolio.
- **Features**: Snap-to-section scrolling, large typography overlays, and background grid patterns.

---

## 🗺️ Project Structure

```bash
src/
├── assets/          # Static images & branding assets
├── components/      # Reusable UI components (Navbar, Cards, etc.)
│   ├── ui/          # Low-level UI utilities
│   └── home/        # Home-page specific sections
├── pages/           # Main route components (Home, About, Services, etc.)
├── lib/             # Utility functions (cn, etc.)
└── index.css        # Global styles & design tokens
```

---

## 🛠️ Installation & Setup

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

---

## ✨ Features
- [x] **Premium UI**: Glassmorphism, smooth gradients, and luxury typography.
- [x] **Fluid Layouts**: Fully responsive design from mobile to ultra-wide displays.
- [x] **High Performance**: Optimized image loading and layout-stable animations.
- [x] **Smooth Scrolling**: Lenis integration for a cinematic scroll feel.
