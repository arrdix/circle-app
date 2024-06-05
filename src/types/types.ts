export interface UserType {
    id: number
    username: string
    name: string
    email: string
    avatar: string
    bio: string | null
}

export interface VibeType {
    id: number
    content: string
    image: string | null
    createdAt: string
    authorId: number
    totalReplies: number
    totalLikes: number
    isLiked: boolean
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

export interface ForgotDataType {
    email: string
}

export interface ResetDataType {
    newPassword: string
    confirmedPassword: string
    general?: string
}
