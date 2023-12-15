import fetcher from "@/services/fetcher";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

const useListMovie = () => {
    const [page, setPage] = useState(1);
    const [value, setValue] = useState("now_playing")
    const [totalPages, setTotalPages] = useState(1)
    const { data, error, isLoading, mutate, isValidating } = useSWR(
        `movie/${value}?page=${page}`,
        fetcher, {
            revalidateOnMount: true,
            initialData: { page: 1, results: [], total_pages: 1 }
        }
    );

    const [results, setResults] = useState([]);

    const handleChangeValue = (val) => {
        setValue(val)
        setPage(1); // Reset page when the value changes
        mutate()
    }

    useEffect(() => {
        if (data) {
            setResults((prevResults) =>
                page > 1 ? [...prevResults, ...data.results] : data.results
            );
            setTotalPages(data.total_pages)
        }
    }, [data, page]);

    return {
        data: results,
        error,
        isLoading: isLoading || isValidating,
        page,
        setPage,
        totalPages,
        totalResults: data?.total_results || 0,
        mutate,
        handleChangeValue,
        value
    };
};

export default useListMovie;
