import React from 'react'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

type AlertsProps = {
    invalidCredentials: boolean;
}

export const Alerts: React.FC<AlertsProps> = ({ invalidCredentials }) => {
    const { state } = useLocation<{ isNotAuthenticated: boolean }>();
    console.log(state)
    return (
        <div>
            {invalidCredentials && <Alert severity="warning">
                Invalid credentials
            </Alert>}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                autoHideDuration={4000}
                open={state?.isNotAuthenticated}
            >
                <Alert severity="warning">
                    Please login to see  the page
                </Alert>
            </Snackbar>
        </div>
    )
}
