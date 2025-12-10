export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isLoading: boolean;
}

export interface Feature {
  id: number;
  text: string;
}
