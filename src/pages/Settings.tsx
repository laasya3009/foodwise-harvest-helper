
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const Settings = () => {
  const [notifications, setNotifications] = React.useState(true);
  const [expiryReminders, setExpiryReminders] = React.useState(true);
  const [reminderDays, setReminderDays] = React.useState('3');
  const [weeklyReport, setWeeklyReport] = React.useState(true);
  const [theme, setTheme] = React.useState('system');
  
  const handleSaveSettings = () => {
    toast.success('Settings saved successfully');
  };
  
  const handleResetSettings = () => {
    setNotifications(true);
    setExpiryReminders(true);
    setReminderDays('3');
    setWeeklyReport(true);
    setTheme('system');
    toast.info('Settings reset to defaults');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account and application preferences
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Update your personal information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Display Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" defaultValue="john.doe@example.com" />
            </div>
            
            <div>
              <Button>Save Profile</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Configure how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">Enable Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications about your food inventory
                </p>
              </div>
              <Switch 
                id="notifications" 
                checked={notifications} 
                onCheckedChange={setNotifications}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="expiry">Expiration Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when items are about to expire
                </p>
              </div>
              <Switch 
                id="expiry" 
                checked={expiryReminders} 
                onCheckedChange={setExpiryReminders}
              />
            </div>
            
            {expiryReminders && (
              <div className="space-y-2">
                <Label htmlFor="days">Remind me before</Label>
                <div className="flex items-center space-x-2">
                  <Input 
                    id="days" 
                    type="number" 
                    min="1" 
                    max="14" 
                    value={reminderDays}
                    onChange={(e) => setReminderDays(e.target.value)}
                    className="w-20"
                  />
                  <span>days</span>
                </div>
              </div>
            )}
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="weekly">Weekly Summary Report</Label>
                <p className="text-sm text-muted-foreground">
                  Get a weekly report of your food waste statistics
                </p>
              </div>
              <Switch 
                id="weekly" 
                checked={weeklyReport} 
                onCheckedChange={setWeeklyReport}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize how the application looks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="theme">Theme</Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger id="theme">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-col xs:flex-row gap-2">
              <Button onClick={handleSaveSettings}>
                Save All Settings
              </Button>
              <Button variant="outline" onClick={handleResetSettings}>
                Reset to Defaults
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
