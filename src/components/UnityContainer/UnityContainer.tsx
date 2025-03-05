"use client";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import style from "./UnityContainer.module.scss";

export default function UnityContainer() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "build/BuildWebGl.loader.js",
        dataUrl: "build/BuildWebGl.data.gz/webgl.data",
        frameworkUrl: "build/BuildWebGl.framework.js.gz/build.framework.js",
        codeUrl: "build/BuildWebGl.wasm.gz/build.wasm",
    });
    const loadingPercentage = Math.round(loadingProgression * 100);
    return (
        <>
            {isLoaded === false && (
                // We'll conditionally render the loading overlay if the Unity
                // Application is not loaded.
                <div className={style["loading-overlay"]}>
                    <p>Loading... ({loadingPercentage}%)</p>
                </div>
            )}
            <Unity
                unityProvider={unityProvider}
                className={style["unity-container"]}
            />
        </>
    );
}
