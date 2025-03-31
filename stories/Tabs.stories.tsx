import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Account Settings</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Make changes to your account settings. Set your preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Password</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
          </svg>
          Overview
        </TabsTrigger>
        <TabsTrigger value="analytics">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
          Analytics
        </TabsTrigger>
        <TabsTrigger value="reports">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            View your account overview and recent activity.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Analytics</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            View your analytics and performance metrics.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Reports</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Generate and view detailed reports.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}; 
