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
    Typography
} from "@mui/material";
import { reset, setMode } from "features/user/userSlice";


function NavBar() {
    const user = useSelector( state => state.users.user )
    const dispatch = useDispatch()
    const { palette } = useTheme()

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
                    <IconButton>
                        <Message />
                    </IconButton>
                    <IconButton>
                        <Notifications />
                    </IconButton>
                    <FormControl
                        variant="standard"
                        sx={{
                            width: "160px",
                            borderRadius: "5px"
                        }}
                    >
                        <Select
                            value={user ? user.firstName + ' ' + user.lastName : ''}
                            onChange={ (e) => {
                                if (e.target.value === "logout") {
                                    dispatch(reset())
                                }
                            }}
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
                            <MenuItem value={user.firstName + ' ' + user.lastName}>
                                <Typography>{user.firstName + ' ' + user.lastName}</Typography>
                            </MenuItem>
                            <MenuItem value="logout">
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