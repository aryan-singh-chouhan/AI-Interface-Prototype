import { useState } from 'react';
import { Template } from '../data/mockApi';
import { Save } from 'lucide-react';

interface PromptEditorProps {
  prompt: string;
  onPromptChange: (prompt: string) => void;
  templates: Template[];
  onLoadTemplate: (template: Template) => void;
}

export const PromptEditor = ({ prompt, onPromptChange, templates, onLoadTemplate }: PromptEditorProps) => {
  const [savedTemplates, setSavedTemplates] = useState<Template[]>(() => {
    const stored = localStorage.getItem('userTemplates');
    return stored ? JSON.parse(stored) : [];
  });

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
      alert('Template saved!');
    }
  };

  const allTemplates = [...templates, ...savedTemplates];

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor="prompt-editor" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Prompt
        </label>
        <div className="flex gap-2">
          <button
            onClick={handleSaveTemplate}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            aria-label="Save current prompt as template"
          >
            <Save className="w-4 h-4" />
            Save
          </button>
          <select
            onChange={(e) => {
              const template = allTemplates.find(t => t.id === e.target.value);
              if (template) onLoadTemplate(template);
            }}
            className="px-3 py-1 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Load template"
          >
            <option value="">Load Template</option>
            {allTemplates.map((template) => (
              <option key={template.id} value={template.id}>
                {template.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <textarea
        id="prompt-editor"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="Enter your prompt here..."
        className="w-full h-32 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-colors"
        aria-label="Prompt input area"
      />
    </div>
  );
};
