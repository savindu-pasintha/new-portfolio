import React from 'react'
import Style from './About.module.scss'
import Terminal from './Terminal'
import { Box } from '@mui/material'
import { info } from '../../info/Info'
import Chip from '@mui/material/Chip'
export default function About() {
  const chipsColors = ['primary', 'error', 'info', 'success', 'warning']
  const firstName = info.firstName.toLowerCase()

  function educationText({ textColor, h4 }) {
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
              <h4 style={{ color: h4 ? h4 : 'blue' }}>{item?.what}</h4>
              <p style={{ color: textColor }}>{item?.grade}</p>
              <p style={{ color: textColor }}>{item?.time}</p>
              <p style={{ color: textColor }}>{item?.where}</p>
            </div>
          )
        })}
      </div>
    )
  }
  function workHistoryText({ textColor, h4 }) {
    return (
      <div style={{ color: 'white' }}>
        {info?.workHistory.map((item) => {
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
              <h4 style={{ color: h4 ? h4 : 'blue' }}>{item?.role}</h4>
              <h4 style={{ color: textColor }}>{item?.company}</h4>
              <p style={{ color: textColor }}>{item?.location}</p>
              <p style={{ color: textColor }}>{item?.time}</p>
              <h6 style={{ color: textColor }}>{item?.summery}</h6>
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
          sudo {firstName}{' '}
        </p>
        <p
          style={{ textAlign: 'justify', fontSize: '20px', fontWeight: '800' }}
        >
          <span style={{ color: '#FFB200', justfyContent: 'align' }}>
            about <span className={Style.green}>(main)</span> ${' '}
          </span>
          {info.bio}
          <span style={{ color: '#FFB200', justfyContent: 'align' }}></span>
        </p>
      </>
    )
  }

  const SetOFSkill = ({ data, color }) => {
    return (
      //<Stack direction="row" sx={{ width: '50%' }} spacing={1} s>
      <Box sx={{ width: 1 }}>
        {data.map((item, index) => {
          if (item != '' && item != null)
            return (
              <Chip
                sx={{ margin: '2px' }}
                key={index}
                label={item.toLowerCase()}
                color={color}
                //variant="outlined"
                onClick={() => {}}
              />
            )
        })}
      </Box>
      //</Stack>
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
          <span style={{ color: info.baseColor }}>Coding :</span>
          <SetOFSkill data={info?.skills?.coding} color="error" />
        </p>
        <p>
          <span style={{ color: info.baseColor }}>Frontend Technologies :</span>
          <SetOFSkill data={info?.skills?.frontend} color="success" />
        </p>
        <p>
          <span style={{ color: info.baseColor }}>Backend Technologies :</span>
          <SetOFSkill data={info?.skills?.backend} color="warning" />
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Mobile Application Technologies :
          </span>
          <SetOFSkill data={info?.skills?.mobile} color="info" />
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Desktop Application Technologies :
          </span>
          <SetOFSkill data={info?.skills?.desktop} color="warning" />
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Datatbase Technologies :
          </span>
          <SetOFSkill data={info?.skills?.database} color="warning" />
        </p>
        <p>
          <span style={{ color: info.baseColor }}>Clould Technologies :</span>
          <SetOFSkill data={info?.skills?.cloud} color="primary" />
        </p>
        {/*<p>
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
          */}
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
      <Terminal
        title="About"
        text={aboutMeText()}
        subTitle="Why You Should Hire Me ... "
      />
      <Terminal
        title="Skills"
        text={skillsText()}
        subTitle="Why You Should Hire Me ... "
      />

      <Terminal
        title="Work History"
        text={workHistoryText({ textColor: 'black', h4: 'black' })}
        backgroundColor="#FFB200" //"#06d6a0"
        subTitle="More than 3 1/2 Years Experince in IT industry...."
      />
      <Terminal
        title="Education"
        subTitle="Why You Should Hire Me ... "
        text={educationText({ textColor: 'black', h4: 'black' })}
        backgroundColor="#BD93BD"
      />
      <Terminal text={miscText()} />
    </Box>
  )
}
