export interface UserType {
    id: number
    username: string
    name: string
    profilePicture: string
}

export interface ContentType {
    vibe: string
    vibePhoto: string | null
}

export interface VibeType {
    id: number
    createdAt: string
    likes: number
    replies: number
    isLiked: boolean
    content: ContentType
    user: UserType
}
