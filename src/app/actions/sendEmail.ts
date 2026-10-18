"use server";

import ContactEmailTemplate from "@/components/ContactEmailTemplate";
import { createElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
    formData: FormData
): Promise<{
    error?: any;
    data?: any;
}> => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) return { error: "Validation error" };

    try {
        const { data, error } = await resend.emails.send({
            from: "test@erincpolat.com",
            to: ["erinc.polat@gmail.com"],
            subject: "New Contact Email from Website",
            replyTo: email,
            react: createElement(ContactEmailTemplate, {
                name,
                email,
                message,
            }),
        });

        if (error) {
            console.log("Error when sending email: ", error);

            return {
                error,
            };
        }

        return {
            data,
        };
    } catch (error) {
        return {
            error,
        };
    }
};
