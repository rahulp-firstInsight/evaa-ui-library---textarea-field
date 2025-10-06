import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the textarea",
    },
    description: {
      control: "text",
      description: "Description text below the label",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text inside the textarea",
    },
    hint: {
      control: "text",
      description: "Hint or error message below the textarea",
    },
    showLabel: {
      control: "boolean",
      description: "Show or hide the label",
    },
    showDescription: {
      control: "boolean",
      description: "Show or hide the description",
    },
    showPlaceholder: {
      control: "boolean",
      description: "Show or hide the placeholder",
    },
    showHint: {
      control: "boolean",
      description: "Show or hide the hint",
    },
    error: {
      control: "boolean",
      description: "Toggle error state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Label",
    description: "Description",
    placeholder: "Placeholder",
    hint: "Hint",
    showLabel: true,
    showDescription: true,
    showPlaceholder: true,
    showHint: true,
    error: false,
  },
};

export const WithError: Story = {
  args: {
    label: "Label",
    description: "Description",
    placeholder: "Placeholder",
    hint: "This field is required",
    showLabel: true,
    showDescription: true,
    showPlaceholder: true,
    showHint: true,
    error: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    label: "Label",
    description: "Description",
    placeholder: "Placeholder",
    hint: "Hint",
    showLabel: false,
    showDescription: true,
    showPlaceholder: true,
    showHint: true,
    error: false,
  },
};

export const WithoutDescription: Story = {
  args: {
    label: "Label",
    description: "Description",
    placeholder: "Placeholder",
    hint: "Hint",
    showLabel: true,
    showDescription: false,
    showPlaceholder: true,
    showHint: true,
    error: false,
  },
};

export const MinimalWithPlaceholder: Story = {
  args: {
    label: "Label",
    description: "Description",
    placeholder: "Enter your text here...",
    hint: "Hint",
    showLabel: false,
    showDescription: false,
    showPlaceholder: true,
    showHint: false,
    error: false,
  },
};

export const WithCustomText: Story = {
  args: {
    label: "Feedback",
    description: "Please share your thoughts with us",
    placeholder: "Type your feedback here...",
    hint: "Maximum 500 characters",
    showLabel: true,
    showDescription: true,
    showPlaceholder: true,
    showHint: true,
    error: false,
  },
};
