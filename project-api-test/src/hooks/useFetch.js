// src/hooks/useFetch.js

import { useEffect, useState } from "react";

const useFetch = (apiFunc, params = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        if (params === null && apiFunc.length > 0) {
            setLoading(false);
            return;
        }        

        apiFunc.length > 0 ? apiFunc(params) : apiFunc()
            .then((res) => isMounted && setData(res))
            .catch((err) => isMounted && setError(err.message))
            .finally(()=> isMounted && setLoading(false));

        return ()=>(isMounted = false)
    },[apiFunc, params]);

    return {data, loading, error};
};

export default useFetch;