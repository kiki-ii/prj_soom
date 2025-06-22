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
      size='full'
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
          <Dialog.Content>
            {/* <Dialog.Header>
              <Dialog.Title>With Outside Scroll</Dialog.Title>
            </Dialog.Header> */}
            <Dialog.CloseTrigger asChild>
              <CloseButton size={{base:'md', lg: 'xl'}} className='btn_dialog_close' />
            </Dialog.CloseTrigger>
            <Dialog.Body>
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
