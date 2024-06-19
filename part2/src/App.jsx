import { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [search, setSearch] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        const nameAlreadyExists = persons.find(person => person.name === newName);

        if (nameAlreadyExists) {
            alert(`${newName} is already added to phonebook`);
            return;
        }

        const newNameObject = { name: newName, number: newNumber };
        setPersons(persons.concat(newNameObject));
        setNewName("");
        setNewNumber("");
    };

    const handleNewName = event => {
        setNewName(event.target.value);
    };

    const handleNewNumber = event => {
        setNewNumber(event.target.value);
    };

    const handleSearch = event => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with <input onChange={handleSearch} value={search} />
                {search === "" ? (
                    <></>
                ) : (
                    persons
                        .filter(person => person.name.toLowerCase().includes(search))
                        .map(person => (
                            <p key={person.name}>
                                {person.name} {person.number}
                            </p>
                        ))
                )}
            </div>
            <form>
                <h2>add a new</h2>
                <div>
                    name: <input onChange={handleNewName} value={newName} />
                </div>
                <div>
                    number: <input onChange={handleNewNumber} value={newNumber} />
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>
                        add
                    </button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => (
                <p key={person.name}>
                    {person.name} {person.number}
                </p>
            ))}
        </div>
    );
};

export default App;
