const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      fontFamily:{
      inter : ["Inter","sans-serif"]
    },
    screens: {
        'sm': '500px',   // Small screens (default: 640px)
        'md': '768px',   // Medium screens (default: 768px)
        'lg': '1024px',  // Large screens (default: 1024px)
        'xl': '1280px',  // Extra large screens (default: 1280px)
      },
  },
  },
  variants: {},
  plugins: [],
});