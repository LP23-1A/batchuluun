import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogDetail({ props }) {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        `https://dev.to/api/articles?username=gereltuyamz/${props.uid}`
      );
      setPostData(res.data);
    };

    fetchPost();
  }, [props.uid]);
  return (
    <div>
      <h1>{postData.title}</h1>
      <img src={postData.social_image} alt={postData.title} />
      <p>{postData.body_markdown}</p>
    </div>
  );
}
