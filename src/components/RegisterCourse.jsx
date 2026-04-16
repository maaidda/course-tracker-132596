import {useRef, useState} from "react";

function RegisterCourse({ onRegister }) {
    const [name, setName] = useState("");
    const [credits, setCredits] = useState("");
    const [grade, setGrade] = useState("");
    const [attending, setAttending] = useState(false);
    const [difficulty, setDifficulty] = useState("Easy");
    const [error, setError] = useState("");

    const nameInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === "") {
            setError("Course name cannot be empty.");
            nameInputRef.current.focus();
            return;
        }

        const numericGrade = Number(grade);

        if (isNaN(numericGrade) || numericGrade < 5 || numericGrade > 10) {
            setError("Grade must be a number from 5 to 10.");
            return;
        }

        setError("");

        const newCourse = {
            name: name.trim(),
            credits: Number(credits),
            grade: numericGrade,
            attending: attending,
            difficulty: difficulty,
        };

        onRegister(newCourse);

        setName("");
        setCredits("");
        setGrade("");
        setAttending(false);
        setDifficulty("Easy");
        nameInputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={nameInputRef}
                type="text"
                placeholder="Course name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Credits"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
            />

            <input
                type="number"
                placeholder="Grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />

            <label>
                <input
                    type="checkbox"
                    checked={attending}
                    onChange={(e) => setAttending(e.target.checked)}
                />
                Attending
            </label>

            <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            >
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Hard">Hard</option>
            </select>

            <button type="submit">Register</button>

            {error && <p>{error}</p>}

        </form>
    );
}

export default RegisterCourse
