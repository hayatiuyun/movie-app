import fetcher from "@/services/fetcher"
import { useParams } from "next/navigation"
import useSWR from "swr"

const useCredit = () => {
    const params = useParams()
    const {data, error, isLoading, mutate} = useSWR(params.id ? `movie/${params.id}/credits` : null, fetcher)
    return {
        params,
        cast: data?.cast ?? [],
        crew: data?.crew ?? [],
        error,
        isLoading,
        mutate
    }
}

export default useCredit