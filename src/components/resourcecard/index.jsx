import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const ResourceCard = ({ Location, Name, Description, Phone, Email, Website }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {Name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: 1 }}>
          {Description}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'text.primary', marginBottom: 1 }}>
          {Phone}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
          {Email}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
          Location: {Location}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 2, justifyContent: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {Website}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ResourceCard;
