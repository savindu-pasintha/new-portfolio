import React from 'react'
import PortfolioBlock from './PortfolioBlock'
import { Box, Grid } from '@mui/material'
import { info } from '../../info/Info'

export default function Portfolio() {
  return (
    <Box>
      <Grid container display={'flex'} justifyContent={'center'}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              id={index}
              imagesUrl={project?.imagesUrl || []}
              usedModules={project?.usedModules || []}
              technologies={project?.technologies || []}
              summery={project?.summery || ''}
              imageList={[
                {
                  id: 1,
                  url: [
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F1.PNG?alt=media&token=8dcdabfd-cc08-4065-a668-b7d3fc96fd83',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F2.PNG?alt=media&token=3ec4c0ca-ad20-4c98-bbf0-acfd5a163d99',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F3.PNG?alt=media&token=fc58babf-c406-4f87-bd24-0c41253933af',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F4.PNG?alt=media&token=41cd8063-437b-4b95-a2d5-6708af3e4a76',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F5.PNG?alt=media&token=77898f88-bb84-49f0-bcf3-dd7579856b35',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F6.PNG?alt=media&token=b2a5463d-559d-40b2-9b05-a4afa278b3a9',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F7.PNG?alt=media&token=7cd2f811-2052-4c9d-8c49-ea5e4f7a6b29',
                  ],
                },
                {
                  id: 2,
                  url: [
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20Frontend%20web%20site%20html%2F1.PNG?alt=media&token=3c9d13c9-cf95-4253-b492-b3763fbc2e46',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20Frontend%20web%20site%20html%2F2.PNG?alt=media&token=504a3384-e448-48a9-95c3-4de6bfb686e2',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20Frontend%20web%20site%20html%2F3.PNG?alt=media&token=8482bfa7-c97b-4b90-8c48-760821c12bce',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20Frontend%20web%20site%20html%2F4.PNG?alt=media&token=4b3a82ec-4545-4e29-b721-6103e004b5ee',
                  ],
                },
                {
                  id: 3,
                  url: [
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F3.PNG?alt=media&token=352cf3b5-9c6b-420b-b777-0771db4dc220',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F1.PNG?alt=media&token=665a614f-bce4-4cff-b1f4-d8ee7732391a',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F2.PNG?alt=media&token=ed16b02e-09db-46b1-82b0-55dffda76c7a',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F4.PNG?alt=media&token=52998491-f7a5-4ca9-9064-4471550b445e',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F5.PNG?alt=media&token=6eef9b0f-09a4-474c-9906-680d294c9521',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F6.PNG?alt=media&token=fbfc2f4e-06c2-4495-8dab-c8bf610b3043',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F7.PNG?alt=media&token=e312e47c-0edb-4436-843a-5e45a1bbf6ae',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F8.PNG?alt=media&token=90bd2bae-e2d1-40a6-80f8-5a053dd7412c',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F9.PNG?alt=media&token=029110a9-d3ff-4395-abad-ed79de73af7e',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F10.PNG?alt=media&token=951e02a7-5a5d-414a-a6de-dac4aa73a321',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F11.PNG?alt=media&token=d5b598ab-2713-4daa-aa4f-b40426a0bfb1',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F12.PNG?alt=media&token=bc847c8a-cd7d-48c9-bb36-ee46a726e153',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F13.PNG?alt=media&token=3b3ba687-c3f8-4021-b69f-05aecdcbd485',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F14.PNG?alt=media&token=85f8c20d-eade-4e66-912b-73de78a2741a',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F15.PNG?alt=media&token=e0216806-4a56-4f2b-b87d-411b44f06ee5',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F16.PNG?alt=media&token=b3401a70-53cf-483a-a8f3-4dd0e0ec3461',
                    'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F17.PNG?alt=media&token=148e5bc4-9b2c-467c-891a-011f8ab22b46',
                  ],
                },
              ]}
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
