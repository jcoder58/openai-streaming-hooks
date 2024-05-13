import { useState, useEffect } from 'react';
import {OpenRouterModel} from './types'


const useOpenRouterModels = () => {
  const [models, setModels] = useState<OpenRouterModel[]>([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch('https://openrouter.ai/api/v1/models');
        const data = await response.json();
        const sortedModels = data.data.sort((a: OpenRouterModel, b: OpenRouterModel) =>
          a.name.localeCompare(b.name)
        );
        setModels(sortedModels);
      } catch (error) {
        console.error('Error fetching OpenRouter models:', error);
      }
    };

    fetchModels();
  }, []);

  return models;
};

export default useOpenRouterModels;