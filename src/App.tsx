import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Hero from './hero/Hero'
import bg from './assets/images/pexels-cottonbro.jpeg';
import Footer from './footer/footer';
import CovidModal from './modals/covid';
import GetStartedModal from './modals/get-started';

function App() {
  const [hideAlert, setHideAlert] = useState(false)

  return (
    <div className='flex flex-col h-screen'>
      {
        !hideAlert && 
        <div className='p-1 md:p-4 bg-transparent absolute bottom-0 md:bottom-full md:top-0 left-0 md:w-[99%] z-10'>
          <div className="alert alert-warning shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span>COVID-19 Update: Meetings will be held virtually until further notice.</span>
            </div>
            <div className="flex-none">
              <label htmlFor='covid-modal' className='btn modal-button btn-ghost'>More</label>
              <button type="button" className='btn btn-square btn-ghost' onClick={() => setHideAlert(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div> 
      }
      <div className='hero flex-none h-96 md:h-[30rem]' style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover',
      }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col prose text-neutral-content">
          <Hero></Hero>
        </div>
      </div>
      
      <div className='flex-auto p-5 md:p-10'>
        <h2 className='text-2xl md:text-5xl'>Grand Rapids Caduceus</h2>
        <div className="divider"></div>
        
        <div className='mt-2 md:my-8'>
          <p className='text-xl md:text-2xl'>
            A caduceus meeting or group is a support group for all medical professionals that have the desire to 
            recover from chemical addictions using a 12-step approach. In these groups, impaired professionals can 
            feel confident in sharing their stories with other folks who can relate to their experiences. Medical 
            professionals appreciate the peer-to-peer support of a caduceus meeting.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-8">
          <div className="card bg-neutral text-neutral-content basis-1/3">
            <div className="card-body">
              <h2 className='card-title'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </h2>
              <p>
                Support groups, in the form of formalized 12-step meetings and profession-specific meetings 
                (e.g. Caduceus Meetings), can be powerful components of recovery.
              </p>
            </div>
          </div>
          <div className="card bg-primary text-primary-content basis-1/3">
            <div className="card-body">
              <h2 className='card-title'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </h2>
              <p>
                Caduceus groups provide professionals with additional opportunities to confront denial, 
                overcome feelings of shame, and learn from the experiences of other professionals and people in long-term recovery. 
              </p>
            </div>
          </div>
          <div className="card bg-neutral text-neutral-content basis-1/3">
            <div className="card-body">
              <h2 className='card-title'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </h2>
              <p>
                Support groups also play an important role in the professional's support network during and after treatment. 
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='flex-auto p-5 md:pb-10 md:pt-0 md:px-10'>
        <h2 className='text-2xl md:text-5xl'>Meetings</h2>
        <div className="divider"></div>
        
        <div className='mt-2 md:my-8'>
          <p className='text-xl md:text-2xl'>
            For all health care professionals in recovery from addiction. Grand Rapids Caduceus conducts 
            meetings every Monday (including holidays), from 7:00PM until 8:30PM. 
          </p>
          <br />
          <div className="alert">
            <div>
              <span className='text-xl md:text-2xl font-bold'>
                Grand Rapids Caduceus commits to a safe and supportive environment which nurtures all attendees' recovery collectively.
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className='flex-auto p-5 md:pb-10 md:pt-0 md:px-10'>
        <h2 className='text-xl md:text-4xl'>Location</h2>
        <div className="divider"></div>
        
        <div className='flex flex-col md:flex-row mt-2 md:my-8 md:min-h-[300px]'>
          <div className="basis-1/2 mapouter">
            <div className="gmap_canvas p-4">
              <iframe width='100%' height='300' id="gmap_canvas" src="https://maps.google.com/maps?q=3300%2036th%20st&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
            </div>
          </div>
          <div className='basis-1/2 md:pt-4 text-base md:text-xl'>
            <h3 className='text-xl md:text-2xl font-bold pb-2'>Wedgwood Institute Building​</h3>
            <p className='font-semibold'>Wedgwood Christian Services</p>
            <p>3300 36th Avenue</p>
            <p>Grand Rapids MI 49512</p>
            <br />
            <p>The Wedgwood Institute Building is located at the Northwest corner of Wedgwood Christian Services campus.</p>
          </div>
        </div>
      </div>
      
      <div className='flex-none p-5 md:pt-0 md:px-10 mb-8'>
        <h2 className='text-xl md:text-4xl'>Questions?</h2>
        <div className="divider"></div>
        
        <div className='flex flex-col md:flex-row mt-2'>
          <label htmlFor='get-started' className='btn btn-primary'>Get Started</label>
        </div>
      </div>
      
      <Footer></Footer>
      
      <CovidModal modalName='covid-modal'></CovidModal>
      <GetStartedModal modalName='get-started'></GetStartedModal>
    </div>
  )
}

export default App
