
import { Box, Container, Typography, Grid } from '@mui/material';
import ProjectCard from '../Components/ProjectCard';
import { projectData } from '../data/projectsData';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <Box sx={{ pt: 10, pb: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            fontWeight="bold"
            sx={{ 
              mb: 6, 
              mt: 4,
              background: 'linear-gradient(45deg, #00000 30%, #00000 90%)',
              WebkitBackgroundClip: 'text',
            }}
          >
            My Projects
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;