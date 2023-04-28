
import { render } from "@testing-library/react";
import CardList from "./Components/card-list/card-list.component";
import SearchBox from "./Components/search-box/search-box.component";
import "./App.css"
import { useEffect, useState } from "react";

const App = () => {

  const [searchField, setsearchField] = useState("");
  const [monsters, setmonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  console.log('render');

  const onSearchchange =  (event) =>
    { 
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setsearchField(searchFieldString);

    }

    useEffect(() => {
      const newfilteredmonsters = monsters.filter((monsterfilter) => {
           return monsterfilter.name.toLocaleLowerCase().includes(searchField);
      });

      setfilteredMonsters(newfilteredmonsters);
    }, [monsters,searchField])




      useEffect(( ) => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        setmonsters(users)); }
         , [] )
          

return (
  
      <div className="App">

      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox onSearchChange = {onSearchchange}  placeholder = "Search Monsters"  className ="Search-box"/>

      <CardList monsters = {filteredMonsters}/>

      </div>
    );

}


// class App extends Component {
//   constructor() {

//     super();
//     this.state = {
//       monsters: [ ],
//       searchField:''
//     };
//   }

//   componentDidMount() {

//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//            () => {      return {monsters :users};             }
//           ))

//                     }
  

//   onSearchchange = (event) =>
//     { console.log(event.target.value);
//       console.log(event);
//       const searchField = event.target.value.toLocaleLowerCase();

//       this.setState(() => {
//         return  {searchField}
//       }

//       )
//    }

//   render() {
 
//     console.log('Render from Appjs')
//     const {monsters, searchField } = this.state ;
//     const {onSearchchange} = this;

//     const filteredmonsters = monsters.filter((monsterfilter) => {

//       return monsterfilter.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
  
//       <div className="App">

//       <h1 className="app-title">Monsters Rolodex</h1>

//       <SearchBox onSearchChange = {onSearchchange}  placeholder = "Search Monsters"  className ="Search-box"/>

//       <CardList monsters = {filteredmonsters}/>

//       </div>
//     );
//   }
// }
 export default App;
