import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import ProjectCard from '../Components/ProjectCard';
import { projectData } from '../data/projectsData';

const HeroSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  position: 'relative',
  top: -70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
   
    zIndex: 1,
  },
}));

const VideoBackground = styled('video')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(1),
  borderRadius: theme.spacing(2),
  top: 185,
  zIndex: 2,
}));

const HomePage = () => {
  const featuredProjects = projectData.slice(0, 3);

  return (
    <Box>
      <HeroSection>
        <VideoBackground
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <HeroContent>
  
        </HeroContent>
      </HeroSection>

      <Container sx={{ py: 8 }}>
        <Typography variant="h3" textAlign="center" sx={{ mb: 6 }}>
          Some of my latest work
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {featuredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={RouterLink}
            to="/projects"
            variant="contained"
            size="large"
            sx={{
              fontWeight: 600,
              padding: '12px 32px',
              width: '50%',
            }}
          >
            See More Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;