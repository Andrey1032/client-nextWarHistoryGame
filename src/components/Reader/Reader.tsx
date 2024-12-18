import React, { useState } from "react";
import { ReactReader } from "react-reader";
import Loader from "../Loader/Loader";

const Reader = () => {
    const [location, setLocation] = useState<string | number>(0);
    return (
        <ReactReader
            url="/Brestskai.epub"
            location={location}
            locationChanged={(epubcfi: string) => setLocation(epubcfi)}
            swipeable
            loadingView={<Loader />}
        />
    );
};
export default Reader;
