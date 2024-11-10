import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const JobCard = ({ Location, DatePosted, Title, CompanyName, Desc, Link }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        border: '1px solid #e0e0e0',
        '&:hover': {
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.35)',
        },
      }}
    >
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
      </CardContent>
      <CardActions sx={{ padding: 2, justifyContent: 'center' }}>
        <Button
          size="large"
          href={Link}
          target="_blank"
          rel="noopener"
          variant="contained"
          sx={{
            backgroundColor: '#3ABEF9',
            color: '#fff',
            fontWeight: 'bold',
            padding: '8px 16px',
            '&:hover': {
              backgroundColor: '#2858c2',
            },
          }}
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
