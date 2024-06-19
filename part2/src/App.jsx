const Header = () => {
    return <h1>Half Stack application development</h1>;
};
const Part = ({ text, value }) => {
    return (
        <p>
            {text} {value}
        </p>
    );
};
const Content = () => {
    return (
        <div>
            <Part text="Fundamentals of React" value={10} />
            <Part text="Using props to pass data" value={7} />
            <Part text="State of a component" value={14} />
        </div>
    );
};

const Course = () => {
    return (
        <div>
            <Header />
            <Content />
        </div>
    );
};

const App = () => {
    const course = {
        id: 1,
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
                id: 2,
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3,
            },
        ],
    };

    return <Course course={course} />;
};

export default App;
