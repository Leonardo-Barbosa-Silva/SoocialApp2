import { useTheme } from '@emotion/react';
import { AttachFileOutlined, GifBoxOutlined, ImageOutlined, MicOutlined } from '@mui/icons-material';
import { Box, Button, Divider, InputBase, Typography } from '@mui/material';
import UserImage from 'components/UserImage';



const InputPost = ({ user }) => {
    const { picturePath } = user
    const { palette } = useTheme()

    return (
        <Box
            sx={{
                height: "fit-content",
                backgroundColor: palette.background.alt,
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                padding: "20px"
            }}
        >
            <Box
                width="100%"
                display="flex"
                gap="20px"
                mb="20px"
            >
                <UserImage image={picturePath}/>
                <Box
                    flex="1"
                    height="60px"
                    display="flex"
                    alignItems="center"
                    borderRadius="50px"
                    padding="5px 20px"
                    backgroundColor={palette.neutral.light}
                >
                    <InputBase placeholder="What's on your mind?" sx={{ fontWeight: 400, fontSize: "15px" }}/>
                </Box>
            </Box>

            <Divider />

            <Box
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt="20px"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    p="5px"
                    borderRadius="5px"
                    sx={{
                        "&:hover": {
                            cursor: "pointer",
                            backgroundColor: palette.neutral.light
                        }
                    }}
                >
                    <ImageOutlined sx={{ fontSize: "20px" }}/>
                    <Typography fontSize="15px">Image</Typography>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    p="5px"
                    borderRadius="5px"
                    sx={{
                        "&:hover": {
                            cursor: "pointer",
                            backgroundColor: palette.neutral.light
                        }
                    }}
                >
                    <GifBoxOutlined sx={{ fontSize: "20px" }}/>
                    <Typography fontSize="15px">GIF</Typography>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    p="5px"
                    borderRadius="5px"
                    sx={{
                        "&:hover": {
                            cursor: "pointer",
                            backgroundColor: palette.neutral.light
                        }
                    }}
                >
                    <AttachFileOutlined sx={{ fontSize: "20px" }}/>
                    <Typography fontSize="15px">Attachment</Typography>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    p="5px"
                    borderRadius="5px"
                    sx={{
                        "&:hover": {
                            cursor: "pointer",
                            backgroundColor: palette.neutral.light
                        }
                    }}
                >
                    <MicOutlined sx={{ fontSize: "20px" }}/>
                    <Typography fontSize="15px">Audio</Typography>
                </Box>
                <Button>POST</Button>
            </Box>
        </Box>
    )
}




export default InputPost;