
import MyLayout from "@/components/MyLayout/MyLayout";
import React from "react";

export default function Layout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <MyLayout role="STUDENT">
            {children}
            {modal}

        </MyLayout>
    );
}
