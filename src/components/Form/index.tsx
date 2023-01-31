import React from "react";
import { FormProps } from "../../types";
import { InputComponent as Input } from "../Input";
import { Container } from "./style";

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
            <div className="infos-container">
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
            </div>

            <div className="buttons-container">
                {registerBtn ? (
                    <Input
                        type="button"
                        value="Register"
                        onClick={() => registerUser()}
                    />
                ) : (
                    <div>
                        <Input
                            type="button"
                            value="Update"
                            onClick={() => copyVector()}
                        />
                        <Input
                            type="button"
                            value="Delete"
                            onClick={() => deleteUser()}
                        />
                        <Input
                            type="button"
                            value="Cancel"
                            onClick={() => cancelAction()}
                        />
                    </div>
                )}
            </div>
        </Container>
    );
};
