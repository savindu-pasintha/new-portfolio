import React, { useeffect, useState, useRef, useEffect } from 'react'
import Style from './Home.module.scss'
import me from '../../img/self.jpg'
import me1 from '../../img/self1.png'
import me2 from '../../img/self2.jpg'
import me3 from '../../img/self3.jpg'
import classNames from 'classnames'
import EmojiBullet from './EmojiBullet'
import SocialIcon from './SocialIcon'
import { Box } from '@mui/material'
import { info } from '../../info/Info'
import { SettingsOverscanSharp } from '@mui/icons-material'

export default function Home() {
  const [tech, setTech] = useState(
    info?.skills?.frontend.concat(
      info?.skills?.backend,
      info?.skills?.coding,
      info?.skills?.clould,
      info?.skills?.database,
      info?.skills?.mobile,
      info?.skills?.desktop,
    ),
  )
  const [counter, setCounter] = useState('')
  const [now, setNow] = useState(0)
  useEffect(() => {
    if (now > tech.length - 1) {
      setNow(0)
    } else {
      if (tech.length != 0) setCounter(tech[now])
    }
  }, [now])
  useEffect(() => {
    const interval = setInterval(() => {
      setNow((prevNow) => prevNow + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      component={'main'}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 175px)'}
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt={'image of developer'}
        style={{ background: info.gradient }}
        component={'img'}
        src={me2}
        width={{ xs: '35vh', md: '40vh' }}
        height={{ xs: '35vh', md: '40vh' }}
        borderRadius={'50%'}
        p={'0.75rem'}
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '2rem' }}
      />
      <Box>
        <h1>
          Hi, I'm{' '}
          <span
            style={{
              background: info?.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {info?.firstName} {info?.lastName}
          </span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h3>{info?.positionTop}</h3>
        <h2>{info?.position}</h2>
        <h3>
          {info?.subPosition} <span style={{ color: 'yellow' }}>{counter}</span>
        </h3>
        <Box component={'ul'} p={'0.8rem'}>
          {info?.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio?.emoji} text={bio?.text} />
          ))}
        </Box>
        <Box
          display={'flex'}
          gap={'1.5rem'}
          justifyContent={'center'}
          fontSize={{ xs: '2rem', md: '2.5rem' }}
        >
          {info?.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social?.link}
              icon={social?.icon}
              label={social?.label}
              count={social?.count}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
