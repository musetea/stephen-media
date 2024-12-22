import classNames from 'classnames';
import { GoTrash } from "react-icons/go";
import Button from './Button';
import { useThunk } from '../hooks/use-thunk';
import { removeUser } from '../store';
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";


const UsersListItem = ({ user }) => {

    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleDeleteUser = () => {
        doRemoveUser(user)

    }

    const userStyle = classNames("mb-2 border rounded");
    const rowStyle = classNames("p-2 flex items-center items-center justify-between cursro-pointer");

    const header = (
        <>
            <Button className="mr-3" onClick={handleDeleteUser} loading={isLoading}>
                <GoTrash />
            </Button>
            {error && <div>Error Deleting Error</div>}
            {user.name}
        </>
    );

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
    )
};

export default UsersListItem;