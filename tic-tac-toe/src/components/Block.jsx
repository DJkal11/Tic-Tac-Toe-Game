

function Block({props}) {
    return (
      <button className="Block" onClick={props.handleClick}>
        <h1>{props.value}</h1>
      </button>
    );
  }

  export default Block;