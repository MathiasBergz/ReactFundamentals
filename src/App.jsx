import {Header} from "./components/Header.jsx";

import './global.css';
import styles from './App.module.css';
import {Post} from "./Post.jsx";

function App() {

  return (
      <div>
        <Header/>
        <div className={styles.wrapper}>
            <aside>
                SideBar
            </aside>
            <main>
                <Post
                    author="Mathias Bergmann"
                    content="Text sample"
                />
            </main>
        </div>
      </div>
  )
}

export default App
