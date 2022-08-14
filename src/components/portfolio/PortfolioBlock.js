import React, { useState, useEffect } from 'react'
import IconLink from './IconLink'
import { Box, Button } from '@mui/material'
import { RoundedCorner } from '@mui/icons-material'
import Chip from '@mui/material/Chip'
import './ProtfolioBlockModule.scss'
import Stack from '@mui/material/Stack'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function PortfolioBlock(props) {
  const {
    image,
    live,
    source,
    title,
    imageList,
    imagesUrl,
    id,
    summery,
    usedModules,
    technologies,
  } = props
  const [loadImages, setLoadImages] = useState('')
  const chipsColors = [
    'default',
    'primary',
    'secondary',
    'error',
    'info',
    'success',
    'warning',
  ]
  function SimpleAccordion() {
    return (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Technologies />
          </AccordionSummary>
          <AccordionDetails>
            <h3>{summery}</h3>
            <UsedModules />
            <SourceCodeAndLiveDemo />
          </AccordionDetails>
        </Accordion>
      </div>
    )
  }
  const Technologies = () => {
    return (
      <Stack direction="row" spacing={1} s>
        {technologies.map((item, index) => {
          return (
            <Chip
              key={index}
              label={item}
              color={chipsColors.at(
                (Math.random(chipsColors.length) * 10).toFixed(),
              )}
              //variant="outlined"
              onClick={() => {}}
            />
          )
        })}
      </Stack>
    )
  }
  const SourceCodeAndLiveDemo = () => {
    return (
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'align'}
        fontSize={'1.5rem'}
        py={'2rem'}
      >
        <Box p={1}>
          <IconLink link={live} title={''} icon={'fa fa-safari'} />
        </Box>
        <Box p={1} /**border={'2px solid black'} borderRadius={'25px'} */>
          <IconLink color="red" link={source} title={''} icon={'fa fa-code'} />
        </Box>
      </Box>
    )
  }
  const ImageButtons = () => {
    return (
      <div className="flexcontainer">
        {imagesUrl.map((item, index) => {
          return (
            /*
          <button
            onClick={() => {
              setLoadImages(item)
              console.log(item)
            }}
            id="imageNumberBtn"
            
          >
            {index + 1}
          </button>*/
            <Chip
              key={index}
              style={{
                border: 'none',
                margin: '1px',
              }}
              label={index + 1}
              /*color={chipsColors.at(
              (Math.random(chipsColors.length) * 10).toFixed(),
            )}*/
              color="primary"
              //variant="outlined"
              onClick={() => {
                setLoadImages(item)
                console.log(item)
              }}
            />
          )
        })}
      </div>
    )
  }

  const UsedModules = () => {
    return (
      <Stack direction="row" spacing={1} style={{ paddingTop: '1%' }}>
        {usedModules.map((item, index) => {
          return (
            <Chip
              key={index}
              label={item}
              color={chipsColors.at(
                (Math.random(chipsColors.length) * 10).toFixed(),
              )}
              //variant="outlined"
              onClick={() => {}}
            />
          )
        })}
      </Stack>
    )
  }
  useEffect(() => {}, [loadImages])
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      style={{ padding: '10px' }}
    >
      <h1 style={{ fontSize: '2rem', padddingTop: '2%', paddingBottom: '1%' }}>
        {title}
      </h1>
      <SimpleAccordion summery="sssss" live="kkkkk" source="dddd" />
      <Box
        component={'img'}
        /*src={image}*/ src={loadImages ? loadImages : imagesUrl[0]}
        alt={'mockup'}
      />
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'left'}
        alignItems={'left'}
        style={{ padding: '1%' }}
      >
        <ImageButtons />
      </Box>
    </Box>
  )
}

export default PortfolioBlock
