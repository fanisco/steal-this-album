import { faker } from "@faker-js/faker";
import { InfiniteScroll } from "./components";
import { Item } from "./components/Item";

const data = new Array(10000).fill(0).map((_, i) => ({
  id: `${i + 1}_${faker.datatype.uuid()}`,
  title: `${i + 1}. ${faker.lorem.words(5)}`,
  body: faker.lorem.sentences(Math.floor(Math.random() * (8 - 3)) + 3),
}));
const items = data.slice(0, 300);

function App() {
  return (
    <div className="container">
      <div className="app">
        <InfiniteScroll data={data} offset={20} itemHeight={110} />
        {/* Visual comparison with first 300 items */}
        {/* <div className="fakeItems">
          {items.map((item) => (
            <Item {...item} key={item.id} />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default App;
