module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js", // Add flowbite path to the content array
    ],
    theme: {
      extend: {
        
        colors: {
          purple1: '#c4c2f3',
          purple2: '#797dd6',
          purple3: '#7c5bca',
  
      },
    },
    plugins: [
  
      require('flowbite/plugin')
    ],
  }
  }
  