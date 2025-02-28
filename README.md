# Interactive CV Generator with PDF Export

A professional CV/Resume generator built with React that creates a visually appealing, ATS-friendly PDF with fully selectable text. This project features both an interactive web version and a downloadable PDF version of your CV.

## ✨ Features

- **Modern Design**: Clean, professional CV layout with a responsive design
- **Text Selection**: Generated PDFs have fully selectable text (unlike screenshot-based PDFs)
- **ATS-Friendly**: Structured content that works well with Applicant Tracking Systems
- **A4 Format**: Properly sized for standard CV/Resume printing
- **Responsive Layout**: Adapts to different screen sizes for the web version
- **Subtle Background Pattern**: Adds visual interest without affecting readability
- **Timeline Visualization**: Clear visual representation of career progression
- **Optimized Spacing**: Carefully adjusted to fit content on a single page
- **Interactive Elements**: Hover effects and visual feedback in the web version

## 🛠️ Technologies Used

- **Frontend**: React + TypeScript
- **Build Tool**: Vite for fast development
- **Styling**: Tailwind CSS for the web version
- **PDF Generation**: @react-pdf/renderer for creating selectable PDFs
- **Fonts**: Roboto font family from CDN for consistent typography

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/melih-perveli/cv.git
   cd cv
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## 🔧 Customization

### Modifying Content

To customize the CV content:

1. Edit the `App.tsx` file for the visual web version
2. Edit the `PDFDocument.tsx` file for the PDF version

### Styling Adjustments

- **Web Version**: Modify the Tailwind classes in `App.tsx`
- **PDF Version**: Update the StyleSheet in `PDFDocument.tsx`

### PDF Layout Tips

- Keep text concise to ensure it fits on a single page
- Adjust font sizes carefully in the StyleSheet
- Test PDF generation after making significant changes
- Use the timeline visualization for chronological elements

## 📱 Responsive Design

The web version is fully responsive and will adapt to different screen sizes:

- Desktop: Full layout with all sections visible
- Tablet: Adjusted spacing and slightly reduced font sizes
- Mobile: Reorganized layout for optimal viewing on smaller screens

## 🔍 PDF Optimization

The PDF version has been carefully optimized for:

- Text selectability for easy copying
- ATS compatibility for job applications
- Print-friendly A4 format
- Efficient use of space to fit all content on a single page

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- Thanks to the React team for the amazing framework
- Thanks to the @react-pdf/renderer team for making PDF generation possible
- Thanks to the Tailwind CSS team for the utility-first CSS framework

## 📝 Recent Updates

- Added subtle background pattern to PDF for visual interest
- Improved timeline dot positioning for better alignment
- Optimized spacing throughout the document
- Added footer with link to web version
- Enhanced PDF download experience with success feedback
- Added preview mode indicator
- Improved error handling for PDF generation
