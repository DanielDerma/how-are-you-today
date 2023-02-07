export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      exercises: {
        Row: {
          created_at: string | null
          id: number
          question: string | null
          type: string | null
          userId: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          question?: string | null
          type?: string | null
          userId?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          question?: string | null
          type?: string | null
          userId?: string | null
        }
      }
      tracking: {
        Row: {
          created_at: string | null
          id: number
          mood_confidence: number | null
          mood_prediction: number | null
          nutrition_confidence: number | null
          nutrition_prediction: number | null
          physical_confidence: number | null
          physical_prediction: number | null
          sleep_confidence: number | null
          sleep_prediction: number | null
          userId: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          mood_confidence?: number | null
          mood_prediction?: number | null
          nutrition_confidence?: number | null
          nutrition_prediction?: number | null
          physical_confidence?: number | null
          physical_prediction?: number | null
          sleep_confidence?: number | null
          sleep_prediction?: number | null
          userId?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          mood_confidence?: number | null
          mood_prediction?: number | null
          nutrition_confidence?: number | null
          nutrition_prediction?: number | null
          physical_confidence?: number | null
          physical_prediction?: number | null
          sleep_confidence?: number | null
          sleep_prediction?: number | null
          userId?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
