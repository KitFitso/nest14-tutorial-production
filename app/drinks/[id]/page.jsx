import Image from 'next/image';
import Link from 'next/link';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fetchDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  const data = await response.json();

  return data;
};

const page = async ({ params }) => {
  const { id } = params;
  const data = await fetchDrink(id);

  const drink = data.drinks[0];

  return (
    <div>
      <Link href="/drinks">Back</Link>
      <div>{drink.strDrink}</div>
      <Image
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
      />
    </div>
  );
};

export default page;
