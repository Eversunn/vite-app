
import { useState } from 'react'
import Header from './components/header/Header'
import Differences from './components/differences-section'
import IntroSec from './components/intro-section'
import TabsSetction from './components/tabs-section'
import TeachingSection from './components/teaching-section'
import Feedback from './components/feedbackSection'

export default function App() {
  const [tab,setTab] = useState('main');
  return (
    <>
      <Header />
      <main>
        <IntroSec/>
        <TabsSetction active={tab} onChange={(current=>setTab(current))}/>
        {tab ==='main' && (
          <>
          <TeachingSection/>
          <Differences/>
          </>
        )}
        {tab ==='feedback' && (
          <>
          <Feedback/>
          </>
        )}
      </main>
    </>
  )
}
