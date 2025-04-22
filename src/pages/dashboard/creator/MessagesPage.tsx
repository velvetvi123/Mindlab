
import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Send, User } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isUser: boolean;
}

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  messages: Message[];
}

export default function MessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [activeChat, setActiveChat] = useState<number | null>(null);
  
  // Load conversations from local storage on component mount
  useEffect(() => {
    const savedConversations = localStorage.getItem('conversations');
    if (savedConversations) {
      const parsedConversations = JSON.parse(savedConversations);
      setConversations(parsedConversations);
      // Set active chat to the first conversation if there are any
      if (parsedConversations.length > 0) {
        setActiveChat(parsedConversations[0].id);
      }
    } else {
      // Initial conversations if none exist in localStorage
      const initialConversations = [
        {
          id: 1,
          name: "Sarah Johnson",
          lastMessage: "Can you share more details about the deliverables?",
          timestamp: "2 hours ago",
          unread: true,
          messages: [
            {
              id: 1,
              sender: "Sarah Johnson",
              content: "Hi there! I saw your project and I think I can help you with the UI/UX design.",
              timestamp: "10:32 AM",
              isUser: false,
            },
            {
              id: 2,
              sender: "You",
              content: "Thanks for reaching out! I'm looking for someone with experience in mobile app design.",
              timestamp: "10:40 AM",
              isUser: true,
            },
            {
              id: 3,
              sender: "Sarah Johnson",
              content: "I have 5 years of experience with mobile app UI/UX. I've worked on e-commerce, fintech, and social media apps.",
              timestamp: "10:45 AM",
              isUser: false,
            },
            {
              id: 4,
              sender: "You",
              content: "That sounds great! Can you share more details about the deliverables?",
              timestamp: "11:02 AM",
              isUser: true,
            },
          ],
        },
        {
          id: 2,
          name: "Michael Chang",
          lastMessage: "I've just sent you the prototype.",
          timestamp: "Yesterday",
          unread: false,
          messages: [
            {
              id: 1,
              sender: "Michael Chang",
              content: "Hello, I'm interested in your project. I specialize in frontend development.",
              timestamp: "Yesterday, 3:15 PM",
              isUser: false,
            },
            {
              id: 2,
              sender: "You",
              content: "Hi Michael, thanks for your interest. Do you have experience with React?",
              timestamp: "Yesterday, 4:20 PM",
              isUser: true,
            },
            {
              id: 3,
              sender: "Michael Chang",
              content: "Yes, I've been working with React for over 4 years. I've just sent you the prototype.",
              timestamp: "Yesterday, 5:45 PM",
              isUser: false,
            },
          ],
        },
        {
          id: 3,
          name: "Amanda Lee",
          lastMessage: "Looking forward to our meeting tomorrow.",
          timestamp: "3 days ago",
          unread: false,
          messages: [
            {
              id: 1,
              sender: "Amanda Lee",
              content: "I noticed your project requires backend development. I have expertise in Node.js and Express.",
              timestamp: "3 days ago, 11:20 AM",
              isUser: false,
            },
            {
              id: 2,
              sender: "You",
              content: "That's exactly what we need. Could we schedule a meeting to discuss further?",
              timestamp: "3 days ago, 1:45 PM",
              isUser: true,
            },
            {
              id: 3,
              sender: "Amanda Lee",
              content: "Absolutely! How about tomorrow at 10 AM? Looking forward to our meeting tomorrow.",
              timestamp: "3 days ago, 2:30 PM",
              isUser: false,
            },
          ],
        },
      ];
      setConversations(initialConversations);
      setActiveChat(initialConversations[0].id);
      localStorage.setItem('conversations', JSON.stringify(initialConversations));
    }
  }, []);

  // Save conversations to local storage whenever they change
  useEffect(() => {
    if (conversations.length > 0) {
      localStorage.setItem('conversations', JSON.stringify(conversations));
    }
  }, [conversations]);

  // Get the active conversation based on the activeChat ID
  const activeConversation = conversations.find(conv => conv.id === activeChat);
  
  // Get messages from the active conversation
  const messages = activeConversation?.messages || [];

  const handleSendMessage = () => {
    if (newMessage.trim() === "" || !activeChat) return;
    
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const newMessageObj: Message = {
      id: Date.now(),
      sender: "You",
      content: newMessage,
      timestamp: "Just now",
      isUser: true,
    };
    
    // Update the conversations state with the new message
    const updatedConversations = conversations.map(conversation => {
      if (conversation.id === activeChat) {
        return {
          ...conversation,
          messages: [...conversation.messages, newMessageObj],
          lastMessage: newMessage,
          timestamp: "Just now"
        };
      }
      return conversation;
    });
    
    setConversations(updatedConversations);
    setNewMessage("");
    
    // Fix: Use the toast function properly with a string description
    toast("Message sent successfully");
  };

  const handleChangeConversation = (conversationId: number) => {
    // Mark the conversation as read when selecting it
    const updatedConversations = conversations.map(conversation => {
      if (conversation.id === conversationId) {
        return {
          ...conversation,
          unread: false
        };
      }
      return conversation;
    });
    
    setConversations(updatedConversations);
    setActiveChat(conversationId);
  };

  return (
    <DashboardLayout userType="creator">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Messages</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 h-[calc(100vh-200px)]">
          <Card className="h-full flex flex-col">
            <CardHeader className="px-4 py-3">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search conversations" className="pl-8" />
              </div>
            </CardHeader>
            <CardContent className="overflow-auto p-0 flex-1">
              <ScrollArea className="h-full">
                <div className="space-y-1 p-2">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`flex items-center space-x-4 rounded-md p-2 cursor-pointer ${
                        activeChat === conversation.id
                          ? "bg-accent"
                          : "hover:bg-muted"
                      }`}
                      onClick={() => handleChangeConversation(conversation.id)}
                    >
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/placeholder.svg" alt={conversation.name} />
                        <AvatarFallback>
                          <User className="h-5 w-5" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium">{conversation.name}</p>
                          <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {conversation.lastMessage}
                        </p>
                      </div>
                      {conversation.unread && (
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="h-full flex flex-col">
            {activeConversation ? (
              <>
                <CardHeader className="px-4 py-3 border-b">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="/placeholder.svg" alt={activeConversation.name} />
                      <AvatarFallback>{activeConversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-md">{activeConversation.name}</CardTitle>
                      <CardDescription className="text-xs">
                        {activeConversation.id === 1 ? 'UI/UX Designer' : 
                         activeConversation.id === 2 ? 'Frontend Developer' : 'Backend Developer'} • Online
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 overflow-auto flex-1">
                  <ScrollArea className="h-full pr-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.isUser ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              message.isUser
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
                <div className="border-t p-3">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button size="icon" onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">Select a conversation to start messaging</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
