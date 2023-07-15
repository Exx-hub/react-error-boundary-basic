import useSWR from "swr";

const fetcher = () => fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json());

function Users() {
  const { data } = useSWR("/users", fetcher, { suspense: true });

  console.log(data);

  return (
    <div>
      {data.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
}

export default Users;
