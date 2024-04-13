import "./page.css";
import SearchBar from "./components/search/page";
import Button from "./components/button/page";
import BusinessCard from "./components/businessCard/page";
import Image from "next/image";
import { categories, cards} from "./utils/arrays"

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

        <div class="categories-section">
          <p class="categories-header">Categories</p>

          <div className="category-grid">
            {categories.map((category) => {
              return(
                  <div class="category" key={category.id}>
                    <Image src={category.image} alt="" width="48" height="48" />
                    <p class="category-title">{category.title}</p>
                  </div>
              )
            })}
          </div>

          <div>
            <p class="categories-header">
            Most Reviewed Businesses
            </p>

            <div class="business-grid">
              {
                cards.map((card, index) => {
                  return(
                  <BusinessCard
                  key={index} img={card.img} namee={card.name} comment={card.comment}
                  />
                  )
                })
              }
            </div>
          </div>
          
        </div>
      </div>
    </main>
    </>
  );
}
