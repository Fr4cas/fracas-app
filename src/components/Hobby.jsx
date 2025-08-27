function Hobby() {
    const hobbies = [{ title: "Gaming" }, { title: "Music" }, { title: "Coding" }];

    return (
        <>
            <div className="hobby-container">
                {hobbies.map((hobby, index) => (
                    <div className="hobby-card" key={index}>
                        <h3>{hobby.title}</h3>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Hobby;