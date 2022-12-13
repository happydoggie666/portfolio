
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

export default function ProjectCard(item) {
    
    return (
        // Use react-bootstrap Card, doc: https://react-bootstrap.github.io/components/cards/
    
        // Todo: change card style
        <a href={item.link} key={item.image} style={{textDecoration: 'none'}}>
          <Card style={{ width: '30rem', height:"580px"}} className='bg-image hover-zoom'>
            
            <Card.Img style={{ width: '25rem', height:"300px"}} variant="top" src={item.image} />
            
            <Card.Body>
                <Card.Title style={{color:'#FF4500'}}>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2">{item.subtitle}</Card.Subtitle>
                <Card.Text className="mb-2 text-muted" >{item.description}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                
            </Card.Body>  
                    
         </Card>   
            {/* <Card sx={{ maxWidth: 345 }} className='bg-image hover-zoom'>
                <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {item.description}
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card> */}

        </a>
        );   
}

                    