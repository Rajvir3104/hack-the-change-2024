import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const JobCard = ({ Location, DatePosted, Title, CompanyName, Desc, Link }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent sx={{ flexGrow: 1, padding: 2 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: 1 }}>
          {Title}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'text.primary', marginBottom: 1 }}>
          {CompanyName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
          {Desc}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
          Location: {Location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date Posted: {DatePosted}
        </Typography>
        <CardActions sx={{ padding: 2, justifyContent: 'center' }}>
          <Button size="small" href={Link} target="_blank" rel="noopener">
            Apply
          </Button>
        </CardActions>
      </CardContent>
    </Card >
  );
};

export default JobCard;
