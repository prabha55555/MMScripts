# Contributing to MMSCRIPTS

Thank you for your interest in contributing to MMSCRIPTS! This is a private project, but we welcome feedback and suggestions.

## 📝 Reporting Issues

If you find a bug or have a suggestion:

1. Check if the issue already exists
2. Create a detailed issue report including:
   - Description of the problem
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Browser/device information

## 💻 Development Guidelines

### Code Style

- Use ESLint configuration provided
- Follow React best practices
- Use functional components with hooks
- Keep components small and focused
- Write descriptive variable and function names

### Component Structure

```jsx
// 1. Imports
import { useState } from 'react';
import { motion } from 'framer-motion';
import Component from './Component';

// 2. Component definition
const MyComponent = () => {
  // 3. Hooks
  const [state, setState] = useState();

  // 4. Functions
  const handleClick = () => {};

  // 5. Render
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};

// 6. Export
export default MyComponent;
```

### Styling Guidelines

- Use Tailwind utility classes
- Keep custom CSS minimal
- Follow mobile-first approach
- Use theme colors from tailwind.config.js
- Ensure accessibility (proper contrast, focus states)

### Git Commit Messages

```
feat: Add new feature
fix: Fix bug in component
docs: Update documentation
style: Format code
refactor: Refactor component
test: Add tests
chore: Update dependencies
```

## 🧪 Testing

Before submitting changes:

1. Test all affected pages
2. Check mobile responsiveness
3. Verify all links work
4. Test forms and interactions
5. Check console for errors
6. Run build locally: `npm run build`

## 📦 Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Questions?

Contact the MMSCRIPTS team at info@mmscripts.com

---

**Thank you for helping make MMSCRIPTS better!**
