import Image from 'next/image'
import Header from '../components/Header'
import TopCards from '../components/TopCards'
import RecentOrders from '../components/RecentOrders'
import BarChart from '../components/BarChart'

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen'>
      <Header />
      <TopCards />
      <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  )
}
