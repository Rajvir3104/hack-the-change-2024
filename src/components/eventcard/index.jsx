import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const EventCard = ({ Location, Name, Description, Phone, Email, Website }) => {
  return (
    <Card
      sx={{
        maxWidth: 500, // Make the card wider, like the JobCard
        margin: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Shadow for depth
        border: '1px solid #e0e0e0', // Light border for definition
        borderRadius: 4, // Rounded corners
        transition: 'transform 0.3s ease-in-out', // Smooth transform on hover
        '&:hover': {
          transform: 'scale(1.05)', // Slight zoom effect on hover
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', // Deeper shadow on hover
        },
      }}
    >
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
        <Button
          size="small"
          href={Website}
          target="_blank"
          rel="noopener"
          sx={{
            backgroundColor: '#3ABEF9', // Button color
            color: 'white', // Button text color
            '&:hover': {
              backgroundColor: '#0069d9', // Darker button color on hover
            },
            padding: '8px 16px', // Padding for button
            fontWeight: 'bold', // Bold button text
            borderRadius: 4, // Rounded button corners
          }}
        >
          Take A Look!
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
