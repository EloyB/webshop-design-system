module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
            "primary-red": "#6C1118"
        }    
      },
    },
    variants: {
      extend: {
      },
    },
    plugins: [
    ],
  }