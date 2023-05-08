import './App.css';
import ProductParent from './components/productParent';
import { motion } from 'framer-motion';

function App() {
  return (
    <div>
<motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
className='header'>
<h1>Pauer Tools</h1>
</motion.div>
<ProductParent/>
    </div>
    
  );
}

export default App;
