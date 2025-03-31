import type { Meta, StoryObj } from '@storybook/react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/sheet';
import { Button } from '../components/ui/button';

const meta: Meta<typeof Sheet> = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Right Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Right Sheet</SheetTitle>
          <SheetDescription>
            This sheet slides in from the right side.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            This is the main content of the sheet. You can put any content here.
          </p>
        </div>
        <SheetFooter>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Left Sheet</SheetTitle>
          <SheetDescription>
            This sheet slides in from the left side.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            This is the main content of the sheet. You can put any content here.
          </p>
        </div>
        <SheetFooter>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Top Sheet</SheetTitle>
          <SheetDescription>
            This sheet slides in from the top.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            This is the main content of the sheet. You can put any content here.
          </p>
        </div>
        <SheetFooter>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Bottom Sheet</SheetTitle>
          <SheetDescription>
            This sheet slides in from the bottom.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            This is the main content of the sheet. You can put any content here.
          </p>
        </div>
        <SheetFooter>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}; 
