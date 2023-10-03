import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import studentIcon from '../../assets/JuryDashboard/StudentIcon.png'

const cardStyle = {
    maxWidth: 320,
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s',
};

const cardHoverStyle = {
    transform: 'scale(1.1)',
    cursor: 'pointer'
};

const avatarStyle = {
    width: '100px',
    height: '100px',
};

const contentStyle = {
    textAlign: 'center',
};

const MyCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = (id) => {
        console.log(id)
    }

    return (
        <Card
            style={{
                ...cardStyle,
                ...(isHovered && cardHoverStyle), // Apply hover styles when isHovered is true
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(props.id)}
        >
            <CardHeader
                avatar={
                    <Avatar alt="Remy Sharp" src={studentIcon} style={avatarStyle} />
                }
                title="Startup"
                subheader="Startup"
            />
            <CardContent style={contentStyle}>
                <Typography variant="body2" color="text.secondary">
                    More information about your startup goes here. Provide a brief description or details.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MyCard;
