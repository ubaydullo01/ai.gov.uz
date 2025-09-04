"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface AIAssistantProps {
  currentLanguage: string;
}

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({
  currentLanguage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const welcomeMessage = {
    ru: "Привет! Я AI-ассистент, готов помочь вам узнать больше об искусственном интеллекте в Узбекистане. Чем могу помочь?",
    uz: "Salom! Men AI-yordamchi, sizga O'zbekistonda sun'iy intellekt haqida ko'proq ma'lumot olishga yordam berishga tayyorman. Nima bilan yordam beraman?",
    en: "Hello! I'm an AI assistant, ready to help you learn more about artificial intelligence in Uzbekistan. How can I help you?",
  };

  const sampleResponses = {
    ru: [
      "В Узбекистане активно развиваются AI-технологии в образовании, здравоохранении и государственном управлении.",
      "Министерство по развитию информационных технологий и коммуникаций Узбекистана запустило несколько инициатив в области ИИ.",
      "Ташкентский университет информационных технологий предлагает программы по машинному обучению и AI.",
      "В IT-парке Ташкента работают стартапы, использующие искусственный интеллект для решения локальных задач.",
    ],
    uz: [
      "O'zbekistonda AI texnologiyalari ta'lim, sog'liqni saqlash va davlat boshqaruvida faol rivojlanmoqda.",
      "Axborot texnologiyalari va kommunikatsiyalarni rivojlantirish vazirligi AI sohasida bir nechta tashabbuslarni boshladi.",
      "Toshkent axborot texnologiyalari universiteti mashinali o'rganish va AI bo'yicha dasturlar taklif qiladi.",
      "Toshkent IT-parkida mahalliy masalalarni hal qilish uchun sun'iy intellektdan foydalanadigan startaplar ishlaydi.",
    ],
    en: [
      "AI technologies are actively developing in Uzbekistan in education, healthcare, and public administration.",
      "The Ministry of Development of Information Technologies and Communications of Uzbekistan has launched several AI initiatives.",
      "Tashkent University of Information Technologies offers programs in machine learning and AI.",
      "Startups using artificial intelligence to solve local problems operate in the Tashkent IT Park.",
    ],
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString() + "-user",
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const responses =
        sampleResponses[currentLanguage as keyof typeof sampleResponses];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      const botMessage: Message = {
        id: Date.now().toString() + "-bot",
        type: "bot",
        content: randomResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      const welcomeMsg: Message = {
        id: "welcome",
        type: "bot",
        content: welcomeMessage[currentLanguage as keyof typeof welcomeMessage],
        timestamp: new Date(),
      };
      setMessages([welcomeMsg]);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={handleOpenChat}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-200"
          size="sm"
        >
          <MessageCircle size={24} className="text-white" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-emerald-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot size={20} />
                  <div>
                    <h3 className="font-medium">AI Assistant</h3>
                    <p className="text-xs opacity-80">
                      {currentLanguage === "ru"
                        ? "Онлайн"
                        : currentLanguage === "uz"
                        ? "Onlayn"
                        : "Online"}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X size={16} />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === "bot" && (
                        <Bot size={16} className="mt-1 text-emerald-500" />
                      )}
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <div className="flex items-center space-x-2">
                      <Bot size={16} className="text-emerald-500" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    currentLanguage === "ru"
                      ? "Введите сообщение..."
                      : currentLanguage === "uz"
                      ? "Xabar kiriting..."
                      : "Type a message..."
                  }
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
