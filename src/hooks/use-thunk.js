import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

const useThunk = (thunk) => {
    const [isLoading, setIsLoadding] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const run = useCallback((args) => {
        console.log(args);
        setIsLoadding(true);
        dispatch(thunk(args))
            .unwrap()
            .then((result) => {
                console.log(result);
                setIsLoadding(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoadding(false);
            })
    }, [dispatch, thunk]);

    return [
        run,
        isLoading,
        error
    ];
}
export {
    useThunk
}
