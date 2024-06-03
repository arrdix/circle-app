export interface UserType {
    id: number
    username: string
    name: string
    profilePicture: string
}

export interface UserTypes {
    id: number
    username: string
    name: string
    email: string
    avatar: string
    bio: string | null
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

export interface RegisterDataType {
    username: string
    name: string
    email: string
    password: string
}

export interface LoginDataType {
    username: string
    password: string
}
