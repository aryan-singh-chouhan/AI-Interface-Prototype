import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  showValue?: boolean;
  leftLabel?: string;
  rightLabel?: string;
}

const Slider = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  showValue = true,
  leftLabel,
  rightLabel,
}: SliderProps) => {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
        {showValue && (
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {value}
          </span>
        )}
      </div>
      
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {(leftLabel || rightLabel) && (
        <div className="flex justify-between text-xs text-gray-500">
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
        </div>
      )}
    </div>
  );
};

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    showValue: {
      control: 'boolean',
      description: 'Show current value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Temperature: Story = {
  render: (args) => {
    const [value, setValue] = useState(0.7);
    return (
      <div className="w-96">
        <Slider
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
  args: {
    label: 'Temperature',
    min: 0,
    max: 2,
    step: 0.01,
    leftLabel: 'Precise',
    rightLabel: 'Creative',
  },
};

export const MaxTokens: Story = {
  render: (args) => {
    const [value, setValue] = useState(1000);
    return (
      <div className="w-96">
        <Slider
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
  args: {
    label: 'Max Tokens',
    min: 100,
    max: 4000,
    step: 100,
    leftLabel: '100',
    rightLabel: '4000',
  },
};

export const Volume: Story = {
  render: (args) => {
    const [value, setValue] = useState(50);
    return (
      <div className="w-96">
        <Slider
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    leftLabel: 'Mute',
    rightLabel: 'Max',
  },
};

export const WithoutLabels: Story = {
  render: (args) => {
    const [value, setValue] = useState(5);
    return (
      <div className="w-96">
        <Slider
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
  args: {
    label: 'Simple Slider',
    min: 0,
    max: 10,
    step: 1,
    showValue: false,
  },
};
