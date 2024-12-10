import React from "react";
import { useState } from "react";
import Compteur from "./composants/Compteur";
import NavBar from "./composants/NavBar";
import Post from "./composants/Post";

export default function () {
  const [posts, setPosts] = useState([
    {
      id: 1,
      titre: "Jean julien",
      description: "text description",
      liker: false,
    },
    {
      id: 2,
      titre: "Jean julien 1",
      description: "text description 1",
      liker: false,
    },
    {
      id: 3,
      titre: "Jean julien 2",
      description: "text description 2",
      liker: false,
    },
    {
      id: 4,
      titre: "Jean julien 3",
      description: "text description 3",
      liker: false,
    },
  ]);

  const liker = (data)=>{
    const donnerCopier = [...posts];
    const index = posts.indexOf(data)
    donnerCopier[index] = {...posts[index], liker:!posts[index].liker}
    setPosts(donnerCopier);
    console.log(donnerCopier)
  };

  const effacerPost = (id) =>{
    const nouvelledonee = posts.filter(p=>p.id != id);
    setPosts(nouvelledonee)
  }

  const nombreliker = posts.filter(p=>p.liker)

  return (
    <div className="App">
      <NavBar nombreliker ={nombreliker.length} />
      {posts.map((p) => (
        <Post data={p} key={p.id} liker={liker} supression={effacerPost} />
      ))}
    </div>
  );
}
