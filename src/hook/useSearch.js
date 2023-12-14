import fetcher from "@/services/fetcher";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

const useSearch = () => {
  const params = useSearchParams();
  const [page, setPage] = useState(1);

  const { data, error, isValidating, mutate } = useSWR(
    params ? `search/movie?${params.toString()}&page=${page || 1}` : null,
    fetcher
  );

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (data) {
      setResults((prevResults) =>
        page > 1 ? [...prevResults, ...data.results] : data.results
      );
    }
  }, [data, page]);

  return {
    data: results,
    error,
    isLoading: !data && isValidating,
    page,
    setPage,
    totalPages: data?.total_pages || 1,
    totalResults: data?.total_results || 0,
    mutate,
  };
};

export default useSearch;
