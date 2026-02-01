function SugestedMovie(setSearchText) {
  const Movies = ["Batman", "Spider-Man", "Interestrall", "Harry Pater"];
  return (
    <div className="mt-3 d-flex flex-wrap g-2">
      {Movies.map((movie) => (
        <button
          key={moive}
          type="button"
          className="btn-soft rounded-pill"
          onClick={setSearchText(movie)}
        >
            {movie}
        </button>
      ))}
    </div>
  );
}

export default SugestedMovie