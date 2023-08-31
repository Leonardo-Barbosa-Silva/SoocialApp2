import { useDispatch, useSelector } from "react-redux";
import {
    DarkMode,
    LightMode,
    Message,
    Notifications,
    Search
} from "@mui/icons-material";
import {
    useTheme,
    Box,
    FormControl,
    IconButton,
    InputBase,
    MenuItem,
    Select,
    Typography,
    useMediaQuery
} from "@mui/material";
import { setMode } from "features/user/userSlice";


function NavBar() {
    const user = useSelector( state => state.users.user )
    const dispatch = useDispatch()
    const { palette } = useTheme()
    const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")
    const fullName = `Leonardo Barbosa Silva`

    return (
        <Box
            height="90px"
            width="100%"
            display="flex"
            justifyContent="center"
            backgroundColor={palette.background.alt}
        >
            <Box 
                width="90%" 
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Box display="flex" alignItems="center" gap="30px">
                    <Typography
                        fontSize="clamp(1rem, 2rem, 2.25rem)"
                        fontWeight="bold"
                        color={palette.primary.main}
                        onClick={() => console.log('clicou')}
                        sx={{
                            "&:hover": {
                                cursor: "pointer",
                                opacity: "20%"
                            }
                        }}
                    >
                        SoocialApp
                    </Typography>
                    <Box 
                        display="flex"
                        alignItems="center"
                        borderRadius="9px"
                        padding="5px 20px"
                        backgroundColor={palette.neutral.light}
                    >
                        <InputBase placeholder="Search..." sx={{ width: "300px" }}/>
                        <Search />
                    </Box>
                </Box>

                <Box display="flex" alignItems="center" gap="30px" >
                    <IconButton onClick={() => dispatch(setMode())}>
                        {palette.mode === "light" ? (
                            <DarkMode />
                        ) : (
                            <LightMode />
                        )}
                    </IconButton>
                    <IconButton onClick={() => {console.log('clicou mensagem')}}>
                        <Message />
                    </IconButton>
                    <IconButton onClick={() => {console.log('clicou notificações')}}>
                        <Notifications />
                    </IconButton>
                    <FormControl
                        variant="standard"
                        value="Leonardo Barbosa Silva"
                        sx={{
                            width: "160px",
                            borderRadius: "5px"
                        }}
                    >
                        <Select
                            value="Leonardo Barbosa Silva"
                            sx={{
                                backgroundColor: palette.neutral.light,
                                width: "100%",
                                p: "5px 25px 5px 15px",
                                borderRadius: "5px",
                                "& .MuiSelect-select:focus": {
                                    backgroundColor: palette.neutral.light
                                }
                            }}
                            input={<InputBase />}
                        >
                            <MenuItem value="Leonardo Barbosa Silva">
                                <Typography>Leonardo Barbosa Silva</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => console.log('clicou logout')}>
                                <Typography>Logout</Typography>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}


export default NavBar;