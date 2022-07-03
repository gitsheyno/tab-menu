import { useState, useEffect } from 'react'
import Card from './component/Card'
import { Wrapper } from './component/styles/Wrapper'
import { Global} from './component/styles/Global'

function App() {
  const api = 'https://course-api.com/react-tabs-project'
  const [posts, setPosts] = useState([])
  const [index, setIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const fetchData = async () => {
    try {
      const res = await fetch(api)
      const data = await res.json()
      console.log(data)
      setPosts(data)
      setIsLoading(false)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 2000)


  }, [])

  if (isLoading) {
    return (
      <h2>Data is Fetching ... </h2>
    )
  }

  { isLoading && <h2>fetching</h2> }

  const { company, dates, duties, title } = posts[index]

  return (
    <>
      {!isLoading &&
        <>
        <Global />
          <Wrapper>
            <ul>
              {posts.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  onClick={() => setIndex(itemIndex)}
                  className={index === itemIndex ? 'active' : null}
                >
                  {item.company}
                </li>
              ))}
            </ul>

            <article>
              <Card
                title={title}
                company={company}
                dates={dates}
                duties={duties}
              />
            </article>
          </Wrapper>
        </>
      }
    </>

  );

}

export default App;
