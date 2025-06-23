import { Box, Text } from '@chakra-ui/react';

export const CircleText = ({ text, radius}) => {
  const characters = text.split('');
  
  
  return (
    <Box
      position="relative" 
      w={`${radius * 2}px`} 
      h={`${radius * 2}px`}
      mx="auto"
    >
      {characters.map((char, index) => (
        <Text
          key={index}
          className='circle_text'          
          transform={`
            translate(-50%, -50%) 
            rotate(${index * (360 / characters.length)}deg) 
            translateY(-${radius}px)
          `}      
        >
          {char}
        </Text>
      ))}
    </Box>
  )
}
