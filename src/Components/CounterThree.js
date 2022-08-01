import react, {useState} from "react";
function CounterThree(){
    const[name, setName] = useState({firstName:'',lastName:''})
// the newState is not merging and updating the object useState never does both of the
    //method unlike the state in class
    return(
        <form>
            {/*when we do that ...name, what happens is that
            first it copies all the property of the existing view and then
            just overwrite the required value*/}
            <input type='text' value={name.firstName} onChange={e => setName({ ...name  ,firstName: e.target.value})}/>
            <input type='text' value={name.lastName} onChange={e => setName({...name,lastName: e.target.value})}/>/>
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>

        </form>
    )
}
export default CounterThree