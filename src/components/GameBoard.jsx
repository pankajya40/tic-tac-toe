export default function GameBoard({ onHandleActive, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleBoard(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [...prevGameBoard];
  //     console.log(updatedGameBoard);
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });
  //   onHandleActive();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onHandleActive(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol || ""}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
