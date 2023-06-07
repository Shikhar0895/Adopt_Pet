import Pet from "./pet";

function Results({ pets }) {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Available</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            location={`${pet.city},${pet.state}`}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            key={pet.id}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
}

export default Results;
