import * as yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import {
    useMediaQuery,
    useTheme,
    Box,
    TextField,
    Button,
    Typography
} from '@mui/material';
import { useDispatch } from 'react-redux';
import Dropzone from 'react-dropzone';
import { EditOffOutlined } from '@mui/icons-material';
import { loginUser, registerUser } from 'features/user/userService';



const registerSchema = yup.object().shape({
    firstName: yup.string().required("required").default(''),
    lastName: yup.string().required("required").default(''),
    email: yup.string().email("invalid email").required("required").default(''),
    password: yup.string().required("required").default(''),
    location: yup.string().required("required").default(''),
    occupation: yup.string().required("required").default(''),
    picture: yup.string().required("required").default('')
})

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required").default(''),
    password: yup.string().required("required").default('')
})

const initialValuesRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: '',
    occupation: '',
    picture: ''
}

const initialValuesLogin = {
    email: '',
    password: ''
}

function Form() {
    const [ pageType, setPageType ] = useState('login')

    const { palette } = useTheme()
    const dispatch = useDispatch()

    const login = (values, formikProps) => {
        dispatch(loginUser(values))
        formikProps.resetForm()
    }

    const register = (values, formikProps) => {
        const formData = new FormData()

        for (let key in values) {
            formData.append(key, values[key])
        }
        formData.append('picturePath', values.picture.name)

        dispatch(registerUser(formData))
        formikProps.resetForm()
    }

    const handleFormSubmit = (values, formikProps) => {
        if (pageType === "login") {
            login(values, formikProps)
        } else if (pageType === "register") {
            register(values, formikProps)
        }
    }


    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={pageType === "login" ? initialValuesLogin : initialValuesRegister}
            validationSchema={pageType === "login" ? loginSchema : registerSchema }
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    >
                        {pageType === "register" && (
                            <>
                                <TextField 
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                                    helperText={touched.firstName && errors.firstName}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField 
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                    helperText={touched.lastName && errors.lastName}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField 
                                    label="Email"
                                    name="email"
                                    type="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    error={Boolean(touched.email) && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    label="Password"
                                    name="password"
                                    type="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    error={Boolean(touched.password) && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <Dropzone
                                    acceptedFiles=".jpg,.png,.jpeg"
                                    multiple={false}
                                    onDrop={(acceptedFiles) => setFieldValue("picture", acceptedFiles[0])}
                                >
                                    {({ getRootProps, getInputProps}) => (
                                        <Box
                                            {...getRootProps()}
                                            height="100px"
                                            gridColumn="span 4"
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
                                                {!values.picture ? (
                                                    <Typography>Add a picture here!</Typography>
                                                ) : (
                                                    <Box
                                                        width="50%"
                                                        display="flex"
                                                        justifyContent="space-evenly"
                                                    >
                                                        <Typography>{values.picture.name}</Typography>
                                                        <EditOffOutlined />
                                                    </Box>
                                                )}
                                            </Box>
                                        </Box>
                                    )}
                                </Dropzone>
                                <TextField 
                                    label="Location"
                                    name="location"
                                    type="text"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.location}
                                    error={Boolean(touched.location) && Boolean(errors.location)}
                                    helperText={touched.location && errors.location}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField 
                                    label="Occupation"
                                    name="occupation"
                                    type="text"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.occupation}
                                    error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                                    helperText={touched.occupation && errors.occupation}
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </>
                        )}
                        
                        { pageType === "login" && (
                            <>
                                <TextField 
                                    label="Email"
                                    name="email"
                                    type="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    error={Boolean(touched.email) && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField 
                                    label="Password"
                                    name="password"
                                    type="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    error={Boolean(touched.password) && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </>
                        )}

                        <Box gridColumn="span 4">
                            <Button
                                fullWidth
                                type="submit"
                                sx={{
                                    m: "10px 0 50px 0",
                                    p: "10px",
                                    backgroundColor: palette.primary.main,
                                    color: palette.background.alt,
                                    "&:hover": { color: palette.primary.main }
                                }}
                            >
                                {pageType === "login" ? 'LOGIN' : 'REGISTER'}
                            </Button>

                            <Typography
                                onClick={() => {
                                    setPageType( prevPageType => {
                                        resetForm()
                                        return prevPageType === "login" ? "register" : "login"
                                    })
                                }}
                                sx={{
                                    textDecoration: "underline",
                                    color: palette.primary.main,
                                    "&:hover": {
                                        cursor: "pointer",
                                        color: palette.primary.light
                                    }
                                }}
                            >
                                {pageType === "login" ? (
                                    "Don't have any account? Sign Up Here!" 
                                ) : (
                                    "Already have an account? Login here!"
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </form>
            )}
        </Formik>
    )
}


export default Form;