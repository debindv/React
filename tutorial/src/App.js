import React, { useState } from 'react';
import './App.css';


function App() {
	let [items, setItem] = useState([
		{id:1,value:""}
	]);
	let [txtContent, setContent] = useState("");

	const txtChange=(e)=> {
		setContent(e.target.value);
	}
	function addItem() {
		setItem(items.concat({id:items.length+1,value:txtContent}));
	}
	function removeItem(id) {
		setItem(items.filter(item => item.id !== id));
	}
	function editItem(id) {
		
	}
	return (
		<div>
			<input id="input" type="text" placeholder="Enter item" onChange={txtChange}/>
			<button onClick={addItem}>Add</button>
			<ul>
				{
					items.map((itm,k) => {
						return (
							<li>
								{itm.value}
								<button key={k} onClick={()=> removeItem(itm.id) }>Delete</button>
								<button onClick={()=> editItem(itm.id)}>Edit</button>
							</li>	
						)
					})
				}
			</ul>
			
		</div>
	);
}

export default App;
