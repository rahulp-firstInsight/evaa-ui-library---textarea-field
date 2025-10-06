import React from "react";
import { Textarea } from "../../components/TextareaField";
import "./style.scss";

export const TextareaFieldScreen = (): JSX.Element => {
  return (
    <div className="textarea-screen">
      <Textarea
        label="Label"
        description="Description"
        placeholder="Placeholder"
        hint="Hint"
        showLabel={true}
        showDescription={true}
        showPlaceholder={true}
        showHint={true}
        error={true}
      />
    </div>
  );
};
