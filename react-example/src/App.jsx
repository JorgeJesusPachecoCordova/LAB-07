import './App.css'
import { List } from './components/List'
import { WapperList } from './components/WrapperList'

function App() {
 
  const buttonText = "Count : ";

  return (
    <>
      
      <WapperList>
        <List/>
      </WapperList>
    </>
  )
}

export default App