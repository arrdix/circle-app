export interface UserType {
    id: number
    username: string
    name: string
    email: string
    avatar: string
    banner: string
    bio: string | null
    followers: FollowType[]
    followings: FollowType[]
    totalFollower: number
    totalFollowing: number
    isFollowed: boolean
    vibes: VibeType[]
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
    badLabels: string[]
    author: UserType | undefined
}

export interface DetailedVibeType {
    id: number
    content: string
    image: string | null
    createdAt: string
    authorId: number
    replies: VibeType[]
    likes: LikeType[]
    totalReplies: number
    totalLikes: number
    isLiked: boolean
    author: UserType
}

export interface FollowType {
    id: number
    targetId: number
    ownerId: number
}

export interface LikeType {
    id: number
    authorId: number
    targetId: number
}

export interface ReplyType {
    id: number
    image: string | null
    content: string
    authorId: number
    targetId: number
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
export interface EditUserDataType {
    name: string
    username: string
    bio: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    avatar: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    banner: any
}

export interface EditedUserType {
    id: number
    username: string
    name: string
    email: string
    avatar: string
    banner: string
    bio: string | null
}

export interface VibeDataType {
    content: string
    badLabels: string[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any
}
