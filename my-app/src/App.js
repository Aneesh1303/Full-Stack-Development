const TodoInput = () => {
  return (
    <div>
      <input type= "text"></input>
    </div>
  )
}

const PendingItems = (props) => {
    const { chores } = props

    return (
      <ol>
        {
          chores.map(chore => {
            return (
              <li>{chore}</li>
            )
          })
        }
      </ol>
    )
}

const Header = () => {
  return (
    <>
      <h1> Todo List </h1>
    </>
  )
}

const App = () => {
  const chores = ["Wake up", "Study", "Watch Anime"]

  return (
    <div>
      <Header/>
      <TodoInput/>
      <PendingItems chores = {chores} />
    </div>
  );
}

export default App;