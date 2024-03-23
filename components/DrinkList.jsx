import Link from 'next/link';
import Image from 'next/image';

const Drink = ({ drink }) => {
  // console.error(params);
  const { strDrink, idDrink, strImageSource, strDrinkThumb } = drink;

  return (
    <li>
      <Link className="text-xl font-medium" href={`/drinks/${idDrink}`}>
        <div className="relative h-48 mb-4">
          <Image
            src={strDrinkThumb}
            alt={strDrink}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            className="rounded-md object-cover"
            priority
          />
        </div>
      </Link>
      <h2>{strDrink}</h2>
    </li>
  );
};

export default Drink;
