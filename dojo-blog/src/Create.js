import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending,setPending]=useState(false);
  const redirect=useHistory();

  const handleSubmit= (e) => {       

      e.preventDefault();
      const blog={title,body,author};
      
      setPending(true);
      fetch('http://localhost:8000/blogs', {
          method:'POST',
          headers:{'content-type':'application/json'},
          body: JSON.stringify(blog)
      }).then(()=>{
          console.log('New blog added');
          setPending(false);
          redirect.push('/');
      })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e)=>{ setAuthor(e.target.value) }}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
