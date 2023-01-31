import React from "react";
import { FormProps } from "../../types";
import { Input, InputCancelAction, InputDeleteButton, InputRegisterButton, InputUpdateButton } from "../Input/style";
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
    copyVector,
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
                />

                <Input
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUsername(e.target.value)
                    }
                />

                <Input
                    type="email"
                    value={email}
                    placeholder="E-mail"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                />
            </DivInfos>

            <DivButtons>
                {registerBtn ? (
                    <InputRegisterButton
                        type="button"
                        value="Register"
                        onClick={() => registerUser()}
                    />
                ) : (
                    <Div>
                        <InputUpdateButton
                            type="button"
                            value="Update"
                            onClick={() => copyVector()}
                        />
                        <InputDeleteButton
                            type="button"
                            value="Delete"
                            onClick={() => deleteUser()}
                        />
                        <InputCancelAction
                            type="button"
                            value="Cancel"
                            onClick={() => cancelAction()}
                        />
                    </Div>
                )}
            </DivButtons>
        </Container>
    );
};
