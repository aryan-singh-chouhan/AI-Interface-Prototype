# AI Interface Prototype

A polished, frontend-only AI chat interface built with **React**, **TypeScript**, and **Tailwind CSS**. This project implements core features from leading AI platforms in a modern, accessible interface.

---

## 1. Research

### AI Platforms Reviewed

**OpenAI ChatGPT** - Industry-leading conversational AI with a clean, minimal chat interface. Features advanced model selection (GPT-4, GPT-3.5), real-time streaming responses, and conversation history management.

**Anthropic Claude** - Focused on safety and helpfulness with a similar chat-based UI. Offers adjustable parameters, artifact generation, and clear separation between user and assistant messages.

**HuggingFace Spaces** - Open-source AI platform providing multiple model options. Features include model comparison, custom parameter controls (temperature, top-p, max tokens), and API integration options.

**Microsoft Copilot** - Integrated AI assistant with a conversational interface. Highlights include contextual suggestions, multi-turn conversations, and seamless integration with productivity tools.

**Google Bard/Gemini** - Clean interface with support for multimodal inputs. Features include draft variations, export options (Google Docs, Gmail), and search integration.

### Core Features Selected (6 features)

1. **Model Selection** - Dropdown to choose between different AI models (GPT-4, GPT-3.5, Claude, Custom)
2. **Chat Interface** - Conversational UI with message history, user/assistant distinction, and copy functionality
3. **Parameter Controls** - Sliders for temperature (0-2) and max tokens (100-4000) to customize AI behavior
4. **Prompt Templates** - Save/load frequently used prompts with localStorage persistence
5. **Theme Toggle** - Light/dark mode switch with localStorage persistence
6. **Export Functionality** - Download conversation history as JSON

---

## 2. Design

### Design Process

This prototype was designed directly in code following modern AI interface patterns observed in ChatGPT, Claude, and similar platforms. The design prioritizes:

- **Minimalism** - Clean, distraction-free interface focused on conversation
- **Accessibility** - WCAG 2.1 compliant with keyboard navigation and ARIA labels
- **Responsiveness** - Mobile-first design that scales to desktop seamlessly
- **Visual Hierarchy** - Clear distinction between user input, AI responses, and controls

### Tailwind CSS Mapping

**Spacing System**
- Consistent padding/margin using Tailwind's spacing scale: `p-4`, `p-6`, `gap-4`
- Component spacing: `space-y-4` for vertical rhythm

**Typography**
- Headings: `text-2xl font-bold`, `text-lg font-semibold`
- Body text: `text-sm`, `text-base` with appropriate line-height
- Font weights: `font-medium` (500), `font-semibold` (600), `font-bold` (700)

**Colors & Theming**
- Light mode: `bg-white`, `bg-gray-50`, `text-gray-900`
- Dark mode: `dark:bg-gray-900`, `dark:bg-gray-800`, `dark:text-white`
- Accent colors: `bg-blue-600`, `hover:bg-blue-700` for primary actions
- Borders: `border-gray-200 dark:border-gray-700`

**Interactive States**
- Hover: `hover:bg-gray-100 dark:hover:bg-gray-800`
- Focus: `focus:outline-none focus:ring-2 focus:ring-blue-500`
- Disabled: `disabled:opacity-50 disabled:cursor-not-allowed`
- Transitions: `transition-colors duration-200`

**Responsive Breakpoints**
- Mobile: Base styles (default)
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

### Component Structure

Each mockup element maps to a React component:
- **Sidebar** → Model selection, settings, new chat button
- **Chat Area** → Message display with user/assistant bubbles
- **Input Area** → Prompt editor with send button
- **Parameters Panel** → Sliders for temperature and tokens
- **Theme Toggle** → Sun/moon icon switcher

---

## 📋 Features Implemented

### Development Features

- ✅ **Model Selector** - Dropdown with GPT-4, GPT-3.5, Claude, and custom options
- ✅ **Prompt Editor** - Multi-line text area with template save/load functionality
- ✅ **Parameters Panel** - Temperature (0-2) and Max Tokens (100-4000) sliders
- ✅ **Chat Output** - Message history with copy buttons and JSON export
- ✅ **Theme Toggle** - Light/dark mode persisted in localStorage
- ✅ **Responsive Layout** - Mobile-first design with desktop breakpoints
- ✅ **Mock API** - Simulated AI responses with realistic delays

### Accessibility & UX Polish

- ✅ Keyboard navigation for all interactive elements
- ✅ ARIA labels on buttons, inputs, and controls
- ✅ Focus states with visible ring indicators
- ✅ Hover animations using CSS transitions

### Component Library & Storybook

- ✅ Storybook configured for component development and documentation
- ✅ Interactive stories for Button, Slider, Modal, and ChatBubble components
- ✅ Props controls for live component testing
- ✅ Accessibility addon for WCAG compliance testing

---

## 🛠️ Tech Stack

- **Framework**: React 18 (Functional Components)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React

---

## 📁 Project Structure

```
Assessment/
├── .storybook/              # Storybook configuration
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Sidebar.tsx
│   │   ├── ChatOutput.tsx
│   │   ├── ModelSelector.tsx
│   │   ├── PromptEditor.tsx
│   │   ├── ParametersPanel.tsx
│   │   └── ThemeToggle.tsx
│   ├── context/             # React Context
│   │   └── ThemeContext.tsx
│   ├── data/                # Mock API & Types
│   │   └── mockApi.ts
│   ├── stories/             # Storybook stories
│   │   ├── Button.stories.tsx
│   │   ├── Slider.stories.tsx
│   │   ├── ChatBubble.stories.tsx
│   │   └── Modal.stories.tsx
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind imports
├── public/                  # Static assets
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Run

```powershell
# Navigate to project directory
cd c:\Assessment

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Run Storybook

```powershell
# Start Storybook development server
npm run storybook
```

Storybook will be available at `http://localhost:6006`

### Build for Production

```powershell
# Create optimized production build
npm run build

# Preview production build
npm run preview

# Build Storybook
npm run build-storybook
```

---

## 📚 Storybook Component Library

This project includes a complete component library documented in Storybook with interactive controls and examples.

### Components Documented

1. **Button** - Primary, secondary, outline, and ghost variants with size options
2. **Slider** - Range input with labels for temperature and token controls
3. **ChatBubble** - Message bubbles for user and assistant with copy functionality
4. **Modal** - Dialog component with multiple size variants

### Features

- ✅ Interactive controls for testing all component props
- ✅ Dark mode support previews
- ✅ Accessibility testing with a11y addon
- ✅ Auto-generated documentation from TypeScript types
- ✅ Live code examples and usage patterns

---

## 🎨 Design Choices

### **Tailwind CSS Mapping**
- **Spacing**: Consistent padding/margins using Tailwind's spacing scale (`p-4`, `gap-6`, etc.)
- **Typography**: Font sizes and weights mapped to design system (`text-sm`, `font-semibold`)
- **Colors**: Dark mode support using `dark:` variant
- **Responsive**: Breakpoints for mobile-first design (`lg:col-span-2`)

### **Component Architecture**
- **Separation of Concerns**: Each component ek specific feature handle karta hai
- **Props Interface**: Strict TypeScript typing for all props
- **Reusability**: Components easily reusable aur testable hain

---

## 🔧 Key Features Explained

### **Model Selector**
AI model choose karne ke liye dropdown. Models mock data se aate hain.

### **Prompt Editor**
- Text area for prompt input
- Save/Load templates (localStorage mein save hote hain)
- Pre-defined templates available

### **Parameters Panel**
- **Temperature**: 0-2 range (Precise → Creative)
- **Max Tokens**: 100-4000 range

### **Chat Output**
- User aur AI messages display hote hain
- Copy button har message ke saath
- Download JSON button for full conversation export
- Loading state jab response aa raha ho

### **Theme Toggle**
- Light/Dark mode switch
- localStorage mein persist hota hai
- System-wide theme apply hota hai

---

## 📱 Responsive Design

- **Mobile** (< 1024px): Full-screen chat with collapsible sidebar
- **Desktop** (≥ 1024px): ChatGPT-like layout with persistent sidebar

---

## ♿ Accessibility Features

- ✅ ARIA labels on all interactive elements
- ✅ Keyboard navigation support (Tab, Enter, Escape)
- ✅ Focus states with visible ring indicators
- ✅ Semantic HTML structure
- ✅ Screen reader friendly with proper roles
- ✅ Color contrast meeting WCAG 2.1 AA standards

---

## 3. Development

### Implementation Notes

**Mock API**  
Located in `src/data/mockApi.ts`. The `sendMessage()` function simulates AI responses with realistic delays. Ready to be replaced with real API calls to OpenAI, Anthropic, or other providers.

**State Management**  
- React Context API for theme management (light/dark mode)
- Component-level useState for chat messages, prompts, and parameters
- localStorage for persisting templates and theme preferences

**TypeScript**  
- Strict mode enabled in `tsconfig.json`
- All components fully typed with interfaces
- Type-safe mock API with proper data models

**Key Features**
- **Sidebar**: Model selection, settings panel, new chat, theme toggle
- **Chat Interface**: Modern message bubbles with avatars, auto-scroll, copy functionality
- **Input Area**: Multi-line textarea with Enter-to-send, template loading
- **Parameters**: Temperature (0-2) and Max Tokens (100-4000) sliders
- **Export**: Download conversation history as JSON

---

## 📦 What to Submit

1. ✅ **Live URL**: Deploy on Netlify/Vercel/GitHub Pages
2. ✅ **GitHub Repository**: Full TypeScript source code (strict mode)
3. ✅ **README**: Complete with Research, Design, and Development sections
4. ✅ **Mock API**: Available in `src/data/mockApi.ts`
5. ✅ **Storybook**: Component library with 4+ documented components

---

## 🌐 Deployment

### **Netlify (Recommended)**

```powershell
# Build the project
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### **Vercel**

```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### **GitHub Pages**

```powershell
# Build
npm run build

# Deploy dist folder to gh-pages branch
# (Use gh-pages package or manual push)
```

---

## 🎯 Assessment Requirements Met

| Requirement | Status |
|------------|--------|
| **1. Research** | |
| Review 3-5 AI platforms | ✅ 5 platforms reviewed |
| Summarize in 1-2 sentences each | ✅ Documented above |
| List 4-6 chosen features | ✅ 6 features selected |
| **2. Design** | |
| Create mockup in Figma/Adobe XD | ✅ Direct code implementation |
| Map Tailwind tokens to design | ✅ Documented spacing, colors, typography |
| Design section in README | ✅ Complete with Tailwind mapping |
| **3. Development** | |
| Model Selector | ✅ Dropdown with multiple models |
| Prompt Editor | ✅ With save/load templates |
| Parameters Panel | ✅ Temperature & max tokens sliders |
| Chat/Output Area | ✅ Modern bubbles with copy/export |
| Theme Toggle | ✅ Light/dark mode persisted |
| Responsive Layout | ✅ Mobile-first with sidebar |
| Data & State | ✅ Mock API + React Context |
| **4. Accessibility & UX** | |
| Keyboard navigation | ✅ Full support |
| ARIA labels | ✅ All interactive elements |
| Hover/focus animations | ✅ Smooth transitions |
| **5. Component Library** | |
| Storybook setup | ✅ Configured and running |
| 4+ component stories | ✅ Button, Slider, ChatBubble, Modal |
| Interactive controls | ✅ Props testing enabled |

---

## 🐛 Known Limitations

- Mock API responses only (no real AI integration)
- No backend persistence (localStorage only)
- No user authentication system
- Attachment button is disabled (placeholder)

---

## 📝 Future Enhancements

- [ ] Integrate real AI APIs (OpenAI, Anthropic, HuggingFace)
- [ ] Add streaming response support
- [ ] Implement conversation history with database
- [ ] Add more parameter controls (top-p, frequency penalty)
- [ ] Support file uploads and multimodal inputs
- [ ] Add user authentication and profiles
- [ ] Implement conversation sharing

---

## 👨‍💻 Developer

Built for Frontend & UI/UX Designer Assessment

**Tech Stack**: React 18 + TypeScript + Tailwind CSS + Vite  
**Component Library**: Storybook 10  
**Timeline**: 3 days

---

## 📄 License

MIT License - Assessment Project
