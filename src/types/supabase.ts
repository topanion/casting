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
      photos_figurants: {
        Row: {
          created_at: string | null
          id: number
          id_figurant: number | null
          role: string | null
          tags: string[] | null
          url: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          id_figurant?: number | null
          role?: string | null
          tags?: string[] | null
          url?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          id_figurant?: number | null
          role?: string | null
          tags?: string[] | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "photos_figurants_id_figurant_fkey"
            columns: ["id_figurant"]
            referencedRelation: "profils_figurants"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profils_figurants: {
        Row: {
          age: number | null
          age_max: number | null
          age_mini: number | null
          avatar_url: string | null
          bande_demo: string | null
          carrure: string | null
          couleur_cheveux: string | null
          couleur_yeux: string | null
          disponibilites: string[] | null
          facebook: string | null
          genre: string | null
          id: number
          infos_complementaires: string[] | null
          inserted_at: string
          instagram: string | null
          langues: string[] | null
          localisations: string[] | null
          longueur_cheveux: string | null
          nom: string | null
          origines: string[] | null
          poids: number | null
          pointure: number | null
          prenom: string | null
          prestations: string[] | null
          profiles_id: string | null
          signes_particuliers: string[] | null
          site: string | null
          sports: string[] | null
          style: string[] | null
          taille: number | null
          talents: string[] | null
          tiktok: string | null
          tour_hanche: number | null
          tour_poitrine: number | null
          tour_taille: number | null
          type_cheveux: string | null
          updated_at: string
          username: string | null
        }
        Insert: {
          age?: number | null
          age_max?: number | null
          age_mini?: number | null
          avatar_url?: string | null
          bande_demo?: string | null
          carrure?: string | null
          couleur_cheveux?: string | null
          couleur_yeux?: string | null
          disponibilites?: string[] | null
          facebook?: string | null
          genre?: string | null
          id?: number
          infos_complementaires?: string[] | null
          inserted_at?: string
          instagram?: string | null
          langues?: string[] | null
          localisations?: string[] | null
          longueur_cheveux?: string | null
          nom?: string | null
          origines?: string[] | null
          poids?: number | null
          pointure?: number | null
          prenom?: string | null
          prestations?: string[] | null
          profiles_id?: string | null
          signes_particuliers?: string[] | null
          site?: string | null
          sports?: string[] | null
          style?: string[] | null
          taille?: number | null
          talents?: string[] | null
          tiktok?: string | null
          tour_hanche?: number | null
          tour_poitrine?: number | null
          tour_taille?: number | null
          type_cheveux?: string | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          age?: number | null
          age_max?: number | null
          age_mini?: number | null
          avatar_url?: string | null
          bande_demo?: string | null
          carrure?: string | null
          couleur_cheveux?: string | null
          couleur_yeux?: string | null
          disponibilites?: string[] | null
          facebook?: string | null
          genre?: string | null
          id?: number
          infos_complementaires?: string[] | null
          inserted_at?: string
          instagram?: string | null
          langues?: string[] | null
          localisations?: string[] | null
          longueur_cheveux?: string | null
          nom?: string | null
          origines?: string[] | null
          poids?: number | null
          pointure?: number | null
          prenom?: string | null
          prestations?: string[] | null
          profiles_id?: string | null
          signes_particuliers?: string[] | null
          site?: string | null
          sports?: string[] | null
          style?: string[] | null
          taille?: number | null
          talents?: string[] | null
          tiktok?: string | null
          tour_hanche?: number | null
          tour_poitrine?: number | null
          tour_taille?: number | null
          type_cheveux?: string | null
          updated_at?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profils_figurants_profiles_id_fkey"
            columns: ["profiles_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_avatar: {
        Args: {
          avatar_url: string
        }
        Returns: Record<string, unknown>
      }
      delete_figurant_pictures: {
        Args: {
          url: string
        }
        Returns: Record<string, unknown>
      }
      delete_storage_object: {
        Args: {
          bucket: string
          object: string
        }
        Returns: Record<string, unknown>
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
