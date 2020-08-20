import { Chip } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import React from "react";
export default function PlayerChip({
  handleDelete,
  name,
}: {
  handleDelete: () => any;
  name: string;
}) {
  return (
    <>
      <Chip
        size="small"
        icon={<FaceIcon />}
        label={name}
        onDelete={handleDelete}
        variant="outlined"
        color="default"
      />
    </>
  );
}
