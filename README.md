# Dev Academy Website

A modern, responsive website for a development academy built with HTML, CSS, JavaScript, and Bootstrap 5. This website is designed to be hosted on GitHub Pages.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design using Bootstrap 5
- **Interactive Elements**: Smooth scrolling, animated counters, and dynamic navigation
- **Course Showcase**: Display multiple courses with detailed information
- **Instructor Profiles**: Showcase your teaching team
- **Contact Form**: Functional contact form with validation
- **GitHub Pages Ready**: Optimized for GitHub Pages hosting

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3.2
- Bootstrap Icons

## Getting Started

### Viewing Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ShaunRoselt/Dev-Academy-Website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Dev-Academy-Website
   ```

3. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local development server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

4. Visit `http://localhost:8000` in your browser

### Deploying to GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the branch you want to deploy (usually `main`)
4. Select the root folder (`/`)
5. Click "Save"
6. Your site will be published at `https://[username].github.io/Dev-Academy-Website/`

## Project Structure

```
Dev-Academy-Website/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── LICENSE             # MIT License
```

## Features Overview

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile-responsive menu
- Active link highlighting based on scroll position

### Sections
1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Highlights key features with icon cards
3. **Courses Section**: Displays available courses with details and enrollment options
4. **Instructors Section**: Showcases teaching staff with social media links
5. **Stats Section**: Animated counters displaying key metrics
6. **Contact Section**: Functional contact form with validation
7. **Footer**: Links, contact information, and social media icons

### JavaScript Features
- Smooth scrolling navigation
- Active navigation link highlighting
- Scroll-to-top button
- Animated statistics counters
- Form validation
- Mobile menu handling
- Keyboard navigation support

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    /* Add more custom colors */
}
```

### Adding New Courses
Add a new card in the courses section of `index.html`:

```html
<div class="col-lg-4 col-md-6">
    <div class="card h-100 shadow-sm">
        <!-- Course content -->
    </div>
</div>
```

### Modifying Content
- Update text content directly in `index.html`
- Modify styles in `styles.css`
- Enhance functionality in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For questions or support, please use the contact form on the website or reach out through GitHub issues.

## Acknowledgments

- Bootstrap team for the excellent framework
- Bootstrap Icons for the comprehensive icon set
- The open-source community for inspiration and resources