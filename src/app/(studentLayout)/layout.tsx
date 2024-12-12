import Nav from "@/components/Nav/Nav";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Nav />
            {children}
        </>
    );
}
