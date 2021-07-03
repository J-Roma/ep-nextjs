import React from 'react'

import axios from 'axios';

// export async function getServerSideProps() {
//     // Hacer fetch al endpoint que contiene los `posts`
//     const res = await fetch("https://encasa.parqueexplora.org/wp-json/wp/v2/posts");
//     const posts = await res.json();

//     return { props: { res } };
// }

const Entries = () => {
    const [posts, setposts] = React.useState("")

    React.useEffect(() => {
        const petition = async () => {
            await axios.get('https://encasa.parqueexplora.org/wp-json/wp/v2/posts')
                .then((res) => {
                    console.log(res.data.slice(0, 3));
                    setposts(res.data.slice(0, 3))
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        petition()
    }, [])

    return (

        <div className="container py-4">
            <div className="text-center fw-bold ">
                <h1 className="display-3" style={{color: "#A239EA", fontWeight: "bold"}}>Destacados</h1>
            </div>
            <div className="d-flex flex-wrap ">
                {
                    posts.map((posts, index) => {
                        return (
                            <div key={index} className="col-xl-4 py-3">
                                <a style={{ textDecoration: "none", color: "black" }} href={posts.link}>
                                    <div className="card" style={{ width: "23rem" }}>
                                        <img src={posts.jetpack_featured_media_url} alt="" />
                                        <div className="card-body">

                                            <h5 className="card-title text-center">
                                                {posts.title.rendered}
                                            </h5>

                                            <div className="card-text text-start" dangerouslySetInnerHTML={{ __html: posts.excerpt.rendered }} />

                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Entries
