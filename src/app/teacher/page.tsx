import { PRIVATE_URL } from "@/config/url.config";
import style from "@/styles/TeacherPage.module.scss";
import { redirect } from "next/navigation";

const Page = () => {
    redirect(PRIVATE_URL.practica());

    return <div className={style["teacher-page"]}>В разработке на беке</div>;
};

export default Page;
