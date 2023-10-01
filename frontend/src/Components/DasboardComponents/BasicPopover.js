import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { MenuItem, MenuList } from '@mui/material';
import Auth from '../../Auth';
import { useNavigate } from 'react-router-dom';

export default function BasicPopover(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        Auth.deAuthenticate()
        navigate("/login")
        return;
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton onClick={handleClick}>
                <Stack direction="row" spacing={2}>
                    <Avatar alt="" src="" />
                </Stack>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <MenuList
                    disablePadding
                    dense
                    sx={{
                        p: '8px',
                        '& > *': {
                            borderRadius: 1
                        }
                    }}
                >

                    <MenuItem>
                        <Typography sx={{ p: 2 }}>{props.name}</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleSignOut}>
                        <Typography sx={{ p: 2 }}>Sign out</Typography>
                    </MenuItem>
                </MenuList>
            </Popover>
        </div>
    );
}