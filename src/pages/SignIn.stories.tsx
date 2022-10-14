import { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { SignIn } from "./SignIn";

export default {
  title: "Pages/Sign In",
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) =>
          res(ctx.json({ message: "Login realizado!" }))
        ),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const userLogin = [
      {
        placeholder: "Digite seu e-mail",
        data: "johndoe@example.com",
      },
      {
        placeholder: "*******",
        data: "123456",
      },
    ];

    userLogin.map(({ data, placeholder }) =>
      userEvent.type(canvas.getByPlaceholderText(placeholder), data)
    );

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() =>
      expect(canvas.getByText("Login realizado!")).toBeInTheDocument()
    );
  },
};
