import React, { useState } from "react";
import { FormComponent } from "../../components/Form";
import { H1 } from "../../components/H/style";
import { P } from "../../components/P/style";
import { TableComponent } from "../../components/Table";
import { UsersTypes } from "../../types";
import { Container } from "./style";

const Home: React.FC = () => {
    const [term, setTerm] = useState<string>("");
    const [indexVector, setIndexVector] = useState<number>(-1);
    const [registerBtn, setRegisterBtn] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [users, setUsers] = useState<UsersTypes[]>([]);
    /* const [changeTheme, setChangeTheme] = useState<number>(0) */

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

    const updateUser: Function = () => {
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
    };

    /* const handleChangeTheme = () => {
        changeTheme === 0 ? setChangeTheme(1) : setChangeTheme(0)
        console.log(changeTheme)
    } */
    return (
            <Container>
                <H1>Título</H1>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita blanditiis molestias maiores ex cumque commodi quam id dolor dolores ipsam, sed inventore minus aliquid deserunt porro provident nisi repudiandae.</P>
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
                    updateUser={updateUser}
                    deleteUser={deleteUser}
                    cancelAction={cancelAction}
                />

{/*                 <button onClick={() => handleChangeTheme()}>Mudar tema</button> */}

                <TableComponent
                    users={users}
                    setUsers={setUsers}
                    selectUser={selectUser}
                    term={term}
                    setTerm={setTerm}
                />
            </Container>
    );
};

export default Home;
