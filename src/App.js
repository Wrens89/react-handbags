import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
import bag_one from './assets/bag_1.png';
import bag_two from './assets/bag_2.png';
import bag_three from './assets/bag_3.png';
import bag_four from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';

// Stappenplan opdracht 1
// 1. nav-element aanmaken
// 2. Wikkel de titel en nav in een fragment.
// 3. schrijf één button-element
  // [ ] Tekst
  // [ ] Type (button)
  // [ ] Hoe krijgen we een event-listener op een react button? Om daarna console.log() aan te maken
  // [ ] Hoe krijgen we een button disabled
// Stappenplan opdracht 2
// Volg de aanpak uit het demo project (in de README.md)


function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
        <nav>
          <Button isDisabled={false} clickHandler={() => console.log("To the collection!")}>
              To the collection
          </Button>
          <Button isDisabled={false} clickHandler={() => console.log("Shop all bags!")}>
              Shop all bags
          </Button>
          <Button isDisabled={true} clickHandler={() => console.log("To the pre-orders!")}>
              Pre-orders
          </Button>
        </nav>
        <main>
            <Product
                label="Best seller"
                img={bag_one}
                title="The handy bag"
                price={400}
            />
            <Product
                label="Best seller"
                img={bag_two}
                title="The stylish bag"
                price={250}
            />
            <Product
                label="New collection"
                img={bag_three}
                title="The simple bag"
                price={300}
            />
            <Product
                label="New collection"
                img={bag_four}
                title="The trendy bag"
                price={150}
            />
        </main>
        <footer>
            <Tile title="The brand">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa, delectus doloribus earum excepturi fugit harum hic illum magni minima mollitia nemo nulla perspiciatis quam quidem quod sunt voluptatibus voluptatum!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis culpa dolore eligendi iusto magnam molestiae nam nulla, placeat, quae rem rerum sunt tempore, ut vel? Autem minus perspiciatis recusandae.</p>
            </Tile>
            <Tile img={brand} imgDescription={"The brand logo"} />
            <Tile img={our_story} imgDescription={"The designers"} />
            <Tile title="Our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et inventore perferendis perspiciatis possimus saepe veniam? Adipisci at atque consequatur ducimus ex hic illum inventore minima quam quidem quo, reiciendis.</p>
            </Tile>
        </footer>
          </>
  );
}

export default App;



