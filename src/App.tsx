import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { ChatOutput } from './components/ChatOutput';
import { mockModels, mockTemplates, sendMessage, ChatMessage, Template } from './data/mockApi';
import { Send, Paperclip } from 'lucide-react';

function AppContent() {
  const [selectedModel, setSelectedModel] = useState(mockModels[0].id);
  const [prompt, setPrompt] = useState('');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(1000);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [savedTemplates, setSavedTemplates] = useState<Template[]>(() => {
    const stored = localStorage.getItem('userTemplates');
    return stored ? JSON.parse(stored) : [];
  });

  const handleNewChat = () => {
    setMessages([]);
    setPrompt('');
  };

  const handleSaveTemplate = () => {
    const name = window.prompt('Enter template name:');
    if (name && prompt.trim()) {
      const newTemplate: Template = {
        id: `user-${Date.now()}`,
        name,
        content: prompt,
      };
      const updated = [...savedTemplates, newTemplate];
      setSavedTemplates(updated);
      localStorage.setItem('userTemplates', JSON.stringify(updated));
    }
  };

  const handleLoadTemplate = (templateId: string) => {
    const allTemplates = [...mockTemplates, ...savedTemplates];
    const template = allTemplates.find(t => t.id === templateId);
    if (template) {
      setPrompt(template.content);
    }
  };

  const handleSend = async () => {
    if (!prompt.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: prompt };
    setMessages(prev => [...prev, userMessage]);
    setPrompt('');
    setIsLoading(true);

    try {
      const response = await sendMessage(prompt, selectedModel, temperature, maxTokens);
      const assistantMessage: ChatMessage = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const allTemplates = [...mockTemplates, ...savedTemplates];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        models={mockModels}
        selectedModel={selectedModel}
        onModelChange={setSelectedModel}
        onNewChat={handleNewChat}
        temperature={temperature}
        maxTokens={maxTokens}
        onTemperatureChange={setTemperature}
        onMaxTokensChange={setMaxTokens}
      />

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 overflow-hidden bg-white dark:bg-gray-900">
          <ChatOutput messages={messages} isLoading={isLoading} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 py-4">
            {/* Template Selector */}
            {allTemplates.length > 0 && (
              <div className="mb-3 flex items-center gap-2">
                <select
                  onChange={(e) => handleLoadTemplate(e.target.value)}
                  value=""
                  className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Load template"
                >
                  <option value="">Load Template</option>
                  {allTemplates.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleSaveTemplate}
                  disabled={!prompt.trim()}
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Save current prompt as template"
                >
                  Save Template
                </button>
              </div>
            )}

            {/* Input Box */}
            <div className="relative flex items-end gap-2 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
              <button
                className="absolute bottom-3 left-3 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors focus:outline-none"
                aria-label="Attach file"
                disabled
              >
                <Paperclip className="w-5 h-5" />
              </button>

              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message AI..."
                rows={1}
                className="flex-1 px-12 py-3 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none max-h-32 overflow-y-auto"
                style={{ minHeight: '44px' }}
                aria-label="Message input"
              />

              <button
                onClick={handleSend}
                disabled={!prompt.trim() || isLoading}
                className="absolute bottom-3 right-3 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            {/* Footer Info */}
            <p className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
