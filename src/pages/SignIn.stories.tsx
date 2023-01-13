import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

import { SignIn } from './SignIn';

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(
            ctx.json({
              message: 'Login realizado!',
            })
          );
        }),
      ],
    },
  },
} as Meta;

type SignInStory = StoryObj;

export const Default: SignInStory = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText('jhondoe@example.com'),
      'igocarvalho@gmail.com'
    );
    userEvent.type(canvas.getByPlaceholderText('**********'), '1234567890');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() =>
      expect(canvas.getByText('Login realizado! 🎉')).toBeInTheDocument()
    );
  },
};
