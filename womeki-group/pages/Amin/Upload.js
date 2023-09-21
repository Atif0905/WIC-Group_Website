import { useEffect } from 'react';
import React,{useState} from 'react';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import ('react-quill'), {
  ssr: false,
});

function Upload() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, SetRedirect] = useState(false)
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if(response.ok){
       SetRedirect(true)
    }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body');
      body.style.backgroundColor = 'lightblue';
    }
  }, []);

  // if(redirect){
  //   return <Navigate to="/" />
  // }
  return(
    <div className=' pt-5 ' >
    <h1>Upload</h1>
    <form onSubmit={createNewPost}>
    <input type="title"
           placeholder={'Title'}
           value={title}
           onChange={ev => setTitle(ev.target.value)} />
    <input type="summary"
           placeholder={'Summary'}
           value={summary}
           onChange={ev => setSummary(ev.target.value)} />
    <input type="file"
           onChange={ev => setFiles(ev.target.files)} />
    <ReactQuill  value={content} onChange={setContent}/>
    <button style={{marginTop:'5px'}}>Create post</button>
    </form>
    
  </div>
  );
}
export default Upload;