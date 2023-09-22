import { Box } from "@mui/material"
import NavBar from "components/NavBar"
import FriendsList from "components/widgets/FriendsList"
import InputPost from "components/widgets/InputPost"
import TimeLine from "components/widgets/TimeLine"
import UserWidget from "components/widgets/UserWidget"
import { useSelector } from "react-redux"

function HomePage() {
    const user = useSelector( state => state.users.user )

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
                    <InputPost user={user} />
                    <TimeLine />
                </Box>

                <FriendsList />
            </Box>
        </Box>
    )
}


export default HomePage