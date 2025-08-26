
import React, {useState} from "react";
import {v4 as uuidV4} from "uuid"; 
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        console.log(`New room created ${id}`);
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if(!roomId || !username){
            toast.error('ROOM ID and Username is required');
            return;
        }

        //redirect
        navigate(`/editor/${roomId}`, {
            state: {
                //it is used to pass data from one route to another
                username,
            }
        })
    }

    const handleInputEnter = (e) => {
        if(e.code === 'Enter'){
            joinRoom();
            console.log(`event: ${e}`);
        }
    }

    return(
        <div className="homePageWrapper">

            <div className="formWrapper">
                <img src="/code_together_logo2.png" alt="Code together logo" className="homePageLogo"/>
                <h4 className="mainLable">Paste invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input type="text" 
                    className="inputBox" 
                    placeholder="ROOM_ID" 
                    onChange={(e) => {
                        setRoomId(e.target.value)
                    }}
                    value={roomId}
                    onKeyUp={handleInputEnter}></input>

                    <input type="text" 
                    className="inputBox" 
                    placeholder="USERNAME"
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                    value={username}
                    onKeyUp={handleInputEnter}></input>

                    <button className="btn joinBtn" onClick={joinRoom}>Join</button>
                    <span className="createInfo">
                        If you don't have an invite, create one &nbsp;
                        <a href="" onClick={createNewRoom} className="createNewBtn">new room</a>
                    </span>
                </div>
            </div>
            
            <footer>
                <h4>Built by Priyanshu Nagora</h4>
            </footer>
        </div>
    );
}

export default Home;