"use client"

import { useState, useEffect } from "react"

interface ToastProps {
  title: string
  description?: string
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = ({ title, description, duration = 3000 }: ToastProps) => {
    const id = Date.now()
    setToasts((prevToasts) => [...prevToasts, { id, title, description, duration }])
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => Date.now() - toast.id < toast.duration))
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return { toast, toasts }
}

