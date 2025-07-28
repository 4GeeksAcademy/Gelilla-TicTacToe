import { useState } from "react";
import Game from './Game'
 //create your first component
const Home = () => {
	const [player1,setPlayer1]=useState('')
	const [player2,setPlayer2]=useState('')
	const [weaponSelected1, setWeaponSelected1]=useState(null);
	const [weaponSelected2, setWeaponSelected2]=useState(null);

	const handlePlayer1Name=(e)=>{
	 	setPlayer1(e.target.value)
	}
		const handlePlayer2Name=(e)=>{
		setPlayer2(e.target.value);
	}
	const handleWeaponSelected=(weapon)=>{
		setWeaponSelected1(weapon);
		setWeaponSelected2(weapon === "X"? "O": "X")
	}

	if(weaponSelected1 && player1 && player2){
		return <Game player1={player1} player2={player2} weapon1={weaponSelected1} weapon2={weaponSelected2}/>
	}
	return (
		<div className="text-center">
           <h4>Pick A Weapon</h4> 
		   <div className="weaponBox border-gray p-4 m-4 w-150 h-60 m-auto bg-gray-600 ">
			<h5>CHOOSE YOUR WEAPON</h5>
			<div className="flex justify-evenly">
			<input  className="bg-white px-2 py-1 rounded text-black" 
			name="playerOne" id="player1" placeholder="Player 1 name" 
			value={player1} onChange={handlePlayer1Name}/>
		 	<input  className="bg-white px-2 py-1 rounded text-black" name="playerTwo" 
			id="player2" placeholder="Player 2 name" value={player2} onChange={handlePlayer2Name}
			/>
			</div>
			<div className="flex justify-center item-center p-4 gap-3">
				<div className="flex justify-center border border-gray bg-gray-700 w-12 h-12">
					<button onClick={()=>handleWeaponSelected('X')}>
						<span className="font-bold text-yellow-500 text-3xl">X</span>
					</button>
				</div>
				<div className="border border-gray bg-gray-700 w-12 h-12  ">
					<button onClick={()=>handleWeaponSelected('O')}>
						<span className=" font-bold text-blue-500 text-3xl" >O</span>
					</button>
				</div>
			</div>
			<div>
			</div>

		   </div>
		</div>
	);
};

export default Home;