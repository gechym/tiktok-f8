import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function useQuery(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = useCallback((url) => {
        setLoading(true);

        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                setLoading(true);
                toast.success('Fetch data success');
            })
            .catch((err) => {
                setLoading(false);
                setError(`Fetch data error ${err.response.data.message}`);
                toast.error(`Fetch data error ${err.response.data.message}`);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        let isMount = true;

        axios
            .get(url)
            .then((res) => {
                if (!isMount) return;
                setData(res.data);
                setLoading(true);
                toast.success('Fetch data success');
            })
            .catch((err) => {
                if (!isMount) return;

                setLoading(false);
                setError(`Fetch data error ${err.response.data.message}`);
                toast.error(`Fetch data error ${err.response.data.message}`);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            isMount = false;
        };
    }, [url]);

    return { data, error, loading, fetchData };
}

export default useQuery;
