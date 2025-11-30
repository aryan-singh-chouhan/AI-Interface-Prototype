interface ParametersPanelProps {
  temperature: number;
  maxTokens: number;
  onTemperatureChange: (value: number) => void;
  onMaxTokensChange: (value: number) => void;
}

export const ParametersPanel = ({
  temperature,
  maxTokens,
  onTemperatureChange,
  onMaxTokensChange,
}: ParametersPanelProps) => {
  return (
    <div className="w-full space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Parameters</h3>
      
      <div>
        <label htmlFor="temperature-slider" className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
          Temperature: {temperature.toFixed(2)}
        </label>
        <input
          id="temperature-slider"
          type="range"
          min="0"
          max="2"
          step="0.01"
          value={temperature}
          onChange={(e) => onTemperatureChange(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Temperature control"
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
          <span>Precise</span>
          <span>Creative</span>
        </div>
      </div>

      <div>
        <label htmlFor="tokens-slider" className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
          Max Tokens: {maxTokens}
        </label>
        <input
          id="tokens-slider"
          type="range"
          min="100"
          max="4000"
          step="100"
          value={maxTokens}
          onChange={(e) => onMaxTokensChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Max tokens control"
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
          <span>100</span>
          <span>4000</span>
        </div>
      </div>
    </div>
  );
};
