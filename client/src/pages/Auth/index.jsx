import { useTheme, Box, Typography, useMediaQuery } from '@mui/material'
import Form from 'components/Form'

function AuthPage() {

    const { palette } = useTheme()
    const isNonMobileScreen = useMediaQuery("(min-width='600px')")

    return (
        <Box>
            <Box
                width="100%"
                height="90px"
                backgroundColor={palette.background.alt}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Typography
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    fontWeight="bold"
                    color={palette.primary.main}
                    sx={{
                        cursor: "default"
                    }}
                >
                    SoocialApp
                </Typography>
            </Box>

            <Box
                height="100%"
                width="100%"
                display="flex"
                justifyContent="center"
                mt="30px"
            >
                <Box
                    height="100%"
                    width={isNonMobileScreen ? "65%" : "75%"}
                    p="30px"
                    borderRadius="10px"
                    backgroundColor={palette.background.alt}
                >
                    <Typography mb="30px" color={palette.primary.main}>
                        Welcome to SoocialApp, the best app to Soocializing!
                    </Typography>

                    <Form />
                </Box>
            </Box>
        </Box>
    )
}


export default AuthPage