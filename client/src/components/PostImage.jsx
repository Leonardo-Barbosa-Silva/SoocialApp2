import { Box } from '@mui/material';


const PostImage = ({ image, size = "100%" }) => {

    return (
        <Box width={size} height={size}>
            <img 
                style={{ objectFit: "cover" }}
                width="100%"
                height="100%"
                alt="user"
                src={`http://localhost:3003/assets/${image}`}
            />
        </Box>
    )
}


export default PostImage;