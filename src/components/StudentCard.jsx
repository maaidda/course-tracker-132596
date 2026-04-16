function StudentCard({ course }) {
    return (
        <div className="card">
            <p>ID: {course.id}</p>
            <p>Name: {course.name}</p>
            <p>Credits: {course.credits}</p>
            <p>Grade: {course.grade}</p>
            <p>Attending: {course.attending ? "Yes" : "No"}</p>
            <p>Difficulty: {course.difficulty}</p>


            {course.grade < 50 && course.attending === false && (
                <p>At risk</p>
            )}

            {course.grade >= 85 && (
                <p>Eligible for distinction</p>
            )}
        </div>
    );
}
export default StudentCard