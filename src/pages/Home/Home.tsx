import React, { useState } from "react";
import { FormComponent } from "../../components/Form";
import { TableComponent } from "../../components/Table";
import { UsersTypes } from "../../types";

const Home: React.FC = () => {
    const [term, setTerm] = useState<string>('')
    const [indexVector, setIndexVector] = useState<number>(-1);
    const [registerBtn, setRegisterBtn] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [users, setUsers] = useState<UsersTypes[]>([]);

    const registerUser: Function = () => {
        let obj = {
            name: name,
            username: username,
            email: email,
        };

        setUsers([...users, obj]);

        setName("");
        setUsername("");
        setEmail("");
    };

    const selectUser: Function = (index: number) => {
        setIndexVector(index);
        setName(users[index].name);
        setUsername(users[index].username);
        setEmail(users[index].email);

        setRegisterBtn(false);
    };

    const copyVector: Function = () => {
        let obj = {
            name: name,
            username: username,
            email: email,
        };

        let vectorCopy = [...users];
        vectorCopy[indexVector] = obj;
        setUsers(vectorCopy);

        setName("");
        setUsername("");
        setEmail("");
        setRegisterBtn(true);
    };

    const deleteUser: Function = () => {
        let vectorCopy = [...users];

        vectorCopy.splice(indexVector, 1);
        setUsers(vectorCopy);

        setName("");
        setUsername("");
        setEmail("");
        setRegisterBtn(true);
    };

    const cancelAction: Function = () => {
        setName("");
        setUsername("");
        setEmail("");
        setRegisterBtn(true);
    }

    return (
        <>
            <FormComponent
                registerBtn={registerBtn}
                setRegisterBtn={setRegisterBtn}
                setName={setName}
                setUsername={setUsername}
                setEmail={setEmail}
                registerUser={registerUser}
                name={name}
                username={username}
                email={email}
                copyVector={copyVector}
                deleteUser={deleteUser}
                cancelAction={cancelAction}
            />

            <TableComponent
                users={users}
                setUsers={setUsers}
                selectUser={selectUser}
                term={term}
                setTerm={setTerm}
            />
        </>
    );
};

export default Home;
