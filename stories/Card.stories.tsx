import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from '../components/ui/card';
import { Button } from '../components/ui/button';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>This card has an action button</CardDescription>
        <CardAction>
          <Button variant="outline">Action</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>This card demonstrates the CardAction component which can be used to add buttons or other interactive elements to the card header.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>This card has a footer with actions</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card demonstrates the CardFooter component which can be used to add actions or additional information at the bottom of the card.</p>
      </CardContent>
      <CardFooter className="border-t">
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  ),
}; 
