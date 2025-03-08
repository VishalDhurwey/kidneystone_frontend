"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { motion, AnimatePresence } from "framer-motion"

// Knowledge base about kidney stones
const KNOWLEDGE_BASE = {
  symptoms: {
    title: "Kidney Stone Symptoms",
    content: `Common symptoms of kidney stones include:
    - Severe pain in back and side
    - Pain that radiates to lower abdomen and groin
    - Pain that comes in waves
    - Pain during urination
    - Pink, red or brown urine
    - Cloudy or foul-smelling urine
    - Nausea and vomiting
    - Persistent need to urinate
    - Urinating more often than usual
    - Fever and chills if infection is present`
  },
  causes: {
    title: "Causes of Kidney Stones",
    content: `Kidney stones form when your urine contains more crystal-forming substances than the fluid in your urine can dilute. Common causes include:
    - Dehydration
    - Diet high in protein, sodium and sugar
    - Obesity
    - Family history
    - Certain medical conditions
    - Some medications`
  },
  treatment: {
    title: "Treatment Options",
    content: `Treatment depends on stone size:
    - Small stones (< 4mm): Usually pass naturally with increased fluid intake
    - Medium stones (4-6mm): May require medication or sound wave therapy
    - Large stones (> 6mm): May need surgical removal
    Common procedures include:
    - Shock wave lithotripsy (SWL)
    - Ureteroscopy
    - Percutaneous nephrolithotomy`
  },
  prevention: {
    title: "Prevention Methods",
    content: `To prevent kidney stones:
    - Drink plenty of water (2-3 liters daily)
    - Reduce sodium intake
    - Limit animal protein
    - Get enough calcium from food
    - Avoid high-oxalate foods
    - Maintain healthy weight
    - Regular exercise`
  }
}

interface Message {
  role: "user" | "assistant"
  content: string
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your kidney health assistant. I can help answer questions about your results or provide information about kidney stones. What would you like to know?"
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      // Prevent page scroll by getting the parent container
      const chatContainer = messagesEndRef.current.parentElement?.parentElement
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight
      }
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("https://kidneystone-backend.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      })

      if (!res.ok) throw new Error(`Server responded with ${res.status}`)

      const data = await res.json()
      const botMessage: Message = { role: "assistant", content: data.response }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Sorry, something went wrong. Error: ${(error as Error).message}` }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full h-[500px] flex flex-col p-4">
      <div className="flex-1 overflow-y-auto pr-4 scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
        <div className="space-y-4">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <div className="whitespace-pre-line">{message.content}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-muted-foreground text-sm"
            >
              Assistant is typing...
            </motion.div>
          )}
          <div ref={messagesEndRef} className="h-0" />
        </div>
      </div>
      <div className="flex gap-2 mt-4 border-t pt-4">
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !e.shiftKey && handleSend()}
          placeholder="Ask about your results or kidney health..."
          className="flex-1"
        />
        <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </div>
    </Card>
  )
}
