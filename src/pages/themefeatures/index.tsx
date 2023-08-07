import Brands from '@/components/Brands'
import DesignFeatures from '@/components/DesignFeatures'
import Features from '@/components/Features'
import RightFit from '@/components/RightFit'
import YtVideo from '@/components/YtVideo'
import Navbar from '@/components/views/Navbar'

export default function index() {
  return (
    <>
      <Navbar page='preview' />
      <Features />
      <Brands />
      <DesignFeatures />
      <YtVideo />
      <RightFit />
    </>
  )
}
