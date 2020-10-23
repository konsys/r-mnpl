import React from "react";

export const GameLoading = ({ isDisplayed }: { isDisplayed: boolean }) => (
  <>
    {isDisplayed && (
      <div className="table-loading">
        <div className="table-loading-logo _animated"></div>
        <div className="table-loading-status">Всё готово!</div>
      </div>
    )}
  </>
);
