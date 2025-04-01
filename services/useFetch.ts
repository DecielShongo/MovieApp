import {useEffect, useState} from "react";

export const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = false) =>
{

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);


    const fetchData = async () =>
    {
        try
        {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();
            setData(result);
        }
        catch (err)
        {
            if (err) {
                setError(err instanceof Error ? err : new Error("An error occurred."));
            }
        }
        finally {
            setLoading(false);
        }
    }


    const reset = () : void =>
    {
        setData(null);
        setLoading(false);
        setError(null);
    }

    useEffect(() => {
        if (autoFetch){
            fetchData();
        }
    }, []);

    return {refetch : fetchFunction(), loading, autoFetch, error, reset, data};
}

export default useFetch;