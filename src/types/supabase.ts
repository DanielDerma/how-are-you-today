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
