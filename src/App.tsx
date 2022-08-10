import { faker } from "@faker-js/faker";

const data = new Array(10000).fill(0).map(() => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.words(5),
  body: faker.lorem.sentences(Math.floor(Math.random() * (8 - 3)) + 3),
}));

function App() {
  return (
    <div className="container">
      {data.map((item) => (
        <div key={item.id} className="item">
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
