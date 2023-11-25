import React from 'react';
import logo from './images/logo.svg';
import menuIcon from './images/icon-hamburger.svg';
import hero from './images/mobile/image-hero.jpg';
import heroDesktop from './images/desktop/image-hero.jpg';
import interactive from './images/mobile/image-interactive.jpg';
import interactiveDesktop from './images/desktop/image-interactive.jpg';
import earthMobile from './images/mobile/image-deep-earth.jpg';
import earthDesktop from './images/desktop/image-deep-earth.jpg';
import arcadeMobile from './images/mobile/image-night-arcade.jpg';
import arcadeDesktop from './images/desktop/image-night-arcade.jpg';
import soccer from './images/mobile/image-soccer-team.jpg';
import soccerDesktop from './images/desktop/image-soccer-team.jpg';
import gridMobile from './images/mobile/image-grid.jpg';
import gridDesktop from './images/desktop/image-grid.jpg';
import aboveMobile from './images/mobile/image-from-above.jpg';
import aboveDesktop from './images/desktop/image-from-above.jpg';
import borealis from './images/mobile/image-pocket-borealis.jpg';
import brealisDesktop from './images/desktop/image-pocket-borealis.jpg';
import curiositMobile from './images/mobile/image-curiosity.jpg';
import curiosityDesktop from './images/desktop/image-curiosity.jpg';
import fishMobile from './images/mobile/image-fisheye.jpg';
import fishDesktop from './images/desktop/image-fisheye.jpg';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import pinterest from './images/icon-pinterest.svg';
import twitter from './images/icon-twitter.svg';
import close from './images/icon-close.svg';

function App() {

  // menu drawer conditon 
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  //Condition to opening the drawer
  const toggleDrawer = ()=>{
    setIsDrawerOpen(prev => !prev);
  }

  // drawer component
  const Drawer = ()=>{
    return (
      <div className='w-screen h-screen bg-black p-8'>
        {/** top part  */}
        <div className='flex items-center justify-between'> <img src={logo} alt='logo'/> <img src={close} alt='menu close button' onClick={toggleDrawer}/> </div>
        {/* content */}
        <div className='flex flex-col gap-6 text-2xl text-white jose mt-40'>
          <span>ABOUT</span>
          <span>CARRERS</span>
          <span>EVENTS</span>
          <span>PRODUCTS</span>
          <span>SUPPORT</span>
        </div>
      </div>
    )
  }

  React.useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  
    return () => {
      // Cleanup: remove the class when the component is unmounted
      document.body.classList.remove('overflow-hidden');
    };
  }, [isDrawerOpen]);
  

  return (
    <div className='relative'>

      {/* Drawer */}
      { isDrawerOpen && <div className='overflow-hidden'> <Drawer></Drawer> </div> }

      {/*First card Navigation Bar + Intro */}

      <div className='relative'>
        {/* navigation */}
        <nav className='absolute top-0 flex justify-between items-center w-screen p-8 z-10 lg:px-36 sm:top-4'>
          <div><img src={logo} alt='Loopstudios logo'/></div>
          {!isDrawerOpen && <div onClick={toggleDrawer} className='sm:hidden'>  <img src={menuIcon} alt='menu icon'/>  </div>}
          <div className='hidden sm:flex sm:gap-4 md:gap-6 lg:gap-8 text-lg text-white alta'>
            <span className='hover:underline underline-offset-4 cursor-pointer'>About</span>
            <span className='hover:underline underline-offset-4 cursor-pointer'>Careers</span>
            <span className='hover:underline underline-offset-4 cursor-pointer'>Events</span>
            <span className='hover:underline underline-offset-4 cursor-pointer'>Products</span>
            <span className='hover:underline underline-offset-4 cursor-pointer'>Support</span>
          </div>
        </nav>
        {/* content */}
        <div className='absolute top-1/3 mx-5 text-white border text-4xl p-4 z-0 jose sm:w-1/2 sm:left-32 lg:text-7xl sm:broder-8'>
          IMMERSIVE EXPERIANCES THAT DELIVER
        </div>
        {/* hero image mobile */}
        <div className='z-0 sm:hidden'>
          <img src={hero} alt='hero' />
        </div>
        {/* Hero image desktop */}
        <div className='z=0 hidden sm:block'>
          <img src={heroDesktop} alt='hero' />
        </div>
      </div>

      {/* SECOND PART interactive */}

      <div className='p-6 mt-14 flex flex-col gap-8 sm:flex-row md:gap-8 lg:gap-16 sm:justify-center sm:items-end'>
        {/* interactive image */}
        <div className='sm:hidden'>  <img src={interactive} alt='interactive illustration'/>  </div>
        {/* interactive image desktop */}
        <div className='hidden sm:block'> <img src={interactiveDesktop} alt='interactive illustartion' /> </div>
        {/* Interactive text */}
        <div className='sm:flex flex-col sm:w-96'>
          <header className='jose text-3xl text-center sm:3xl md:text-4xl sm:text-left'>THE LEADER IN INTERACTIVE VR</header>
          <p className='text-center text-gray-500 mt-4 alta text-sm px-4 sm:text-left sm:px-0 md:text-base'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creationg has transformed bussiness through digital experiances that bind to there brand.</p>
        </div>
      </div>

      {/* THIRD PART our creations */}

      <div className='flex flex-col items-center gap-8 mt-16 px-5 lg:p-40'>
        {/* Heading */}
        <header className='sm:flex justify-between sm:w-full'>
          <span className='jose text-3xl sm:text-5xl'>OUR CREATIONS</span>
          <button className='hidden sm:block border-black border py-2 px-8 text-xl alta tracking-widest hover:bg-black hover:text-white'>SEE ALL</button>
        </header>
        {/*displays mobile*/}
        <div className='flex flex-col gap-5 sm:hidden '>
          <div className='relative'> <div className='overlayMobile'></div> <span className='absolute bottom-3 left-2 text-white jose text-2xl '> DEEP <br/> EARTH</span> <img src={earthMobile} alt='earth'/>  </div>
          <div className='relative'> <div className='overlayMobile'></div> <span className='absolute bottom-3 left-2 text-white jose text-2xl '> NIGHT <br/> ARCADE</span> <img src={arcadeMobile} alt='gaming arcade'/>  </div>
          <div className='relative'> <div className='overlayMobile'></div> <span className='absolute bottom-3 left-2 text-white jose text-2xl '> SOCCER <br/> TEAM VR</span> <img src={soccer} alt='soccer player'/>  </div>
          <div className='relative'> <div className='overlayMobile'></div> <span className='absolute bottom-3 left-2 text-white jose text-2xl '> THE <br/> GRID</span> <img src={gridMobile} alt='The grid'/>  </div>
          <div className='relative'> <div className='overlayMobile'></div> <span className='absolute bottom-3 left-2 text-white jose text-2xl '> FROM UP <br/>ABOVE VR</span> <img src={aboveMobile} alt='landView from upside'/>  </div>
          <div className='relative'> <div className='overlayMobile'></div> <span className='absolute bottom-3 left-2 text-white jose text-2xl '> POCKET <br/> BOREALIS</span> <img src={borealis} alt='borealis'/>  </div>
          <div className='relative'> <div className='overlayMobile'></div> <span className='absolute bottom-3 left-2 text-white jose text-2xl '> THE <br/> CURIOSITY</span> <img src={curiositMobile} alt='Wall-e'/>  </div>
          <div className='relative'> <div className='overlayMobile'></div> <span className='absolute bottom-3 left-2 text-white jose text-2xl '> MAKE IT <br/>FISHEYE</span> <img src={fishMobile} alt='fish eye view'/>  </div>
        </div>
        {/* Display desktop */}
        <div className='hidden sm:flex flex-col w-ful gap-8'>
          <div className='flex gap-8 w-full'>
            <div className='relative'> <div className='overlay'></div> <span className='absolute text-white bottom-6 left-4 jose text-2xl'>  DEEP <br/> EARTH</span> <img src={earthDesktop} alt='earth' /> </div>
            <div className='relative'> <div className='overlay'></div> <span className='absolute text-white bottom-6 left-4 jose text-2xl'>  NIGHT <br/> ARCADE</span> <img src={arcadeDesktop} alt='night arcade' /> </div>
            <div className='relative'> <div className='overlay'></div> <span className='absolute text-white bottom-6 left-4 jose text-2xl'>  SOCCER <br/> TEAM VR</span> <img src={soccerDesktop} alt='soccer palyer' /> </div>
            <div className='relative'> <div className='overlay'></div> <span className='absolute text-white bottom-6 left-4 jose text-2xl'>  THE <br/> GRID</span> <img src={gridDesktop} alt='car' /> </div>
          </div>
          <div className='flex gap-8 w-full'>
            <div className='relative'> <div className='overlay'></div> <span className='absolute text-white bottom-6 left-4 jose text-2xl'>  FROM UP <br/>ABOVE VR</span> <img src={aboveDesktop} alt='landview form above' /> </div>
            <div className='relative'> <div className='overlay'></div> <span className='absolute text-white bottom-6 left-4 jose text-2xl'>  POCKET <br/> BOREALIS</span> <img src={brealisDesktop} alt='borealis' /> </div>
            <div className='relative'> <div className='overlay'></div> <span className='absolute text-white bottom-6 left-4 jose text-2xl'>  THE <br/> CURIOSITY</span> <img src={curiosityDesktop} alt='Wall-e' /> </div>
            <div className='relative'> <div className='overlay'></div> <span className='absolute text-white bottom-6 left-4 jose text-2xl'>  MAKE IT <br/>FISHEYE</span> <img src={fishDesktop} alt='fisteye view' /> </div>
          </div>
        </div>
         {/* see all button */}
        <button className='border-black border py-2 px-8 text-xl alta tracking-widest sm:hidden hover:bg-black hover:text-white'>SEE ALL</button>
      </div>

      {/* FOURTH PART footer */}
      <div className='bg-black text-white flex flex-col py-24 items-center gap-12 jose mt-24 sm:mt-8 sm:h-44 sm:py-10 sm:gap-6 sm:items-start sm:px-2 md:px-24 sm:flex-wrap sm:justify-center'>
        {/* comapny logo */}
        <div>  <img src={logo} alt="logo"/>  </div>
        {/*fotter components*/}
        <div className='flex flex-col gap-4 text-xl items-center sm:flex-row'>
          <span className='hover:underline underline-offset-4 cursor-pointer'>About</span>
          <span className='hover:underline underline-offset-4 cursor-pointer'>Careers</span>
          <span className='hover:underline underline-offset-4 cursor-pointer'>Events</span>
          <span className='hover:underline underline-offset-4 cursor-pointer'>Products</span>
          <span className='hover:underline underline-offset-4 cursor-pointer'>Support</span>
        </div>
        {/*logo*/}
        <div className='flex gap-4 sm:justify-end'>
          <img src={facebook} alt='facebook logo' className='h-6 hover:border-b-2  hover:pb-2 border-white cursor-pointer '/>
          <img src={twitter} alt="twitter logo" className='h-6 hover:border-b-2  hover:pb-2 border-white cursor-pointer '/>
          <img src={pinterest} alt='pinterest logo' className='h-6 hover:border-b-2  hover:pb-2 border-white cursor-pointer '/>
          <img src={instagram} alt='instagram logo'  className='h-6 hover:border-b-2  hover:pb-2 border-white cursor-pointer '/>
        </div>
        <div className='text-sm'>© 2021 Loopstudios. All rights reserved</div>
      </div>
     
    </div>
  );
}

export default App;
