export type GPT35Model = 'gpt-3.5-turbo' | 'gpt-3.5-turbo-0301';

export type GPT4Model = 'gpt-4' | 'gpt-4-0314' | 'gpt-4-32k' | 'gpt-4-1106-preview';

export type OpenAIChatRole = 'user' | 'assistant' | 'system' | '';

export type Model = GPT35Model | GPT4Model;

export interface OpenAIChatMessage {
  content: string;
  role: OpenAIChatRole;
}

export interface OpenAIChatCompletionChunk {
  id: string;
  object: string;
  created: number;
  model: Model;
  choices: {
    delta: Partial<OpenAIChatMessage>;
    index: number;
    finish_reason: string | null;
  }[];
}

export interface ChatCompletionToken extends OpenAIChatMessage {
  timestamp: number;
}

export interface ChatMessageParams extends OpenAIChatMessage {
  timestamp?: number;
  meta?: {
    loading?: boolean;
    responseTime?: string;
    chunks?: ChatCompletionToken[];
  };
}

export interface ChatMessage extends OpenAIChatMessage {
  timestamp: number;
  meta: {
    loading: boolean;
    responseTime: string;
    chunks: ChatCompletionToken[];
  };
}

// For more information on each of these properties:
// https://platform.openai.com/docs/api-reference/chat
export interface OpenAIStreamingParams {
  apiKey: string;
  model: Model;
  temperature?: number;
  top_p?: number;
  n?: number;
  stop?: string | string[];
  max_tokens?: number;
  presence_penalty?: number;
  frequency_penalty?: number;
  logit_bias?: Map<string | number, number>;
  user?: string;
}

export interface FetchRequestOptions {
  headers: Record<string, string>;
  method: 'POST';
  body: string;
  signal?: AbortSignal;
}

// types.ts
export interface Architecture {
  instruct_type: string | null;
  modality: string;
  tokenizer: string;
}

export interface TopProvider {
  is_moderated: boolean;
  max_completion_tokens: number | null;
}

export interface Pricing {
  completion: string;
  image: string;
  prompt: string;
  request: string;
}

export interface OpenRouterModel {
  architecture: Architecture;
  context_length: number;
  description: string;
  id: string;
  name: string;
  per_request_limits: any | null;
  pricing: Pricing;
  top_provider: TopProvider;
}