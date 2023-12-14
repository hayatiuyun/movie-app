import fetcher from "@/services/fetcher"
import { useParams } from "next/navigation"
import useSWR from "swr"

const useDetailPage = () => {
    const params = useParams()
    const {data, error, isLoading, mutate} = useSWR(params.id ? `movie/${params.id}` : null, fetcher)
    return {
        params,
        details: data ?? null,
        error,
        isLoading,
        mutate
    }

}

export default useDetailPage