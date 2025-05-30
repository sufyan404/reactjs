import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Container, Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userData === userData.$id : false;

  useEffect(() => {
    service.getPosts(slug).then((post) => {
      if (post) {
        setPost(post);
      } else {
        navigate("/");
      }
    });
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((post) => {
      if (post) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img src={service.getFilePreview(post.featuredImage)} alt="service" />
          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <button className="bg-red-500 " onClick={deletePost}>
                Delete
              </button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <div className="browser-css">{parse(post.content)}</div>
        </div>
      </Container>
    </div>
  ) : null;
}
