// ModelSelector.tsx
import React, { useState } from 'react';
import useOpenRouterModels from './open-router-models';
import { OpenRouterModel } from './types';

interface ModelSelectorProps {
  onModelSelect: (model: OpenRouterModel | null) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ onModelSelect }) => {
  const models = useOpenRouterModels();
  const [selectedModel, setSelectedModel] = useState<OpenRouterModel | null>(null);

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModelId = event.target.value;
    const model = models.find((model) => model.id === selectedModelId) || null;
    setSelectedModel(model);
    onModelSelect(model);
  };

  return (
    <div>
      <label htmlFor="model-select">Select a model:</label>
      <select id="model-select" value={selectedModel?.id || ''} onChange={handleModelChange}>
        <option value="">-- Select a model --</option>
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModelSelector;