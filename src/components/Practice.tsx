import { useState } from "react";

const name = { name: "Elijah" };
const age = { age: 41 };
const day = { day: true };

export default function Practice() {
  const [email, setEmail] = useState<string>();
  const [quantity, setQuantity] = useState<number>(0);

  function merge<T, U>(obj1: T, obj2: U): T & U {
    const merged = { ...obj1, ...obj2 };
    return merged;
  }

  const nameAge = merge(name, age);
  const ageDay = merge(age, day);
  const nameDay = merge(name, day);

  console.log(nameAge);
  console.log(ageDay);
  console.log(nameDay);

  function getLength<T extends { length: number }>(input: T): number {
    return input.length;
  }

  console.log(getLength([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  console.log(getLength("thisisus"));
  // console.log(getLength(12));

  class Product {
    constructor(public name: string, public price: number) {}

    getPrice(): number {
      return this.price;
    }
  }

  class DiscountedProduct extends Product {
    constructor(name: string, price: number, public discount: number) {
      super(name, price);
    }

    getPrice(): number {
      return this.price * (1 - this.discount); // 👈 Something’s off
    }
  }

  const item = new DiscountedProduct("Headphones", 120, 0.2);
  console.log(item.getPrice()); // Expecting 80

  class Track {
    constructor(public title: string, public duration: number) {}

    play() {
      console.log(`Playing track: ${this.title} (${this.duration} mins)`);
    }
  }

  class PodcastEpisode extends Track {
    constructor(title: string, duration: number, public guest: string) {
      super(title, duration);
    }

    play() {
      console.log(
        `Now playing podcast: ${this.title} with guest ${this.guest}, ${this.duration} mins long)`
      );
    }
  }

  function playMedia(media: PodcastEpisode) {
    media.play();
  }

  const episode = new PodcastEpisode("Tech Talk", 60, "Elon Musk");
  playMedia(episode); // 🧠 Unexpectedly logs the base class message

  const products = [
    { id: 1, name: "Shoes" },
    { id: 2, name: "Hat" },
  ];

  function ProductList() {
    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.valueAsNumber)}
      />
      <br />
      <button onClick={() => alert("Clicked!")}>Click Me</button>;
      <div>{ProductList()}</div>
    </>
  );
}
