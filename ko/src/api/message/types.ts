/**
 * 채팅방 정보를 나타내는 인터페이스
 */
export interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount?: number;
  avatar?: string;
  participants?: Participant[];
  isGroup?: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 채팅방 참여자 정보를 나타내는 인터페이스
 */
export interface Participant {
  id: number;
  name: string;
  avatar?: string;
  role?: 'admin' | 'member';
  joinedAt: string;
}

/**
 * 메시지 정보를 나타내는 인터페이스
 */
export interface Message {
  id: number;
  chatId: number;
  text: string;
  time: string;
  sender: boolean;
  status?: 'sent' | 'delivered' | 'read';
  attachments?: Attachment[];
  reactions?: Reaction[];
  edited?: boolean;
  editedAt?: string;
}

/**
 * 메시지 첨부 파일을 나타내는 인터페이스
 */
export interface Attachment {
  id: number;
  type: 'image' | 'file' | 'link';
  url: string;
  name?: string;
  size?: number;
  thumbnailUrl?: string;
}

/**
 * 메시지 반응을 나타내는 인터페이스
 */
export interface Reaction {
  emoji: string;
  count: number;
  users: number[];
}

/**
 * 메시지 전송 요청을 나타내는 인터페이스
 */
export interface SendMessageRequest {
  chatId: number;
  text: string;
  attachments?: Omit<Attachment, 'id'>[];
}

/**
 * 메시지 목록 조회 요청을 나타내는 인터페이스
 */
export interface GetMessagesRequest {
  chatId: number;
  page?: number;
  limit?: number;
  before?: string; // 특정 시간 이전의 메시지 조회
  after?: string;  // 특정 시간 이후의 메시지 조회
}

/**
 * 메시지 목록 조회 응답을 나타내는 인터페이스
 */
export interface GetMessagesResponse {
  messages: Message[];
  total: number;
  hasMore: boolean;
}

/**
 * 채팅방 목록 조회 응답을 나타내는 인터페이스
 */
export interface GetChatsResponse {
  chats: Chat[];
  total: number;
}

/**
 * 채팅방 생성 요청을 나타내는 인터페이스
 */
export interface CreateChatRequest {
  participantIds: number[];
  name?: string;
  isGroup?: boolean;
  avatar?: string;
}

/**
 * 채팅방 생성 응답을 나타내는 인터페이스
 */
export interface CreateChatResponse {
  chatId: number;
  name: string;
  participants: Participant[];
  createdAt: string;
}

/**
 * 채팅방 나가기 요청을 나타내는 인터페이스
 */
export interface LeaveChatRequest {
  chatId: number;
}

/**
 * 채팅방 나가기 응답을 나타내는 인터페이스
 */
export interface LeaveChatResponse {
  message: string;
}

/**
 * 메시지 삭제 요청을 나타내는 인터페이스
 */
export interface DeleteMessageRequest {
  messageId: number;
  chatId: number;
}

/**
 * 메시지 수정 요청을 나타내는 인터페이스
 */
export interface UpdateMessageRequest {
  messageId: number;
  chatId: number;
  text: string;
}

/**
 * 채팅방 검색 요청을 나타내는 인터페이스
 */
export interface SearchChatsRequest {
  query: string;
  page?: number;
  limit?: number;
  filters?: {
    isGroup?: boolean;
    hasUnread?: boolean;
    dateRange?: {
      start: string;
      end: string;
    };
  };
}

/**
 * 메시지 상태를 나타내는 인터페이스
 */
export interface MessageStatus {
  messageId: number;
  status: 'sent' | 'delivered' | 'read';
  readBy?: {
    userId: number;
    name: string;
    readAt: string;
  }[];
}

/**
 * 채팅방 설정을 나타내는 인터페이스
 */
export interface ChatSettings {
  chatId: number;
  notifications: boolean;
  muteUntil?: string;
  customName?: string;
  customAvatar?: string;
}

/**
 * 채팅방 설정 업데이트 요청을 나타내는 인터페이스
 */
export interface UpdateChatSettingsRequest {
  chatId: number;
  settings: Partial<ChatSettings>;
}

/**
 * 파일 업로드 응답을 나타내는 인터페이스
 */
export interface UploadResponse {
  url: string;
  id: number;
  name: string;
  size: number;
  type: string;
} 