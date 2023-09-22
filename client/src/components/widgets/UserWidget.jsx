import { IconButton, useTheme } from '@mui/material';
import { EditOutlined, LinkedIn, LocationCity, LocationOnOutlined, ManageAccountsOutlined, Twitter, Work, WorkOutlineOutlined } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import UserImage from 'components/UserImage';



const UserWidget = ({ user }) => {
    const {
        firstName,
        lastName,
        picturePath,
        friends,
        location,
        occupation,
        viewedProfile,
        impressions
    } = user

    const { palette } = useTheme()

    return (
        <Box
            sx={{
                width: "30%",
                minWidth: "300px",
                height: "fit-content",
                backgroundColor: "#000",
                borderRadius: "15px",
                padding: "20px"
            }}
        >
            <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" paddingBottom="20px">
                    <Box display="flex" alignItems="center" gap="15px">
                        <UserImage image={picturePath} size={"60px"}/>
                        <Box display="flex" flexDirection="column" mt="10px">
                            <Typography
                                variant="h4"
                                color={palette.primary.dark}
                                fontWeight="500"
                                sx={{
                                    "&:hover": {
                                        cursor: "pointer",
                                        color: palette.primary.light
                                    }
                                }}
                            >
                                {`${firstName} ${lastName}`} 
                            </Typography>
                            <Typography color={palette.neutral.medium}>
                                {friends && Array.isArray(friends) ? `${friends.length} friends`: 'indisponible'}
                            </Typography>
                        </Box>
                    </Box>

                    <IconButton><ManageAccountsOutlined /></IconButton>
                </Box>

                <Divider />

                <Box display="flex" flexDirection="column" alignItems="flex-start" padding="20px 0" gap="5px">
                    <Box display="flex" alignItems="center" gap="10px">
                        <LocationOnOutlined sx={{ color: palette.neutral.main }}/> 
                        <Typography color={palette.neutral.medium}>
                            {location}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap="10px">
                        <WorkOutlineOutlined sx={{ color: palette.neutral.main }}/>
                        <Typography color={palette.neutral.medium}>
                            {occupation}
                        </Typography>
                    </Box>
                </Box>

                <Divider />

                <Box display="flex" flexDirection="column" padding="20px 0" gap="5px">
                    <Box display="flex" justifyContent="space-between">
                        <Typography color={palette.neutral.medium}>Who's viewed your profile</Typography>
                        {viewedProfile}
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography color={palette.neutral.medium}>Impressions of your post</Typography>
                        {impressions}
                    </Box>
                </Box>

                <Divider />

                <Box>
                    <Typography m="20px 0 10PX 0" color={palette.neutral.main}>
                        Social Profiles
                    </Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb="10px">
                        <Box display="flex" gap="10px" alignItems="center">
                            <Twitter sx={{ color: palette.neutral.main }}/>
                            <Box>
                                <Typography color={palette.neutral.main}>Twitter</Typography>
                                <Typography color={palette.neutral.medium}>Social Network</Typography>
                            </Box>
                        </Box>

                        <IconButton><EditOutlined /></IconButton>
                    </Box>

                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" gap="10px" alignItems="center">
                            <LinkedIn sx={{ color: palette.neutral.main }}/>
                            <Box>
                                <Typography color={palette.neutral.main}>LinkedIn</Typography>
                                <Typography color={palette.neutral.medium}>Network Platform</Typography>
                            </Box>
                        </Box>

                        <IconButton><EditOutlined /></IconButton>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    )
}




export default UserWidget;