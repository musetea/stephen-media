import { useFetchAlbumsQuery } from '../store';


// console.log(useFetchAlbumsQuery(user));
// {
//     "status": "fulfilled",
//     "endpointName": "fetchAlbums",
//     "requestId": "jjFZJ0y3ixQ7vRRFL7_aa",
//     "originalArgs": {
//         "id": "e4ae",
//         "name": "Fannie Deckow PhD"
//     },
//     "startedTimeStamp": 1734872220257,
//     "data": [],                                  // 서버로 부터 받은 데이터
//     "fulfilledTimeStamp": 1734872220266,
//     "isUninitialized": false,
//     "isLoading": false,                          // 첫음 한번만 데이터 로딩 상태 
//     "isSuccess": true,
//     "isError": false,
//     "currentData": [],
//     "isFetching": false                          // 진행중인 데이터 로딩 상태 
// }

import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";


const AlbumsList = ({ user }) => {

    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    let contents;
    if (isLoading) {
        contents = <Skeleton times={3} />
    }
    else if (error) {
        contents = <div>Loading Albums Error</div>
    }
    else {
        contents = data.map((album) => {
            const header = <>
                {album.title}
            </>


            return <ExpandablePanel key={album.id} header={header}>
                포토 목록
            </ExpandablePanel>
        })
    }



    return (
        <div>
            <div>
                Albums for {user.name}
            </div>
            <div>
                {contents}
            </div>
        </div>
    )
};
export default AlbumsList;