import { useQuery } from "@tanstack/react-query";

function Repos() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/Kh1ng/bork").then((res) =>
        res.json(),
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="loading h-screen w-screen bg-900 text-100 justify-center items-center">
      <div className="text-center repo w-60 rounded-md bg-600 p-2">
        <div className="justify-start">
          <img
            className="rounded-full h-10 w-20 mx-auto"
            src="https://repository-images.githubusercontent.com/623761620/0204e2b9-4b99-4d53-b4c4-402a6014a284"
            alt="avatar"
          />
          <h1>{data.name}</h1>
          <a href={data.homepage} className="text-200">
            {data.homepage}
          </a>
        </div>

        <p>
          {data.description} - {data.language}
        </p>
        <p>
          {" "}
          Bork is the first full stack project I created, it is a dog themed
          twitter clone using typescript, React, SQL, TRPC, and Prisma. I have
          continued maintaining it throughout a database migration and various
          free services ending.
        </p>
      </div>
    </div>
  );
}
export default Repos;
