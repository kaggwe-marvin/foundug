export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          isidentifiable: boolean | null
          name: string | null
        }
        Insert: {
          id?: string
          isidentifiable?: boolean | null
          name?: string | null
        }
        Update: {
          id?: string
          isidentifiable?: boolean | null
          name?: string | null
        }
        Relationships: []
      }
      claims: {
        Row: {
          agentid: string | null
          id: string
          itemid: string | null
          itemtype: string | null
          status: string | null
        }
        Insert: {
          agentid?: string | null
          id?: string
          itemid?: string | null
          itemtype?: string | null
          status?: string | null
        }
        Update: {
          agentid?: string | null
          id?: string
          itemid?: string | null
          itemtype?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "claims_agentid_fkey"
            columns: ["agentid"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "claims_status_fkey"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_claim"
            columns: ["itemid"]
            isOneToOne: false
            referencedRelation: "lostitems"
            referencedColumns: ["id"]
          }
        ]
      }
      comments: {
        Row: {
          id: string
          itemid: string | null
          itemtype: string | null
          text: string | null
        }
        Insert: {
          id?: string
          itemid?: string | null
          itemtype?: string | null
          text?: string | null
        }
        Update: {
          id?: string
          itemid?: string | null
          itemtype?: string | null
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_comment"
            columns: ["itemid"]
            isOneToOne: false
            referencedRelation: "lostitems"
            referencedColumns: ["id"]
          }
        ]
      }
      founditems: {
        Row: {
          category: string | null
          datefound: string | null
          description: string | null
          finderid: string | null
          id: string
          images: string | null
          locationfound: string | null
          name: string | null
          status: string | null
        }
        Insert: {
          category?: string | null
          datefound?: string | null
          description?: string | null
          finderid?: string | null
          id?: string
          images?: string | null
          locationfound?: string | null
          name?: string | null
          status?: string | null
        }
        Update: {
          category?: string | null
          datefound?: string | null
          description?: string | null
          finderid?: string | null
          id?: string
          images?: string | null
          locationfound?: string | null
          name?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "founditems_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "founditems_finderid_fkey"
            columns: ["finderid"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "founditems_locationfound_fkey"
            columns: ["locationfound"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "founditems_status_fkey"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          }
        ]
      }
      locations: {
        Row: {
          id: string
          name: string | null
        }
        Insert: {
          id?: string
          name?: string | null
        }
        Update: {
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      lostitems: {
        Row: {
          category: string | null
          datelost: string | null
          description: string | null
          id: string
          locationlost: string | null
          name: string | null
          ownerid: string | null
          status: string | null
        }
        Insert: {
          category?: string | null
          datelost?: string | null
          description?: string | null
          id?: string
          locationlost?: string | null
          name?: string | null
          ownerid?: string | null
          status?: string | null
        }
        Update: {
          category?: string | null
          datelost?: string | null
          description?: string | null
          id?: string
          locationlost?: string | null
          name?: string | null
          ownerid?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lostitems_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lostitems_locationlost_fkey"
            columns: ["locationlost"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lostitems_ownerid_fkey"
            columns: ["ownerid"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lostitems_status_fkey"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          }
        ]
      }
      roles: {
        Row: {
          id: string
          name: string | null
        }
        Insert: {
          id?: string
          name?: string | null
        }
        Update: {
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      statuses: {
        Row: {
          id: string
          name: string | null
        }
        Insert: {
          id?: string
          name?: string | null
        }
        Update: {
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          email: string | null
          id: string
          password: string | null
          role: string | null
          tel: string | null
          username: string | null
        }
        Insert: {
          email?: string | null
          id?: string
          password?: string | null
          role?: string | null
          tel?: string | null
          username?: string | null
        }
        Update: {
          email?: string | null
          id?: string
          password?: string | null
          role?: string | null
          tel?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_role_fkey"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          }
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
