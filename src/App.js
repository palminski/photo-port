import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

import './App.css';

function App() {

  const [catagories] = useState([
    {
        name: 'commercial',
        description: "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
        name: 'portraits',
        description: "Photos of ppl in my life",
    },
    {
        name: 'food',
        description: "Photos of food",
    },
    {
        name: 'landscape',
        description: "Wait, these aren't dogs",
    },
    
]);

const [currentCategory, setCurrentCategory] = useState(catagories[0])

  return (
    <div>
      <Nav 
      catagories={catagories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}>
      </Nav>
      <main>
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About />
      </main>
    </div>
  );
}

export default App;
