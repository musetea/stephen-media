import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../store';
import Skeleton from './Skeleton';
import classNames from 'classnames';

const UsersList = () => {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (isLoading) {
        return <Skeleton times={5} className={"w-full h-10"} />
    }

    if (error) {
        return <div>Error fetching data...
            {error}
        </div>
    }

    const userStyle = classNames("mb-2 border rounded");
    const rowStyle = classNames("p-2 flex items-center justify-between cursro-pointer");
    const renderUsers = data.map((user) => {
        return <div key={user.id} className={userStyle}>
            <div className={rowStyle}>
                {user.name}
            </div>
        </div>
    });


    return (
        <div>{renderUsers}</div>
    )
};
export default UsersList;