import "./App.css";
import Chakra from "./components/Chakra";
import { FlowbiteComponent } from "./components/Flowbite";
import ReactBootstrap from "./components/ReactBootstrap";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <>
    {/* <h1 className="bg-black text-2rem font-black text-white h-[100px] "><p className="pt-10">Chakra UI</p></h1> */}
     <h1 className='text-[4rem] bg-[#E2DDDD] h-[80px] font-extrabold'>Chakra UI</h1>
      <Provider>
        <Chakra />
      </Provider>
      <h1 className='text-[4rem] bg-[#E2DDDD] h-[80px] font-extrabold'>Flowbite</h1>
      <FlowbiteComponent/>
      <h1 className='text-[4rem] bg-[#E2DDDD] h-[80px] font-extrabold'>Flowbite</h1>
      <ReactBootstrap/>
    </>
  );
}

export default App;
