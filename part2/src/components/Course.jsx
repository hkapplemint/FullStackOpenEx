const Header = ({ name }) => {
    return <h1>{name}</h1>;
};
const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    );
};
const Total = ({ value }) => {
    return <strong>total of {value} exercises</strong>;
};
const Content = ({ course }) => {
    const total = course.parts.reduce((acc, item) => {
        return item.exercises + acc;
    }, 0);
    return (
        <div>
            {course.parts.map(part => (
                <Part key={part.id} part={part} />
            ))}
            <Total value={total} />
        </div>
    );
};

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content course={course} />
        </div>
    );
};

export default Course;
