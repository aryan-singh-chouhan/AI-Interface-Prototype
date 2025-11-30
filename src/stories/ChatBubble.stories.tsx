import type { Meta, StoryObj } from '@storybook/react';
import { User, Bot, Copy } from 'lucide-react';
import { useState } from 'react';

interface ChatBubbleProps {
  role: 'user' | 'assistant';
  content: string;
  onCopy?: () => void;
  showCopy?: boolean;
}

const ChatBubble = ({ role, content, onCopy, showCopy = true }: ChatBubbleProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (onCopy) {
      onCopy();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex gap-4 group ${
        role === 'user' ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          role === 'user'
            ? 'bg-blue-500 text-white'
            : 'bg-green-500 text-white'
        }`}
      >
        {role === 'user' ? (
          <User className="w-5 h-5" />
        ) : (
          <Bot className="w-5 h-5" />
        )}
      </div>

      {/* Message Content */}
      <div
        className={`flex-1 ${
          role === 'user' ? 'flex flex-col items-end' : 'flex flex-col items-start'
        }`}
      >
        <div
          className={`max-w-[85%] px-4 py-3 rounded-2xl ${
            role === 'user'
              ? 'bg-blue-500 text-white rounded-tr-sm'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-sm'
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
            {content}
          </p>
        </div>

        {/* Copy Button */}
        {showCopy && (
          <button
            onClick={handleCopy}
            className={`mt-1 opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              role === 'user' ? 'mr-2' : 'ml-2'
            }`}
            aria-label="Copy message"
          >
            {copied ? (
              <span className="text-xs font-medium text-green-600 dark:text-green-400">Copied!</span>
            ) : (
              <Copy className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

const meta: Meta<typeof ChatBubble> = {
  title: 'Components/ChatBubble',
  component: ChatBubble,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    role: {
      control: 'select',
      options: ['user', 'assistant'],
      description: 'Message sender role',
    },
    content: {
      control: 'text',
      description: 'Message content',
    },
    showCopy: {
      control: 'boolean',
      description: 'Show copy button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChatBubble>;

export const UserMessage: Story = {
  args: {
    role: 'user',
    content: 'Hello! Can you help me understand React hooks?',
  },
};

export const AssistantMessage: Story = {
  args: {
    role: 'assistant',
    content: 'Of course! React hooks are functions that let you use state and other React features in functional components. The most common hooks are useState and useEffect.',
  },
};

export const LongUserMessage: Story = {
  args: {
    role: 'user',
    content: 'I have a complex question about implementing authentication in a React application. I need to handle JWT tokens, refresh tokens, and maintain user sessions across page reloads. What would be the best approach for this?',
  },
};

export const LongAssistantMessage: Story = {
  args: {
    role: 'assistant',
    content: `For implementing authentication in React, here's a comprehensive approach:

1. **JWT Storage**: Store access tokens in memory (state) and refresh tokens in httpOnly cookies for security.

2. **Context API**: Create an AuthContext to manage authentication state globally.

3. **Token Refresh**: Implement automatic token refresh before expiry using interceptors.

4. **Protected Routes**: Create a PrivateRoute component to guard authenticated pages.

5. **Persist Sessions**: Use localStorage or sessionStorage to maintain login state across reloads.

Would you like me to provide code examples for any of these steps?`,
  },
};

export const Conversation: Story = {
  render: () => (
    <div className="max-w-3xl space-y-6 p-4">
      <ChatBubble
        role="user"
        content="What's the difference between useState and useReducer?"
      />
      <ChatBubble
        role="assistant"
        content="useState is simpler and best for managing independent pieces of state. useReducer is better for complex state logic with multiple sub-values or when the next state depends on the previous one."
      />
      <ChatBubble
        role="user"
        content="Can you show me an example?"
      />
      <ChatBubble
        role="assistant"
        content={`Sure! Here's a simple counter example:

// useState
const [count, setCount] = useState(0);

// useReducer
const [count, dispatch] = useReducer(
  (state, action) => {
    switch (action.type) {
      case 'increment': return state + 1;
      case 'decrement': return state - 1;
      default: return state;
    }
  },
  0
);`}
      />
    </div>
  ),
};

export const NoCopyButton: Story = {
  args: {
    role: 'assistant',
    content: 'This message has no copy button.',
    showCopy: false,
  },
};
