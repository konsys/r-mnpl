import { IFieldRent } from "../../../../../types/types";
import React from "react";

export const FieldActionIT = (rent: IFieldRent) => {
  return (
    <>
      <div className="TableFieldcard-data-rows">
        <div>
          <div className="_title">1 полe</div>
          <div className="_value _type_x">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M97.33 51.18l-14.71 32.2a6.32 6.32 0 0 1-8.38 3.12l-32.2-14.7a6.32 6.32 0 0 1-3.12-8.38l14.7-32.2A6.32 6.32 0 0 1 62 28.08L94.2 42.8a6.32 6.32 0 0 1 3.13 8.38zM64.68 35.92a6 6 0 1 0-4.99 10.92 6 6 0 0 0 5-10.92zm5.94 15.91a6 6 0 1 0-5 10.93 6 6 0 0 0 5-10.92zm5.93 15.92a6 6 0 1 0-4.99 10.93 6 6 0 0 0 5-10.93zm-42.5-3.32a7.33 7.33 0 0 0 .05 6.15l-6.54 3.05a6.32 6.32 0 0 1-8.4-3.06L4.2 38.5a6.32 6.32 0 0 1 3.05-8.4l32.09-14.96a6.32 6.32 0 0 1 8.4 3.06l3.8 8.14c-.11.18-.24.35-.33.55L34.06 64.42zm-11.12-28.4a6 6 0 1 0-10.89 5.08 6 6 0 0 0 10.89-5.08zM25.1 54.9a6 6 0 1 0 5.07 10.88A6 6 0 0 0 25.1 54.9zm19.6-29.02a6 6 0 1 0-10.89 5.08 6 6 0 0 0 10.9-5.08z"
                n-clip-rule="evenodd"
                n-fill-rule="evenodd"
              ></path>
            </svg>
            × <span className="_mult_one">{rent && rent.baseRent}</span>
          </div>
        </div>
        <div>
          <div className="_title">2 поля</div>
          <div className="_value _type_x">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M97.33 51.18l-14.71 32.2a6.32 6.32 0 0 1-8.38 3.12l-32.2-14.7a6.32 6.32 0 0 1-3.12-8.38l14.7-32.2A6.32 6.32 0 0 1 62 28.08L94.2 42.8a6.32 6.32 0 0 1 3.13 8.38zM64.68 35.92a6 6 0 1 0-4.99 10.92 6 6 0 0 0 5-10.92zm5.94 15.91a6 6 0 1 0-5 10.93 6 6 0 0 0 5-10.92zm5.93 15.92a6 6 0 1 0-4.99 10.93 6 6 0 0 0 5-10.93zm-42.5-3.32a7.33 7.33 0 0 0 .05 6.15l-6.54 3.05a6.32 6.32 0 0 1-8.4-3.06L4.2 38.5a6.32 6.32 0 0 1 3.05-8.4l32.09-14.96a6.32 6.32 0 0 1 8.4 3.06l3.8 8.14c-.11.18-.24.35-.33.55L34.06 64.42zm-11.12-28.4a6 6 0 1 0-10.89 5.08 6 6 0 0 0 10.89-5.08zM25.1 54.9a6 6 0 1 0 5.07 10.88A6 6 0 0 0 25.1 54.9zm19.6-29.02a6 6 0 1 0-10.89 5.08 6 6 0 0 0 10.9-5.08z"
                n-clip-rule="evenodd"
                n-fill-rule="evenodd"
              ></path>
            </svg>
            × <span className="_mult_two">{rent && rent.oneStar}</span>
          </div>
        </div>
      </div>
    </>
  );
};
