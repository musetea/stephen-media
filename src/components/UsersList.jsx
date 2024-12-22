import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import classNames from 'classnames';
import Button from './Button';
import { useThunk } from '../hooks/use-thunk';
import UsersListItem from './UsersListItem';



const UsersList = () => {
    // const [isLoadingUsers, setisLoadingUsers] = useState(false);
    // const [loadingUsersError, setLodingUsersError] = useState(null);
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);

    // const [isCreatingUser, setIsCreatingUser] = useState(false);
    // const [creatingUserError, setCreatingUserError] = useState(null);
    const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    // const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    })

    // useEffect(() => {
    //     setisLoadingUsers(true);
    //     dispatch(fetchUsers())
    //         .unwrap()
    //         .then((result) => {
    //             console.log(result);
    //             setisLoadingUsers(false);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setisLoadingUsers(false);
    //             setLodingUsersError(err);
    //         })
    //         .finally(() => {
    //             console.log("fetchUsers() finally");
    //         })
    // }, [dispatch]);
    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = (e) => {
        // # 1
        // setIsCreatingUser(true)
        // dispatch(addUser())
        //     .unwrap()
        //     .then((result) => {
        //         console.log(result);
        //         setIsCreatingUser(false);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         setCreatingUserError(err);
        //     })
        //     .finally(() => {
        //         console.log("addUser() finally.");
        //     })

        // #2
        doAddUser();

    }

    const renderUsers = data.map((user) => {
        // return <div key={user.id} className={userStyle}>
        //     <div className={rowStyle}>
        //         {user.name}
        //     </div>
        // </div>
        return <UsersListItem key={user.id} user={user} />
    });

    let contents;
    if (isLoadingUsers) {
        contents = <Skeleton times={5} className={"w-full h-10"} />
    }
    else if (loadingUsersError) {
        contents = <div>Error fetching data...
            {error}
        </div>
    }
    else {
        contents = renderUsers;
    }



    const header = (
        <div className='m-3 flex flex-row justify-between'>
            <h1 className='m-2 text-xl'>Users</h1>
            {
                <Button loading={isCreatingUser} onClick={handleUserAdd}>
                    + Add User
                </Button>
            }
            {
                creatingUserError && <div>
                    <h2>Creating User Error</h2>
                    <pre>
                        {creatingUserError}
                    </pre>
                </div>
            }
        </div>
    )


    return (
        <div>
            {header}
            {contents}
        </div>
    )
};
export default UsersList;