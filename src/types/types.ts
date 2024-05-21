export interface UserType {
    id: number
    username: string
    name: string
    profilePicture: string
}

export interface VibeType {
    id: number
    vibe: string
    createdAt: string
    likes: number
    replies: number
    isLiked: boolean
    user: UserType
}
