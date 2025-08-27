function Hobby() {
    const hobbies = [
        // TODO: add descriptions
        { title: "Gaming", description: "" }, 
        { title: "Music", description: "" }, 
        { title: "Coding", description: "" }, 
        { title: "Japanese", description: "" }
    ];

    return (
        <>
            <div className="hobby-container">
                {hobbies.map((hobby, index) => (
                    <div className="hobby-card" key={index}>
                        <h3>{hobby.title}</h3>
                        <p>{hobby.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Hobby;