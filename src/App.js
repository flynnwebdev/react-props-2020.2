import './App.css'
import Comment from './Comment'
import Card from './Card'

function App() {
  return (
    <div className="comments">
      <Card>
        <Comment author="John Smith" text="This is cool!" />
      </Card>
      <Comment author="Mary Jones" text="I'm eating a banana!" />
      <Comment author="Sally Brown" text="Awesome site!" />
    </div>
  )
}

export default App
