const signIn =  true;

const names = ["Eric", "Bearice", "Opoku", "Yaw", "Osei"]
const hobby = [
  {
    id: 1,
    hby: "Dancing"
  },
  {
    id: 2,
    hby: "Driving"
  },
  {
    id: 3,
    hby: "Cooking"
  },
  {
    id: 4,
    hby: "Coding"
  },
  {
    id: 5,
    hby: "Laughing"
  }
]
console.log(hobby[1])
export default function Content() {
  return (
    <div>
      <br/>
      {signIn ? <ol>
        {names.map((name, id)=> 
        <li key={id}>{name}</li>)}
      </ol>
      : <h1>Please sign in</h1>}

        <h1>{hobby[2].id}</h1>
    </div>
  )
}
