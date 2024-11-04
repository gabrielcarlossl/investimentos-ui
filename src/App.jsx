import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Root from './routes/Root';

function App() {

  useEffect(() => {
    AOS.init({
      once:true
    })
  }, [])


  return (
    <>
      <Root />
    </>
  )
}
export default App;