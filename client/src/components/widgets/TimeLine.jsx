import { Box } from '@mui/material';
import Post from 'components/Post';



const TimeLine = ({ user, posts }) => {

    return (
        <>
            {posts.map( post => (
                <Post user={user} post={post} key={post._id}/>
            ))}
        </>
    )
}




export default TimeLine;