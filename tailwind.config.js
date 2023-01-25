module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      xsm: '435px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        back: 'url("/src/assets/img/mobileCover.png")',

        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        paragraph: '#878e99',
      },
      fontFamily: {
        'script': ['"Luxurious Script"', 'cursive'],
        'Khula': ['"Khula"', 'sans-serif'],
        'Hubballi': ['"Hubballi"', 'cursive'],
        'Roboto': ['"Roboto Serif"', 'serif'],
        // 
    // 'Roboto Serif', serif;

      },
      backgroundImage: {
        'back': "url('/src/assets/img/background.gif')",
      }
    },
  },
  plugins: [],
};
