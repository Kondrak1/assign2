// Tailwind guide: https://dev.to/farhadrahimiklie/tailwind-css-a-complete-beginner-to-intermediate-guide-with-practical-examples-5hg5
// Had to use Claude to get me started as it was difficult to understand the syntax and structure of Tailwind styling in the HTML file.
// Prompt: "How can I use Tailwind CSS to style my HTML elements?"

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#29221f',
        blush: '#f5ece8',
        rose: '#b4786d'
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Arial', 'sans-serif']
      }
    }
  }
};
