import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const JobCard = ({ Location, DatePosted, Title, Desc, Link }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
          {Desc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {Location} <br />
          Date Posted: {DatePosted}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={Link} target="_blank" rel="noopener">
          Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
