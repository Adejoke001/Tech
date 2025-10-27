import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import Solutions from '@/components/Solutions/Solutions'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs'
import WhyChoose from '@/components/WhyChooseUs/WhyChoose'
import OurVision from '@/components/OurVision/OurVision'
import ServiceCard from '@/components/Services/ServiceCard'
import Faq from '@/components/Faq/Faq'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <WhyChooseUs />
      <WhyChoose />
      <OurVision/>
      <ServiceCard/>
      <Faq/>  
      <Footer />  
    </>
  )
}