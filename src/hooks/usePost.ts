import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { VibeDataType, VibeType } from '@/types/types'

import API from '@/networks/api'
import useCircleToast from '@/hooks/useCircleToast'

interface usePostParams {
    onClose?: () => void
}

function usePost(
    params: usePostParams = {}
): [VibeType[] | undefined, (data: VibeDataType) => void] {
    const createToast = useCircleToast()
    const queryClient: QueryClient = useQueryClient()

    const { data: vibes } = useQuery<VibeType[]>({
        queryKey: ['vibes'],
        queryFn: API.GET_ALL_VIBES,
    })

    const mutation = useMutation({
        mutationFn: POST_VIBE,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['vibes'] })
        },
    })

    function onPost(data: VibeDataType): void {
        const formData: FormData = new FormData()

        formData.append('content', data.content)
        formData.append('image', data.image ? data.image[0] : null)

        mutation.mutate(formData)

        if (params.onClose) {
            params.onClose()
        }
    }

    async function POST_VIBE(data: FormData): Promise<string> {
        const postVIbe: Promise<string> = API.POST_VIBE(data)
        createToast(postVIbe, {
            title: 'Post Vibe',
            message: 'Vibe successfully posted!',
        })

        return postVIbe
    }

    return [vibes, onPost]
}

export { usePost }
