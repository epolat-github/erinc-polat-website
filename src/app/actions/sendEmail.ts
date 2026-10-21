"use server";

import ContactEmailTemplate from "@/components/ContactEmailTemplate";
import { createElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailResult =
    | { data: { id: string }; error?: never }
    | { error: { name: "validation_error" | "delivery_error" }; data?: never };

export const sendEmail = async (
    formData: FormData
): Promise<SendEmailResult> => {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (
        typeof name !== "string" || !name.trim() ||
        typeof email !== "string" || !email.trim() ||
        typeof message !== "string" || !message.trim()
    ) {
        return { error: { name: "validation_error" } };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "test@erincpolat.com",
            to: ["erinc.polat@gmail.com"],
            subject: "New Contact Email from Website",
            replyTo: email,
            react: createElement(ContactEmailTemplate, { name, email, message }),
        });

        if (error) {
            console.error("[sendEmail] Delivery failed", { code: error.name });
            return {
                error: {
                    name: error.name === "validation_error"
                        ? "validation_error"
                        : "delivery_error",
                },
            };
        }

        if (!data) {
            console.error("[sendEmail] Missing delivery response");
            return { error: { name: "delivery_error" } };
        }

        return { data: { id: data.id } };
    } catch {
        console.error("[sendEmail] Unexpected delivery failure");
        return { error: { name: "delivery_error" } };
    }
};
