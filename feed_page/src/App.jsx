import { Header } from "./components/Header";
import { Post } from "./Post";
import "./styles.css";

export function App() {
  return (
    <div>
      <Header />
      <Post author="João Pedro Dias" content="Lorem ipsum dolar amet" />
      <Post author="João Pedro Dias" content="Lorem ipsum dolar amet" />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
