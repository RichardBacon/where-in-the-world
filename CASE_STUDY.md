# Case Study: Where in the World?

## Introduction

Where in the World? is a responsive and accessible country search application built using React 19, Vite, and TypeScript. Developed as a challenge from Frontend Mentor, the project became an opportunity to refine skills in performance optimisation, accessibility, and developer experience while integrating the REST Countries API.

The goal was to create an interactive user experience while implementing best practices in modern web development.

### Key Achievements:

- Built a high-performance React application with optimised rendering.  
- Implemented comprehensive accessibility features, ensuring full keyboard and screen reader support.  
- Created a responsive design with persistent theme.  
- Developed robust API handling, including error management and retry logic.  
- Applied frontend optimisations, including lazy loading and code splitting

---

## Challenges & Solutions

### Challenge 1: Performance with Large Datasets

**Problem:** Fetching and rendering data for 250+ countries could cause sluggish performance, excessive re-renders, and large payloads.

**Solution:**

- Optimised API requests with selective field fetching to reduce data transfer size.
- Implemented lazy loading for country flags to improve perceived load times.
- Used memoisation and efficient state updates to avoid redundant computations.

### Challenge 2: Accessibility & User Experience

**Problem:** Ensuring accessibility best practices are adhered to.

**Solution:**

- Enhanced keyboard navigation with focus management and tab ordering.
- Implemented ARIA labels and landmarks for screen reader support.
- Reduced motion support for users with motion sensitivity preferences.
- Created meaningful loading states and error messages to enhance UX.

### Challenge 3: API Handling & Error Management

**Problem:** API failures could disrupt the user experience if not handled gracefully.

**Solution:**

- Implemented robust error boundaries with clear messaging and retry functionality.
- Mocked API responses with MSW (Mock Service Worker) for efficient testing and development.

---

## Key Technical Decisions

### Why Vite?

Vite was chosen for its fast build times and efficient module handling, ensuring a smooth development experience.

### Why Emotion for Styling?

- Dynamic theming support for dark mode integration.
- Scoped styles to avoid global conflicts.

### Why React Router for Navigation?

- Enables deep linking and dynamic routes for country details.
- Preserves client-side navigation speed while handling fallback scenarios.

---

## Testing Strategy & Code Quality

- Comprehensive test coverage ensured that API calls, navigation, and theme persistence were reliable across different use cases.
- Mock Service Worker (MSW) was used to simulate API failures, improving resilience and ensuring fallback behavior was handled properly.
- Accessibility tests validated full keyboard navigation, ARIA compliance, and contrast requirements.

---

## Results & Impact

### Key Outcomes:

- Full accessibility compliance in Lighthouse, Axe and WAVE.  
- Responsive UI across all screen sizes.  
- Optimised API usage, reducing unnecessary requests and improving scalability.  
- Handled API failures gracefully to enhance reliability.  
- Improved developer experience with clear project structure and strong test coverage.

---

## Lessons Learned & Future Enhancements

### What Worked Well?

- Vite’s fast build times and efficient bundling streamlined development.  
- Lazy loading and caching strategies effectively reduced API strain and improved rendering speeds.  
- Prioritising accessibility from the start led to a fully inclusive experience.  
- Custom hooks and reusable components improved code maintainability.

### What Could Be Improved?

- Explore Progressive Web App (PWA) support for offline access.  
- Enhance country details with additional data visualisations.

### Lessons Learned

One key learning from this project was the importance of testing performance metrics before making optimisations. While accessibility and UI improvements were successfully implemented, future projects will benefit from a before-and-after comparison to validate changes.

---

## Conclusion

This project reinforced key frontend development skills, focusing on performance optimisation, accessibility, and API integration. By leveraging best practices and modern tools, _Where in the World?_ demonstrates an efficient, scalable approach to building interactive web applications.
