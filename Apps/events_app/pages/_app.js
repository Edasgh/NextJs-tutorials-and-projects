import MainLayout from '@/src/components/layout/main-layout'
import '@/styles/globals.css'
import "@/styles/main.scss"

export default function App({ Component, pageProps }) {
  return(
    <>
   <MainLayout>
     <Component {...pageProps} />
   </MainLayout>
    
    </>
     )
}
