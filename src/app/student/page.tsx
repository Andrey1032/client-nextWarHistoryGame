"use client";
import dynamic from "next/dynamic";

const DynamicUnityContainer = dynamic(
    () => import("@/components/UnityContainer/UnityContainer"),
    {
        ssr: false,
    }
);
import style from "@/styles/Student.module.scss";

const Page = () => {
    return (
        <div className={style["student-page"]}>
            <DynamicUnityContainer />
        </div>
    );
};

export default Page;
