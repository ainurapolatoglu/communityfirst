import React, {useEffect, useState} from "react";
import format from "date-fns/format";
import {useParams} from "react-router-dom";
import ItemPostApi from "../../api/ItemPostApi";

function ItemDetail() {

    const {id} = useParams();
    const [post, setPost] = useState([]);

    const getPostById = async () => {
        try {
            const response = await ItemPostApi.getPostById(id);
            response.data.postedDate = format(new Date(response.data.postedDate), "MMMM dd, yyyy");
            setPost(response.data);
        } catch (e) {

        }
    }

    useEffect(() => {
        getPostById();
    }, []);

    function refreshPage() {
        window.location.reload(false);
      }
      
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4">{post.title}</h1>
                                <div className="card-body p-2">
                                    <h2>Description</h2>
                                    <p className="lead">{post.description}</p>
                                </div>
                                <h2>Item Type</h2>
                                <p className="lead">{post.assistanceTypes}</p>
                                <hr className="my-4"></hr>

                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                    {post.firstname} {post.lastname}
                                    </li>
                                     <li className="list-group-item">
                                         <i className="mdi mdi-email"></i>
                                         <a href="mailto:{post.email}">{post.email}</a>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                        Posted on : {post.postedDate}
                                        </div>
                                    </li>
                                    
                                
                                </ul>
                            </div>
                        </div>  
        </>
    )
}

export default ItemDetail;
