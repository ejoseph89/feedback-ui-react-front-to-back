import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

const Post = () => {
  // const params = useParams()
  const status = 200;

  const navigate = useNavigate();

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  const onClick = () => {
    console.log("Hello");
    navigate("/about");
  };

  return (
    <div>
      {/* <h1>Post: {params.id}</h1> */}
      {/* <h2>Name: {params.name}</h2> */}
      <h1>Posts</h1>
      <p>
        Post <em style={{ color: "#ff6a95" }}>id</em> is pulled from the url, by
        react-router-dom's <b style={{ color: "#ff6a95" }}>useParams</b> hook.
      </p>
      <p>
        A common use case for this is using the params to make a request to the
        backend to get a particular resource.
      </p>
      <button onClick={onClick} className="btn btn-secondary">
        Click
      </button>
      <Routes>
        <Route path='/show' element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  );
};

export default Post;
