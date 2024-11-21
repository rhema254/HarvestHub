import { Layout } from '../components/layout'
import { DashboardCards } from '../components/dashboard-cards'
import { Customers } from '../components/customers'
import { Chats } from '../components/chats'

export default function Dashboard() {
  return (
    <Layout title="Dashboard">
      <DashboardCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Customers />
        <Chats />
      </div>
    </Layout>
  )
}

