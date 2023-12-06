import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';

function Test() {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <IconButton onClick={() => alert("Icon Selected")}>
                        {" "}
                        <AccountCircleIcon />
                    </IconButton>
                    <IconButton>
                        {" "}
                        <DownloadForOfflineIcon color='inherit' />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Test;