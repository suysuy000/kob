import { messageApi } from './messageApi';
import { Chat, Message, SendMessageRequest, MessageStatus } from './types';

export class MessageService {
  private static instance: MessageService;
  private chats: Chat[] = [];
  private messages: Map<number, Message[]> = new Map();

  private constructor() {}

  public static getInstance(): MessageService {
    if (!MessageService.instance) {
      MessageService.instance = new MessageService();
    }
    return MessageService.instance;
  }

  // 채팅 목록 조회
  async getChats(): Promise<Chat[]> {
    try {
      const response = await messageApi.getChats();
      this.chats = response.chats;
      return this.chats;
    } catch (error) {
      console.error('Error fetching chats:', error);
      throw error;
    }
  }

  // 특정 채팅의 메시지 목록 조회
  async getMessages(chatId: number, page = 1): Promise<Message[]> {
    try {
      const response = await messageApi.getMessages({ chatId, page });
      const existingMessages = this.messages.get(chatId) || [];
      this.messages.set(chatId, [...existingMessages, ...response.messages]);
      return this.messages.get(chatId) || [];
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  }

  // 메시지 전송
  async sendMessage(data: SendMessageRequest): Promise<void> {
    try {
      await messageApi.sendMessage(data);
      // 메시지 전송 후 채팅 목록 업데이트
      await this.getChats();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  // 메시지 읽음 상태 조회
  async getMessageStatus(messageId: number): Promise<MessageStatus> {
    try {
      return await messageApi.getMessageStatus(messageId);
    } catch (error) {
      console.error('Error getting message status:', error);
      throw error;
    }
  }

  // 특정 채팅의 메시지 목록 가져오기
  getMessagesByChatId(chatId: number): Message[] {
    return this.messages.get(chatId) || [];
  }
} 