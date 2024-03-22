import { PostAdd } from "@mui/icons-material";
import UserImage from "./UserImage";
import PostImage from "./PostImage";
import { useTheme } from "@emotion/react";

const { Box, Typography } = require("@mui/material")

const Post = ({ user, post }) => {
    const { firstName, lastName, location, picturePath } = user
    const { palette } = useTheme()

    return (
        <Box
            width="100%"
            height="200px"
            backgroundColor={palette.background.alt}
            padding="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderRadius="15px"
        >
            <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    gap="10px"
                >
                    <UserImage image={picturePath} />
                    <Box>
                        <Typography
                            variant="h4"
                        >
                            {firstName} {lastName}
                        </Typography>
                        <Typography>
                            {location}
                        </Typography>
                    </Box>
                </Box>

                <PostAdd />
            </Box>

            <Typography>
                {post.description}
            </Typography>

            <PostImage image={post.picturePath} />
        </Box>
    )
}



export default Post;