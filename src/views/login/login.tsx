import React, { useState,useEffect } from 'react'
import { Box, Button, InputAdornment, Typography } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../redux-slice/user-slice'
import { useStyles } from './login.style'
import { ValidationSchema } from './validation/login-validation-schema'
import { Alerts } from './components/alert'

export const LoginPage: React.FC = () => {
    const classes = useStyles()
    const history = useHistory()
    const [invalidCredentials, setinValidCredentials] = useState(false)
    const dispatch = useDispatch()

    interface ValueTypes {
        userName: string
        password: string
    }
    const initialValues = {
        userName: '',
        password: ''
    }
    const handleSubmit = (formData: ValueTypes, setSubmitting: (isSubmitting: boolean) => void
    ) => {

        const { userName, password } = formData
        if (process.env.REACT_APP_USERNAME === userName && process.env.REACT_APP_PASSWORD === password) {
            dispatch(login(formData))
            localStorage.setItem('user', JSON.stringify(formData))
            history.push('/shelf')

        }
        else {
            setSubmitting(false)
            setinValidCredentials(true)
        }

    }
useEffect(()=>{
    const userInMemory = JSON.parse(localStorage.getItem('user') as any)
    if(userInMemory){
        history.push('/shelf')
    }
},[])
    return (
        <div className={classes.root}>
            <Box className={classes.container}>
                <Typography variant="h4" align="center">Login</Typography>
                <Formik initialValues={initialValues} validationSchema={ValidationSchema} onSubmit={(formData, { setSubmitting }) => handleSubmit(formData, setSubmitting)}>
                    {({ submitForm }) => {
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
                                <Field component={TextField} type="password" margin="normal" label="Password" fullWidth name="password" variant="outlined"
                                    InputProps={{
                                        startAdornment:
                                            <InputAdornment position="start">
                                                <LockIcon />
                                            </InputAdornment>
                                    }}
                                />
                                <Button onClick={() => {
                                    submitForm()
                                }} variant="contained" className={classes.loginBtn}>
                                    LOGIN
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>
                <Alerts {...{ invalidCredentials }} />
            </Box>
        </div>
    )
}
