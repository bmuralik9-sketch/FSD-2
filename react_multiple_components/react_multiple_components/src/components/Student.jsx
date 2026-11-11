

function Student(props) {
  const name=props.name;
  const age=props.age;
  

  return(
    <span>
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
    </span>
  );
};

export default Student
