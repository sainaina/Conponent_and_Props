import React from 'react'
import ImageComponent from './components/ImageComponent'
import AvartarComponent from './components/AvartarComponent'

const App = () => {
  const students = [
    {
      username: "Saina",
      Profile: "https://i.pinimg.com/736x/df/1b/15/df1b15a128c82f18edbeb426e66cf758.jpg"
    },
    {
      username: "Hello",
      Profile:"https://i.pinimg.com/564x/41/a4/37/41a4379e03dedf78b1e068ef1f617947.jpg"
    },
    {
      username: "Hi",
      Profile:"https://i.pinimg.com/736x/dd/3c/05/dd3c052565a7b162c23a5a35a2106c73.jpg"
    }

  ]
  return (
    <div className='rounded-full'>
      {
        students.map((students, index) => (
          <AvartarComponent key={index}
          username={students.username}
          image={students.Profile}
          />
        ))
      }
    </div>
  );
}

export default App
