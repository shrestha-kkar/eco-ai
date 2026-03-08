/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#10B981', // emerald-500
          darkGreen: '#065F46', // emerald-800
          blue: '#3B82F6', // blue-500
          darkBlue: '#1E3A8A', // blue-900
          navy: '#0F172A', // slate-900
          light: '#F8FAFC', // slate-50
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #065F46 0%, #1E3A8A 100%)',
        'gradient-surface': 'linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 10px -2px rgba(0, 0, 0, 0.02)',
        'elevation': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
