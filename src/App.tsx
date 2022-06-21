import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

interface LessonsData {
  lessons: Lesson[];
}

function App() {
  const { data } = useQuery<LessonsData>(GET_LESSONS_QUERY);

  return (
    <ul>
      {data?.lessons.map(({ id, title }: Lesson) => {
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
}

export default App;
