import { Box } from "@mui/material"
import NavBar from "components/NavBar"
import FriendsList from "components/widgets/FriendsList"
import InputPost from "components/widgets/InputPost"
import TimeLine from "components/widgets/TimeLine"
import UserWidget from "components/widgets/UserWidget"
import { getMyFeed } from "features/user/userService"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"



function HomePage() {
    const user = useSelector( state => state.users.user )
    const posts = useSelector( state => state.users.posts )
    const dispatch = useDispatch()

    const loadFeed = () => {
        dispatch(getMyFeed())
    }

    useEffect(() => {
        loadFeed()
    }, [dispatch])

    return (
        <Box>
            <NavBar />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "40px",
                    gap: "40px"
                }}
            >
                <UserWidget user={user} />
                
                <Box 
                    sx ={{
                        width: "40%",
                        minWidth: "450px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "40px" 
                    }}
                >
                    <InputPost user={user} onCreatePost={loadFeed} />
                    <TimeLine user={user} posts={posts} />
                </Box>

                <FriendsList />
            </Box>
        </Box>
    )
}


export default HomePage