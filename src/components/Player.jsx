import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEditing() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  let inputPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    inputPlayerName = (
      <input type="text" onChange={handleChange} required value={playerName} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {inputPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
