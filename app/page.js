import "./page.css";
import SearchBar from "./components/search/page";
import Button from "./components/button/page";
import Image from "next/image";
import { categories} from "./utils/arrays"

export default function Home() {
  return (
    <>
    <main>
      <div class="first-section">
        <h1 class="intro-header">
          Explore local businesses
        </h1>

        <p class="intro-desc">
        Connect with local businesses around you.
        </p>

        <div class="search-wrap">
          <SearchBar className="searchbar" type="search" placeholder="restaurant, makeup, clothing..."/>
          <Button value="Search" className="button" onClick={null} />
        </div>

        <div class="display-wrap">
          <Image src="/food.png" alt="sold items" width="1114"  height="360"/>
        </div>

        <div>
          <p>Categories</p>

          {categories.map((category) => {
            return(
              <div class="category" key={category.id}>
                <Image src={category.image} alt="" width="48" height="48" />
                <p>{category.title}</p>
              </div>
            )
          })}
          
        </div>
      </div>
    </main>
    </>
  );
}
