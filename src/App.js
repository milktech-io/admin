import Sidebar from './components/layouts/SideBar'
import Navbar from './components/layouts/Navbar';
import { MetaMaskProvider } from "metamask-react";

function App({children}) {

  return (
  <div style={{display:'flex', flexDirection:'row'}}>
    <Sidebar />
    <div style={{width:'100%',height:'100vh','overflow':'scroll'}}>
     <MetaMaskProvider>
      <Navbar/>
      <div style={{padding:'1rem'}}>
      {children}
      </div>
      </MetaMaskProvider>
    </div>
  </div>
  );
}

export default (App);