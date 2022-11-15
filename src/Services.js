import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


const tiers = [
    {
        title: 'About web page',
        description: [
          'INSTITUTE OF TECHNOLOGY,',
          'University of Moratuwa,',
          'Diyagama,',
          'Homagama,',
          'Sri Lanka.'
        ],
        
      },

      {
        title: 'Register for free',
        description: [
          'INSTITUTE OF TECHNOLOGY,',
          'University of Moratuwa,',
          'Diyagama,',
          'Homagama,',
          'Sri Lanka.'
        ],
        
      },

      {
        title: 'Identify your identity',
        description: [
          'INSTITUTE OF TECHNOLOGY,',
          'University of Moratuwa,',
          'Diyagama,',
          'Homagama,',
          'Sri Lanka.'
        ],
        
      },
  {
    title: 'Covid-19',
    description: [
      'INSTITUTE OF TECHNOLOGY,',
      'University of Moratuwa,',
      'Diyagama,',
      'Homagama,',
      'Sri Lanka.'
    ],
    
  },
  {
    title: 'Symptoms',
    description: [
      'TEL: 011-212-4000',
      'FAX: 011-211-7040',
      'EMAIL: info@itum.mrt.ac.lk',
      
    ],
    
  },
  {
    title: 'Treatments',
    description: [
      'INSTITUTE OF TECHNOLOGY,',
      'University of Moratuwa,',
      'Diyagama,',
      'Homagama,',
      'Sri Lanka.'
    ],
    
  },
  
];

function ServicesContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          SERVICES
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        We are here to clear your doubts about our webpage and ease the use of our webpage.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={2} alignItems="flex-start" >
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={10}
              md={4}
            
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[300]
                        : theme.palette.grey[300],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                      
                    }}
                  >
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Services() {
  return <ServicesContent />;
}