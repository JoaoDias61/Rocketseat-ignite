import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/JoaoDias61.png",
      name: "JoÃ£o Pedro",
      role: "DEV",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa ð" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/mateus-morais712.png",
      name: "Mateus",
      role: "Educator",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa ð" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
