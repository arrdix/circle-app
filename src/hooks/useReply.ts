import { DetailedVibeType, ReplyType, VibeDataType } from '@/types/types'
import { useQuery, useQueryClient, useMutation, QueryClient } from '@tanstack/react-query'

import API from '@/networks/api'
import useCircleToast from '@/hooks/useCircleToast'

function useReply(targetId: number): [DetailedVibeType | undefined, (data: VibeDataType) => void] {
    const createToast = useCircleToast()
    const queryClient: QueryClient = useQueryClient()

    const { data: vibe } = useQuery<DetailedVibeType>({
        queryKey: ['vibe', targetId],
        queryFn: () => API.GET_SINGLE_VIBE(targetId),
    })

    const mutation = useMutation({
        mutationFn: POST_REPLY,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['vibe'] })
        },
    })

    function onReply(data: VibeDataType): void {
        const formData: FormData = new FormData()

        formData.append('targetId', targetId.toString())
        formData.append('content', data.content)
        formData.append('image', data.image ? data.image[0] : null)

        mutation.mutate(formData)
    }

    async function POST_REPLY(data: FormData): Promise<ReplyType> {
        const postReply: Promise<ReplyType> = API.POST_REPLY(data)
        createToast(postReply, {
            title: 'Post Reply',
            message: 'Reply successfully posted!',
        })

        return postReply
    }

    return [vibe, onReply]
}

export { useReply }
