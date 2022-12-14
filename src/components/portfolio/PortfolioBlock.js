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
  const [loaded, setLoaded] = useState(false)
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
      //<Box sx={{ width: 1 / 2 }}>
      <Accordion sx={{ width: 1 }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              style={{
                color: 'black',
                border: '1px solid black',
                borderRadius: '100%',
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Technologies />
        </AccordionSummary>
        <AccordionDetails>
          <h2 style={{ paddingBottom: '1%', fontSize: '15px' }}>{summery}</h2>
          <UsedModules />
          <SourceCodeAndLiveDemo />
        </AccordionDetails>
      </Accordion>
      // </Box>
    )
  }
  const Technologies = () => {
    return (
      //<Stack direction="row" sx={{ width: '50%' }} spacing={1} s>
      <Box sx={{ width: 1 }}>
        {technologies.map((item, index) => {
          if (item != '' && item != null)
            return (
              <Chip
                sx={{ margin: '2px' }}
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
      </Box>
      //</Stack>
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
        py={'0rem'}
      >
        {live != '' && source != null ? (
          <Box p={0}>
            <span style={{ fontSize: '15px' }}>
              {' '}
              Live <IconLink link={live} title={''} icon={'fa fa-safari'} />
            </span>
          </Box>
        ) : (
          ''
        )}
        {source != '' && source != null ? (
          <Box p={1} /**border={'2px solid black'} borderRadius={'25px'} */>
            <span style={{ fontSize: '15px' }}>
              {' '}
              Code
              <IconLink
                color="red"
                link={source}
                title={''}
                icon={'fa fa-code'}
              />
            </span>
          </Box>
        ) : (
          ''
        )}
      </Box>
    )
  }
  const ImageButtons = () => {
    return (
      <div className="flexcontainer">
        {imagesUrl.map((item, index) => {
          if (item != '' && item != null)
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
      // <Stack direction="row" spacing={1} style={{ paddingTop: '1%' }}>
      <Box sx={{ width: 1 }}>
        {usedModules.map((item, index) => {
          if (item != '' && item != null)
            return (
              <Chip
                key={index}
                label={item}
                color={chipsColors.at(
                  (Math.random(chipsColors.length) * 10).toFixed(),
                )}
                //variant="outlined"
                onClick={() => {}}
                sx={{ margin: '2px' }}
              />
            )
        })}
      </Box>
      //</Stack>
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
      <h1
        style={{
          fontSize: '1rem',
          height: '40px',
          padddingTop: '2%',
          paddingBottom: '1%',
        }}
      >
        {id + 1}
        {`) `}
        {title}
      </h1>
      <SimpleAccordion />

      {imagesUrl.length > 0 && imagesUrl[0] != '' ? (
        <>
          {loaded ? (
            <Box
              sx={{ height: 'auto', width: 1, backgroundColor: 'white' }}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <h2
                style={{
                  color: 'black',
                  fontSize: '15px',
                  textAlign: 'center',
                }}
              >
                Your Network Connection Losted !
              </h2>
            </Box>
          ) : (
            <Box
              sx={{ height: '300px', width: 1, backgroundColor: 'white' }}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box
                component={'img'}
                src={loadImages ? loadImages : imagesUrl[0]}
                alt={''}
                sx={{ height: '300px', width: 'auto' }}
                onError={() => setLoaded(true)}
              />
            </Box>
          )}
        </>
      ) : (
        ''
      )}
      {imagesUrl.length > 0 ? (
        <>
          {loaded ? null : (
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'left'}
              alignItems={'left'}
              style={{ padding: '1%' }}
            >
              <ImageButtons />
            </Box>
          )}
        </>
      ) : (
        ''
      )}
    </Box>
  )
}

export default PortfolioBlock
