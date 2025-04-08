import React, { useState } from "react";
import { ReactReader } from "react-reader";
import Loader from "../Loader/Loader";
import style from "./Reader.module.scss";

interface IReaderComponent {
    url: string;
}

const Reader = ({ url }: IReaderComponent) => {
    const [location, setLocation] = useState<string | number>(0);
    return (
        <div className={style["reader"]}>
            <ReactReader
                url={url}
                location={location}
                locationChanged={(epubcfi: string) => setLocation(epubcfi)}
                swipeable
                loadingView={<Loader />}
            />
        </div>
    );
};
export default Reader;
