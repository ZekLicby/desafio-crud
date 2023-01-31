import React from "react";
import { FormProps } from "../../types";
import {
    CancelAction,
    DeleteButton,
    RegisterButton,
    UpdateButton,
} from "../Button/style";
import { Input } from "../Input/style";
import { Container, Div, DivButtons, DivInfos } from "./style";

export const FormComponent = ({
    registerBtn,
    setRegisterBtn,
    setName,
    setUsername,
    setEmail,
    registerUser,
    name,
    username,
    email,
    updateUser,
    deleteUser,
    cancelAction,
}: FormProps) => {
    return (
        <Container>
            <DivInfos>
                <Input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                    }
                    required
                />

                <Input
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUsername(e.target.value)
                    }
                    required
                />

                <Input
                    type="email"
                    value={email}
                    placeholder="E-mail"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                    required
                />
            </DivInfos>

            <DivButtons>
                {registerBtn ? (
                    <RegisterButton
                        type="submit"
                        onClick={() => registerUser()}
                    >
                        Register
                    </RegisterButton>
                ) : (
                    <Div>
                        <UpdateButton onClick={() => updateUser()}>
                            Update
                        </UpdateButton>
                        <DeleteButton onClick={() => deleteUser()}>
                            Delete
                        </DeleteButton>
                        <CancelAction onClick={() => cancelAction()}>
                            Cancel
                        </CancelAction>
                    </Div>
                )}
            </DivButtons>
        </Container>
    );
};
