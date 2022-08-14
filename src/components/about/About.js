import React from 'react'
import Style from './About.module.scss'
import Terminal from './Terminal'
import { Box } from '@mui/material'
import { info } from '../../info/Info'

export default function About() {
  const firstName = info.firstName.toLowerCase()

  function educationText() {
    return (
      <div style={{ color: 'white' }}>
        {info?.education.map((item) => {
          return (
            <div
              style={{
                color: 'white',
                border: '1px solid yellow',
                borderRadius: '10px',
                margin: '5px',
                padding: '5px',
              }}
            >
              <h4 style={{ color: 'blue' }}>{item?.what}</h4>
              <p style={{ color: 'white' }}>{item?.grade}</p>
              <p style={{ color: 'white' }}>{item?.time}</p>

              <p style={{ color: 'white' }}>{item?.where}</p>
            </div>
          )
        })}
      </div>
    )
  }

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat about{firstName}{' '}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${' '}
          </span>
          {info.bio}
        </p>
      </>
    )
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Proficient With</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> Exposed To</p>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    )
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={'span'} mr={'1rem'}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      mt={'3rem'}
    >
      <Terminal title="About" text={aboutMeText()} />
      <Terminal title="Education" text={educationText()} />
      <Terminal title="Skills" text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  )
}
