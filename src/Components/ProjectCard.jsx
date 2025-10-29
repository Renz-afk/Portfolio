import React, { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  Typography, 
  CardActionArea,
  Modal,
  Box,
  IconButton,
  Button,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Close } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import { motion } from 'framer-motion';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
  // backdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '900px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  padding: theme.spacing(4),
  outline: 'none',
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%)',
  color: 'white',
  fontWeight: 600,
}));

const GalleryScroll = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  overflowX: 'auto',
  paddingTop: theme.spacing(1),
  pb: theme.spacing(1),
  '& img': {
    borderRadius: 8,
    flex: '0 0 auto',
    width: 200,
    height: 120,
    objectFit: 'cover',
    cursor: 'pointer',
  }
}));

const ImageViewerContent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  position: 'relative',
}));

const FullImage = styled('img')(({ theme }) => ({
  maxWidth: '95%',
  maxHeight: '95%',
  objectFit: 'contain',
  borderRadius: 8,
  boxShadow: '0 8px 32px rgba(0,0,0,0.7)',
}));

const ProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [imageViewerSrc, setImageViewerSrc] = useState('');

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const openLink = (url) => {
    if (url && url.length) window.open(url, '_blank');
  };

  const openImageViewer = (src) => {
    setImageViewerSrc(src);
    setImageViewerOpen(true);
  };
  const closeImageViewer = () => {
    setImageViewerOpen(false);
    setImageViewerSrc('');
  };

  return (
    <>
      <StyledCard component={motion.div} whileHover={{ scale: 1.03 }}>
        <CardActionArea onClick={handleOpen}>
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              height="300"
              image={project.imgPath || (project.images && project.images[0]) || ''}
              alt={project.title}
              sx={{ 
                objectFit: 'cover',
                filter: 'brightness(0.8)',
              }}
            />
            <ProjectTitle variant="h6">
              {project.title}
            </ProjectTitle>
          </Box>
        </CardActionArea>
      </StyledCard>

      {/* Project modal with gallery */}
      <Modal
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        componentsProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(3px)',
            }
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
        >
          <ModalContent>
            <IconButton
              sx={{
                ":hover": { color: "red", rotate: "180deg", transition: "0.1s" },
                position: "absolute",
                top: 16,
                right: 12,
                width: "auto",
              }}
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>

            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{fontSize:{xs:22, sm:28}}}>
                {project.title}
              </Typography>
            </Box>

            {project.video ? (
              <Box sx={{ width: '100%', borderRadius: 2, overflow: 'hidden', mb: 2 }}>
                <video
                  src={project.video}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: 360,
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: 12,
                  }}
                />
              </Box>
            ) : (
              <CardMedia
                component="img"
                image={project.imgPath || (project.images && project.images[0]) || ''}
                alt={project.title}
                sx={{ 
                  borderRadius: '12px',
                  mb: 2,
                  objectFit: 'cover',
                  height: { sm: 320, xs: 200 }
                }}
              />
            )}

            {project.images && project.images.length > 0 && (
              <GalleryScroll aria-label="gallery-scroll">
                {project.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} ${i+1}`}
                    onClick={() => openImageViewer(src)} /* open fullscreen viewer */
                  />
                ))}
              </GalleryScroll>
            )}

            <Typography variant="body1" sx={{ mb: 3, fontSize:{sm:"initial", xs:14 }}}>
              {project.description}
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="center">
              {project.gitHubLink ? (
                <Button
                  variant="contained"
                  onClick={() => openLink(project.gitHubLink)}
                  sx={{
                    width:{xs:140, sm:180},
                    px:2,
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: 500,
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    bgcolor: '#24292e',
                    '&:hover': { bgcolor: '#1a1f24' },
                  }}
                >
                  <GitHubIcon sx={{mr:1, fontSize:{xs:16, sm:20}}} />
                  GitHub
                </Button>
              ) : null}

              {project.demoLink ? (
                <Button
                  variant="contained"
                  onClick={() => openLink(project.demoLink)}
                  sx={{
                    width:{xs:140, sm:180},
                    px:2,
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: 500,
                    fontSize:{ xs: '0.85rem', md: '1rem' },
                    bgcolor: '#0070f3',
                    '&:hover': { bgcolor: '#0051cc' },
                  }}
                >
                  <PreviewIcon sx={{mr:1, fontSize:{xs:16, sm:20}}} />
                  View
                </Button>
              ) : null}
            </Stack>
          </ModalContent>
        </motion.div>
      </Modal>

      {/* Fullscreen image viewer modal */}
      <Modal
        open={imageViewerOpen}
        onClose={closeImageViewer}
        closeAfterTransition
        componentsProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0,0,0,0.95)',
            }
          }
        }}
      >
        <ImageViewerContent onClick={closeImageViewer}>
          <IconButton
            onClick={(e) => { e.stopPropagation(); closeImageViewer(); }}
            sx={{ position: 'absolute', top: 16, right: 16, color: 'white', zIndex: 10 }}
            aria-label="close-image"
          >
            <Close />
          </IconButton>
          <FullImage
            src={imageViewerSrc}
            alt={project.title}
            onClick={(e) => e.stopPropagation()} /* prevent closing when clicking image */
          />
        </ImageViewerContent>
      </Modal>
    </>
  );
};

export default ProjectCard;