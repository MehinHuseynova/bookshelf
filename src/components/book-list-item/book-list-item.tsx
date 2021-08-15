import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BookTypes } from '../../views/book-list/interfaces';
import { useStyles } from './book-list-item.style'

type BookProps = {
    book: BookTypes;
}

export const BookListItem: React.FC<BookProps> = ({ book }) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJvb2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}
                        title={book.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {book.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
