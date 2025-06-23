// import { Text } from '@chakra-ui/react'
// import React, { useEffect } from 'react'
import { useBreakpointValue } from '@chakra-ui/react';
import { CircleText } from './ui/CircleText';



export const Footer = () => {
  const radius = useBreakpointValue({ base: 60, md: 80, lg: 100 });
  
  return (
    <footer h={'580px'} className='footer'>
      <div className="circle_box">
        {/* <div className='circle'>
          <div className="text">
            <p>Copyright © Lee Soomin • </p>
          </div>
        </div> */}
        <CircleText text='Copyright©Lee Soomin•' radius={radius} />
        
      </div>
        <p className='txt_big'>Less, but Better</p>

      </footer>
  )
}
