import { MainLayout } from '@/components/pages/main'
import './globals.css'

export const metadata = {
  title: 'Projet Next JS and Ant design',
  description: 'Mon projet',
}

export default function RootLayout({ children }) {
  return (
    
      <MainLayout>{children}</MainLayout>
      
    
  )
}
