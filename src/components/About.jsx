import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux'

var card = function (user) {
    return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Имя пользователя:
                </Typography>
                <Typography variant="h5" component="div">
                    {user.userName}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Email:
                </Typography>
                <Typography variant="h5" component="div">
                    {user.email}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Имя:
                </Typography>
                <Typography variant="h5" component="div">
                    {user.name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Фамилия:
                </Typography>
                <Typography variant="h5" component="div">
                    {user.surname}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Исправить данные</Button>
            </CardActions>
        </React.Fragment>
    )
}

export default function About() {
    const dispatch = useDispatch();
    let user = useSelector((state) => {
        return state.user
    });

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card(user)}</Card>
        </Box>
    );
}