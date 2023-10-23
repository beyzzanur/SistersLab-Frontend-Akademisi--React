import './App.css';
import MarvelCard from './MarvelCard';

const marvels = [
    { name: 'Tony Stark', characterName: 'Iron Man', characterPicture: 'https://i.etsystatic.com/37653554/r/il/f4610c/4223824861/il_794xN.4223824861_qa5e.jpg' },
    { name: 'Steve Rogers', characterName: 'Captain America',characterPicture:'https://i.pinimg.com/736x/4d/f5/e1/4df5e13686241ac8637493a1f6fc4fce.jpg' },
    { name: 'Natasha Romanoff', characterName: 'Black Widow', characterPicture: 'https://clipart-library.com/images_k/black-widow-transparent/black-widow-transparent-2.png'} ,
    { name: 'Thor Odinson', characterName: 'Thor', characterPicture: 'https://pngbuy.com/wp-content/uploads/2023/08/thor-pngthor-png-image-2.png'},
    { name: 'Bruce Banner', characterName: 'Hulk', characterPicture: 'https://pngfre.com/wp-content/uploads/hulk-39-1-1024x820.png'},
    { name: 'Peter Parker', characterName: 'Spiderman', characterPicture: 'https://i.pinimg.com/originals/b3/85/25/b3852502392fb687c0c455933d9d3074.png' } ,
  ];
  const App = () => {
     return (
        <div className = "container">
            {marvels.map((marvel) => (
                <div key={marvel.name}>
                    <MarvelCard
                    name={marvel.name}
                    characterName={marvel.characterName}
                    characterPicture={marvel.characterPicture}
                    ></MarvelCard>
                </div>
            ))}
        </div>
     );
  }
export default App;
