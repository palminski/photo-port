import React from "react";
import coverImage from '../../assets/cover/cover-image.jpg';

function Nav() {

    const catagories = [
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
            name: 'dogs',
            description: "Photos of dogs",
        },
        
    ];

    function categorySelected(name) {
        console.log(name + ' hello world');
    }

    return (
      <header>
        <h2>
            <a href="/">
                <span role="img" aria-label="camera">📸</span>Oh Snap!
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About Me
                    </a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
                {catagories.map((category) => (
                    <li className="mx-1" key={category.name}>
                        <span onClick={() => categorySelected(category.name)}>{category.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
      </header>
    );
  }
  
  export default Nav;