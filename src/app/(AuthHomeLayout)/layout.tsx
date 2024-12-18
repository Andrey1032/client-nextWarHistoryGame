import MyLayout from "@/components/MyLayout/MyLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <MyLayout>{children}</MyLayout>;
}
