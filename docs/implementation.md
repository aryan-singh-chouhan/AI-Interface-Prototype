# Implementation Notes

## Architecture Overview

This AI Interface prototype follows a component-based architecture using React functional components with TypeScript for type safety.

### Component Hierarchy

```
App (ThemeProvider)
├── Sidebar
│   ├── Model Selector
│   ├── Settings Panel
│   │   ├── Temperature Slider
│   │   └── Max Tokens Slider
│   ├── New Chat Button
│   └── Theme Toggle
└── Main Chat Area
    ├── ChatOutput
    │   └── ChatBubble (repeated)
    └── Input Area
        ├── Template Selector
        └── Prompt Textarea
```

## State Management

### Global State (Context API)
- **ThemeContext**: Manages light/dark mode across the application
  - Persisted in localStorage
  - Provides theme value and toggle function

### Local Component State
- **App Component**:
  - `selectedModel`: Currently selected AI model
  - `prompt`: User input text
  - `temperature`: AI temperature parameter (0-2)
  - `maxTokens`: Maximum token limit (100-4000)
  - `messages`: Array of chat messages
  - `isLoading`: Loading state during API calls
  - `savedTemplates`: User-saved prompt templates

## Data Flow

1. User types message in input area
2. On submit (Enter or Send button):
   - Message added to messages array as 'user' role
   - `isLoading` set to true
   - Mock API called with prompt and parameters
   - Response added to messages array as 'assistant' role
   - `isLoading` set to false

## LocalStorage Usage

### Keys
- `theme`: 'light' or 'dark'
- `userTemplates`: JSON array of saved prompt templates

### Data Structure
```typescript
// userTemplates
[
  {
    id: "user-1234567890",
    name: "Code Review Template",
    content: "Please review this code and suggest improvements..."
  }
]
```

## Mock API

Located in `src/data/mockApi.ts`:

### Models
- GPT-4: Most capable model
- GPT-3.5 Turbo: Faster, cost-effective
- Claude: Anthropic's AI assistant
- Custom: Placeholder for custom models

### Response Generation
Currently returns predefined responses based on keywords. Ready for real API integration:

```typescript
// Replace this:
const response = await sendMessage(prompt, model, temp, tokens);

// With this:
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: selectedModel,
    messages: [...messages, { role: 'user', content: prompt }],
    temperature: temperature,
    max_tokens: maxTokens,
  }),
});
```

## Accessibility Implementation

### Keyboard Navigation
- **Tab**: Navigate between interactive elements
- **Enter**: Send message (Shift+Enter for new line)
- **Escape**: Close modal/sidebar on mobile

### ARIA Labels
- All buttons have descriptive `aria-label` attributes
- Input fields have associated `<label>` elements
- Modal has `role="dialog"` and `aria-modal="true"`
- Dynamic content changes announced to screen readers

### Focus Management
- Visible focus rings using `focus:ring-2 focus:ring-blue-500`
- Focus trapped in modal when open
- Logical tab order maintained

### Color Contrast
- Text meets WCAG 2.1 AA standards (4.5:1 minimum)
- Dark mode colors adjusted for readability
- Interactive elements have hover states with sufficient contrast

## Performance Optimizations

### React Optimizations
- Functional components with hooks (no class components)
- Minimal re-renders using proper state structure
- useEffect for side effects (auto-scroll, localStorage)

### Build Optimizations (Vite)
- Tree-shaking unused code
- Code splitting by route (if expanded)
- CSS purging with Tailwind
- Minification and compression

### Future Optimizations
- Implement virtual scrolling for long conversations
- Lazy load components with React.lazy()
- Memoize expensive calculations with useMemo()
- Use React.memo() for ChatBubble components

## Testing Strategy (Not Implemented)

### Unit Tests (Vitest)
```typescript
// Example tests to implement
describe('ChatOutput', () => {
  it('renders messages correctly', () => {});
  it('displays loading state', () => {});
  it('copies message to clipboard', () => {});
});
```

### Component Tests (Storybook)
- Interactive testing in Storybook
- Visual regression testing
- Accessibility testing with a11y addon

### E2E Tests (Playwright)
```typescript
// Example E2E test
test('can send a message', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.fill('textarea', 'Hello, AI!');
  await page.press('textarea', 'Enter');
  await expect(page.locator('.chat-bubble')).toHaveCount(2);
});
```

## Known Technical Debt

1. **Error Handling**: No error boundaries or API error handling
2. **Loading States**: Could be more sophisticated (skeleton screens)
3. **Validation**: Input validation is minimal
4. **Persistence**: No conversation history beyond current session
5. **Testing**: No automated tests implemented

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design tested

## Dependencies

### Production
- `react`: ^18.2.0 - UI library
- `react-dom`: ^18.2.0 - React rendering
- `lucide-react`: ^0.555.0 - Icon library

### Development
- `vite`: ^5.0.8 - Build tool
- `typescript`: ^5.3.3 - Type checking
- `tailwindcss`: ^3.4.0 - CSS framework
- `storybook`: ^10.1.2 - Component development
- Various Storybook addons

Total bundle size: ~150KB gzipped (production build)
