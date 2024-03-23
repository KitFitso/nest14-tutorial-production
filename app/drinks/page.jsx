import DrinkList from '@/components/DrinkList';
import Image from 'next/image';
// import face from './funny.png';
// console.log(face);

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch drinks');
  }

  const data = await response.json();
  return data;
};

const Drinks = async () => {
  const data = await fetchDrinks();
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {/*static Image*/}
      {/* <Image
        src={face.src}
        width="100"
        height="100"
        className="rounded"
        alt="Face Image"
      /> */}
      {data.drinks.map((drink) => (
        <DrinkList key={drink.idDrink} drink={drink} />
      ))}
    </ul>
  );
};

export default Drinks;
