import { Box,  HStack,} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TfiArrowUp } from 'react-icons/tfi';
import {  useLocation } from 'react-router-dom';

import { HashLink as Link } from 'react-router-hash-link';
import { SideMenu } from './SideMenu';

export const Navbar = () => {
  const [showBtn, setShowBtn] = useState(false);
  // const topButton = document.querySelector('.btn_top');
  const { pathname } = useLocation();  
  const isHome = pathname === '/';
  

  
  useEffect(() => {
    const showBtn = () => {
      if (window.scrollY > 400) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    };
    window.addEventListener('scroll', showBtn);
    return () => {
      window.removeEventListener('scroll', showBtn)
    }
  },[])
  
  
  return (
    <Box id='top' className='gnb' padding={{ base: '1rem 1rem', md: '1rem 3rem', lg: '1rem 3rem', xl:'1.75rem 5rem' }}>
      <Box w={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Link to='/'>
          <Box className='logo ' w={{base: '48px', lg: '60px'}} h={{base: '48px', lg: '60px'}} ><p className='blind'>Soom Logo</p>  
          </Box>
        
        </Link>
        
        <HStack className='nav_item' gap='16' display={{ base: 'none', lg: 'flex' }}>
          {!isHome && <Link to='/'>Home</Link>}
          {/* {menuItem.map((item) => (
            item.path.startsWith('#') ? (
              <AnchorLink href={isHome ? item.path : `/${item.path}`} key={item.name}>{item.name}</AnchorLink>
              ) : (
                  <Link to={item.path} key={item.name}>{item.name}</Link>
              )
          ))} */}
          {isHome ?
            <>
              <Link to='/work' >Portfolio</Link>
              <AnchorLink href='#skills'>Skills</AnchorLink>
              <AnchorLink href='#services'>Services</AnchorLink>
              <AnchorLink href='#about'>About</AnchorLink>
            </>
            :
            <>
              <Link to='/work' >Portfolio</Link>
              <Link to='/#skills' >Skills</Link>
              <Link to='/#services' >Services</Link>
              <Link to='/#about' >About</Link>
            </>
          }        
          
        </HStack>
        <SideMenu />
        
      </Box>
      
      <AnchorLink href='#top' animation="bounce" className={showBtn ? 'btn_top show' : 'btn_top'} ><span className='blind'>Top 이동</span>
        <TfiArrowUp />
      </AnchorLink>
      
    </Box>
  )
}
