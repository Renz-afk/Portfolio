import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

// skills now include percentage but layout remains the same (chips)
const skills = {
  'Frontend': [
    { name: 'React', pct: 40 },
    { name: 'Next.js', pct: 30 },
    { name: 'JavaScript', pct: 30 },
    { name: 'TypeScript', pct: 30 },
    { name: 'HTML5', pct: 80 },
    { name: 'CSS', pct: 50 },
    { name: 'Material-UI', pct: 40 },
    { name: 'Tailwind CSS', pct: 50 }
  ],
  'Mobile Development': [
    { name: 'Flutter', pct: 20 }
  ],
  'Backend & Database': [
    { name: 'Node.js', pct: 40 },
    { name: 'Express.js', pct: 40 },
    { name: 'MongoDB', pct: 40 },
    { name: 'Supabase', pct: 60 },
    { name: 'SQL', pct: 60 }
  ],
  'Tools & Others': [
    { name: 'Git', pct: 45 },
    { name: 'GitHub', pct: 50 },
    { name: 'VS Code', pct: 60 },
    { name: 'Postman', pct: 30 },
    { name: 'Figma', pct: 40 },
    { name: 'Responsive Design', pct: 50 },
    { name: 'RESTful APIs', pct: 40 }
  ]
};

const About = () => {
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
          sx={{ mb: 6, mt: 4 }}
        >
          About Me
        </Typography>
        </motion.div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <StyledPaper elevation={3}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Who I Am
              </Typography>
              <Typography paragraph>
                I&apos;m a passionate Backend and Frontend Developer with over 2 years of experience
                in creating responsive and user-friendly applications. My journey in software development
                started with web development, allowing me to build comprehensive solutions of real-world-problem  across multiple platforms.
              </Typography>
              <Typography paragraph>
                I specialize in React+Vite, Supabase development, focusing on creating
                seamless user experiences and maintaining mid code quality. My experience includes
                working on Web Application, various web-based solutions.
              </Typography>
            </StyledPaper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <StyledPaper elevation={3}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                What I Do
              </Typography>
              <Typography paragraph>
                • Develop responsive web applications using React and Next.js
              </Typography>
              <Typography paragraph>
                • Implement modern UI/UX designs with Material-UI and custom CSS
              </Typography>
              <Typography paragraph>
                • Integrate RESTful APIs and manage application state
              </Typography>
              <Typography paragraph>
                • Optimize application performance and maintain code quality
              </Typography>
            </StyledPaper>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <StyledPaper elevation={3}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Skills & Technologies
              </Typography>
              
              {Object.entries(skills).map(([category, skillList]) => (
                <Box key={category} sx={{ mb: 3 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skillList.map((skill) => (
                      <Chip
                        key={skill.name}
                        label={`${skill.name} ${skill.pct}%`}
                        sx={{
                          fontWeight: 500,
                          fontSize: '0.9rem',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              ))}
            </StyledPaper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;