import { Box, Button, CircularProgress, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { BookListItem } from '../../components/book-list-item/book-list-item'
import { login, logout, SelectUser } from '../../redux-slice/user-slice'
import { getBooks } from './api/index'
import { useStyles } from './book-list.style'
import { BookTypes } from './interfaces'

export const BookListPage: React.FC = () => {
    const classes = useStyles()
    const user = useSelector(SelectUser)
    const dispatch = useDispatch()
    const history = useHistory()
    const [books, setBooks] = useState<BookTypes[]>([])
    const [loading, setLoading] = useState(true)

    const Logout = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(logout())
        localStorage.clear()
        history.push('/login')
    }
    useEffect(() => {
        const userInMemory = JSON.parse(localStorage.getItem('user') as any)
        if (userInMemory) {
            dispatch(login(userInMemory))
        }
        else {
            history.push({
                pathname: '/login',
                state: { isNotAuthentificated: true }
            })
        }
        getBooks(setBooks, setLoading)
    }, [])
 
    if (loading) {
        return (
            <div className={classes.progressBar}>
                <CircularProgress />
            </div>

        )
    }
    return (
        <div className={classes.root}>
            <Box display="flex" alignItems="center" justifyContent="space-between" my={2}>
                <Typography variant='h5' align="center">Welcome, {user.userName}</Typography>
                <Button onClick={(e) => Logout(e)} variant='outlined' color="primary">Logout</Button>
            </Box>
            <Grid container spacing={1}>
                {books.map((book) => {
                    return (
                        <Grid item xs={12} md={6} lg={4}>
                            <BookListItem {...{ book }} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
