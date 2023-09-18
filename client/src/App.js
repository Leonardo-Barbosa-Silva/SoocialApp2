import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material';
import { themeSettings } from './theme';
import { useEffect, useMemo } from 'react';
import AuthPage from "pages/Auth";
import HomePage from "pages/Home";
import ProfilePage from "pages/Profile";
import { getMe } from 'features/user/userService';



function App() {
  const { mode, isLogged } = useSelector( state => state.users )
  const theme = useMemo( () => createTheme(themeSettings(mode)), [mode] )
  const dispatch = useDispatch()

  useEffect( () => {
    const persistedState = localStorage.getItem('persist:root') ? JSON.parse(localStorage.getItem('persist:root')) : null
    let token = null

    if (persistedState && persistedState.users) {
      token = JSON.parse(persistedState.users).token;
    }

    if (token) {
      dispatch(getMe(token));
    }

  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/home" element={isLogged ? <HomePage /> : <Navigate to="/" />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </Router>
    </ThemeProvider>
  )
}

export default App;
