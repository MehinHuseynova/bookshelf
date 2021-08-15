import React, { useState } from 'react'
import { Box, Button, InputAdornment, Snackbar, Typography } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock'
import { Alert } from '@material-ui/lab'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { login } from '../../redux-slice/user-slice'
import { useStyles } from './login.style'
import { ValidationSchema } from './validation/login-validation-schema'

export const LoginPage: React.FC = () => {
    const classes = useStyles()
    const history = useHistory()
    const [invalidCredentials, setinValidCredentials] = useState(false)
    const { state } = useLocation<{ isNotAuthentificated: boolean }>();
    const dispatch = useDispatch()

    interface ValueTypes {
        userName: string
        password: string
    }
    const initialValues = {
        userName: '',
        password: ''
    }
    const handleSubmit = (formData: ValueTypes) => {
        dispatch(login(formData))
        const { userName, password } = formData
        if (process.env.REACT_APP_USERNAME === userName && process.env.REACT_APP_PASSWORD === password) {
            localStorage.setItem('user', JSON.stringify(formData))
            history.push('/shelf')
        }
        else {
            setinValidCredentials(true)
        }
    }

    return (
        <div className={classes.root}>
            <Box className={classes.container}>
                <Typography variant="h4" align="center">Login</Typography>
                <Formik initialValues={initialValues} validationSchema={ValidationSchema} onSubmit={(formData) => handleSubmit(formData)}>
                    {({ submitForm, resetForm }) => {
                        return (
                            <Form className={classes.form}>
                                <Field component={TextField} margin="normal" label="Username" fullWidth name="userName" variant="outlined"
                                    InputProps={{
                                        startAdornment:
                                            <InputAdornment position="start">
                                                <AccountCircleIcon />
                                            </InputAdornment>
                                    }}
                                />
                                <Field component={TextField} margin="normal" label="Password" fullWidth name="password" variant="outlined"
                                    InputProps={{
                                        startAdornment:
                                            <InputAdornment position="start">
                                                <LockIcon />
                                            </InputAdornment>
                                    }}
                                />
                                <Button onClick={async () => {
                                    await submitForm()
                                    resetForm()
                                }} variant="contained" className={classes.loginBtn}>
                                    LOGIN
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>
                {invalidCredentials && <Alert severity="warning">
                    Invalid credentials
                </Alert>}
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    autoHideDuration={4000}
                    open={state?.isNotAuthentificated}
                >
                    <Alert severity="warning">
                        Please login to see  the page
                    </Alert>
                </Snackbar>
            </Box>
        </div>
    )
}
