export interface Model {
  id: string;
  name: string;
  description: string;
}

export interface Template {
  id: string;
  name: string;
  content: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Mock AI Models
export const mockModels: Model[] = [
  { id: 'gpt-4', name: 'GPT-4', description: 'Most capable model' },
  { id: 'gpt-3.5', name: 'GPT-3.5 Turbo', description: 'Fast and efficient' },
  { id: 'claude-3', name: 'Claude 3 Opus', description: 'Anthropic flagship model' },
  { id: 'custom', name: 'Custom Model', description: 'Your fine-tuned model' },
];

// Mock Templates
export const mockTemplates: Template[] = [
  { id: '1', name: 'Code Review', content: 'Please review the following code and suggest improvements:\n\n' },
  { id: '2', name: 'Explain Concept', content: 'Explain the following concept in simple terms:\n\n' },
  { id: '3', name: 'Debug Helper', content: 'Help me debug this issue:\n\n' },
  { id: '4', name: 'Creative Writing', content: 'Write a creative story about:\n\n' },
];

// Mock API call to simulate AI response
export const sendMessage = async (
  prompt: string,
  model: string,
  temperature: number,
  maxTokens: number
): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
  
  return `This is a mock response from ${model}.\n\nYou asked: "${prompt.substring(0, 50)}${prompt.length > 50 ? '...' : ''}"\n\nParameters used:\n- Temperature: ${temperature}\n- Max tokens: ${maxTokens}\n\nIn a real implementation, this would be an actual AI response.`;
};
