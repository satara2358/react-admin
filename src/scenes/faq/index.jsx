import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import AccordionSummary  from '@mui/material/AccordionSummary'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)


  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Preguntas y respuestas frecuentes" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            ¿Qué es el sistema de gestión de turnos?
          </Typography>
 
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus molestiae officiis officia beatae accusantium harum, ipsam dolore obcaecati debitis, sunt id sequi, nihil quae? Excepturi explicabo delectus maiores aut.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            ¿Qué es el sistema de gestión de turnos?
          </Typography>
 
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus molestiae officiis officia beatae accusantium harum, ipsam dolore obcaecati debitis, sunt id sequi, nihil quae? Excepturi explicabo delectus maiores aut.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            ¿Qué es el sistema de gestión de turnos?
          </Typography>
 
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus molestiae officiis officia beatae accusantium harum, ipsam dolore obcaecati debitis, sunt id sequi, nihil quae? Excepturi explicabo delectus maiores aut.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            ¿Qué es el sistema de gestión de turnos?
          </Typography>
 
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus molestiae officiis officia beatae accusantium harum, ipsam dolore obcaecati debitis, sunt id sequi, nihil quae? Excepturi explicabo delectus maiores aut.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box>

      </Box>
    </Box>
  )
}

export default FAQ