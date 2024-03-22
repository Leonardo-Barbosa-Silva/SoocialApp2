import { useTheme } from '@emotion/react';
import { AttachFileOutlined, EditOutlined, GifBoxOutlined, ImageOutlined, MicOutlined } from '@mui/icons-material';
import { Box, Button, Divider, InputBase, Typography } from '@mui/material';
import UserImage from 'components/UserImage';
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { postService } from '../../features/post/postService';

const { createPost } = postService;


const InputPost = ({ user, onCreatePost }) => {
    const { picturePath } = user
    const { palette } = useTheme()
    const dispatch = useDispatch()
    const [ openInputImgPost, setOpenInputImgPost ] = useState(false)
    const [ imagePost, setImagePost ] = useState(null)
    const [ descriptionPost, setDescriptionPost ] = useState("")

    const handlePost = () => {
        const formData = new FormData()

        if (descriptionPost || imagePost) {
            formData.append('description', descriptionPost)
            if (imagePost) {
                formData.append('picture', imagePost)
                formData.append('picturePath', imagePost.name)
            }

            dispatch(createPost(formData)).then( () => {
                if (onCreatePost) {
                    onCreatePost()
                }
            })
        }
    }


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
                    <InputBase
                        placeholder="What's on your mind?"
                        sx={{ fontWeight: 400, fontSize: "15px" }}
                        onChange={(e) => setDescriptionPost(e.target.value)}
                        value={descriptionPost}
                    />
                </Box>
            </Box>

            {openInputImgPost && (
                <Dropzone
                    accepedFiles=".jpg,.png,.jpeg"
                    multiple={false}
                    onDrop={(acceptedFiles) => setImagePost(acceptedFiles[0])}
                >
                    {({ getRootProps, getInputProps }) => (
                        <Box
                            {...getRootProps()}
                            height="100px"
                            width="100%"
                            border={`2px dashed${palette.primary.main}`}
                            sx={{ "&:hover": { cursor: "pointer" } }}
                        >
                            <input {...getInputProps()}/>
                            <Box
                                height="100%"
                                width="100%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {!imagePost ? (
                                    <Typography>Add a picture here!</Typography>
                                ) : (
                                    <Box
                                        width="50%"
                                        display="flex"
                                        justifyContent="space-evenly"
                                    >
                                        <Typography>{imagePost.name}</Typography>
                                        <EditOutlined />
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    )}
                </Dropzone>
            )}

            {!openInputImgPost && <Divider />}

            <Box
                width="100%"
                height={openInputImgPost ? "fit-content" : "100%"}
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
                    onClick={() => setOpenInputImgPost(!openInputImgPost)}
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
                <Button
                    onClick={handlePost}
                >
                    POST
                </Button>
            </Box>
        </Box>
    )
}




export default InputPost;