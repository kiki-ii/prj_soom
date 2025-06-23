// import { Text } from '@chakra-ui/react'
// import React, { useEffect } from 'react'
import { CircleText } from './CircleText';



export const Footer = () => {
  // useEffect(() => {
  
  // const text = document.querySelector(".text > p");
  // text.innerHTML = text.innerText.split("").map(
  //     (char, i) => `<span style="transform:rotate(${i * 8.8}deg)">${char}</span>`
  //   ).join("");
  //   },[])
  
  return (
    <footer h={'580px'} className='footer'>
      <div className="circle_box">
        {/* <div className='circle'>
          <div className="text">
            <p>Copyright © Lee Soomin • </p>
          </div>
        </div> */}
        <CircleText text='Copyright©Lee Soomin•' radius='80' />
        
      </div>
        <p className='txt_big'>Less, but Better</p>

      </footer>
  )
}
