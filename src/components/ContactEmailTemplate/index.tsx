import React from "react";

interface ContactEmailTemplateType {
    name: string;
    email: string;
    message: string;
}

const ContactEmailTemplate: React.FC<ContactEmailTemplateType> = (props) => {
    const { email, message, name } = props;

    return (
        <div>
            <h1>Email from {name}</h1>
            <h1>Contact email: {email}</h1>
            <p>Message: {message}</p>
        </div>
    );
};

export default ContactEmailTemplate;
