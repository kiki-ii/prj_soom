import { Box, CloseButton, Dialog, Image, Portal } from '@chakra-ui/react'
import React, { useState } from 'react'
import { WorkCard } from './WorkCard';

export const WorkPopup = ({work }) => {
  const [open, setOpen] = useState(false);

  function getImageUrl(name) {
    return new URL(`../assets/images/work/${name}`, import.meta.url).href;
  }

  return (
    <Dialog.Root
      size='cover' placement='top' 
      motionPreset='slide-in-bottom'
       scrollBehavior='outside'
      open={open}
      onOpenChange={e => setOpen(e.open)}
    >
      <Dialog.Trigger asChild>
        <WorkCard work={work} setOpen={setOpen} />
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content w={{base: '95vw', md: 'full'}} maxW='1200px' maxH='90vh' p={{base:0, md:4}} display='flex' flexDirection='column' >
            {/* <Dialog.Header>
              <Dialog.Title>With Outside Scroll</Dialog.Title>
            </Dialog.Header> */}
            <Dialog.CloseTrigger top="0" insetEnd={{base: 0, md:'-12'}} zIndex='100' asChild>
              {/* <CloseButton size={{base:'md'}} position='fixed' right='1rem' className='btn_dialog_close' /> */}
              <CloseButton size={{base:'sm', md: 'md'}} className='btn_dialog_close' />
            </Dialog.CloseTrigger>
            <Dialog.Body p={4} overflowY='auto' flex='1' display='flex' justifyContent='center' alignItems='start' // 👇 스크롤은 되지만 스크롤바를 보이지 않게 숨기는 CSS 설정
            css={{
              // 파이어폭스
              scrollbarWidth: "none",
              // IE, 엣지 레거시
              msOverflowStyle: "none",
              // 크롬, 사파리, 오페라 등 웹킷 브라우저
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }} >
              <Box onContextMenu={(e)=> e.preventDefault()} onDragStart={(e)=>e.preventDefault()} display='flex' alignItems='center' flexDirection='column'>
                {work.image.map((img, index) => (
                  <Image src={getImageUrl(img)} key={index} />
                ))}
              </Box>
            </Dialog.Body>        
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
